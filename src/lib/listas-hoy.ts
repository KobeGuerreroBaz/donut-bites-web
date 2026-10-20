// src/lib/listas-hoy.ts
// Oferta de "donas listas para hoy" (entrega el mismo día). Un solo lugar para
// cambiar hora de corte, ventana de entrega, sabores y fotos del sitio.

export const listasHoy = {
  /** Pedidos hechos antes de esta hora pueden salir el mismo día. */
  horaCorte: '2 pm',
  // Sin ventana de entrega a propósito: no comprometerse con un horario de llegada.
  /** Si no alcanza para el mismo día. */
  entregaSiguienteDia: 'al día siguiente por la mañana',

  sabores: [
    'Nutella',
    'Oreo',
    'Cajeta',
    "M&M's",
    'Canelitas',
    'Lotus',
    'Chocolate',
    'Fresa',
    'Vainilla',
    'Maple',
  ],

  /** Aclaración que se muestra bajo la lista de sabores. */
  notaSprinkles:
    'Chocolate, maple, fresa y vainilla también puedes pedirlas con chispas de sabor.',

  condiciones: [
    'Mínimo 1 caja',
    'Combina los sabores que quieras',
    'Entrega en todos los municipios del área metropolitana',
  ],

  // Las cajas son ilustrativas: el cliente elige los sabores.
  fotos: [
    {
      src: '/images/library/listas-hoy/caja-donas-lista-hoy-monterrey-1.webp',
      alt: 'Caja de donas decoradas de Donut Bites con sabores combinados',
    },
    {
      src: '/images/library/listas-hoy/caja-donas-lista-hoy-monterrey-2.webp',
      alt: 'Caja de donas artesanales de Donut Bites en Monterrey con sabores surtidos',
    },
    {
      src: '/images/library/listas-hoy/caja-donas-lista-hoy-monterrey-3.webp',
      alt: 'Caja de donas de Donut Bites lista para entrega el mismo día en Monterrey',
    },
  ],

  mensajeWhatsApp: '¡Hola! Quiero hacer un pedido de donas para hoy 🍩 Sabores:',
};
