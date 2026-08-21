#!/usr/bin/env node
/**
 * local-h: a minimal, dependency-free, local annotation service that is API
 * compatible with the subset of the Hypothesis (h) API that the forked
 * client uses.
 *
 * It stores annotations in a JSON file and does not require any
 * authentication, enabling the forked client to be used without an account.
 *
 * Usage:
 *   node server.mjs [--port 8123] [--data annotations.json]
 */

import { createServer } from 'node:http';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from 'node:fs';
import { dirname, resolve } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';

// ---------------------------------------------------------------------------
// Command-line configuration
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const argValue = name => {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : null;
};

const PORT = parseInt(argValue('port') ?? process.env.LOCAL_H_PORT ?? '8123', 10);
const DATA_FILE = resolve(
  argValue('data') ?? process.env.LOCAL_H_DATA ?? 'annotations.json',
);
// Listen on all interfaces by default: the server is intended to be used as
// a LAN collaboration hub, where other machines connect to the host's IP.
const HOST = process.env.LOCAL_H_HOST ?? '0.0.0.0';

/** Return the API root for the host a request was sent to. */
function apiRoot(req) {
  return `http://${req.headers.host ?? `127.0.0.1:${PORT}`}/api`;
}

// ---------------------------------------------------------------------------
// Storage
// ---------------------------------------------------------------------------

/** Shared preferences, returned for every user. */
const SHARED_PREFERENCES = {};

/**
 * The client's LAN IPv4 address, used as its identity.
 *
 * On a LAN without authentication, the IPv4 address is the simplest stable
 * identity: it identifies the machine the annotation came from.
 */
function clientIP(req) {
  let ip = req.socket.remoteAddress ?? 'unknown';
  if (ip.startsWith('::ffff:')) {
    ip = ip.slice(7);
  }
  if (ip === '127.0.0.1' || ip === '::1') {
    ip = '127.0.0.1';
  }
  return ip;
}

/**
 * The profile for the client making `req`, identified by its IP address.
 */
function profileFor(req) {
  const ip = clientIP(req);
  return {
    userid: `acct:${ip}@lan`,
    authority: 'lan',
    preferences: { ...SHARED_PREFERENCES },
    features: {},
    user_info: { display_name: ip },
  };
}

/** The "Public" group that annotations are stored in. */
const PUBLIC_GROUP = {
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
};

let annotations = [];
let sharedProfile = { preferences: { ...SHARED_PREFERENCES } };

function loadData() {
  if (existsSync(DATA_FILE)) {
    try {
      const data = JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
      annotations = Array.isArray(data.annotations) ? data.annotations : [];
      if (data.profile) {
        sharedProfile = { preferences: { ...SHARED_PREFERENCES, ...(data.profile?.preferences ?? {}) } };
        Object.assign(SHARED_PREFERENCES, sharedProfile.preferences);
      }
      return;
    } catch (err) {
      console.warn(`Failed to read ${DATA_FILE}: ${err.message}. Starting empty.`);
    }
  }
  annotations = [];
}

let saveTimer = null;

/** Write the current annotations and profile to disk immediately. */
function writeDataNow() {
  mkdirSync(dirname(DATA_FILE), { recursive: true });
  const tempFile = `${DATA_FILE}.tmp`;
  writeFileSync(
    tempFile,
    JSON.stringify({ annotations, profile: sharedProfile }, null, 2),
  );
  renameSync(tempFile, DATA_FILE);
}

/** Schedule a debounced write to disk. */
function saveData() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveTimer = null;
    try {
      writeDataNow();
    } catch (err) {
      console.warn(`Failed to save ${DATA_FILE}: ${err.message}`);
    }
  }, 100);
}

/** Flush any pending debounced write. Called before the process exits. */
function flushData() {
  if (saveTimer) {
    clearTimeout(saveTimer);
    saveTimer = null;
  }
  writeDataNow();
}

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    try {
      flushData();
    } finally {
      process.exit(0);
    }
  });
}

loadData();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------



/** Route map returned by `GET /api/`. */
function routeMap(host = `127.0.0.1:${PORT}`) {
  const apiRoot = `http://${host}/api`;
  return {
    annotation: {
      create: {
        method: 'POST',
        url: `${apiRoot}/annotations`,
        desc: 'Create an annotation',
      },
      read: {
        method: 'GET',
        url: `${apiRoot}/annotations/:id`,
        desc: 'Fetch an annotation',
      },
      update: {
        method: 'PATCH',
        url: `${apiRoot}/annotations/:id`,
        desc: 'Update an annotation',
      },
      delete: {
        method: 'DELETE',
        url: `${apiRoot}/annotations/:id`,
        desc: 'Delete an annotation',
      },
      flag: {
        method: 'PUT',
        url: `${apiRoot}/annotations/:id/flag`,
        desc: 'Flag an annotation',
      },
      hide: {
        method: 'PUT',
        url: `${apiRoot}/annotations/:id/hide`,
        desc: 'Hide an annotation',
      },
      unhide: {
        method: 'DELETE',
        url: `${apiRoot}/annotations/:id/hide`,
        desc: 'Unhide an annotation',
      },
      moderate: {
        method: 'PUT',
        url: `${apiRoot}/annotations/:id/moderation`,
        desc: 'Moderate an annotation',
      },
    },
    search: {
      method: 'GET',
      url: `${apiRoot}/search`,
      desc: 'Search annotations',
    },
    links: {
      method: 'GET',
      url: `${apiRoot}/links`,
      desc: 'Fetch links to third-party services',
    },
    profile: {
      read: {
        method: 'GET',
        url: `${apiRoot}/profile`,
        desc: 'Fetch the user profile',
      },
      update: {
        method: 'PATCH',
        url: `${apiRoot}/profile`,
        desc: 'Update the user profile',
      },
      groups: {
        read: {
          method: 'GET',
          url: `${apiRoot}/profile/groups`,
          desc: 'Fetch the user groups',
        },
      },
    },
    groups: {
      read: {
        method: 'GET',
        url: `${apiRoot}/groups`,
        desc: 'Fetch groups',
      },
    },
    group: {
      read: {
        method: 'GET',
        url: `${apiRoot}/groups/:id`,
        desc: 'Fetch a group',
      },
      members: {
        read: {
          method: 'GET',
          url: `${apiRoot}/groups/:id/members`,
          desc: 'Fetch group members',
        },
      },
      member: {
        delete: {
          method: 'DELETE',
          url: `${apiRoot}/groups/:pubid/members/:userid`,
          desc: 'Remove a group member',
        },
      },
    },
    analytics: {
      events: {
        create: {
          method: 'POST',
          url: `${apiRoot}/analytics/events`,
          desc: 'Create an analytics event',
        },
      },
    },
    token: {
      method: 'POST',
      url: `${apiRoot}/token`,
      desc: 'Create an access token',
    },
  };
}

function sendJSON(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
      'Authorization, Content-Type, X-Client-Id, Hypothesis-Client-Version, Accept',
    'Access-Control-Expose-Headers':
      'Hypothesis-Media-Type, Location, Memento-Datetime',
    'Cache-Control': 'no-cache',
  });
  res.end(payload);
}

function sendError(res, status, reason) {
  sendJSON(res, status, { status: 'failure', reason });
}

/** Normalize a document URI for comparison (strip fragment etc.). */
function normalizeURI(uri) {
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

function annotationLinks(annotation, req) {
  const root = apiRoot(req);
  return {
    incontext: `${root}/links/incontext/${annotation.id}`,
    json: `${root}/annotations/${annotation.id}`,
    html: `${root}/annotations/${annotation.id}`,
  };
}

function decorate(annotation, req) {
  return { ...annotation, links: annotationLinks(annotation, req) };
}

/** Sanitize annotation fields written by the client. */
function sanitizeAnnotation(body) {
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
  const annotation = {};
  for (const key of allowed) {
    if (body[key] !== undefined) {
      annotation[key] = body[key];
    }
  }
  // The allowlist above intentionally excludes server-owned fields.
  return annotation;
}

// ---------------------------------------------------------------------------
// Route handlers
// ---------------------------------------------------------------------------

function handleAPIIndex(req, res) {
  sendJSON(res, 200, {
    links: routeMap(req.headers.host ?? `127.0.0.1:${PORT}`),
    total: annotations.length,
    media_types: [],
  });
}

function handleLinks(req, res) {
  const host = req.headers.host ?? `127.0.0.1:${PORT}`;
  const apiRootURL = `http://${host}/api`;
  sendJSON(res, 200, {
    websocket: `ws://${host}/ws`,
    'account.settings': `${apiRootURL}/profile`,
    'forgot-password': 'about:blank',
    signup: 'about:blank',
    help: 'about:blank',
    'groups.new': 'about:blank',
    'search.tag': `${apiRootURL}/search?tag=:tag`,
    user: `${apiRootURL}/user/:user`,
    'oauth.authorize': 'about:blank',
    'oauth.revoke': `${apiRootURL}/token/revoke`,
  });
}

function handleToken(res) {
  // The forked client does not call this in "no auth" mode. Provided for
  // compatibility with tools that do.
  sendJSON(res, 200, {
    access_token: 'local',
    refresh_token: 'local',
    expires_in: 31536000,
    token_type: 'Bearer',
  });
}

function handleProfile(req, res) {
  if (req.method === 'GET') {
    sendJSON(res, 200, profileFor(req));
  } else if (req.method === 'PATCH') {
    readBody(req)
      .then(body => {
        const prefs = body.preferences ?? {};
        Object.assign(SHARED_PREFERENCES, prefs);
        sharedProfile = { preferences: { ...SHARED_PREFERENCES } };
        saveData();
        sendJSON(res, 200, profileFor(req));
      })
      .catch(err => sendError(res, 400, err.message));
  } else {
    sendError(res, 405, 'Method not allowed');
  }
}

function handleProfileGroups(res) {
  sendJSON(res, 200, [PUBLIC_GROUP]);
}

function handleGroups(req, res) {
  // GET /api/groups
  sendJSON(res, 200, [PUBLIC_GROUP]);
}

function handleSearch(req, res) {
  const url = new URL(req.url, `http://${HOST}`);
  const params = url.searchParams;
  const references = params.get('references');
  const uris = params.getAll('uri').filter(Boolean);
  const group = params.get('group');
  const user = params.get('user');
  const quote = params.get('quote');
  const separateReplies = params.get('_separate_replies') === 'true' ||
    params.get('_separate_replies') === '1';

  const normalizedURIs = uris.map(normalizeURI).filter(Boolean);
  const hasURIFilter = normalizedURIs.length > 0;

  let rows = annotations.filter(ann => {
    if (references && !(ann.references ?? []).includes(references)) {
      return false;
    }
    if (hasURIFilter && !normalizedURIs.includes(normalizeURI(ann.uri))) {
      return false;
    }
    if (group && ann.group !== group) {
      return false;
    }
    if (user && ann.user !== user) {
      return false;
    }
    if (quote && !(ann.text ?? '').toLowerCase().includes(quote.toLowerCase())) {
      return false;
    }
    if (separateReplies && (ann.references ?? []).length > 0) {
      return false;
    }
    return true;
  });

  const sort = params.get('sort') ?? 'created';
  const order = params.get('order') ?? 'asc';
  rows = rows.slice().sort((a, b) => {
    const av = a[sort] ?? '';
    const bv = b[sort] ?? '';
    const cmp = av < bv ? -1 : av > bv ? 1 : 0;
    return order === 'desc' ? -cmp : cmp;
  });

  // Return everything in one page. `total` is exact, so the client will not
  // request further pages.
  sendJSON(res, 200, { total: rows.length, rows: rows.map(ann => decorate(ann, req)) });
}

function findAnnotation(id) {
  return annotations.find(ann => ann.id === id);
}

function handleAnnotation(req, res) {
  const match = req.url.match(
    /^\/api\/annotations\/([^/]+)(?:\/(moderation|flag|hide))?$/,
  );
  if (!match) {
    return sendError(res, 404, 'Not found');
  }
  const [, annId, action] = match;
  const annotation = findAnnotation(annId);

  if (action === 'moderation' && req.method === 'PUT') {
    if (!annotation) return sendError(res, 404, 'No such annotation');
    return readBody(req)
      .then(body => {
        annotation.moderation_status = body.moderation_status;
        annotation.updated = new Date().toISOString();
        saveData();
        broadcastAnnotation('update', annotation);
        sendJSON(res, 200, decorate(annotation, req));
      })
      .catch(err => sendError(res, 400, err.message));
  }
  if (action === 'flag' && req.method === 'PUT') {
    if (!annotation) return sendError(res, 404, 'No such annotation');
    annotation.flagged = true;
    saveData();
    return sendJSON(res, 200, decorate(annotation, req));
  }
  if (action === 'hide' && req.method === 'PUT') {
    if (!annotation) return sendError(res, 404, 'No such annotation');
    annotation.hidden = true;
    saveData();
    return sendJSON(res, 200, decorate(annotation, req));
  }
  if (action === 'hide' && req.method === 'DELETE') {
    if (!annotation) return sendError(res, 404, 'No such annotation');
    annotation.hidden = false;
    saveData();
    return sendJSON(res, 200, decorate(annotation, req));
  }

  switch (req.method) {
    case 'GET':
      if (!annotation) return sendError(res, 404, 'No such annotation');
      return sendJSON(res, 200, decorate(annotation, req));

    case 'PATCH':
      if (!annotation) return sendError(res, 404, 'No such annotation');
      return readBody(req)
        .then(body => {
          const updates = sanitizeAnnotation(body);
          Object.assign(annotation, updates, {
            updated: new Date().toISOString(),
          });
          saveData();
          broadcastAnnotation('update', annotation);
          sendJSON(res, 200, decorate(annotation, req));
        })
        .catch(err => sendError(res, 400, err.message));

    case 'DELETE':
      if (!annotation) return sendError(res, 404, 'No such annotation');
      annotations = annotations.filter(a => a.id !== annId);
      saveData();
      // h matches websocket filters against the full annotation object
      // (it is fetched by id before deletion), but only sends the id.
      broadcastAnnotation('delete', { id: annId }, annotation);
      return sendJSON(res, 200, { id: annId, deleted: true });

    default:
      return sendError(res, 405, 'Method not allowed');
  }
}

function handleAnnotationCreate(req, res) {
  readBody(req)
    .then(body => {
      const now = new Date().toISOString();
      const annotation = {
        ...sanitizeAnnotation(body),
        id: randomUUID(),
        created: now,
        updated: now,
        user: profileFor(req).userid,
        user_info: profileFor(req).user_info,
        group: body.group ?? PUBLIC_GROUP.id,
        permissions: {
          read: [PUBLIC_GROUP.groupid],
          admin: [profileFor(req).userid],
          update: [profileFor(req).userid],
          delete: [profileFor(req).userid],
        },
        flagged: false,
        hidden: false,
        moderation: body.moderation ?? { flagCount: 0 },
      };
      annotations.push(annotation);
      saveData();
      broadcastAnnotation('create', annotation);
      sendJSON(res, 200, decorate(annotation, req));
    })
    .catch(err => sendError(res, 400, err.message));
}

function handleAnalytics(res) {
  sendJSON(res, 200, {});
}

function handleGroupMembers(req, res) {
  const match = req.url.match(
    /^\/api\/groups\/([^/]+)\/members\/([^/]+)$/,
  );
  if (!match) {
    return sendError(res, 404, 'Not found');
  }
  if (req.method === 'DELETE') {
    return sendJSON(res, 200, { deleted: true });
  }
  sendError(res, 405, 'Method not allowed');
}

// ---------------------------------------------------------------------------
// HTTP plumbing
// ---------------------------------------------------------------------------

const MAX_BODY_SIZE = 2 * 1024 * 1024;

function readBody(req) {
  return new Promise((resolveBody, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BODY_SIZE) {
        reject(new Error('Request body too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (size === 0) {
        return resolveBody({});
      }
      try {
        resolveBody(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

// ---------------------------------------------------------------------------
// WebSocket real-time collaboration
//
// Speaks the subset of h's realtime protocol that the client uses:
//   client -> server: {"messageType":"client_id","value":...}
//                     {"filter":{"clauses":[...],"match_policy":...}}
//   server -> client: {"type":"annotation-notification",
//                      "options":{"action":"create|update|delete|past"},
//                      "payload":[annotation...]}
// ---------------------------------------------------------------------------

const WS_GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
const wsClients = new Set();

function broadcastAnnotation(action, annotation, matchAnnotation = annotation) {
  if (process.env.LOCAL_H_DEBUG) {
    console.log(`[ws debug] broadcast ${action} to ${wsClients.size} clients`);
  }
  const payload = JSON.stringify({
    type: 'annotation-notification',
    options: { action },
    payload: [annotation],
  });
  for (const client of wsClients) {
    const matched = client.matches(matchAnnotation);
    if (process.env.LOCAL_H_DEBUG) {
      console.log(
        `[ws debug] client ${client.clientId ?? '?'} filter=${JSON.stringify(client.filter)} match=${matched}`,
      );
    }
    if (matched) {
      client.send(payload);
    }
  }
}

class WSClient {
  constructor(socket) {
    this.socket = socket;
    this.filter = null;
    this.clientId = null;
  }

  send(payload) {
    try {
      if (this.socket.destroyed || !this.socket.writable) {
        return;
      }
      const buf = Buffer.from(payload, 'utf8');
      let header;
      if (buf.length < 126) {
        header = Buffer.from([0x81, buf.length]);
      } else if (buf.length < 65536) {
        header = Buffer.alloc(4);
        header[0] = 0x81;
        header[1] = 126;
        header.writeUInt16BE(buf.length, 2);
      } else {
        header = Buffer.alloc(10);
        header[0] = 0x81;
        header[1] = 127;
        header.writeBigUInt64BE(BigInt(buf.length), 2);
      }
      this.socket.write(Buffer.concat([header, buf]));
    } catch {
      // Ignore write failures on closing sockets.
    }
  }

  /** Return true if this client should receive notifications about `annotation`. */
  matches(annotation) {
    if (!this.filter) {
      return true;
    }
    const clauses = this.filter.clauses ?? [];
    if (clauses.length === 0) {
      return true;
    }
    const results = clauses.map(clause => {
      const field = (clause.field ?? '').replace(/^\//, '');
      const value = annotation[field] ?? annotation.id;
      if (clause.operator === 'one_of') {
        return Array.isArray(clause.value) && clause.value.includes(value);
      }
      return clause.value === value;
    });
    return (this.filter.match_policy ?? 'include_any') === 'include_all'
      ? results.every(Boolean)
      : results.some(Boolean);
  }

  handleMessage(raw) {
    try {
      const msg = JSON.parse(raw);
      if (msg.messageType === 'client_id') {
        this.clientId = msg.value;
      } else if (msg.filter && typeof msg.filter === 'object') {
        this.filter = msg.filter;
      }
    } catch {
      // Ignore malformed messages.
    }
  }
}

/** Parse masked WebSocket frames from the client. */
function handleWSData(client, data) {
  try {
    let offset = 0;
    while (offset + 2 <= data.length) {
      const b0 = data[offset];
      const b1 = data[offset + 1];
      const opcode = b0 & 0x0f;
      const masked = (b1 & 0x80) !== 0;
      let len = b1 & 0x7f;
      offset += 2;
      if (len === 126) {
        if (offset + 2 > data.length) break;
        len = data.readUInt16BE(offset);
        offset += 2;
      } else if (len === 127) {
        if (offset + 8 > data.length) break;
        len = Number(data.readBigUInt64BE(offset));
        offset += 8;
      }
      let mask;
      if (masked) {
        if (offset + 4 > data.length) break;
        mask = data.subarray(offset, offset + 4);
        offset += 4;
      }
      if (offset + len > data.length) break;
      let payload = data.subarray(offset, offset + len);
      offset += len;
      if (masked) {
        const unmasked = Buffer.alloc(len);
        for (let i = 0; i < len; i += 1) {
          unmasked[i] = payload[i] ^ mask[i & 3];
        }
        payload = unmasked;
      }
      if (opcode === 0x8) {
        wsClients.delete(client);
        try {
          client.socket.destroy();
        } catch {
          // Ignore.
        }
        return;
      }
      if (opcode === 0x9) {
        try {
          client.socket.write(Buffer.concat([Buffer.from([0x8a, len]), payload]));
        } catch {
          // Ignore.
        }
        continue;
      }
      if (opcode === 0x1) {
        client.handleMessage(payload.toString('utf8'));
      }
    }
  } catch {
    // Ignore malformed frames.
  }
}

function handleWSUpgrade(req, socket) {
  const key = req.headers['sec-websocket-key'];
  if (!key) {
    socket.destroy();
    return;
  }
  const accept = createHash('sha1').update(key + WS_GUID).digest('base64');
  socket.write(
    'HTTP/1.1 101 Switching Protocols\r\n' +
      'Upgrade: websocket\r\n' +
      'Connection: Upgrade\r\n' +
      `Sec-WebSocket-Accept: ${accept}\r\n\r\n`,
  );
  const client = new WSClient(socket);
  wsClients.add(client);
  if (process.env.LOCAL_H_DEBUG) {
    console.log(`[ws debug] client connected (total ${wsClients.size})`);
  }
  socket.on('data', data => handleWSData(client, data));
  socket.on('close', () => wsClients.delete(client));
  socket.on('error', () => wsClients.delete(client));
}

const server = createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    return sendJSON(res, 200, {});
  }

  const url = new URL(req.url, `http://${HOST}`);
  const path = url.pathname;

  if (process.env.LOCAL_H_DEBUG) {
    console.log(`[req] ${req.method} ${path} from ${clientIP(req)}`);
  }

  if (
    (req.headers.upgrade ?? '').toLowerCase() === 'websocket' &&
    path === '/ws'
  ) {
    return handleWSUpgrade(req, req.socket);
  }

  try {
    if (path === '/api' || path === '/api/') {
      return handleAPIIndex(req, res);
    }
    if (path === '/api/links') {
      return handleLinks(req, res);
    }
    if (path === '/api/token') {
      return handleToken(res);
    }
    if (path === '/api/profile') {
      return handleProfile(req, res);
    }
    if (path === '/api/profile/groups') {
      return handleProfileGroups(res);
    }
    if (path === '/api/groups') {
      return handleGroups(req, res);
    }
    if (path === '/api/search') {
      return handleSearch(req, res);
    }
    if (path === '/api/annotations') {
      if (req.method === 'POST') {
        return handleAnnotationCreate(req, res);
      }
      return handleSearch(req, res); // GET /api/annotations is also supported
    }
    if (path.startsWith('/api/annotations/')) {
      return handleAnnotation(req, res);
    }
    if (path === '/api/analytics/events') {
      return handleAnalytics(res);
    }
    if (path.startsWith('/api/groups/')) {
      const parts = path.split('/').filter(Boolean);
      // /api/groups/:id/members/:userid
      if (parts.length === 5 && parts[3] === 'members') {
        return handleGroupMembers(req, res);
      }
      // /api/groups/:id/members
      if (parts.length === 4 && parts[3] === 'members') {
        return sendJSON(res, 200, []);
      }
      // /api/groups/:id
      return sendJSON(res, 200, PUBLIC_GROUP);
    }

    sendError(res, 404, 'Not found');
  } catch (err) {
    console.error(err);
    sendError(res, 500, err.message ?? 'Internal error');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`local-h annotation service listening on http://${HOST}:${PORT}`);
  console.log(`API root: http://${HOST}:${PORT}/api`);
  console.log(`Data file: ${DATA_FILE}`);
});
