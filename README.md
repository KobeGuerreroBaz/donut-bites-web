# Donut Bites.co — Sitio Web

Sitio construido con **Astro** + **Cloudflare Pages** (KV para el contenido, R2 para las fotos). Editable por temporada desde un panel de administración con contraseña, sin tocar código.

## 🚀 Setup local

```bash
npm install
npm run dev       # Desarrollo: http://localhost:4321 (o el siguiente puerto libre)
npm run build     # Build para producción
npm run preview   # Preview del build
```

Para desarrollo local necesitas un archivo `.dev.vars` (no se sube a git) con:
```
ADMIN_PASSWORD=tu-contraseña-de-prueba
SESSION_SECRET=cualquier-texto-largo-y-aleatorio
```

## 📁 Estructura

```
donut-bites/
├── src/
│   ├── layouts/Layout.astro       ← SEO, meta tags, Schema.org
│   ├── lib/content.ts             ← Modelo de contenido + valores por defecto
│   ├── lib/auth.ts                ← Sesión del panel (cookie firmada)
│   └── pages/
│       ├── index.astro            ← Landing page (lee el contenido desde KV)
│       ├── admin/login.astro      ← Login del panel
│       ├── admin/index.astro      ← Panel de administración
│       ├── api/admin-*.ts         ← Login, logout, guardar, subir fotos
│       └── images/uploads/[...path].ts  ← Sirve las fotos subidas desde R2
├── public/images/library/<temporada>/   ← Banco inicial de 42 fotos (nombres SEO)
├── astro.config.mjs                ← Adaptador Cloudflare (output: server)
├── wrangler.toml                   ← Declara los bindings de KV y R2
└── package.json
```

## 🍩 Guía del panel de administración (para quien administre el sitio día a día)

1. Entra a **donutbitesco.com/admin** (te pedirá la contraseña — pídesela a Humberto si no la tienes).
2. **Temporada del sitio**: elige en el menú qué temporada quieres editar, y marca la casilla "Mostrar esta temporada en el sitio ahora" cuando quieras que los visitantes la vean. Si ninguna casilla está marcada, el sitio se ve en su versión normal (sin banner de temporada).
3. Debajo puedes editar el **texto** de esa temporada (etiqueta, título, subtítulo, texto del botón) y sus **fotos**: quita las que no quieras con la ✕, o sube una nueva escribiendo una descripción corta (ej. "calabaza sonriente") y eligiendo la foto desde tu celular o computadora — el sitio le pone el nombre correcto automáticamente, no necesitas hacer nada más.
4. Más abajo puedes cambiar la **foto principal** del sitio, el **número de WhatsApp**, los **links de redes sociales**, y las tarjetas de **"Sabores destacados"**.
5. Cuando termines, presiona **"Guardar cambios"** arriba. Los cambios se ven en el sitio al instante, sin esperar nada.

No es necesario guardar todo de una vez — puedes ir dejando temporadas preparadas (por ejemplo, cargar las fotos de Navidad en octubre) y activarlas después con la casilla, el día que quieras que se muestren.

## 🔧 Configuración pendiente en Cloudflare (una sola vez)

Ver la sección "Fase 4" del plan de trabajo. En resumen, en el dashboard de Cloudflare Pages del proyecto:
1. Crear un namespace de **KV** y enlazarlo con el nombre `SITE_CONTENT`.
2. Crear un bucket de **R2** (ej. `donut-bites-images`) y enlazarlo con el nombre `SITE_IMAGES`.
3. Agregar las variables de entorno secretas `ADMIN_PASSWORD` y `SESSION_SECRET`. **Usa valores fuertes y distintos a los de `.dev.vars`** (ese archivo es solo para pruebas locales, nunca se sube a git). Un generador de contraseñas o `openssl rand -base64 32` sirve para el `SESSION_SECRET`.
4. Hacer push a `main` — Cloudflare Pages ya está conectado a GitHub y despliega automáticamente.

## 🔒 Seguridad

- `.dev.vars` (contraseñas de prueba locales) está en `.gitignore` — nunca se sube al repositorio. Se revisó el historial de cambios pendientes y no hay credenciales reales expuestas.
- El panel de admin usa una cookie de sesión firmada (HMAC) con `HttpOnly`, `Secure` y `SameSite=Lax` — no es accesible desde JavaScript ni se envía en peticiones de otros sitios.
- La comparación de la contraseña y de la firma de sesión usa comparación de tiempo constante (`timingSafeEqual`), para evitar ataques de temporización.
- Los intentos de inicio de sesión están limitados a **5 por cada 15 minutos** por dirección IP; después de eso, el panel bloquea nuevos intentos aunque la contraseña sea correcta.
- Las rutas `/admin/*` llevan `noindex, nofollow` para no aparecer en buscadores.
- La subida de fotos valida que sea una imagen real y limita el tamaño a 8MB.

### Imagen OG (Open Graph)
Agregar `/public/og-image.jpg` (1200×630px) para que se vea bien al compartir en redes.

### Favicon
Agregar `/public/favicon.svg` o `/public/favicon.ico`

## 🔍 SEO Implementado

- ✅ Title y meta description optimizados para Monterrey
- ✅ Keywords locales: "donas decoradas Monterrey", "donas artesanales MTY", etc.
- ✅ Open Graph + Twitter Cards
- ✅ Schema.org `Bakery` con `areaServed` (todos los municipios del AMM)
- ✅ `geo.region` y `geo.placename` para SEO local
- ✅ `robots.txt` + `canonical` URL
- ✅ Sitemap (Astro lo genera automáticamente con `site` configurado)
- ✅ Fotos con nombres de archivo descriptivos (ej. `donas-decoradas-halloween-calabaza-monterrey.jpeg`) y texto `alt` en cada imagen
- ✅ Las fotos que se suban desde el panel generan su nombre SEO automáticamente

## 📈 Próximos pasos SEO recomendados

1. Agregar plugin `@astrojs/sitemap` para sitemap automático
2. Google Search Console — verificar propiedad
3. Google Business Profile — enlazar al sitio
4. Crear página `/gracias` para tracking de conversiones (WhatsApp clicks)
5. Instalar Google Analytics o Plausible

## 🎨 Paleta de colores

| Variable       | Color       | Uso                   |
|----------------|-------------|----------------------|
| `--pink`       | `#E8496A`   | Accent principal     |
| `--choco`      | `#3D1A0E`   | Texto, footer        |
| `--cream`      | `#FFF8F0`   | Fondo principal      |
| `--gold`       | `#F4A629`   | Detalles dorados     |

## 🔤 Tipografía

- **Display:** Fraunces (títulos, logo)
- **Body:** Nunito (texto, botones)

## 🗂️ Mejoras futuras conocidas

- Subida de fotos nuevas directamente desde el celular a resoluciones más pequeñas automáticamente (hoy se suben tal cual, hasta 8MB).
- Reordenar fotos dentro de una temporada arrastrándolas (hoy el orden es el orden en que se agregaron).
