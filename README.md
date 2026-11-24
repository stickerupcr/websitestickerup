# StickerUp by Publistudio

Landing de StickerUp: stickers, etiquetas y magnetos personalizados en Costa Rica.
Una sola página estática; los pedidos se hacen por WhatsApp con el mensaje ya escrito.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Qué se edita y dónde

Todo lo editable está en `src/config/site.ts`:

- `WHATSAPP_NUMBER` y `WHATSAPP_DISPLAY`: el número que recibe los pedidos. **Hoy es un número de relleno** (`506 0000 0000`): cambialo antes de publicar.
- `PRODUCTS`: los productos y sus acabados.
- `SIZES` y `QUANTITIES`: las opciones del compositor de pedido.
- `STEPS`, `FINISHES` y `FAQ`: los textos de "Cómo pedir", "Acabados" y "Preguntas frecuentes".

La marca (colores, tipografías) está en `src/app/globals.css` y `src/app/layout.tsx`. El sistema de diseño está descrito en `DESIGN.md`.

## Publicar

El proyecto es 100 % estático y no necesita variables de entorno. En Vercel basta con importar el repositorio: detecta Next.js solo. Cada push a `main` se despliega.

## Revisar antes de publicar

- Cambiar el número de WhatsApp.
- Confirmar la lista de productos y acabados.
- Confirmar los textos del FAQ (tiempos, envíos y formas de pago) con el taller.
- Tipografías: la marca usa Coolvetica (de pago); la página usa Rubik como sustituto abierto hasta contar con la licencia.
