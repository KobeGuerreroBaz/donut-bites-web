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
  galeria?: boolean;
  menu: FotoTemporada;
  ocasionesTitulo: string;
  ocasiones: Ocasion[];
  mensajeWhatsApp: string;
  faq: FaqItem[];
}

const HALLOWEEN = '/images/library/halloween';
const NAVIDAD = '/images/library/navidad';

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
        src: `${HALLOWEEN}/donas-decoradas-halloween-oreo-casa-embrujada-monterrey.webp`,
        alt: 'Dona decorada de Halloween con Oreo de casa embrujada',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-sprinkles-terror-monterrey.webp`,
        alt: 'Dona decorada de Halloween con grageas de terror',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-calabaza-monterrey.webp`,
        alt: 'Dona decorada de calabaza para Halloween',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-telarana-monterrey.webp`,
        alt: 'Dona decorada con telaraña de chocolate para Halloween',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-boo-monterrey.webp`,
        alt: 'Dona decorada con mensaje BOO para Halloween',
      },
      {
        src: `${HALLOWEEN}/donas-decoradas-halloween-momia-arana-monterrey.webp`,
        alt: 'Donas decoradas de momia y araña para Halloween',
      },
    ],
    menu: {
      src: `${HALLOWEEN}/menu-donas-halloween-monterrey.webp`,
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
  {
    slug: 'navidad-y-posadas',
    nombre: 'Navidad y posadas',
    badge: '🎄 Navidad y posadas en Monterrey',
    title: 'Donas Decoradas para Navidad y Posadas en Monterrey | Donut Bites',
    description:
      'Donas decoradas navideñas y postres para posadas en Monterrey y toda su área metropolitana: Grinch, renos y coronas hechas a mano. Cotiza por WhatsApp.',
    h1: 'Donas decoradas para Navidad y posadas en Monterrey',
    intro:
      'Grinch, renos, coronas y mucho HO HO HO. Hacemos donas decoradas navideñas a mano, en caja o empacadas una por una, para tu cena, tus regalos y como postre de tu posada, la de tu oficina o la del colegio. Armamos desde una caja de 6 hasta pedidos de más de 600 piezas, con factura. Entregamos en Monterrey, Guadalupe, San Pedro, San Nicolás, Apodaca, Escobedo y Santa Catarina.',
    hero: {
      src: `${NAVIDAD}/donas-decoradas-navidad-caja-grinch-monterrey.webp`,
      alt: 'Caja de seis donas decoradas para Navidad con reno, Grinch, HO HO HO y coronas, junto a una dona del Grinch en su cajita',
    },
    disenosTitulo: 'Diseños de donas decoradas para Navidad',
    disenosTexto:
      'Estos son algunos de los diseños de la temporada. Puedes pedirlos tal cual, combinarlos en una caja o decirnos tu idea para crear uno nuevo.',
    disenos: ['Grinch', 'Reno', 'HO HO HO', 'Corona navideña', 'Regalo', 'Copo de nieve', 'Árbol de Navidad'],
    galeria: true,
    fotos: [
      {
        src: `${NAVIDAD}/donas-decoradas-navidad-regalo-monterrey.webp`,
        alt: 'Dona decorada de Navidad roja con moño blanco y perlitas doradas, como regalo',
      },
      {
        src: `${NAVIDAD}/donas-decoradas-navidad-copo-de-nieve-monterrey.webp`,
        alt: 'Dona decorada de Navidad con betún blanco, confeti azul y copo de nieve',
      },
      {
        src: `${NAVIDAD}/donas-decoradas-navidad-hohoho-monterrey.webp`,
        alt: 'Dona decorada de Navidad roja con letras HO HO HO',
      },
      {
        src: `${NAVIDAD}/donas-decoradas-navidad-reno-monterrey.webp`,
        alt: 'Dona decorada de reno de Navidad con chocolate, pretzels de cuernos y nariz roja',
      },
      {
        src: `${NAVIDAD}/donas-decoradas-navidad-arbol-monterrey.webp`,
        alt: 'Dona decorada de Navidad como árbol verde con serie de luces de M&M\'s',
      },
      {
        src: `${NAVIDAD}/donas-decoradas-navidad-corona-verde-monterrey.webp`,
        alt: 'Dona decorada de Navidad verde como corona, con hojitas y bolitas rojas',
      },
      {
        src: `${NAVIDAD}/donas-decoradas-navidad-grinch-monterrey.webp`,
        alt: 'Dona decorada del Grinch para Navidad con betún verde y ojos amarillos',
      },
      {
        src: `${NAVIDAD}/donas-decoradas-navidad-renos-caja-monterrey.webp`,
        alt: 'Caja de donas decoradas de renos de Navidad con chocolate y pretzels',
      },
    ],
    menu: {
      src: `${NAVIDAD}/donas-decoradas-navidad-postal-santa-monterrey.webp`,
      alt: 'Donas decoradas de Navidad HO HO HO y corona, empacadas una por una con postal de Santa, de Donut Bites Monterrey',
    },
    ocasionesTitulo: 'Para cada cena, posada y regalo de Navidad',
    ocasiones: [
      {
        emoji: '🍽️',
        titulo: 'Postre para tu cena de Navidad',
        texto: 'Donas decoradas fáciles de repartir, para cerrar tu cena con un postre que todos quieren fotografiar.',
      },
      {
        emoji: '🏢',
        titulo: 'Posada de la oficina',
        texto: 'Postre para todo tu equipo, en cajas o empacado individualmente para repartir sin batallar.',
      },
      {
        emoji: '🎒',
        titulo: 'Posada del colegio',
        texto: 'Donas decoradas individuales para que todo el salón celebre, fáciles de repartir.',
      },
      {
        emoji: '🎁',
        titulo: 'Regalos de Navidad',
        texto: 'Donas empacadas una por una, listas para regalar a tus clientes, tu equipo o tus seres queridos.',
      },
      {
        emoji: '🎉',
        titulo: 'Evento de empresa',
        texto: 'Pedidos grandes, desde una caja de 6 hasta más de 600 piezas, con factura para tu empresa.',
      },
      {
        emoji: '🎂',
        titulo: 'Pastel de donas navideño',
        texto: 'Un pastel de donas con tema navideño y cake topper personalizado, para ser el centro de tu mesa.',
      },
    ],
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas para Navidad y me gustaría cotizar un pedido 🎄🍩',
    faq: [
      {
        q: '¿Con cuánta anticipación debo pedir mis donas de Navidad?',
        a: 'Te recomendamos escribirnos con al menos 3 días de anticipación. En diciembre las fechas cercanas al 24 y al 31 se llenan rápido, así que entre antes apartes la tuya, mejor. Escríbenos por WhatsApp con el día y la cantidad, y revisamos disponibilidad.',
      },
      {
        q: '¿Pueden ir empacadas una por una para regalar?',
        a: 'Sí. Tu pedido puede ir en caja o empacado individualmente, ideal para regalos, colegios y oficina. Cuéntanos tu idea por WhatsApp y te cotizamos.',
      },
      {
        q: '¿Hacen pastel de donas para Navidad?',
        a: 'Sí. Armamos pasteles de donas con tema navideño desde 15 donas, con cake topper personalizado. Cuéntanos cuántas personas serán y tu idea por WhatsApp, y te cotizamos.',
      },
      {
        q: '¿Sirven como postre para mi cena o mi posada?',
        a: 'Claro. Las donas decoradas son un postre fácil de repartir para tu cena de Navidad, tu posada o el convivio de tu oficina. También hacemos pedidos para empresas y eventos grandes, con factura. Escríbenos por WhatsApp con la fecha y la cantidad.',
      },
      {
        q: '¿Hacen pedidos grandes para posadas de empresa o de colegio?',
        a: 'Sí. Armamos desde una caja de 6 hasta pedidos de más de 600 piezas, y facturamos pedidos de empresas. Dinos la fecha y cuántas personas serán por WhatsApp, y te ayudamos a calcular cuántas donas conviene pedir.',
      },
      {
        q: '¿Puedo pedir un diseño navideño diferente a los de la foto?',
        a: 'Claro. Además de los diseños de la temporada, podemos decorar tus donas con el personaje, los colores o el tema que imagines. Mándanos tu idea por WhatsApp.',
      },
      {
        q: '¿Entregan donas de Navidad en mi zona?',
        a: 'Sí, llevamos tu pedido a domicilio en toda el área metropolitana de Monterrey: Monterrey, Guadalupe, San Pedro, San Nicolás, Apodaca, Escobedo y Santa Catarina, incluida la zona de Cumbres. Mándanos tu dirección por WhatsApp y te confirmamos los detalles.',
      },
    ],
  },
];

export const rutaTemporada = (slug: string): string => `/donas-decoradas-para-${slug}-monterrey`;
