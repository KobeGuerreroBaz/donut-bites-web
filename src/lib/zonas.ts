import type { Municipio } from './municipios';

export interface ColegioInfo {
  eyebrow: string;
  titulo: string;
  texto: string;
  puntos: string[];
  mensajeWhatsApp: string;
}

export interface Zona extends Municipio {
  municipio: string;
  colegio?: ColegioInfo;
}

export const zonas: Zona[] = [
  {
    slug: 'cumbres',
    municipio: 'monterrey',
    nombre: 'Cumbres',
    title: 'Donas Decoradas y Pastel de Donas en Cumbres | Donut Bites',
    description:
      'Donas decoradas y pastel de donas en Cumbres, Monterrey, para el cumpleaños en el colegio, fiestas y eventos. Cotiza por WhatsApp.',
    h1: 'Donas decoradas en Cumbres',
    intro:
      'Donas decoradas artesanales y pastel de donas para las familias de Cumbres, en Monterrey. Para el cumpleaños en el colegio, la fiesta en casa o cualquier evento, lo diseñamos con el tema y los colores que tú elijas.',
    cobertura:
      'Llevamos tu pedido a domicilio en toda la zona de Cumbres, en Monterrey: desde los alrededores de Plaza Cumbres y Costco Cumbres hasta Puerta de Hierro y los sectores de Cumbres: sector 1, sector 2 y sector 3.',
    colonias: [],
    referencias: ['Plaza Cumbres', 'Costco Cumbres', 'Puerta de Hierro', 'Cumbres sector 1', 'Cumbres sector 2', 'Cumbres sector 3'],
    nota:
      'Te las llevamos a domicilio en Cumbres. Y si te queda de paso, también lo coordinamos contigo por WhatsApp para que pases por ellas.',
    ideasTitulo: 'Ideas para tus fiestas en Cumbres',
    ideasTexto:
      'Para la fiesta en casa, un pastel de donas con el tema favorito del festejado o donas decoradas individuales para cada invitado; para la convivencia familiar del fin de semana, donas con los colores del equipo o de la piñata; para la junta de trabajo, un detalle dulce con los colores de tu empresa. Cuéntanos tu idea y la diseñamos.',
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas en Cumbres y me gustaría cotizar un pedido 🍩',
    colegio: {
      eyebrow: 'Cumpleaños en el colegio',
      titulo: 'Pastel de donas para festejar en el colegio',
      texto:
        'Que tu peque llegue al salón con donas decoradas con su tema favorito y todos los compañeros se lleven una sonrisa.',
      puntos: [
        'Donas individuales o pastel de donas, como tú prefieras.',
        'Con el tema, los personajes y los colores que le encantan al festejado.',
        'Te ayudamos a calcular cuántas necesitas según tu grupo, con cajas desde 6 donas.',
        'Pídelas con 3 días de anticipación y coordinamos la entrega por WhatsApp.',
      ],
      mensajeWhatsApp:
        '¡Hola! Vi la página de donas decoradas en Cumbres y quiero cotizar donas para el cumpleaños en el colegio 🍩',
    },
    faq: [
      {
        q: '¿Hacen donas decoradas para cumpleaños en el colegio en Cumbres?',
        a: 'Sí. Armamos cajas de donas decoradas con el tema del festejado para repartir en su salón. Escríbenos por WhatsApp con la fecha, cuántos niños son y el tema, y te cotizamos.',
      },
      {
        q: '¿Hacen pastel de donas para cumpleaños en Cumbres?',
        a: 'Sí. Armamos pasteles de donas decorados con el tema y los colores del festejado, ideales para la mesa de la fiesta. Escríbenos por WhatsApp con la fecha, cuántas personas serán y tu idea, y te cotizamos.',
      },
      {
        q: '¿Qué diseños puedo pedir para el cumpleaños de mi hijo o hija?',
        a: 'El que quieras: sus personajes favoritos, su equipo, sus colores o el tema de la fiesta. Cuéntanos tu idea por WhatsApp y la diseñamos.',
      },
      {
        q: '¿Cuántas donas necesito para el grupo del colegio?',
        a: 'Nuestras cajas son desde 6 donas. Dinos cuántos niños hay en el salón y te ayudamos a calcular cuántas cajas conviene pedir para que alcance para todos, maestras incluidas.',
      },
      {
        q: '¿Entregan cerca de Plaza Cumbres, Costco Cumbres y Puerta de Hierro?',
        a: 'Sí, entregamos a domicilio en toda la zona de Cumbres, incluyendo Cumbres sector 1, sector 2 y sector 3, y las colonias cercanas a Plaza Cumbres, Costco Cumbres y Puerta de Hierro. Mándanos tu dirección por WhatsApp y te confirmamos los detalles.',
      },
    ],
  },
];

export const zonasDe = (municipioSlug: string): Zona[] =>
  zonas.filter((z) => z.municipio === municipioSlug);
