import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async ({ params, locals }) => {
  if (!env) return new Response('Not found', { status: 404 });

  const path = params.path;
  if (!path) return new Response('Not found', { status: 404 });

  const object = await env.SITE_IMAGES.get(`uploads/${path}`);
  if (!object) return new Response('Not found', { status: 404 });

  return new Response(object.body, {
    headers: {
      'Content-Type': object.httpMetadata?.contentType || 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
