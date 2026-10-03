// src/lib/fotos-locales.ts
// Fotos para las páginas locales (donas-decoradas-[municipio]).
// Viven en public/images/library/local/ (cuadradas, 800x800, ~70-140 KB c/u) y sus miniaturas -mini.jpg (320x320, ~15-25 KB).
// Cada municipio muestra sus fotos (4 en el hero + 6 en la galería) en distinto orden (rotación por posición),
// y el alt lleva el nombre del municipio.

const DIR = '/images/library/local';

interface Foto {
  file: string;
  alt: string;
}

export const fotosPool: Foto[] = [
  { file: 'donas-decoradas-cumpleanos-set-6-monterrey.jpg', alt: 'Caja de 6 donas decoradas de cumpleaños' },
  { file: 'dona-decorada-lentes-de-sol-sonrisa-monterrey.jpg', alt: 'Dona decorada con lentes de sol y sonrisa' },
  { file: 'dona-decorada-gomitas-carita-monterrey.jpg', alt: 'Dona decorada con carita de gomitas' },
  { file: 'torre-donas-chocolate-nuez-monterrey.jpg', alt: 'Torre de donas de chocolate y nuez' },
  { file: 'dona-decorada-chocolate-grageas-monterrey.jpg', alt: 'Dona de chocolate decorada con grageas' },
  { file: 'dona-decorada-kinder-sorpresa-monterrey.jpg', alt: 'Dona decorada con huevo sorpresa para cumpleaños' },
  { file: 'dona-decorada-chocolate-carita-feliz-monterrey.jpg', alt: 'Dona de chocolate con carita feliz' },
  { file: 'donas-gourmet-variedad-monterrey.jpg', alt: 'Variedad de donas gourmet artesanales' },
  { file: 'dona-decorada-cereal-malvaviscos-monterrey.jpg', alt: 'Dona decorada con cereal y malvaviscos' },
  { file: 'dona-chocolate-nuez-monterrey.jpg', alt: 'Dona artesanal de chocolate y nuez' },
];

export interface FotoLocal {
  src: string;
  mini: string; // versión chica (320x320) para la tira del hero
  alt: string;
}

/** Fotos para el municipio en la posición `indice` (0, 1, 2…). Con cantidad=10 salen todas, sin repetir. */
export function fotosParaMunicipio(nombre: string, indice: number, cantidad = 10): FotoLocal[] {
  const n = fotosPool.length;
  const inicio = (indice * 3) % n; // cada página arranca en otro punto
  return Array.from({ length: cantidad }, (_, i) => {
    const f = fotosPool[(inicio + i) % n];
    return { src: `${DIR}/${f.file}`, mini: `${DIR}/${f.file.replace('.jpg', '-mini.jpg')}`, alt: `${f.alt}, donas decoradas en ${nombre}` };
  });
}
