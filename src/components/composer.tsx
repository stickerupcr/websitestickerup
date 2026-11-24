"use client";

import { useId, useState } from "react";
import { OTHER, PRODUCTS, QUANTITIES, SIZES, orderMessage, waLink, type Order } from "@/config/site";
import { Sticker } from "./stickers";

// Chip: un <select> nativo con forma de ficha, dentro de la frase del pedido.
function Chip({ label, value, onChange, children, tone = "amber" }: { label: string; value: string; onChange: (v: string) => void; children: React.ReactNode; tone?: "amber" | "white" }) {
  return (
    <span className="relative mx-1 inline-block align-baseline">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`cursor-pointer appearance-none rounded-2xl py-1 pl-4 pr-10 font-display font-extrabold italic leading-[1.25] text-ink shadow-[0_0_0_3px_#fff,4px_6px_10px_rgba(0,0,0,.45)] ${tone === "amber" ? "bg-amber" : "bg-paper"}`}
      >
        {children}
      </select>
      <svg viewBox="0 0 12 8" aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 h-2.5 w-3 -translate-y-1/2 text-ink">
        <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const inputCls = "mx-1 w-[9ch] rounded-2xl bg-paper px-3 py-1 font-display font-extrabold italic leading-[1.25] text-ink shadow-[0_0_0_3px_#fff,4px_6px_10px_rgba(0,0,0,.45)] placeholder:text-soft-dark/70";

export function Composer() {
  const id = useId();
  const [o, setO] = useState<Order>({ productId: PRODUCTS[0].id, size: SIZES[0], customSize: "", quantity: "100", customQuantity: "", finish: "Mate", notes: "" });
  const set = <K extends keyof Order>(k: K, v: Order[K]) => setO((p) => ({ ...p, [k]: v }));

  const product = PRODUCTS.find((p) => p.id === o.productId)!;
  const choosesFinish = product.finishes.length > 1;
  const message = orderMessage(o);
  const ready = (o.size !== OTHER || o.customSize.trim()) && (o.quantity !== OTHER || o.customQuantity.trim());

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[1.35fr_1fr]">
      <div>
        <p className="font-display text-[clamp(1.45rem,3.3vw,2.25rem)] font-extrabold italic normal-case leading-[2] tracking-tight">
          <span className="block">
            <span className="whitespace-nowrap">
              Quiero
              {o.quantity === OTHER ? (
                <input aria-label="Cantidad" inputMode="numeric" placeholder="¿Cuántos?" value={o.customQuantity} onChange={(e) => set("customQuantity", e.target.value.replace(/\D/g, ""))} className={inputCls} />
              ) : null}
              <Chip label="Cantidad" value={o.quantity} onChange={(v) => set("quantity", v)}>
                {QUANTITIES.map((q) => <option key={q} value={q}>{q}</option>)}
                <option value={OTHER}>otra cantidad</option>
              </Chip>
            </span>
            <Chip label="Producto" tone="white" value={o.productId} onChange={(v) => { set("productId", v); const p = PRODUCTS.find((x) => x.id === v)!; set("finish", p.finishes[0]); }}>
              {PRODUCTS.map((p) => <option key={p.id} value={p.id}>{p.noun}</option>)}
            </Chip>
          </span>
          <span className="block">
            <span className="whitespace-nowrap">
              de
              <Chip label="Medida" value={o.size} onChange={(v) => set("size", v)}>
                {SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
                <option value={OTHER}>otra medida</option>
              </Chip>
              {o.size === OTHER && <input aria-label="Medida en centímetros" placeholder="ej. 8 × 6 cm" value={o.customSize} onChange={(e) => set("customSize", e.target.value)} className={`${inputCls} w-[13ch]`} />}
            </span>
            {choosesFinish && (
              <span className="whitespace-nowrap">
                {" "}en acabado
                <Chip label="Acabado" tone="white" value={o.finish} onChange={(v) => set("finish", v)}>
                  {product.finishes.map((f) => <option key={f} value={f}>{f.toLowerCase()}</option>)}
                </Chip>
              </span>
            )}
          </span>
        </p>

        <label htmlFor={`${id}n`} className="mt-8 block text-sm font-normal text-soft-light">¿Algo más que debamos saber? (opcional)</label>
        <textarea id={`${id}n`} rows={2} maxLength={300} value={o.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Para qué los vas a usar, fecha que los necesitás…" className="mt-2 w-full max-w-xl rounded-box border-2 border-night-line bg-night px-4 py-3 text-paper placeholder:text-soft-light/60" />
      </div>

      <div className="relative">
        <Sticker kind={product.art} className="absolute right-1 -top-24 z-10 w-28 rotate-[10deg] sm:-right-4 sm:w-32" />
        <div aria-live="polite" aria-label="Mensaje que se enviará por WhatsApp" className="rounded-[26px_26px_26px_6px] bg-night p-6 pt-8 shadow-[0_0_0_3px_#2a2a2a]">
          <p className="text-lg font-normal leading-snug">{message}</p>
        </div>
        <a href={ready ? waLink(message) : undefined} aria-disabled={!ready} target="_blank" rel="noopener" className={`btn btn-amber mt-8 w-full text-lg ${ready ? "" : "pointer-events-none opacity-50"}`}>
          Enviar por WhatsApp
        </a>
        <p role="status" className={`mt-4 text-sm ${ready ? "text-soft-light" : "font-medium text-amber"}`}>
          {ready ? "Se abre WhatsApp con este mensaje. Ahí mandás tu arte y te cotizamos." : "Escribí la medida y la cantidad para continuar."}
        </p>
      </div>
    </div>
  );
}
