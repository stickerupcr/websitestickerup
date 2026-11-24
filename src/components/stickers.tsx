import { useId } from "react";
import type { ArtKind } from "@/config/site";

// Los stickers se dibujan aquí, en SVG: borde blanco de corte, sombra suave y el rayo de la marca.
export const BOLT = "M112 6 L36 112 H86 L66 194 L166 78 H114 Z";

export function Bolt({ className = "", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
      <path d={BOLT} fill={fill} />
    </svg>
  );
}

const W = { fill: "#fff", stroke: "#fff", strokeWidth: 14, strokeLinejoin: "round" as const, paintOrder: "stroke" as const };

export function Sticker({ kind, className = "", style }: { kind: ArtKind; className?: string; style?: React.CSSProperties }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} style={{ overflow: "visible", filter: "drop-shadow(6px 10px 12px rgba(0,0,0,.5))", ...style }}>
      {kind === "troquelado" && (
        <>
          <path d={BOLT} {...W} strokeWidth={24} />
          <path d={BOLT} fill="#FFB806" stroke="#000" strokeWidth={5} strokeLinejoin="round" />
          <path d="M108 30 L64 100" stroke="#fff" strokeOpacity=".55" strokeWidth={6} strokeLinecap="round" />
        </>
      )}
      {kind === "circular" && (
        <>
          <circle cx="100" cy="100" r="94" fill="#fff" />
          <circle cx="100" cy="100" r="84" fill="#000" />
          <path id={`${uid}c`} d="M100 100 m-64 0 a64 64 0 1 1 128 0 a64 64 0 1 1 -128 0" fill="none" />
          <text fill="#FFB806" fontFamily="var(--font-rubik)" fontStyle="italic" fontWeight={800} fontSize="15">
            <textPath href={`#${uid}c`} textLength="396" lengthAdjust="spacing">STICKERUP · BY PUBLISTUDIO ·</textPath>
          </text>
          <g transform="translate(58 58) scale(.42)"><path d={BOLT} fill="#FFB806" /></g>
        </>
      )}
      {kind === "etiqueta" && (
        <>
          <path d="M28 48 H172 Q186 48 186 62 V112 L146 152 H28 Q14 152 14 138 V62 Q14 48 28 48 Z" fill="#000" stroke="#fff" strokeWidth={14} strokeLinejoin="round" paintOrder="stroke" />
          <path d="M186 112 L146 152 L156 104 Z" fill="#dcdcdc" stroke="#fff" strokeWidth={4} strokeLinejoin="round" />
          <text x="30" y="90" fill="#fff" fontFamily="var(--font-rubik)" fontStyle="italic" fontWeight={900} fontSize="26">STICKER</text>
          <text x="30" y="126" fill="#FFB806" fontFamily="var(--font-rubik)" fontStyle="italic" fontWeight={900} fontSize="40">UP</text>
          <rect x="92" y="108" width="40" height="5" rx="2.5" fill="#FFB806" />
          <rect x="92" y="120" width="26" height="4" rx="2" fill="#777" />
        </>
      )}
      {kind === "transparente" && (
        <>
          <defs>
            <pattern id={`${uid}k`} width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="rgba(255,255,255,.06)" />
              <rect width="10" height="10" fill="rgba(255,255,255,.16)" />
              <rect x="10" y="10" width="10" height="10" fill="rgba(255,255,255,.16)" />
            </pattern>
          </defs>
          <rect x="20" y="20" width="160" height="160" rx="44" fill={`url(#${uid}k)`} stroke="#fff" strokeWidth={4} strokeDasharray="12 9" />
          <g transform="translate(46 44) scale(.54)"><path d={BOLT} fill="#FFB806" stroke="#fff" strokeWidth={8} strokeLinejoin="round" /></g>
          <path d="M44 60 Q60 34 98 30" stroke="#fff" strokeOpacity=".6" strokeWidth={5} fill="none" strokeLinecap="round" />
        </>
      )}
      {kind === "holografico" && (
        <>
          <defs>
            <linearGradient id={`${uid}h`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFB806" /><stop offset=".25" stopColor="#fff" /><stop offset=".5" stopColor="#E19F2A" />
              <stop offset=".75" stopColor="#fff3cf" /><stop offset="1" stopColor="#FFB806" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="92" fill={`url(#${uid}h)`} stroke="#fff" strokeWidth={12} />
          <path d="M40 150 L120 24" stroke="#fff" strokeOpacity=".7" strokeWidth={10} strokeLinecap="round" />
          <path d="M70 168 L160 40" stroke="#fff" strokeOpacity=".4" strokeWidth={6} strokeLinecap="round" />
          <g transform="translate(58 52) scale(.44)"><path d={BOLT} fill="#000" /></g>
        </>
      )}
      {kind === "iman" && (
        <>
          <path d="M34 22 H150 L182 54 V166 Q182 182 166 182 H34 Q18 182 18 166 V38 Q18 22 34 22 Z" fill="#E19F2A" stroke="#fff" strokeWidth={14} strokeLinejoin="round" paintOrder="stroke" />
          <path d="M70 66 V118 A30 30 0 0 0 130 118 V66" fill="none" stroke="#000" strokeWidth={26} />
          <rect x="57" y="56" width="26" height="22" fill="#fff" />
          <rect x="117" y="56" width="26" height="22" fill="#fff" />
        </>
      )}
    </svg>
  );
}
