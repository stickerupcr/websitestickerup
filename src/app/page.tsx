import Image from "next/image";
import { Composer } from "@/components/composer";
import { Bolt, Sticker } from "@/components/stickers";
import { FAQ, FINISHES, PRODUCTS, STEPS, WHATSAPP_DISPLAY, waLink, type Product } from "@/config/site";

const HELLO = waLink("Hola, Publistudio. Quiero cotizar unos stickers.");
const cut = (c: string) => ({ "--cut": c }) as React.CSSProperties;

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur-sm">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" aria-label="StickerUp by Publistudio, inicio" className="shrink-0">
          <Image src="/brand/stickerup-logo.webp" alt="StickerUp by Publistudio" width={1190} height={425} priority className="h-16 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-9 text-base font-normal md:flex">
          <a href="#productos" className="hover:text-amber">Productos</a>
          <a href="#pedido" className="hover:text-amber">Armá tu pedido</a>
          <a href="#como-pedir" className="hover:text-amber">Cómo pedir</a>
          <a href="#preguntas" className="hover:text-amber">Preguntas</a>
        </nav>
        <a href={HELLO} target="_blank" rel="noopener" className="btn btn-amber !min-h-11 !px-5 !py-2.5 text-sm sm:text-base">WhatsApp</a>
      </div>
    </header>
  );
}

function Hero() {
  const st = (kind: Parameters<typeof Sticker>[0]["kind"], cls: string, vars: Record<string, string>) => (
    <Sticker kind={kind} className={`stick absolute ${cls}`} style={vars as React.CSSProperties} />
  );
  return (
    <section id="inicio" className="cut-bottom relative z-10 overflow-x-clip bg-ink" style={cut("#000")}>
      <div className="wrap grid min-h-[calc(100svh-14.5rem)] items-center gap-6 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-8">
        <div>
          <h1 className="text-[clamp(3.4rem,9.4vw,6rem)]">
            Stickers <span className="text-amber">con tu marca.</span>
          </h1>
          <p className="mt-7 max-w-[34ch] text-xl leading-snug text-soft-light sm:text-2xl">
            Troquelados, circulares, etiquetas, transparentes, holográficos y magnetos. Los hace Publistudio, estudio de rotulación de Costa Rica.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-5">
            <a href={HELLO} target="_blank" rel="noopener" className="btn btn-amber">Pedir por WhatsApp</a>
            <a href="#productos" className="btn btn-ghost text-paper">Ver productos</a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[34rem] justify-self-center lg:max-w-none" aria-hidden="true">
          {st("troquelado", "left-[2%] top-[4%] w-[54%] rotate-[-9deg]", { "--r0": "-24deg", "--d": ".05s" })}
          {st("circular", "right-[0%] top-[0%] w-[40%] rotate-[12deg]", { "--r0": "28deg", "--d": ".18s" })}
          {st("etiqueta", "left-[22%] top-[44%] w-[56%] rotate-[4deg] z-10", { "--r0": "-12deg", "--d": ".3s" })}
          {st("holografico", "right-[0%] bottom-[0%] w-[28%] rotate-[-10deg] z-20", { "--r0": "20deg", "--d": ".42s" })}
          {st("transparente", "left-[0%] bottom-[0%] w-[30%] rotate-[8deg] z-20", { "--r0": "-20deg", "--d": ".54s" })}
        </div>
      </div>
    </section>
  );
}

function Tape() {
  const items = ["Troquelados", "Circulares", "Etiquetas", "Transparentes", "Holográficos", "Magnetos"];
  const row = (
    <ul className="flex shrink-0 items-center gap-8 pr-8">
      {[...items, ...items].map((t, i) => (
        <li key={i} className="flex items-center gap-8 font-display text-3xl font-extrabold uppercase italic tracking-tight text-ink sm:text-4xl">
          {t}
          <Bolt className="h-7 w-7 text-ink" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="tape overflow-hidden bg-amber pb-3 pt-9" aria-hidden="true">
      <div className="tape-track">{row}{row}</div>
    </div>
  );
}

function ProductCard({ p, className, tone }: { p: Product; className: string; tone: "ink" | "amber" | "mist" | "deep" | "paper" }) {
  const tones = {
    ink: "bg-ink text-paper",
    amber: "bg-amber text-ink",
    mist: "bg-mist text-ink",
    deep: "bg-amber-deep text-ink",
    paper: "bg-paper text-ink shadow-[inset_0_0_0_3px_#000]",
  };
  const big = className.includes("row-span-2");
  const soft = tone === "ink" ? "text-soft-light" : tone === "amber" || tone === "deep" ? "text-ink" : "text-soft-dark";
  return (
    <article className={`relative flex flex-col justify-between overflow-hidden rounded-box p-6 sm:p-8 ${tones[tone]} ${className}`}>
      <Sticker kind={p.art} className={`pointer-events-none absolute ${big ? "-right-6 top-6 w-[62%] max-w-[22rem] rotate-[8deg]" : "right-5 top-5 w-[36%] max-w-[8.5rem] rotate-[10deg]"}`} />
      <div className={big ? "min-h-72 sm:min-h-[22rem]" : "min-h-36"} />
      <div>
        <h3 className={big ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}>{p.name}</h3>
        <p className={`mt-3 max-w-[30ch] ${soft} ${big ? "text-lg" : "text-base"}`}>{p.blurb}</p>
        <p className={`mt-3 text-sm font-normal ${soft}`}>{p.finishes.join(" · ")}</p>
        <a
          href={waLink(`Hola, Publistudio. Quiero cotizar ${p.noun}. Les cuento la medida y la cantidad por acá.`)}
          target="_blank"
          rel="noopener"
          aria-label={`Pedir ${p.name.toLowerCase()} por WhatsApp`}
          className={`btn mt-6 !min-h-11 !px-6 !py-2.5 text-base ${tone === "ink" ? "btn-amber" : "btn-ink"}`}
        >
          Pedir
        </a>
      </div>
    </article>
  );
}

function Products() {
  const [tro, cir, eti, tra, hol, mag] = PRODUCTS;
  return (
    <section id="productos" className="bg-paper py-24 text-ink">
      <div className="wrap">
        <h2 className="max-w-[16ch] text-[clamp(2.6rem,6vw,4.5rem)]">Lo que imprimimos</h2>
        <p className="mt-5 max-w-[46ch] text-xl text-soft-dark">Elegí un producto y tocá <strong className="font-medium text-ink">Pedir</strong>: te abre WhatsApp con el mensaje listo.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-6">
          <ProductCard p={tro} tone="ink" className="md:col-span-3 md:row-span-2" />
          <ProductCard p={cir} tone="amber" className="md:col-span-3" />
          <ProductCard p={eti} tone="mist" className="md:col-span-3" />
          <ProductCard p={tra} tone="paper" className="md:col-span-2" />
          <ProductCard p={hol} tone="deep" className="md:col-span-2" />
          <ProductCard p={mag} tone="mist" className="md:col-span-2" />
        </div>
      </div>
    </section>
  );
}

function Order() {
  return (
    <section id="pedido" className="cut-top overflow-x-clip bg-ink pb-28 pt-24" style={cut("#000")}>
      <div className="wrap">
        <h2 className="max-w-[14ch] text-[clamp(2.6rem,6vw,4.5rem)]">Armá tu <span className="text-amber">pedido</span></h2>
        <p className="mt-5 max-w-[46ch] text-xl text-soft-light">Completá la frase. Mirá cómo queda el mensaje y envialo por WhatsApp.</p>
        <div className="mt-16"><Composer /></div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section id="como-pedir" className="cut-top bg-amber py-24 text-ink" style={cut("#ffb806")}>
      <div className="wrap">
        <h2 className="max-w-[12ch] text-[clamp(2.6rem,6vw,4.5rem)]">Cómo pedir</h2>
        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="border-t-[3px] border-dashed border-ink pt-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-3xl font-black italic text-amber shadow-[0_0_0_3px_#fff,4px_6px_10px_rgba(0,0,0,.3)]">{i + 1}</span>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-[30ch] text-lg font-normal leading-snug">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const swatch: Record<string, string> = {
  mate: "bg-[#e8e5de]",
  brillante: "bg-[linear-gradient(115deg,#f2f2f2_0%,#ffffff_38%,#cfcfcf_39%,#f4f4f4_60%,#ffffff_100%)]",
  transparente: "bg-[conic-gradient(#e6e6e6_25%,#fff_0_50%,#e6e6e6_0_75%,#fff_0)] bg-[length:28px_28px] outline-dashed outline-[3px] -outline-offset-[10px] outline-ink/50",
  holografico: "bg-[conic-gradient(from_200deg,#ffb806,#fff,#e19f2a,#fff3cf,#ffb806)]",
};

function Finishes() {
  return (
    <section className="cut-top bg-paper py-24 text-ink" style={cut("#fff")}>
      <div className="wrap">
        <h2 className="max-w-[12ch] text-[clamp(2.6rem,6vw,4.5rem)]">Acabados</h2>
        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {FINISHES.map((f) => (
            <li key={f.name} className="flex flex-col items-start">
              <div aria-hidden="true" className={`h-40 w-40 rounded-full shadow-[0_0_0_5px_#000,6px_10px_16px_rgba(0,0,0,.25)] ${swatch[f.tone]}`} />
              <h3 className="mt-7 text-3xl">{f.name}</h3>
              <p className="mt-2 max-w-[26ch] text-lg text-soft-dark">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="preguntas" className="cut-top bg-mist pb-28 pt-24 text-ink" style={cut("#f5f4f1")}>
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <h2 className="text-[clamp(2.6rem,6vw,4.5rem)]">Preguntas frecuentes</h2>
        <div className="border-t-[3px] border-ink">
          {FAQ.map((f) => (
            <details key={f.q} className="group border-b-[3px] border-ink">
              <summary className="flex items-center justify-between gap-6 py-6 text-xl font-medium">
                {f.q}
                <span aria-hidden="true" className="plus flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-amber transition-transform duration-300">
                  <svg viewBox="0 0 16 16" className="h-4 w-4"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>
                </span>
              </summary>
              <p className="max-w-[60ch] pb-6 text-lg font-normal text-soft-dark">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <footer className="cut-top overflow-x-clip bg-ink pt-28 text-paper" style={cut("#000")}>
      <div className="wrap relative">
        <div aria-hidden="true" className="pointer-events-none absolute right-[4%] top-4 hidden h-[26rem] w-[32rem] lg:block">
          <Sticker kind="iman" className="absolute left-[2%] top-[22%] w-[38%] rotate-[-10deg]" />
          <Sticker kind="holografico" className="absolute right-[6%] top-[0%] w-[42%] rotate-[12deg]" />
          <Sticker kind="troquelado" className="absolute left-[30%] top-[38%] w-[44%] rotate-[6deg]" />
        </div>
        <h2 className="max-w-[13ch] text-[clamp(3rem,8vw,6rem)]">Pedí tus <span className="text-amber">stickers.</span></h2>
        <p className="mt-6 max-w-[46ch] text-xl text-soft-light">¿Un pedido grande o para tu negocio? Escribinos y lo cotizamos por volumen.</p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a href={HELLO} target="_blank" rel="noopener" className="btn btn-amber">Pedir por WhatsApp</a>
          <a href={HELLO} target="_blank" rel="noopener" className="text-xl font-normal underline decoration-amber decoration-2 underline-offset-8">{WHATSAPP_DISPLAY}</a>
        </div>
        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-night-line py-8 text-sm text-soft-light">
          <Image src="/brand/stickerup-logo.webp" alt="StickerUp by Publistudio" width={1190} height={425} loading="lazy" className="h-14 w-auto" />
          <p>StickerUp es una línea de Publistudio · Costa Rica</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <a href="#productos" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-amber focus:px-4 focus:py-2 focus:text-ink">Saltar al contenido</a>
      <div className="bg-amber px-4 py-2 text-center text-sm font-medium text-ink">Pedí y cotizá por WhatsApp</div>
      <Header />
      <main>
        <Hero />
        <Tape />
        <Products />
        <Order />
        <Steps />
        <Finishes />
        <Faq />
      </main>
      <Closing />
    </>
  );
}
