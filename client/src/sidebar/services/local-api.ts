import type {
  APIAnnotationData,
  Group,
  LinksResponse,
  Profile,
  RouteMap,
} from '../../types/api';

/**
 * A localStorage-backed implementation of the subset of the Hypothesis (h)
 * API that the client uses.
 *
 * This enables the client to be used without a backend service or login:
 * annotations are stored in the browser's `localStorage`, scoped to the
 * origin of the client (in the extension, the extension's own origin, which
 * is shared by all tabs). This is the data source used when the `localApi`
 * setting is enabled.
 */

export const LOCAL_API_ANNOTATIONS_KEY = 'h-local.annotations.v1';
export const LOCAL_API_PROFILE_KEY = 'h-local.profile.v1';

/** The "Public" group that annotations are stored in. */
export const LOCAL_PUBLIC_GROUP: Group = {
  id: '__world__',
  groupid: 'group:__world__',
  name: 'Public',
  type: 'open',
  organization: {
    id: '__local__',
    name: 'Local',
    logo: '',
  },
  scopes: null,
  links: {},
  pre_moderated: false,
  logo: '',
  isMember: true,
  isScopedToUri: true,
  canLeave: false,
};

function defaultProfile(): Profile {
  return {
    userid: 'acct:local@localhost',
    preferences: {},
    features: {},
    user_info: { display_name: 'Local user' },
  };
}

function readJSON<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    throw new Error(`Failed to write ${key} to localStorage`);
  }
}

function readAnnotations(): APIAnnotationData[] {
  return readJSON<APIAnnotationData[]>(LOCAL_API_ANNOTATIONS_KEY, []);
}

/**
 * Generate an annotation ID.
 *
 * `crypto.randomUUID` is only available in Chrome 92+, whereas the extension
 * supports Chrome 88. Fall back to `crypto.getRandomValues` for older
 * browsers.
 */
function newAnnotationID(): string {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // UUID version 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // UUID variant 1
  const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, '0'));
  return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10).join('')}`;
}

function writeAnnotations(annotations: APIAnnotationData[]) {
  writeJSON(LOCAL_API_ANNOTATIONS_KEY, annotations);
}

function readProfile(): Profile {
  return { ...defaultProfile(), ...readJSON(LOCAL_API_PROFILE_KEY, {}) };
}

/** Normalize a document URI for comparison (strip fragment etc.). */
function normalizeURI(uri: string | undefined): string | null {
  if (!uri) {
    return null;
  }
  try {
    const url = new URL(uri);
    url.hash = '';
    return url.href;
  } catch {
    return uri;
  }
}

function annotationLinks(annotation: APIAnnotationData) {
  return {
    incontext: `about:blank#annotation=${annotation.id}`,
    json: `about:blank#annotation=${annotation.id}`,
    html: `about:blank#annotation=${annotation.id}`,
  };
}

function decorate(annotation: APIAnnotationData): APIAnnotationData {
  return { ...annotation, links: annotationLinks(annotation) };
}

/** Sanitize annotation fields written by the client. */
function sanitizeAnnotation(body: Record<string, unknown>) {
  const allowed = [
    'text',
    'tags',
    'document',
    'target',
    'group',
    'uri',
    'references',
    'extra',
    'flagged',
    'hidden',
    'moderation',
    'user_info',
    'metadata',
  ];
  const annotation: Record<string, unknown> = {};
  for (const key of allowed) {
    if (body[key] !== undefined) {
      annotation[key] = body[key];
    }
  }
  return annotation;
}

function findAnnotation(annotations: APIAnnotationData[], id: string) {
  return annotations.find(ann => ann.id === id);
}

function searchAnnotations(params: Record<string, unknown>) {
  const references = params.references as string | undefined;
  const uris = (Array.isArray(params.uri) ? params.uri : [params.uri]).filter(
    Boolean,
  ) as string[];
  const group = params.group as string | undefined;
  const user = params.user as string | undefined;
  const quote = params.quote as string | undefined;
  const separateReplies =
    params._separate_replies === true ||
    params._separate_replies === 'true' ||
    params._separate_replies === 1 ||
    params._separate_replies === '1';

  const normalizedURIs = uris.map(normalizeURI).filter(Boolean) as string[];
  const hasURIFilter = normalizedURIs.length > 0;

  let rows = readAnnotations().filter(ann => {
    if (references && !(ann.references ?? []).includes(references)) {
      return false;
    }
    if (hasURIFilter) {
      const annURI = normalizeURI(ann.uri);
      if (!annURI || !normalizedURIs.includes(annURI)) {
        return false;
      }
    }
    if (group && ann.group !== group) {
      return false;
    }
    if (user && ann.user !== user) {
      return false;
    }
    if (
      quote &&
      !(ann.text ?? '').toLowerCase().includes(quote.toLowerCase())
    ) {
      return false;
    }
    if (separateReplies && (ann.references ?? []).length > 0) {
      return false;
    }
    return true;
  });

  const sort = (params.sort as string) ?? 'created';
  const order = (params.order as string) ?? 'asc';
  rows = rows.slice().sort((a, b) => {
    const av = (a as Record<string, unknown>)[sort] ?? '';
    const bv = (b as Record<string, unknown>)[sort] ?? '';
    const cmp = av < bv ? -1 : av > bv ? 1 : 0;
    return order === 'desc' ? -cmp : cmp;
  });

  // Return everything in one page. `total` is exact, so the client will not
  // request further pages.
  return { total: rows.length, rows: rows.map(decorate) };
}

function createAnnotation(data: Record<string, unknown>): APIAnnotationData {
  const now = new Date().toISOString();
  const profile = readProfile();
  const userId = profile.userid ?? 'acct:local@localhost';
  const annotations = readAnnotations();
  const sanitized = sanitizeAnnotation(data);
  const annotation: APIAnnotationData = {
    ...(sanitized as Partial<APIAnnotationData>),
    tags: (sanitized.tags as string[] | undefined) ?? [],
    text: (sanitized.text as string | undefined) ?? '',
    uri: (sanitized.uri as string | undefined) ?? '',
    document: (sanitized.document as APIAnnotationData['document']) ?? {
      title: '',
    },
    target: (sanitized.target as APIAnnotationData['target']) ?? [],
    links: { incontext: '', html: '' },
    id: newAnnotationID(),
    created: now,
    updated: now,
    user: userId,
    user_info: profile.user_info,
    group: (data.group as string) ?? LOCAL_PUBLIC_GROUP.id,
    permissions: {
      read: [LOCAL_PUBLIC_GROUP.groupid as string],
      update: [userId],
      delete: [userId],
    },
    flagged: false,
    hidden: false,
    moderation: (data.moderation as APIAnnotationData['moderation']) ?? {
      flagCount: 0,
    },
  };
  annotations.push(annotation);
  writeAnnotations(annotations);
  return decorate(annotation);
}

/**
 * Dispatch a local API call, identified by its route name (see the route map
 * in `APIService`), returning a promise for the API response.
 */
export function localAPICall(
  route: string,
  params: Record<string, unknown>,
  data?: Record<string, unknown>,
): Promise<unknown> {
  switch (route) {
    case 'search':
      return Promise.resolve(searchAnnotations(params));

    case 'annotation.read': {
      const id = params.id as string;
      const annotation = findAnnotation(readAnnotations(), id);
      if (!annotation) {
        return Promise.reject(new Error(`No such annotation: ${id}`));
      }
      return Promise.resolve(decorate(annotation));
    }

    case 'annotation.create':
      return Promise.resolve(createAnnotation(data ?? {}));

    case 'annotation.update': {
      const id = params.id as string;
      const annotations = readAnnotations();
      const annotation = findAnnotation(annotations, id);
      if (!annotation) {
        return Promise.reject(new Error(`No such annotation: ${id}`));
      }
      Object.assign(annotation, sanitizeAnnotation(data ?? {}), {
        updated: new Date().toISOString(),
      });
      writeAnnotations(annotations);
      return Promise.resolve(decorate(annotation));
    }

    case 'annotation.moderate': {
      const id = params.id as string;
      const annotations = readAnnotations();
      const annotation = findAnnotation(annotations, id);
      if (!annotation) {
        return Promise.reject(new Error(`No such annotation: ${id}`));
      }
      const moderation = data ?? {};
      Object.assign(annotation, {
        moderation_status: moderation.moderation_status,
        moderation: {
          ...(annotation.moderation ?? { flagCount: 0 }),
          ...(moderation.moderation ?? {}),
        },
        updated: new Date().toISOString(),
      });
      writeAnnotations(annotations);
      return Promise.resolve(decorate(annotation));
    }

    case 'annotation.delete': {
      const id = params.id as string;
      writeAnnotations(readAnnotations().filter(ann => ann.id !== id));
      return Promise.resolve({ id, deleted: true });
    }

    case 'annotation.flag':
    case 'annotation.hide':
    case 'annotation.unhide': {
      const id = params.id as string;
      const annotations = readAnnotations();
      const annotation = findAnnotation(annotations, id);
      if (!annotation) {
        return Promise.reject(new Error(`No such annotation: ${id}`));
      }
      if (route === 'annotation.flag') {
        annotation.flagged = true;
      } else if (route === 'annotation.hide') {
        annotation.hidden = true;
      } else {
        annotation.hidden = false;
      }
      writeAnnotations(annotations);
      return Promise.resolve(decorate(annotation));
    }

    case 'profile.read':
      return Promise.resolve(readProfile());

    case 'profile.update': {
      const profile = readProfile();
      const preferences = (data?.preferences ?? {}) as Record<string, unknown>;
      profile.preferences = { ...profile.preferences, ...preferences };
      writeJSON(LOCAL_API_PROFILE_KEY, profile);
      return Promise.resolve(profile);
    }

    case 'profile.groups.read':
      // Like the h API, the user's group list does not include the "Public"
      // group: it is implicit and provided by the `groups.read` route. This
      // avoids duplicate "Public" entries in the group list.
      return Promise.resolve([]);

    case 'groups.read':
      return Promise.resolve([LOCAL_PUBLIC_GROUP]);

    case 'group.read':
      return Promise.resolve(LOCAL_PUBLIC_GROUP);

    case 'group.members.read':
      return Promise.resolve([]);

    case 'group.member.delete':
      return Promise.resolve({ deleted: true });

    case 'analytics.events.create':
      return Promise.resolve({});

    default:
      return Promise.reject(new Error(`Unsupported local API route: ${route}`));
  }
}

/** Route map used by `APIRoutesService` in local API mode. */
export function localRoutes(): RouteMap {
  return {
    annotation: {
      create: { method: 'POST', url: 'local://api/annotations', desc: '' },
      read: { method: 'GET', url: 'local://api/annotations/:id', desc: '' },
      update: { method: 'PATCH', url: 'local://api/annotations/:id', desc: '' },

      moderate: {
        method: 'PUT',
        url: 'local://api/annotations/:id/moderate',
        desc: '',
      },
      delete: {
        method: 'DELETE',
        url: 'local://api/annotations/:id',
        desc: '',
      },
      flag: {
        method: 'PUT',
        url: 'local://api/annotations/:id/flag',
        desc: '',
      },
      hide: {
        method: 'PUT',
        url: 'local://api/annotations/:id/hide',
        desc: '',
      },
      unhide: {
        method: 'DELETE',
        url: 'local://api/annotations/:id/hide',
        desc: '',
      },
    },
    search: { method: 'GET', url: 'local://api/search', desc: '' },
    links: { method: 'GET', url: 'local://api/links', desc: '' },
    profile: {
      read: { method: 'GET', url: 'local://api/profile', desc: '' },
      update: { method: 'PATCH', url: 'local://api/profile', desc: '' },
      groups: {
        read: { method: 'GET', url: 'local://api/profile/groups', desc: '' },
      },
    },
    groups: {
      read: { method: 'GET', url: 'local://api/groups', desc: '' },
    },
    group: {
      read: { method: 'GET', url: 'local://api/groups/:id', desc: '' },
      members: {
        read: {
          method: 'GET',
          url: 'local://api/groups/:id/members',
          desc: '',
        },
      },
      member: {
        delete: {
          method: 'DELETE',
          url: 'local://api/groups/:pubid/members/:userid',
          desc: '',
        },
      },
    },
    analytics: {
      events: {
        create: {
          method: 'POST',
          url: 'local://api/analytics/events',
          desc: '',
        },
      },
    },
  };
}

/** Links response used by `APIRoutesService` in local API mode. */
export function localLinks(): LinksResponse {
  return {
    'account.settings': 'about:blank',
    'forgot-password': 'about:blank',
    signup: 'about:blank',
    help: 'about:blank',
    'groups.new': 'about:blank',
    'search.tag': 'about:blank?tag=:tag',
    user: 'about:blank?user=:user',
    'oauth.authorize': 'about:blank',
    'oauth.revoke': 'about:blank',
  };
}
