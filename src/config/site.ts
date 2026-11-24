// Todo lo que se edita en la landing vive aquí: número, productos, textos de ayuda.

// PROVISIONAL: número de relleno. Cambialo por el WhatsApp real, con código de país y sin signos.
export const WHATSAPP_NUMBER = "50600000000";
export const WHATSAPP_DISPLAY = "+506 0000 0000";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type ArtKind = "troquelado" | "circular" | "etiqueta" | "transparente" | "holografico" | "iman";

export type Product = {
  id: string;
  name: string;
  noun: string; // cómo se nombra dentro de la frase del pedido
  blurb: string;
  finishes: string[];
  art: ArtKind;
};

export const PRODUCTS: Product[] = [
  { id: "troquelados", name: "Troquelados", noun: "stickers troquelados", blurb: "Cortados siguiendo la silueta de tu diseño, sin bordes de más.", finishes: ["Mate", "Brillante"], art: "troquelado" },
  { id: "circulares", name: "Circulares", noun: "stickers circulares", blurb: "Redondos y parejos, para sellar bolsas, cajas y empaques.", finishes: ["Mate", "Brillante"], art: "circular" },
  { id: "etiquetas", name: "Etiquetas", noun: "etiquetas rectangulares", blurb: "Para frascos, cajas y productos con información.", finishes: ["Mate", "Brillante"], art: "etiqueta" },
  { id: "transparentes", name: "Transparentes", noun: "stickers transparentes", blurb: "El fondo desaparece y queda solo tu diseño.", finishes: ["Transparente"], art: "transparente" },
  { id: "holograficos", name: "Holográficos", noun: "stickers holográficos", blurb: "Cambian de color según cómo les pegue la luz.", finishes: ["Holográfico"], art: "holografico" },
  { id: "magnetos", name: "Magnetos", noun: "magnetos personalizados", blurb: "Imanes con tu diseño para refris, carros y pizarras.", finishes: ["Imán"], art: "iman" },
];

export const SIZES = ["5 × 5 cm", "7,5 × 7,5 cm", "10 × 10 cm", "12,5 × 12,5 cm"];
export const OTHER = "Otra";
export const QUANTITIES = ["50", "100", "200", "300", "500", "1000"];

export type Order = {
  productId: string;
  size: string;
  customSize: string;
  quantity: string;
  customQuantity: string;
  finish: string;
  notes: string;
};

export function orderMessage(o: Order): string {
  const product = PRODUCTS.find((p) => p.id === o.productId) ?? PRODUCTS[0];
  const size = o.size === OTHER ? o.customSize.trim() : o.size;
  const quantity = o.quantity === OTHER ? o.customQuantity.trim() : o.quantity;
  const parts = [`Hola, Publistudio. Quiero cotizar ${quantity || "…"} ${product.noun}`];
  if (size) parts[0] += ` de ${size}`;
  else parts[0] += " de una medida que les cuento";
  if (product.finishes.length > 1) parts[0] += ` en acabado ${o.finish.toLowerCase()}`;
  parts[0] += ".";
  if (o.notes.trim()) parts.push(o.notes.trim());
  parts.push("Les mando mi arte por acá.");
  return parts.join(" ");
}

export const STEPS = [
  { title: "Escribinos", text: "Contanos qué querés imprimir, en qué medida y cuántos. El botón ya te deja el mensaje escrito." },
  { title: "Mandá tu arte", text: "Enviás tu diseño por WhatsApp. Si no lo tenés listo, te decimos cómo prepararlo." },
  { title: "Aprobá la prueba", text: "Te mostramos cómo va a quedar antes de imprimir. Si algo no te convence, lo ajustamos." },
  { title: "Imprimimos y entregamos", text: "Cortamos tu pedido y lo retirás en el taller o te lo hacemos llegar." },
];

export const FINISHES = [
  { name: "Mate", text: "Sin reflejos: el color se lee parejo bajo cualquier luz.", tone: "mate" },
  { name: "Brillante", text: "Con brillo: los colores se ven más vivos y profundos.", tone: "brillante" },
  { name: "Transparente", text: "Vinil sin fondo: el sticker toma el color de lo que lo rodea.", tone: "transparente" },
  { name: "Holográfico", text: "Brillo metálico que cambia de tono con el ángulo de la luz.", tone: "holografico" },
] as const;

export const FAQ = [
  { q: "¿Cómo hago un pedido?", a: "Armás tu pedido en la página y tocás el botón: se abre WhatsApp con el mensaje ya escrito. Nosotros te respondemos con la cotización." },
  { q: "¿Qué formato de arte necesito?", a: "Lo ideal es un archivo vectorial (AI, PDF, EPS o SVG). Si es una imagen, que tenga buena resolución al tamaño final. Si no estás seguro, mandanos lo que tengas y te decimos si sirve." },
  { q: "¿Puedo ver cómo queda antes de imprimir?", a: "Sí. Te mandamos una prueba digital y no imprimimos hasta que la aprobés." },
  { q: "¿Cuánto cuestan?", a: "Depende del producto, la medida y la cantidad. Escribinos con tu pedido y te cotizamos por WhatsApp." },
  { q: "¿Cuánto tardan y cómo los recibo?", a: "Los tiempos y los costos de envío te los confirmamos al cotizar. Podés retirar en el taller, o coordinamos envío por Correos de Costa Rica o mensajería en la GAM." },
  { q: "¿Cómo se paga?", a: "Por SINPE Móvil o transferencia bancaria. Te damos los datos cuando aprobás la cotización." },
];
