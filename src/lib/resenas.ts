// src/lib/resenas.ts
// Reseñas reales de Google de Donut Bites, tal como las escribieron los clientes.
// NO editar el texto. Para agregar una nueva, pega un bloque al final de la lista.
// "destacada: true" las prioriza en la home. "municipio" solo si estamos seguros (slug igual al de municipios.ts).

export interface Resena {
  autor: string; // nombre corto, ej. "María G."
  texto: string; // texto original, sin cambios
  estrellas: 1 | 2 | 3 | 4 | 5;
  municipio?: string; // slug del municipio de entrega, solo si es seguro
  destacada?: boolean;
  entrega?: boolean; // habla de la entrega/puntualidad: se prioriza en las páginas locales
}

// Datos del perfil de Google (actualizar a mano cuando cambien)
export const CALIFICACION_GOOGLE = 5.0;
export const TOTAL_RESENAS_GOOGLE = 9;

export const resenas: Resena[] = [
  {
    autor: "Leslie Z.",
    texto:
      "Pedí una caja de donas personalizadas para un regalo de cumpleaños y me salvaron la vida. El servicio a domicilio hasta Apodaca, súper puntual y las donas llegaron intactas y deliciosas, nada secas. Es el mejor detalle que puedes mandar en Monterrey. 100% recomendadas. Muchas gracias Donut Bites!",
    estrellas: 5,
    municipio: "apodaca",
    destacada: true,
    entrega: true,
  },
  {
    autor: "Mónica I.",
    texto:
      "Las donas son siempre frescas, esponjosas y con un sabor increíble. El glaseado es perfecto.\n\nLa presentación es impecable, perfectas para compartir o regalar.\n\n¡Altamente recomendado! Definitivamente volveré 😊",
    estrellas: 5,
    destacada: true,
  },
  {
    autor: "Diana T.",
    texto:
      "Un muy bonito detalle para las miss del colegio de mi niño, muy bonitos diseños, bueno tamaño, muy esponjosas..",
    estrellas: 5,
    destacada: true,
  },
  {
    autor: "Janeth C.",
    texto:
      "Suuuper recomendadas, quedaron hermosas y deliciosas. Me hicieron entrega el día y hra acordados en el sur. Muchas gracias Éxito!!",
    estrellas: 5,
    destacada: true,
    entrega: true,
  },
  {
    autor: "Mariana L.",
    texto:
      "Simplemente las mejores.\nExcelente servicio,atención ,puntualidad pero lo más importante el sabor😋😋\nSúper recomendables",
    estrellas: 5,
    entrega: true,
  },
  {
    autor: "Pochart",
    texto:
      "Excelente opción para solicitar donas para ya sea eventos o reuniones especial, buenísimas! Cero dejan sabor grasoso en la boca, no sientes que muerdes aire y con sabores que no rebasan a tu paladar. LAS AMO!!",
    estrellas: 5,
  },
  {
    autor: "Sofia M.",
    texto:
      "Super ricas y muy bonitas las donas del mundial asta ni se las querían comer de tan lindas que estaban igual nos las comimos jajaj todas nos encantaron 😋",
    estrellas: 5,
  },
  {
    autor: "Bernardo B.",
    texto:
      "Excelente servicio, buenas donas y las donas de temporada están muy divertidas.",
    estrellas: 5,
  },
  {
    autor: "Karla E.",
    texto: "Las mas exquisitas donas de la zona 😋",
    estrellas: 5,
  },
];
