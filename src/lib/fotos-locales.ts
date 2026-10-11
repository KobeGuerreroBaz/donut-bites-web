
const DIR = '/images/library/local';

interface Foto {
  file: string;
  alt: string;
}

export const fotosPool: Foto[] = [
  { file: 'donas-decoradas-cumpleanos-set-6-monterrey.webp', alt: 'Caja de 6 donas decoradas de cumpleaños' },
  { file: 'dona-decorada-lentes-de-sol-sonrisa-monterrey.webp', alt: 'Dona decorada con lentes de sol y sonrisa' },
  { file: 'dona-decorada-gomitas-carita-monterrey.webp', alt: 'Dona decorada con carita de gomitas' },
  { file: 'torre-donas-chocolate-nuez-monterrey.webp', alt: 'Pastel de donas decoradas' },
  { file: 'dona-decorada-chocolate-grageas-monterrey.webp', alt: 'Dona de chocolate decorada con grageas' },
  { file: 'dona-decorada-kinder-sorpresa-monterrey.webp', alt: 'Dona decorada con huevo sorpresa para cumpleaños' },
  { file: 'dona-decorada-chocolate-carita-feliz-monterrey.webp', alt: 'Dona de chocolate con carita feliz' },
  { file: 'donas-gourmet-variedad-monterrey.webp', alt: 'Variedad de donas gourmet artesanales' },
  { file: 'dona-decorada-cereal-malvaviscos-monterrey.webp', alt: 'Dona decorada con cereal y malvaviscos' },
  { file: 'dona-chocolate-nuez-monterrey.webp', alt: 'Dona artesanal de chocolate y nuez' },
];

export interface FotoLocal {
  src: string;
  mini: string;
  alt: string;
}

export function fotosParaMunicipio(nombre: string, indice: number, cantidad = 10): FotoLocal[] {
  const n = fotosPool.length;
  const inicio = (indice * 3) % n;
  return Array.from({ length: cantidad }, (_, i) => {
    const f = fotosPool[(inicio + i) % n];
    return { src: `${DIR}/${f.file}`, mini: `${DIR}/${f.file.replace('.webp', '-mini.webp')}`, alt: `${f.alt}, donas decoradas en ${nombre}` };
  });
}
