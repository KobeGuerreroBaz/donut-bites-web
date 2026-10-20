/// <reference path="../.astro/types.d.ts" />
/// <reference types="@cloudflare/workers-types" />

// El adaptador v13+ eliminó `Astro.locals.runtime` y el tipo `Runtime`.
// Ahora los bindings se tipan en el namespace Cloudflare y se leen con
// `import { env } from 'cloudflare:workers'`.
declare namespace Cloudflare {
  interface Env {
    SITE_CONTENT: KVNamespace;
    SITE_IMAGES: R2Bucket;
    ADMIN_PASSWORD: string;
    SESSION_SECRET: string;
  }
}

// Alias global: src/lib/content.ts y src/lib/auth.ts tipan sus parámetros
// como `Env`, así que se conserva el nombre para no tocar esas firmas.
type Env = Cloudflare.Env;
