// components/Servicos.jsx
// Sem background próprio.

const SERVICES = [
  {
    cor: "text-gold",
    bg: "bg-gold/10",
    bgHover: "group-hover:bg-gold/20",
    titulo: "Google Ads",
    desc: "Campanhas de pesquisa, display e shopping otimizadas para o menor custo por conversão.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    cor: "text-rose",
    bg: "bg-rose/10",
    bgHover: "group-hover:bg-rose/20",
    titulo: "Meta Ads",
    desc: "Facebook e Instagram com segmentação avançada, criativos que convertem e testes A/B constantes.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    cor: "text-gold",
    bg: "bg-gold/10",
    bgHover: "group-hover:bg-gold/20",
    titulo: "Gestão Comercial",
    desc: "Gestão estratégica com foco em captação, qualificação e conversão, criando um funil de vendas previsível e escalável.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
  {
    cor: "text-rose",
    bg: "bg-rose/10",
    bgHover: "group-hover:bg-rose/20",
    titulo: "Relatórios & Análise",
    desc: "Dashboards claros com as métricas que importam: CPL, ROAS, CAC e taxa de conversão.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    ),
  },
  {
    cor: "text-gold",
    bg: "bg-gold/10",
    bgHover: "group-hover:bg-gold/20",
    titulo: "Estratégia de Conteúdo",
    desc: "Criativos e copies persuasivos alinhados ao seu posicionamento de marca.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
      />
    ),
  },
  {
    cor: "text-rose",
    bg: "bg-rose/10",
    bgHover: "group-hover:bg-gold/20",

    titulo: "Filmmaker",

    desc: "Produção de vídeos estratégicos que capturam atenção, geram conexão e fortalecem a autoridade da sua marca.",

    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h9a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
      />
    ),
  },
];

export default function Servicos() {
  return (
    <>
      <section id="servicos" className="relative py-28 px-6 overflow-hidden">
        {/* ── Imagem de fundo ── */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/backgroundServicos.png')",
            opacity: 0.3,
          }}
        />

        {/* ── Conteúdo na frente ── */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">
              O que fazemos
            </p>
            <div className="divider" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ cor, bg, bgHover, titulo, desc, icon }) => (
              <div key={titulo} className="card rounded-2xl p-6 group">
                <div
                  className={`w-11 h-11 rounded-xl ${bg} ${bgHover} transition-colors flex items-center justify-center mb-5`}
                >
                  <svg
                    className={`w-5 h-5 ${cor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icon}
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-100 mb-2">
                  {titulo}
                </h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}

            {/* Card CTA */}
            <div className="rounded-2xl p-6 border border-gold/25 bg-gradient-to-br from-gold/10 via-transparent to-rose/8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold text-gray-100 mb-2">
                  Pronto para crescer?
                </h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed">
                  Diagnóstico gratuito das suas campanhas atuais — veja onde
                  estão as oportunidades perdidas.
                </p>
              </div>
              <a
                href="https://wa.me/5511952992652"
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-6 inline-block px-6 py-2.5 rounded-full font-body text-sm text-center"
              >
                Diagnóstico gratuito →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
