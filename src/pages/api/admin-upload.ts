import type { APIRoute } from 'astro';
import { isValidSession } from '../../lib/auth';

export const prerender = false;

const MAX_SIZE_BYTES = 8 * 1024 * 1024; // 8MB

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime?.env;
  if (!env) return new Response('Server not configured', { status: 500 });

  const valid = await isValidSession(request.headers.get('cookie'), env.SESSION_SECRET);
  if (!valid) return new Response('Unauthorized', { status: 401 });

  const formData = await request.formData();
  const bucket = formData.get('bucket');
  const description = formData.get('description');
  const file = formData.get('file');

  if (typeof bucket !== 'string' || typeof description !== 'string' || !(file instanceof File)) {
    return new Response('Datos inválidos', { status: 400 });
  }
  if (!file.type.startsWith('image/')) {
    return new Response('El archivo debe ser una imagen', { status: 400 });
  }
  if (file.size > MAX_SIZE_BYTES) {
    return new Response('La imagen es demasiado grande (máximo 8MB)', { status: 400 });
  }

  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
  const bucketSlug = slugify(bucket) || 'general';
  const descSlug = slugify(description) || 'dona-decorada';
  const uniqueId = Date.now().toString(36);
  const filename = `donas-decoradas-${descSlug}-${bucketSlug}-monterrey-${uniqueId}.${ext}`;
  const key = `uploads/${bucketSlug}/${filename}`;

  const arrayBuffer = await file.arrayBuffer();
  await env.SITE_IMAGES.put(key, arrayBuffer, {
    httpMetadata: { contentType: file.type },
  });

  const src = `/images/uploads/${bucketSlug}/${filename}`;
  const alt = `Dona decorada ${description}${bucketSlug !== 'general' ? `, ${bucketSlug}` : ''}, Monterrey`;

  return new Response(JSON.stringify({ src, alt }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
