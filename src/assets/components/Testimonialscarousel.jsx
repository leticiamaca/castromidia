// components/TestimonialsCarousel.jsx
// Carrossel de imagens de depoimentos (prints do WhatsApp).
// Sem background próprio — herda o tema global como Cases.jsx.
import CTAWhatsapp from "./CTAWhatsapp";
import { useState, useEffect, useCallback } from "react";

/* ─── Adicione suas imagens aqui ────────────────────────────────────────────
   Substitua src pelo caminho real da imagem (import ou URL).
   O href de cada item é o link que abre ao clicar na imagem — use "#"
   para ancorar internamente ou uma URL externa.
   ─────────────────────────────────────────────────────────────────────────── */
const IMAGENS = [
  { src: "/relato1.jpeg", alt: "Depoimento 1", href: "#" },
  { src: "/relato2.jpeg", alt: "Depoimento 2", href: "#" },
  { src: "/relato3.jpeg", alt: "Depoimento 3", href: "#" },
  { src: "/relato4.jpeg", alt: "Depoimento 4", href: "#" },
  { src: "/relato5.jpeg", alt: "Depoimento 5", href: "#" },
];

function getVisibleCount() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

/* ─── Card de imagem ─────────────────────────────────────────────────────── */
function ImageCard({ item }) {
  return (
    <div className="h-full px-2.5">
      <a
        href={item.href}
        aria-label={item.alt}
        className="block rounded-2xl overflow-hidden border border-gold/20
                   transition-all duration-300
                   hover:border-gold/60 hover:scale-[1.02]"
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-auto object-cover"
          draggable={false}
        />
      </a>
    </div>
  );
}

/* ─── Componente principal ─────────────────────────────────────────────────── */
export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(getVisibleCount);

  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = IMAGENS.length - visible;

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [visible, maxIndex, current]);

  // Auto-play
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)),
      5000
    );
    return () => clearInterval(id);
  }, [maxIndex]);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(maxIndex, c + 1)),
    [maxIndex]
  );

  return (
    <section id="depoimentos" className="px-6 min-h-screen p-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">

        {/* ── Header — idêntico ao Cases.jsx ──────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">
            Depoimentos
          </p>
          <div className="divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            O que nossos clientes{" "}
            <span className="text-gradient">estão falando</span>
          </h2>
        </div>

        {/* ── Track ───────────────────────────────────────────────────────── */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / visible)}%)`,
            }}
          >
            {IMAGENS.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: `${100 / visible}%` }}
              >
                <ImageCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Controles ───────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior"
            className="w-9 h-9 rounded-full border border-gold/30 text-gold bg-gold/5
                       flex items-center justify-center text-lg
                       transition-all duration-200
                       hover:border-gold/70 hover:bg-gold/10
                       active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className="border-none cursor-pointer p-0 transition-all duration-300"
                style={{
                  height: "6px",
                  width: current === i ? "20px" : "6px",
                  background:
                    current === i
                      ? "var(--color-gold, #C9A84C)"
                      : "rgba(201,168,76,0.22)",
                  borderRadius: "3px",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Próximo"
            className="w-9 h-9 rounded-full border border-gold/30 text-gold bg-gold/5
                       flex items-center justify-center text-lg
                       transition-all duration-200
                       hover:border-gold/70 hover:bg-gold/10
                       active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            ›
          </button>  
       
        </div>
         <CTAWhatsapp />
      </div>
    </section>
  );
}