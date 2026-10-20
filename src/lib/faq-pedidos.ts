// src/lib/faq-pedidos.ts
// Preguntas frecuentes reutilizables. Se importan donde se necesiten.
export interface FaqItem {
  q: string;
  /** Texto plano (sin HTML). Es lo que lee Google en el schema. */
  a: string;
}

export const faqPedidos: FaqItem[] = [
  {
    q: '¿Con cuánta anticipación debo hacer mi pedido?',
    a: 'Depende del diseño. Los diseños sencillos con los sabores disponibles pueden salir el mismo día si pides antes de las 2 pm; después de esa hora, se entregan al día siguiente por la mañana. Los diseños más elaborados o personalizados requieren 3 días de anticipación. Si tu evento es antes, escríbenos por WhatsApp y con gusto revisamos disponibilidad.',
  },
  {
    q: '¿Cuál es el pedido mínimo?',
    a: 'Trabajamos por cajas, desde una caja de 6 donas decoradas. Puedes combinar sabores y diseños según tu ocasión.',
  },
  {
    q: '¿Cuánto cuestan las donas decoradas?',
    a: 'Cada pedido es personalizado, así que te preparamos una cotización a tu medida. Escríbenos por WhatsApp con tu idea, la fecha y la cantidad, y te respondemos con todos los detalles.',
  },
  {
    q: '¿Puedo recoger mi pedido o lo llevan a domicilio?',
    a: 'Ambas opciones. Puedes recoger tu pedido o lo llevamos a domicilio en todos los municipios del área metropolitana de Monterrey. Te confirmamos los detalles junto con tu cotización por WhatsApp.',
  },
  {
    q: '¿Pueden decorar las donas con el tema de mi evento?',
    a: 'Sí, nos encanta. Hacemos donas decoradas para cumpleaños, baby showers, bodas, eventos de empresa y más. Cuéntanos tu tema y colores por WhatsApp y armamos un diseño para ti.',
  },
  {
    q: '¿Cómo hago mi pedido?',
    a: 'Es muy sencillo: escríbenos por WhatsApp, cuéntanos la fecha, la cantidad y el estilo que te gusta, y te enviamos tu cotización. Al confirmar, comenzamos a preparar tus donas.',
  },
];
