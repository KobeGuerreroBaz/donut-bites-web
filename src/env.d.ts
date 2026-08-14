/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/cloudflare" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

interface Env {
  SITE_CONTENT: KVNamespace;
  SITE_IMAGES: R2Bucket;
  ADMIN_PASSWORD: string;
  SESSION_SECRET: string;
}