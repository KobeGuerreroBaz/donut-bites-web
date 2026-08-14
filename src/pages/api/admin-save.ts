import type { APIRoute } from 'astro';
import { isValidSession } from '../../lib/auth';
import { saveContent, type SiteContent } from '../../lib/content';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime?.env;
  if (!env) return new Response('Server not configured', { status: 500 });

  const valid = await isValidSession(request.headers.get('cookie'), env.SESSION_SECRET);
  if (!valid) return new Response('Unauthorized', { status: 401 });

  let body: SiteContent;
  try {
    body = (await request.json()) as SiteContent;
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  await saveContent(env, body);
  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
