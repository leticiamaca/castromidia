// components/Hero.jsx
// Sem background próprio — flutua sobre o canvas contínuo do body.

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 px-6"
      >
        {/* ── Imagem do tabuleiro — DENTRO da section ── */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/background.png')",
            opacity: 0.2,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Tag eyebrow */}
          <div className="fade-up inline-flex items-center gap-2 border border-gold/25 rounded-full px-4 py-1.5 mb-8 text-xs font-body tracking-widest text-gold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Agência de Marketing Digital
          </div>

          {/* Headline principal */}
          <h1 className="fade-up delay-1 font-display text-4xl md:text-7xl font-bold leading-tight mb-6">
            Uma agência de marketing <br />
            não vende cliques.
            <br />
            <span className="text-gradient">Ela constrói resultado.</span>
          </h1>

          {/* Sub-headline */}
          <p className="fade-up delay-2 font-body text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Na Castro Mídia, cada campanha é uma jogada estratégica. Foco em
            leads, custo por resultado e conversão real — não em métricas de
            vaidade.
          </p>

          {/* CTAs */}
          <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511952992652"
              target="_blank"
              rel="noreferrer"
              className="btn-gold px-8 py-3.5 rounded-full font-body text-sm tracking-wide"
            >
              Quero mais resultados →
            </a>
            <a
              href="#cases"
              className="btn-outline px-8 py-3.5 rounded-full font-body text-sm tracking-wide"
            >
              Ver cases de sucesso
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
