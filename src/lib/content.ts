export interface SiteImage {
  src: string;
  alt: string;
}

export interface SeasonContent {
  label: string;
  tag: string;
  title: string;
  subtitle: string;
  ctaText: string;
  enlace?: string;
  images: SiteImage[];
}

export interface FlavorCard {
  name: string;
  desc: string;
  image?: SiteImage;
  emoji?: string;
}

export interface SiteContent {
  whatsappNumber: string;
  social: {
    instagram: string;
    tiktok: string;
    facebook: string;
  };
  activeSeason: string;
  heroImage: SiteImage;
  seasons: Record<string, SeasonContent>;
  flavors: FlavorCard[];
  generalImages: SiteImage[];
}

const LIB = '/images/library';

export const CONTENT_KEY = 'site-content';

export const defaultContent: SiteContent = {
  whatsappNumber: '528146812034',
  social: {
    instagram: 'https://www.instagram.com/donut.bites.co',
    tiktok: 'https://www.tiktok.com/@donut.bites85',
    facebook: 'https://www.facebook.com/donutbitesco',
  },
  activeSeason: 'ninguna',
  heroImage: {
    src: `${LIB}/general/dona-chocolate-nuez-monterrey.jpg`,
    alt: 'Dona decorada artesanal de chocolate y nuez, Donut Bites Monterrey',
  },
  seasons: {
    halloween: {
      label: 'Halloween',
      tag: '🎃 Edición especial · Halloween',
      title: 'Donas que dan <em>miedo</em> de lo ricas',
      subtitle: 'Diseños de temporada con telarañas, calabazas y mucho chocolate — por encargo para tu fiesta de Halloween en Monterrey.',
      ctaText: 'Pedir mis donas de Halloween',
      enlace: '/donas-decoradas-para-halloween-monterrey',
      images: [
        { src: `${LIB}/halloween/donas-decoradas-halloween-oreo-casa-embrujada-monterrey.jpeg`, alt: 'Dona decorada de Halloween con Oreo de casa embrujada, Monterrey' },
        { src: `${LIB}/halloween/donas-decoradas-halloween-sprinkles-terror-monterrey.jpeg`, alt: 'Dona decorada de Halloween con grageas de terror, Monterrey' },
        { src: `${LIB}/halloween/donas-decoradas-halloween-calabaza-monterrey.jpeg`, alt: 'Dona decorada de calabaza para Halloween, Monterrey' },
        { src: `${LIB}/halloween/donas-decoradas-halloween-telarana-monterrey.jpeg`, alt: 'Dona decorada con telaraña de chocolate, Halloween Monterrey' },
        { src: `${LIB}/halloween/donas-decoradas-halloween-boo-monterrey.jpeg`, alt: 'Dona decorada con mensaje BOO, Halloween Monterrey' },
        { src: `${LIB}/halloween/donas-decoradas-halloween-set-6-piezas-monterrey.jpg`, alt: 'Set de 6 donas decoradas de Halloween, Monterrey' },
        { src: `${LIB}/halloween/donas-decoradas-halloween-momia-arana-monterrey.jpg`, alt: 'Donas decoradas de momia y araña, Halloween Monterrey' },
        { src: `${LIB}/halloween/menu-donas-halloween-monterrey.jpeg`, alt: 'Menú de donas de Halloween, Donut Bites Monterrey' },
      ],
    },
    navidad: {
      label: 'Navidad',
      tag: '🎄 Edición especial · Navidad',
      title: 'Donas para endulzar la <em>Navidad</em>',
      subtitle: 'Cajas y diseños navideños hechos a mano, perfectos para regalar o compartir en estas fiestas.',
      ctaText: 'Hacer mi pedido navideño',
      images: [
        { src: `${LIB}/navidad/donas-decoradas-navidad-hohoho-corona-monterrey.jpeg`, alt: 'Donas decoradas de Navidad, Ho Ho Ho y corona, Monterrey' },
        { src: `${LIB}/navidad/donas-decoradas-navidad-postal-santa-monterrey.jpeg`, alt: 'Dona decorada de Navidad con postal de Santa, Monterrey' },
        { src: `${LIB}/navidad/donas-decoradas-navidad-caja-grinch-monterrey.jpg`, alt: 'Caja de donas decoradas de Navidad con diseño Grinch, Monterrey' },
      ],
    },
    'san-valentin': {
      label: 'San Valentín',
      tag: '💝 Edición especial · San Valentín',
      title: 'Para la persona más <em>dulce</em>',
      subtitle: 'Donas decoradas con corazones y detalles especiales para regalar en San Valentín.',
      ctaText: 'Pedir mis donas de San Valentín',
      images: [
        { src: `${LIB}/san-valentin/donas-decoradas-san-valentin-set-corazones-monterrey.jpeg`, alt: 'Set de donas decoradas de San Valentín con corazones, Monterrey' },
        { src: `${LIB}/san-valentin/caja-regalo-donas-san-valentin-monterrey.jpeg`, alt: 'Caja de regalo de donas de San Valentín, Monterrey' },
        { src: `${LIB}/san-valentin/donas-decoradas-san-valentin-plato-monterrey.jpeg`, alt: 'Plato de donas decoradas de San Valentín, Monterrey' },
        { src: `${LIB}/san-valentin/caja-regalo-donas-personalizadas-domicilio-monterrey.jpeg`, alt: 'Caja de regalo de donas personalizadas a domicilio, Monterrey' },
        { src: `${LIB}/san-valentin/donas-decoradas-san-valentin-postal-monterrey.jpeg`, alt: 'Dona decorada de San Valentín con postal, Monterrey' },
        { src: `${LIB}/san-valentin/donas-gourmet-caja-4-san-valentin-monterrey.jpeg`, alt: 'Caja de 4 donas gourmet de San Valentín, Monterrey' },
        { src: `${LIB}/san-valentin/dona-decorada-san-valentin-individual-monterrey.jpeg`, alt: 'Dona individual decorada de San Valentín, Monterrey' },
      ],
    },
    'dia-de-las-madres': {
      label: 'Día de las Madres',
      tag: '💐 Edición especial · 10 de mayo',
      title: 'Para la mamá más <em>dulce</em>',
      subtitle: 'Donas decoradas artesanalmente para celebrar su día como se merece.',
      ctaText: 'Hacer pedido por WhatsApp',
      images: [
        { src: `${LIB}/dia-de-las-madres/donas-decoradas-dia-de-las-madres-monterrey.jpg`, alt: 'Dona decorada Día de las Madres, Monterrey' },
        { src: `${LIB}/dia-de-las-madres/donas-decoradas-10-de-mayo-monterrey.jpg`, alt: 'Dona especial para mamá, 10 de mayo, Monterrey' },
      ],
    },
    graduaciones: {
      label: 'Graduaciones',
      tag: '🎓 Edición especial · Graduaciones',
      title: 'Para celebrar cada <em>logro</em>',
      subtitle: 'Donas decoradas para festejar la graduación de quien más quieres.',
      ctaText: 'Pedir mis donas de graduación',
      images: [],
    },
    'dia-del-maestro': {
      label: 'Día del Maestro',
      tag: '🍎 Edición especial · Día del Maestro',
      title: 'Gracias, <em>maestra/o</em>',
      subtitle: 'Un detalle dulce para agradecer a quien enseña con paciencia y cariño.',
      ctaText: 'Pedir mi detalle para el maestro',
      images: [],
    },
    'dia-del-abuelo': {
      label: 'Día del Abuelo',
      tag: '👵👴 Edición especial · Día del Abuelo',
      title: 'Para consentir a los <em>abuelos</em>',
      subtitle: 'Donas decoradas para celebrar a los abuelos en su día.',
      ctaText: 'Pedir mi caja para los abuelos',
      images: [],
    },
    'accion-de-gracias': {
      label: 'Día de Acción de Gracias',
      tag: '🦃 Edición especial · Acción de Gracias',
      title: 'Donas para agradecer en <em>familia</em>',
      subtitle: 'Caja especial de Acción de Gracias, perfecta para cerrar la cena con algo dulce.',
      ctaText: 'Pedir mi caja de Acción de Gracias',
      images: [
        { src: `${LIB}/accion-de-gracias/menu-donas-dia-de-accion-de-gracias-monterrey.jpeg`, alt: 'Caja de donas decoradas de Día de Acción de Gracias, Monterrey' },
      ],
    },
    'dia-del-padre': {
      label: 'Día del Padre',
      tag: '👨‍👧 Edición especial · Día del Padre',
      title: 'Consiéntelo con algo <em>dulce</em>',
      subtitle: 'Promoción especial de Día del Padre: packs y pastel de donas para celebrarlo.',
      ctaText: 'Pedir mi promo de Día del Padre',
      images: [
        { src: `${LIB}/dia-del-padre/promocion-donas-dia-del-padre-monterrey.jpeg`, alt: 'Promoción de donas de Día del Padre, Monterrey' },
      ],
    },
    'fiestas-patrias': {
      label: 'Fiestas Patrias',
      tag: '🇲🇽 Edición especial · Fiestas Patrias',
      title: 'Donas con sabor a <em>México</em>',
      subtitle: 'Decoración tricolor y diseños alusivos para celebrar septiembre.',
      ctaText: 'Pedir mi promo mexicana',
      images: [
        { src: `${LIB}/fiestas-patrias/donas-decoradas-fiestas-patrias-mexico-monterrey.jpeg`, alt: 'Donas decoradas de Fiestas Patrias con bandera de México, Monterrey' },
      ],
    },
  },
  flavors: [
    {
      name: 'Caja de Donas',
      desc: 'Selección de donas decoradas artesanales',
      image: { src: `${LIB}/general/catalogo-donas-decoradas-monterrey.jpeg`, alt: 'Catálogo de donas decoradas artesanales en Monterrey' },
    },
    {
      name: 'Donas Gourmet',
      desc: 'Toppings premium: Nutella, Oreo, cajeta, mazapán y más',
      image: { src: `${LIB}/general/donas-gourmet-variedad-monterrey.jpeg`, alt: 'Variedad de donas gourmet artesanales en Monterrey' },
    },
    {
      name: 'Sabor Chocolate Maple',
      desc: 'Cubierta sabor maple con topping de chocolate y nuez',
      image: { src: `${LIB}/general/dona-sabor-chocolate-maple-monterrey.jpeg`, alt: 'Dona sabor chocolate maple con nuez, Monterrey' },
    },
    {
      name: 'Sabor Oreo',
      desc: 'Glaseado blanco cubierto de Oreo triturada',
      image: { src: `${LIB}/general/dona-sabor-oreo-monterrey.jpeg`, alt: 'Dona sabor Oreo decorada, Monterrey' },
    },
    { name: 'Temporada Especial', desc: 'Diseños exclusivos que cambian según la ocasión', emoji: '🎉' },
    { name: 'Personalizada', desc: 'Cuéntanos tu idea y la hacemos realidad', emoji: '✨' },
  ],
  generalImages: [
    { src: `${LIB}/general/catalogo-donas-decoradas-monterrey.jpeg`, alt: 'Catálogo de donas decoradas artesanales en Monterrey' },
    { src: `${LIB}/general/collage-donas-decoradas-monterrey.jpeg`, alt: 'Collage de donas decoradas en Monterrey' },
    { src: `${LIB}/general/dona-chocolate-nuez-monterrey.jpg`, alt: 'Dona decorada artesanal de chocolate y nuez, Monterrey' },
    { src: `${LIB}/general/dona-sabor-chocolate-maple-monterrey.jpeg`, alt: 'Dona sabor chocolate maple con nuez, Monterrey' },
    { src: `${LIB}/general/dona-sabor-oreo-monterrey.jpeg`, alt: 'Dona sabor Oreo decorada, Monterrey' },
    { src: `${LIB}/general/donas-artesanales-monterrey.jpg`, alt: 'Donas artesanales decoradas, Monterrey' },
    { src: `${LIB}/general/donas-gourmet-variedad-artesanal-monterrey.jpg`, alt: 'Variedad artesanal de donas gourmet, Monterrey' },
    { src: `${LIB}/general/donas-gourmet-variedad-monterrey.jpeg`, alt: 'Variedad de donas gourmet artesanales en Monterrey' },
    { src: `${LIB}/general/donas-para-eventos-monterrey.jpeg`, alt: 'Donas decoradas para eventos en Monterrey' },
    { src: `${LIB}/general/menu-sabores-donas-monterrey.jpeg`, alt: 'Menú de sabores de donas, Donut Bites Monterrey' },
    { src: `${LIB}/general/portada-facebook-donut-bites-monterrey.jpeg`, alt: 'Portada de Facebook de Donut Bites Monterrey' },
    { src: `${LIB}/general/tarjeta-contacto-donut-bites-monterrey.jpeg`, alt: 'Tarjeta de contacto de Donut Bites Monterrey' },
    { src: `${LIB}/general/torre-donas-decoradas-nuez-monterrey.jpg`, alt: 'Torre de donas decoradas con nuez, Monterrey' },
    { src: `${LIB}/general/torre-donas-glaseadas-monterrey.jpeg`, alt: 'Torre de donas glaseadas artesanales, Monterrey' },
    { src: `${LIB}/general/donas-decoradas-cumpleanos-set-6-monterrey.jpg`, alt: 'Set de 6 donas decoradas de cumpleaños, Monterrey' },
    { src: `${LIB}/general/dona-decorada-cumpleanos-carita-feliz-monterrey.jpg`, alt: 'Dona decorada con carita feliz de cumpleaños, Monterrey' },
    { src: `${LIB}/general/dona-decorada-cumpleanos-lentes-sol-monterrey.jpg`, alt: 'Dona decorada con lentes de sol para cumpleaños, Monterrey' },
    { src: `${LIB}/general/dona-decorada-cumpleanos-dulces-monterrey.jpg`, alt: 'Dona decorada con dulces de cumpleaños, Monterrey' },
    { src: `${LIB}/general/dona-decorada-cumpleanos-chocolate-monterrey.jpg`, alt: 'Dona decorada de chocolate para cumpleaños, Monterrey' },
    { src: `${LIB}/general/dona-decorada-kinder-sorpresa-cumpleanos-monterrey.jpg`, alt: 'Dona decorada con Kinder Sorpresa para cumpleaños, Monterrey' },
    { src: `${LIB}/general/dona-decorada-cumpleanos-cereal-monterrey.jpg`, alt: 'Dona decorada con cereal para cumpleaños, Monterrey' },
  ],
};

export async function getContent(env: Env): Promise<SiteContent> {
  try {
    const raw = await env.SITE_CONTENT.get(CONTENT_KEY);
    if (!raw) return defaultContent;
    const parsed = JSON.parse(raw) as SiteContent;
    const seasons = Object.fromEntries(
      Object.entries(parsed.seasons ?? defaultContent.seasons).map(([key, season]) => [
        key,
        { ...defaultContent.seasons[key], ...season },
      ]),
    ) as Record<string, SeasonContent>;
    return { ...defaultContent, ...parsed, seasons };
  } catch {
    // KV sin configurar todavia, o dato invalido: el sitio publico sigue funcionando con los valores por defecto.
    return defaultContent;
  }
}

export async function saveContent(env: Env, content: SiteContent): Promise<void> {
  await env.SITE_CONTENT.put(CONTENT_KEY, JSON.stringify(content));
}
