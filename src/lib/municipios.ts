// src/lib/municipios.ts
// Datos de cada página local. Para agregar un municipio, copia el bloque de Guadalupe
// y cambia el texto: cada página debe tener su propio contenido (no copies y pegues).
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
    ],
  },
];

/** Municipios del área metropolitana a los que también se entrega (solo texto). */
export const otrosMunicipios: string[] = [
  'Monterrey',
  'San Pedro Garza García',
  'San Nicolás de los Garza',
  'Apodaca',
  'General Escobedo',
  'Santa Catarina',
];

export const rutaMunicipio = (slug: string): string => `/donas-decoradas-${slug}`;
