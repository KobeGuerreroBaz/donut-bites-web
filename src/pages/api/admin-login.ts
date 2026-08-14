import type { APIRoute } from 'astro';
import { createSessionCookie, timingSafeEqual, isRateLimited, recordFailedLogin, clearFailedLogins } from '../../lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const env = locals.runtime?.env;
  if (!env) return redirect('/admin/login?error=1');

  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  if (await isRateLimited(env, ip)) {
    return redirect('/admin/login?error=limit');
  }

  const formData = await request.formData();
  const password = formData.get('password');

  if (typeof password !== 'string' || !timingSafeEqual(password, env.ADMIN_PASSWORD)) {
    await recordFailedLogin(env, ip);
    return redirect('/admin/login?error=1');
  }

  await clearFailedLogins(env, ip);
  const cookie = await createSessionCookie(env.SESSION_SECRET);
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/admin',
      'Set-Cookie': cookie,
    },
  });
};
