// components/HeroSection.jsx

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden ">
      {/* ── Fundo ── */}
      <img
        src="../fundo.png"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-3"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* ── Foto Desktop (absoluta, direita) ── */}
      <img
        src="../fundadorgustavo.png"
        alt="Fundador Castro Mídia"
        className="hidden md:block absolute bottom-0 right-0 h-full w-auto object-contain object-bottom z-10 select-none pointer-events-none"
      />

      {/* ── Wrapper principal ── */}
      <div className="relative z-20 w-full flex flex-col md:block">
        {/* === MOBILE/TABLET === */}
        <div className="flex flex-col justify-between items-center text-center pt-20 md:hidden min-h-screen">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img src="../logo.png" alt="Castro Mídia" className="h-12 w-auto" />
          </a>

          {/* Headline */}
          <h1 className="font-display uppercase text-left tracking-wide leading-tight text-2xl p-5  mt-5 md:text-3xl">
            <span className="text-white/90 block">
              Uma agência de marketing
            </span>
            <span className="text-white/90 block">não vende cliques,</span>
            <span className="text-gradient block">ela vende resultado!</span>
          </h1>

          {/* Foto — cresce para preencher o espaço restante da tela */}
       
            <img
              src="../foto-mobile.png"
              alt="Fundador Castro Mídia"
              className="h-full w-auto"
            />
         
        </div>

        {/* === DESKTOP === */}
        <div
          className="hidden md:flex items-center justify-start max-w-7xl mx-auto px-6 py-0"
          style={{ minHeight: "100vh" }}
        >
          <div className="flex flex-col items-start text-left gap-7 max-w-[52%] mr-10">
            <a href="#hero" className="flex items-center gap-3">
              <img
                src="../logo.png"
                alt="Castro Mídia"
                className="h-20 w-auto"
              />
            </a>

            <h1
              className="font-display uppercase tracking-wide leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
            >
              <span className="text-white/90 block">
                Uma agência de marketing
              </span>
              <span className="text-white/90 block">não vende cliques,</span>
              <span className="text-gradient block">ela vende resultado!</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Linha dourada */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent z-20" />
    </section>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L.057 23.177a.75.75 0 0 0 .916.919l5.453-1.429A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.96-1.353l-.354-.214-3.678.964.983-3.59-.232-.368A9.75 9.75 0 1 1 12 21.75z" />
    </svg>
  );
}
