# Donut Bites.co — Sitio Web

Sitio web construido con **Astro** para máximo rendimiento y SEO.

## 🚀 Setup

```bash
npm install
npm run dev       # Desarrollo: http://localhost:4321
npm run build     # Build para producción
npm run preview   # Preview del build
```

## 📁 Estructura

```
donut-bites/
├── src/
│   ├── layouts/
│   │   └── Layout.astro     ← SEO, meta tags, Schema.org
│   └── pages/
│       └── index.astro      ← Landing page principal
├── public/
│   └── robots.txt
├── astro.config.mjs
└── package.json
```

## 🔧 Personalización pendiente

### Número de WhatsApp
En `src/pages/index.astro`, línea 5:
```js
const whatsappNumber = "528110000000"; // ← Cambiar al número real (con código de país, sin +)
```

### URLs de redes sociales
Actualizar en `Layout.astro` (schema) y en `index.astro` (footer/botones):
- `https://www.facebook.com/donutbitesco`
- `https://www.instagram.com/donutbitesco`
- `https://www.tiktok.com/@donutbitesco`

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

## 📈 Próximos pasos SEO recomendados

1. Agregar plugin `@astrojs/sitemap` para sitemap automático
2. Google Search Console — verificar propiedad
3. Google Business Profile — enlazar al sitio
4. Crear página `/gracias` para tracking de conversiones (WhatsApp clicks)
5. Instalar Google Analytics o Plausible
6. Agregar imágenes reales de las donas (con `alt` descriptivo para SEO)

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
