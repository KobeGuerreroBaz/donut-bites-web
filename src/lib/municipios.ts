import type { FaqItem } from './faq-pedidos';

export interface Municipio {
  /** Va en la URL: /donas-decoradas-{slug} */
  slug: string;
  nombre: string;
  /** <title> de la página (máx. ~60 caracteres) */
  title: string;
  /** meta description (máx. ~160 caracteres) */
  description: string;
  /** Texto del H1 */
  h1: string;
  /** Párrafo principal bajo el H1 */
  intro: string;
  /** Texto sobre cobertura de entrega */
  cobertura: string;
  /** Colonias o zonas que se mencionan en la página */
  colonias: string[];
  /** Lugares de referencia del municipio */
  referencias: string[];
  /** Nota sobre entrega o recoger, en tono positivo */
  nota: string;
  /** Título y texto de la sección "Ideas para tu evento" (único por municipio) */
  ideasTitulo: string;
  ideasTexto: string;
  /** Mensaje de WhatsApp que se manda desde esta página */
  mensajeWhatsApp: string;
  /** Preguntas propias del municipio (se muestran antes de las generales) */
  faq: FaqItem[];
}

export const municipios: Municipio[] = [
  {
    slug: 'guadalupe',
    nombre: 'Guadalupe',
    title: 'Donas Decoradas en Guadalupe, Nuevo León | Donut Bites',
    description:
      'Donas decoradas artesanales a domicilio en Guadalupe, Nuevo León. Diseños personalizados para cumpleaños, bodas y eventos. Cotiza por WhatsApp.',
    h1: 'Donas decoradas en Guadalupe',
    intro:
      'Llevamos donas decoradas artesanales hasta tu puerta en Guadalupe. Diseñamos cada caja para tu cumpleaños, boda, baby shower o evento de empresa, con los colores y el tema que tú elijas.',
    cobertura:
      'Entregamos a domicilio en toda la ciudad de Guadalupe, incluyendo colonias como Linda Vista, Zertuche, Valle Soleado, Vista Sol y Villa Española, y zonas cercanas al Estadio BBVA, Expo Guadalupe, el Parque La Pastora y el Cerro de la Silla.',
    colonias: ['Linda Vista', 'Zertuche', 'Valle Soleado', 'Vista Sol', 'Villa Española'],
    referencias: ['Estadio BBVA', 'Expo Guadalupe', 'Parque La Pastora', 'Parque Tolteca', 'Cerro de la Silla'],
    nota:
      'Tu pedido llega a domicilio, listo para sorprender. Si prefieres pasar por él, también lo coordinamos contigo por WhatsApp.',
    ideasTitulo: 'Ideas para tu evento en Guadalupe',
    ideasTexto:
      'Desde la fiesta de cumpleaños en casa hasta el convivio antes del partido en el Estadio BBVA, las donas decoradas le dan un toque especial a cualquier reunión. Podemos pintar tus donas con los colores de tu equipo, el tema de la piñata o el estilo de tu boda.',
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas en Guadalupe y me gustaría cotizar un pedido 🍩',
    faq: [
      {
        q: '¿Hacen entregas de donas decoradas a domicilio en Guadalupe?',
        a: 'Sí, llevamos tu pedido a domicilio en toda la ciudad de Guadalupe. Escríbenos por WhatsApp con tu dirección, la fecha y la hora que necesitas, y te confirmamos los detalles junto con tu cotización.',
      },
      {
        q: '¿Qué ocasiones cubren las donas decoradas en Guadalupe?',
        a: 'Hacemos donas decoradas para cumpleaños, bodas, baby showers, graduaciones, fechas de temporada y eventos de empresa en Guadalupe. Cuéntanos tu tema y colores y armamos un diseño para ti.',
      },
      {
        q: '¿Puedo pasar por mi pedido en Guadalupe?',
        a: 'Nuestro servicio principal en Guadalupe es la entrega a domicilio. Si te queda más cómodo pasar por tu pedido, escríbenos por WhatsApp y lo coordinamos contigo.',
      },
    ],
  },

  {
    slug: 'monterrey',
    nombre: 'Monterrey',
    title: 'Donas Decoradas en Monterrey, Nuevo León | Donut Bites',
    description:
      'Donas decoradas artesanales en Monterrey, N.L. Pedidos por encargo para cumpleaños, eventos de empresa y regalos, con entrega a domicilio. Cotiza por WhatsApp.',
    h1: 'Donas decoradas en Monterrey',
    intro:
      'Somos de Monterrey y hacemos donas decoradas a mano para las celebraciones de la ciudad: cumpleaños, regalos, juntas de trabajo y eventos de empresa. Cada pedido se diseña contigo, con el tema y los colores que quieras.',
    cobertura:
      'Llevamos tu pedido a domicilio en toda la ciudad de Monterrey, del Centro y el Barrio Antiguo a Cumbres, Contry y la zona del Tecnológico, pasando por colonias como Obispado, Mitras e Independencia.',
    colonias: ['Centro', 'Obispado', 'Cumbres', 'Contry', 'Tecnológico', 'Mitras', 'Independencia'],
    referencias: ['Macroplaza', 'Paseo Santa Lucía', 'Parque Fundidora', 'Arena Monterrey', 'Museo del Obispado'],
    nota:
      'Te lo llevamos a domicilio o, si te queda de paso, lo coordinamos contigo por WhatsApp para que pases por él.',
    ideasTitulo: 'Ideas para tu celebración en Monterrey',
    ideasTexto:
      'Para la oficina, una caja con los colores de tu empresa; para un cumpleaños, donas con el tema favorito del festejado; para una cena en casa, un detalle dulce que se luzca en la mesa. Si ya tienes la idea, cuéntanosla y la hacemos realidad.',
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas en Monterrey y me gustaría cotizar un pedido 🍩',
    faq: [
      {
        q: '¿Hacen donas decoradas para eventos de empresa en Monterrey?',
        a: 'Sí. Preparamos cajas de donas decoradas para juntas, aniversarios, lanzamientos y regalos para tu equipo en Monterrey. Escríbenos con la fecha, la cantidad y los colores de tu marca, y las diseñamos a tu medida.',
      },
      {
        q: '¿A qué zonas de Monterrey entregan?',
        a: 'Entregamos a domicilio en toda la ciudad, desde el Centro hasta Cumbres, Contry y el Tecnológico. Mándanos tu dirección por WhatsApp y te confirmamos los detalles de la entrega.',
      },
      {
        q: '¿Qué sabores y diseños puedo pedir en Monterrey?',
        a: 'Tenemos varios sabores y diseños, y los renovamos con cada temporada. Revisa la sección de sabores y cuéntanos tu idea por WhatsApp; te ayudamos a elegir lo que mejor combine con tu evento.',
      },
    ],
  },

  {
    slug: 'san-pedro',
    nombre: 'San Pedro Garza García',
    title: 'Donas Decoradas en San Pedro Garza García | Donut Bites',
    description:
      'Donas decoradas artesanales a domicilio en San Pedro Garza García. Diseños elegantes para bodas, baby showers y regalos especiales. Cotiza por WhatsApp.',
    h1: 'Donas decoradas en San Pedro Garza García',
    intro:
      'Para celebraciones donde cada detalle cuenta, diseñamos donas decoradas con acabados cuidados y paletas de color a tu gusto. Son ideales para bodas, baby showers, brunch, aniversarios y regalos que dejan huella en San Pedro.',
    cobertura:
      'Llegamos a tu domicilio en San Pedro Garza García, en zonas como Chipinque, Bosques del Valle, Balcones del Valle y Bosques de San Ángel, y cerca del Valle de Santa Engracia y el Valle de San Agustín.',
    colonias: ['Chipinque', 'Bosques del Valle', 'Balcones del Valle', 'Bosques de San Ángel', 'Azhara'],
    referencias: ['Parque Ecológico Chipinque', 'Valle de Santa Engracia', 'Valle de San Agustín'],
    nota:
      'Organizamos contigo por WhatsApp la fecha y la hora de tu evento, para que tus donas lleguen a tiempo y se vean increíbles.',
    ideasTitulo: 'Ideas para tu evento en San Pedro',
    ideasTexto:
      'Una mesa de postres para un baby shower con donas en tonos pastel, cajas con tu inicial para un brunch entre amigas o detalles individuales para los invitados de una boda. Diseñamos cada pieza para que combine con tu decoración.',
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas en San Pedro Garza García y me gustaría cotizar un pedido 🍩',
    faq: [
      {
        q: '¿Hacen donas decoradas para bodas y baby showers en San Pedro Garza García?',
        a: 'Sí, son de las ocasiones que más disfrutamos. Diseñamos las donas con la paleta de colores, el tema y los detalles de tu evento. Cuéntanos tu idea por WhatsApp y armamos una propuesta para ti.',
      },
      {
        q: '¿Pueden coordinar la entrega para la hora de mi evento en San Pedro?',
        a: 'Cuéntanos la fecha y la hora de tu evento y lo organizamos contigo por WhatsApp, para que tus donas lleguen a tiempo.',
      },
      {
        q: '¿Hacen cajas de regalo con donas decoradas en San Pedro?',
        a: 'Sí, una caja de donas decoradas es un regalo muy lindo para aniversarios, agradecimientos o una visita especial. Cuéntanos para quién es y el estilo que buscas, y la diseñamos.',
      },
    ],
  },

  {
    slug: 'san-nicolas',
    nombre: 'San Nicolás de los Garza',
    title: 'Donas Decoradas en San Nicolás de los Garza | Donut Bites',
    description:
      'Donas decoradas artesanales a domicilio en San Nicolás de los Garza. Diseños para cumpleaños, graduaciones y reuniones con tu equipo favorito. Cotiza por WhatsApp.',
    h1: 'Donas decoradas en San Nicolás de los Garza',
    intro:
      'San Nicolás sabe celebrar: graduaciones, cumpleaños y reuniones para ver jugar al equipo del corazón. Hacemos donas decoradas a mano para cada ocasión, con los colores y el tema que quieras ver en tu caja.',
    cobertura:
      'Entregamos a domicilio en San Nicolás de los Garza, en colonias como Anáhuac, Colinas de Anáhuac, Jardines de San Nicolás y Hacienda Nogalar, y en la zona de Ciudad Universitaria.',
    colonias: ['Anáhuac', 'Colinas de Anáhuac', 'Jardines de San Nicolás', 'Hacienda Nogalar', 'Ciudad Universitaria'],
    referencias: ['Ciudad Universitaria de la UANL', 'Estadio Universitario', 'Parque Niños Héroes'],
    nota:
      'Te las llevamos a domicilio, y si prefieres pasar por tu pedido, lo coordinamos contigo por WhatsApp.',
    ideasTitulo: 'Ideas para tu festejo en San Nicolás',
    ideasTexto:
      'Una caja con los colores de la generación para la fiesta de graduación, donas temáticas para el cumpleaños de los más pequeños o una charola para la reunión del partido. Cuéntanos la ocasión y la diseñamos.',
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas en San Nicolás de los Garza y me gustaría cotizar un pedido 🍩',
    faq: [
      {
        q: '¿Hacen donas decoradas para graduaciones en San Nicolás de los Garza?',
        a: 'Sí. Diseñamos donas para graduaciones de preparatoria, licenciatura y posgrado, con los colores de la generación o de tu facultad. Escríbenos con la fecha y la cantidad y te cotizamos.',
      },
      {
        q: '¿Pueden hacer donas con los colores de mi equipo favorito?',
        a: 'Claro. Las decoramos con los colores y el tema que elijas para tu reunión o tu partido. Cuéntanos tu idea por WhatsApp y te mostramos cómo quedaría.',
      },
      {
        q: '¿Entregan en la zona de Ciudad Universitaria?',
        a: 'Sí, entregamos en la zona de Ciudad Universitaria y en las colonias cercanas. Escríbenos con tu dirección y la fecha, y confirmamos la entrega contigo.',
      },
    ],
  },

  {
    slug: 'apodaca',
    nombre: 'Apodaca',
    title: 'Donas Decoradas en Apodaca, Nuevo León | Donut Bites',
    description:
      'Donas decoradas artesanales a domicilio en Apodaca, Nuevo León. Cajas para fiestas, regalos y convivios de trabajo. Cotiza por WhatsApp.',
    h1: 'Donas decoradas en Apodaca',
    intro:
      'Apodaca crece y celebra: fiestas en casa, convivios de oficina y regalos para quienes trabajan en la zona. Preparamos donas decoradas a mano, por encargo y con el diseño que imagines.',
    cobertura:
      'Entregamos a domicilio en Apodaca, en zonas como Huinalá, Agua Fría, Pueblo Nuevo, Rinconada Colonial y Altabrisa, además de la zona del aeropuerto.',
    colonias: ['Huinalá', 'Agua Fría', 'Pueblo Nuevo', 'Rinconada Colonial', 'Altabrisa'],
    referencias: ['Aeropuerto Internacional de Monterrey', 'Parroquia de San Francisco', 'Presidencia Municipal de Apodaca'],
    nota:
      'Coordinamos contigo por WhatsApp la entrega a tu domicilio, y si te queda más cómodo pasar por tu pedido, también lo acordamos.',
    ideasTitulo: 'Ideas para tu convivio en Apodaca',
    ideasTexto:
      'Una caja de donas para celebrar el cumpleaños de un compañero, un detalle de reconocimiento para todo el equipo o la mesa de postres de la fiesta familiar del fin de semana. Dinos cuántas personas serán y lo armamos.',
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas en Apodaca y me gustaría cotizar un pedido 🍩',
    faq: [
      {
        q: '¿Llevan donas decoradas a oficinas y empresas en Apodaca?',
        a: 'Sí. Si tu empresa o tu equipo está en Apodaca, podemos llevar cajas de donas decoradas a tu oficina o planta para cumpleaños, aniversarios o reconocimientos. Escríbenos con la fecha y la cantidad.',
      },
      {
        q: '¿A qué zonas de Apodaca llegan?',
        a: 'A todo el municipio, desde Huinalá y Agua Fría hasta Altabrisa y la zona del aeropuerto. Envíanos tu dirección por WhatsApp y confirmamos la entrega contigo.',
      },
      {
        q: '¿Hacen donas decoradas para fiestas familiares en Apodaca?',
        a: 'Sí. Para cumpleaños, bautizos, baby showers y reuniones en casa, diseñamos las donas con el tema y los colores de tu fiesta. Cuéntanos la fecha y la cantidad por WhatsApp.',
      },
    ],
  },

  {
    slug: 'escobedo',
    nombre: 'Escobedo',
    title: 'Donas Decoradas en Escobedo, N.L. | Donut Bites',
    description:
      'Donas decoradas artesanales a domicilio en Escobedo, Nuevo León. Diseños para fiestas infantiles, cumpleaños y eventos. Cotiza por WhatsApp.',
    h1: 'Donas decoradas en Escobedo',
    intro:
      'En Escobedo las familias festejan en grande, con piñatas, parques y mucha gente querida. Nuestras donas decoradas ponen el toque dulce en fiestas infantiles, cumpleaños y reuniones, con el diseño que más le guste al festejado.',
    cobertura:
      'Llegamos a tu domicilio en Escobedo, en colonias como Belisario Domínguez, Ex-Hacienda El Canadá, Las Malvinas, Pedregal del Topo Chico y Jardines de Escobedo, y cerca de Plaza Sendero Escobedo y el Parque Lineal.',
    colonias: ['Belisario Domínguez', 'Ex-Hacienda El Canadá', 'Las Malvinas', 'Pedregal del Topo Chico', 'Jardines de Escobedo'],
    referencias: ['Parque Lineal Escobedo', 'Parque Metropolitano Escobedo (Divertiparque)', 'Plaza Sendero Escobedo', 'Museo Histórico Escobedo'],
    nota:
      'Te las llevamos hasta tu puerta, o coordinamos contigo por WhatsApp si prefieres pasar por tu pedido.',
    ideasTitulo: 'Ideas para tu fiesta en Escobedo',
    ideasTexto:
      'Piensa en una caja de donas con el tema de la piñata, donas para la mesa de dulces o un detalle para los invitados después de la fiesta en el parque. Cuéntanos tu idea y la preparamos.',
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas en Escobedo y me gustaría cotizar un pedido 🍩',
    faq: [
      {
        q: '¿Hacen donas decoradas para fiestas infantiles en Escobedo?',
        a: 'Sí, son de nuestras favoritas. Diseñamos las donas con el tema y los colores que le gusten al festejado. Cuéntanos la fecha y la cantidad por WhatsApp y te cotizamos.',
      },
      {
        q: '¿Llegan a los fraccionamientos nuevos de Escobedo?',
        a: 'Sí, llegamos a todo el municipio, incluidos los fraccionamientos nuevos. Mándanos tu dirección o tu ubicación por WhatsApp y te confirmamos la entrega.',
      },
      {
        q: '¿Pueden llevar las donas a una fiesta en un parque de Escobedo?',
        a: 'Sí, coordinamos contigo la entrega en la dirección de tu fiesta. Mándanos la ubicación por WhatsApp y lo organizamos.',
      },
    ],
  },

  {
    slug: 'santa-catarina',
    nombre: 'Santa Catarina',
    title: 'Donas Decoradas en Santa Catarina, Nuevo León | Donut Bites',
    description:
      'Donas decoradas artesanales a domicilio en Santa Catarina, Nuevo León. Diseños para cumpleaños, reuniones y fines de semana. Cotiza por WhatsApp.',
    h1: 'Donas decoradas en Santa Catarina',
    intro:
      'Entre la sierra y la ciudad, Santa Catarina celebra con familia y amigos. Hacemos donas decoradas a mano, por encargo, para cumpleaños, reuniones y paseos de fin de semana, con el diseño que tú imagines.',
    cobertura:
      'Entregamos a domicilio en Santa Catarina, en zonas como La Fama, Bosques de Santa Catarina, Balcones de Santa Catarina, Bosques la Huasteca y la Antigua Santa Catarina, además de la Loma de la Cruz.',
    colonias: ['La Fama', 'Bosques de Santa Catarina', 'Balcones de Santa Catarina', 'Bosques la Huasteca', 'Antigua Santa Catarina'],
    referencias: ['Parque La Huasteca', 'Loma de la Cruz', 'Casa de la Cultura de La Fama'],
    nota:
      'Coordinamos contigo por WhatsApp la entrega a tu domicilio, y si prefieres pasar por tu pedido, también lo acordamos.',
    ideasTitulo: 'Ideas para tu reunión en Santa Catarina',
    ideasTexto:
      'Una caja de donas para llevar al paseo familiar, un detalle dulce para la comida del domingo o donas decoradas para el cumpleaños en casa. Dinos la ocasión y las diseñamos contigo.',
    mensajeWhatsApp:
      '¡Hola! Vi la página de donas decoradas en Santa Catarina y me gustaría cotizar un pedido 🍩',
    faq: [
      {
        q: '¿Llegan hasta las colonias cercanas a La Huasteca en Santa Catarina?',
        a: 'Sí, llegamos a todo Santa Catarina, incluidas las colonias cercanas a La Huasteca. Mándanos tu ubicación por WhatsApp y te confirmamos la entrega.',
      },
      {
        q: '¿Pueden preparar donas para una reunión de fin de semana en Santa Catarina?',
        a: 'Claro. Armamos cajas para reuniones familiares, paseos y fiestas de fin de semana. Cuéntanos la fecha y cuántas personas serán y te cotizamos.',
      },
      {
        q: '¿Cuántas donas debo pedir para mi reunión en Santa Catarina?',
        a: 'Nuestras cajas son desde 6 donas. Dinos cuántas personas serán y te ayudamos a calcular cuántas cajas conviene pedir.',
      },
    ],
  },
];

/** Municipios del área metropolitana a los que también se entrega (solo texto). */
export const otrosMunicipios: string[] = [
  'Monterrey',
  'San Pedro Garza García',
  'San Nicolás de los Garza',
  'Apodaca',
  'Escobedo',
  'Santa Catarina',
];

export const rutaMunicipio = (slug: string): string => `/donas-decoradas-${slug}`;
