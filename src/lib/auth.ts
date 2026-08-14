const COOKIE_NAME = 'db_admin_session';
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 30; // 30 dias

export function timingSafeEqual(a: string, b: string): boolean {
  const aBytes = new TextEncoder().encode(a);
  const bBytes = new TextEncoder().encode(b);
  const maxLength = Math.max(aBytes.length, bBytes.length, 1);
  let mismatch = aBytes.length === bBytes.length ? 0 : 1;
  for (let i = 0; i < maxLength; i++) {
    mismatch |= (aBytes[i] ?? 0) ^ (bBytes[i] ?? 0);
  }
  return mismatch === 0;
}

async function sign(secret: string, value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return [...new Uint8Array(signature)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function createSessionCookie(secret: string): Promise<string> {
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const value = String(expiresAt);
  const signature = await sign(secret, value);
  const token = `${value}.${signature}`;
  return `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${SESSION_DURATION_MS / 1000}`;
}

export function clearSessionCookie(): string {
  return `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;
}

export async function isValidSession(cookieHeader: string | undefined | null, secret: string): Promise<boolean> {
  if (!cookieHeader) return false;
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;
  const [expiresAtRaw, signature] = match[1].split('.');
  if (!expiresAtRaw || !signature) return false;
  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;
  const expectedSignature = await sign(secret, expiresAtRaw);
  return timingSafeEqual(expectedSignature, signature);
}

const RATE_LIMIT_WINDOW_SECONDS = 15 * 60;
const RATE_LIMIT_MAX_ATTEMPTS = 5;

function rateLimitKey(ip: string): string {
  return `login-attempts:${ip}`;
}

export async function isRateLimited(env: Env, ip: string): Promise<boolean> {
  const raw = await env.SITE_CONTENT.get(rateLimitKey(ip));
  const count = raw ? Number(raw) : 0;
  return count >= RATE_LIMIT_MAX_ATTEMPTS;
}

export async function recordFailedLogin(env: Env, ip: string): Promise<void> {
  const raw = await env.SITE_CONTENT.get(rateLimitKey(ip));
  const count = raw ? Number(raw) : 0;
  await env.SITE_CONTENT.put(rateLimitKey(ip), String(count + 1), {
    expirationTtl: RATE_LIMIT_WINDOW_SECONDS,
  });
}

export async function clearFailedLogins(env: Env, ip: string): Promise<void> {
  await env.SITE_CONTENT.delete(rateLimitKey(ip));
}

export { COOKIE_NAME };
