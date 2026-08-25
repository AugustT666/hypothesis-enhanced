/**
 * Helpers for validating user-provided LAN annotation-server addresses.
 *
 * The "join a colleague's LAN room" input accepts a LAN server address such
 * as `http://192.168.1.10:8123`. Anything else — in particular public
 * websites like the official Hypothesis share links (`https://hyp.is/...`) —
 * must be rejected: the sidebar would otherwise route its annotation API at
 * a website that returns HTML instead of JSON and become unusable.
 */

/** Hostnames that always point at the local machine. */
function isLoopbackHostname(hostname: string): boolean {
  return (
    hostname === 'localhost' ||
    hostname.endsWith('.localhost') ||
    hostname === '::1'
  );
}

/**
 * Return true if `hostname` is an IPv4 literal in a private LAN range
 * (RFC 1918), a loopback address, or an mDNS `*.local` name.
 */
export function isPrivateLanHostname(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/^\[|\]$/g, '');

  if (isLoopbackHostname(host)) {
    return true;
  }

  const ipv4 = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(host);
  if (ipv4) {
    const a = Number(ipv4[1]);
    const b = Number(ipv4[2]);
    if (a === 10 || a === 127) {
      return true;
    }
    if (a === 192 && b === 168) {
      return true;
    }
    if (a === 172 && b >= 16 && b <= 31) {
      return true;
    }
    return false;
  }

  // mDNS hostnames used for direct LAN connections (e.g. `host.local`).
  if (host.endsWith('.local')) {
    return true;
  }

  return false;
}

/**
 * Return true if `url` looks like a LAN annotation-server address that is
 * safe to connect to: an http(s) URL whose host is a private LAN address.
 *
 * Inputs like "192.168.1.10:8123" (no scheme) are accepted.
 */
export function isPlausibleLanServerURL(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) {
    return false;
  }
  let parsed: URL;
  try {
    parsed = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `http://${trimmed}`);
  } catch {
    return false;
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return false;
  }
  return isPrivateLanHostname(parsed.hostname);
}
