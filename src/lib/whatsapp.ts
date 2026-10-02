// src/lib/whatsapp.ts
// Un solo lugar para el número y los mensajes de WhatsApp del sitio.

// Número de respaldo. El número "oficial" vive en el panel de admin (content.whatsappNumber);
// las páginas deben pasarlo al botón. Esto solo se usa si no se pasa ninguno.
// Formato internacional, solo dígitos, sin "+" ni espacios: 52 + 10 dígitos.
export const WHATSAPP_NUMBER = '528146812034';

export const MENSAJE_BASE =
  'Hola Donut Bites 🍩 Me gustaría cotizar un pedido de donas decoradas.';

export function whatsappUrl(
  message: string = MENSAJE_BASE,
  number: string = WHATSAPP_NUMBER
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
