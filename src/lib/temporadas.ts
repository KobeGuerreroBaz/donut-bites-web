import type { FaqItem } from './faq-pedidos';

export interface FotoTemporada {
  src: string;
  alt: string;
}

export interface Ocasion {
  emoji: string;
  titulo: string;
  texto: string;
}

export interface Temporada {
  slug: string;
  nombre: string;
  badge: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  hero: FotoTemporada;
  disenosTitulo: string;
  disenosTexto: string;
  disenos: string[];
  fotos: FotoTemporada[];
  menu: FotoTemporada;
  ocasionesTitulo: string;
  ocasiones: Ocasion[];
  mensajeWhatsApp: string;
  faq: FaqItem[];
}

const HALLOWEEN = '/images/library/halloween';

export const temporadas: Temporada[] = [
  {
    slug: 'halloween',
    nombre: 'Halloween',
    badge: '🎃 Halloween en Monterrey',
    title: 'Donas Decoradas para Halloween en Monterrey | Donut Bites',
    description:
      'Donas decoradas para Halloween en Monterrey: calabazas, momias, telarañas y más, hechas a mano. Pide con 3 días de anticipación. Cotiza por WhatsApp.',
    h1: 'Donas decoradas para Halloween en Monterrey',
    intro:
      'Calabazas, momias, telarañas y mucho chocolate. Hacemos donas decoradas para Halloween a mano, con los diseños de la temporada o con el tema y los colores que tú quieras, para tu fiesta, el colegio o la oficina.',
    hero: {
      src: `${HALLOWEEN}/donas-decoradas-halloween-set-6-piezas-monterrey.jpg`,
      alt: 'Seis donas decoradas para Halloween: BOO, grageas de terror, momia, telaraña, calabaza y araña de Oreo',
    },
    disenosTitulo: 'Diseños de donas decoradas para Halloween',
    disenosTexto:
      'Estos son algunos de los diseños de la temporada. Puedes pedirlos tal cual, combinarlos en una caja o decirnos tu idea para crear uno nuevo.',
    disenos: ['Calabaza', 'Momia', 'Telaraña', 'Araña de Oreo', 'BOO', 'Grageas de terror'],
    fotos: [
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-oreo-casa-embrujada-monterrey.jpeg`,
        alt: 'Dona decorada de Halloween con Oreo de casa embrujada',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-sprinkles-terror-monterrey.jpeg`,
        alt: 'Dona decorada de Halloween con grageas de terror',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-calabaza-monterrey.jpeg`,
        alt: 'Dona decorada de calabaza para Halloween',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-telarana-monterrey.jpeg`,
        alt: 'Dona decorada con telaraña de chocolate para Halloween',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-boo-monterrey.jpeg`,
        alt: 'Dona decorada con mensaje BOO para Halloween',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-momia-arana-monterrey.jpg`,
        alt: 'Donas decoradas de momia y araña para Halloween',
      },
    ],
    menu: {
      src: `${HALLOWEEN}/menu-donas-halloween-monterrey.jpeg`,
      alt: 'Menú de donas decoradas de Halloween de Donut Bites Monterrey',
    },
    ocasionesTitulo: 'Para cada fiesta de Halloween',
    ocasiones: [
      {
        emoji: '🏠',
        titulo: 'Fiesta en casa',
        texto: 'Una caja con los diseños de terror favoritos de tus invitados, lista para la mesa de dulces.',
      },
      {
        emoji: '🎒',
        titulo: 'Convivio en el colegio',
        texto: 'Donas individuales decoradas para que todo el salón celebre Halloween con un detalle divertido.',
      },
      {
        emoji: '💼',
        titulo: 'Oficina y eventos',
        texto: 'Una sorpresa de temporada para tu equipo, con los colores de Halloween o los de tu empresa.',
      },
      {
        emoji: '🎂',
        titulo: 'Pastel de donas de Halloween',
        texto: 'Un pastel de donas decorado con el tema de Halloween para ser el centro de tu fiesta.',
      },
    ],
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas para Halloween y me gustaría cotizar un pedido 🎃🍩',
    faq: [
      {
        q: '¿Con cuánta anticipación debo pedir mis donas de Halloween?',
        a: 'Te recomendamos escribirnos con al menos 3 días de anticipación. Entre más cerca esté el 31 de octubre, mejor apartar tu fecha cuanto antes. Escríbenos por WhatsApp con el día y la cantidad, y revisamos disponibilidad.',
      },
      {
        q: '¿Hacen pastel de donas para Halloween?',
        a: 'Sí. Armamos pasteles de donas decorados con el tema de Halloween, ideales para la mesa de tu fiesta. Cuéntanos cuántas personas serán y tu idea por WhatsApp, y te cotizamos.',
      },
      {
        q: '¿Puedo pedir un diseño de Halloween diferente a los de la foto?',
        a: 'Claro. Además de los diseños de la temporada, podemos decorar tus donas con el personaje, los colores o el tema que imagines. Mándanos tu idea por WhatsApp.',
      },
      {
        q: '¿Cuántas donas debo pedir para mi fiesta o mi grupo?',
        a: 'Nuestras cajas son desde 6 donas. Dinos cuántas personas serán y te ayudamos a calcular cuántas cajas conviene pedir para que alcance para todos.',
      },
      {
        q: '¿Entregan donas de Halloween en mi zona?',
        a: 'Sí, llevamos tu pedido a domicilio en toda el área metropolitana de Monterrey: Monterrey, Guadalupe, San Pedro, San Nicolás, Apodaca, Escobedo y Santa Catarina, incluida la zona de Cumbres. Mándanos tu dirección por WhatsApp y te confirmamos los detalles.',
      },
    ],
  },
];

export const rutaTemporada = (slug: string): string => `/donas-decoradas-para-${slug}-monterrey`;
