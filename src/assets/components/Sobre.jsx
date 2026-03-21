// components/Sobre.jsx
// Sem background — continua o canvas do body.

const DIFERENCIAIS = [
  { cor: 'text-gold', texto: 'Relatórios claros com foco em custo por lead e ROAS'         },
  { cor: 'text-rose', texto: 'Estratégias personalizadas para cada nicho e objetivo'        },
  { cor: 'text-gold', texto: 'Acompanhamento contínuo e otimização semanal das campanhas'  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ── Texto ── */}
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">Sobre nós</p>
          <div className="divider !mx-0 mb-6" />

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Estratégia que move{' '}
            <span className="text-gradient">negócios</span>,<br />
            não só anúncios.
          </h2>

          <p className="font-body text-sm text-gray-400 leading-relaxed mb-4">
            Somos especialistas em <strong className="text-gold-light font-medium">gestão de tráfego pago</strong> com
            foco total em resultados mensuráveis. Cada campanha é construída sobre dados reais, não achismos.
          </p>
          <p className="font-body text-sm text-gray-400 leading-relaxed mb-8">
            Nossa filosofia é simples: transparência e resultado andam juntos.
            Um gestor que não explica suas métricas de conversão provavelmente
            não está entregando o que você pagou.
          </p>

          <ul className="space-y-3">
            {DIFERENCIAIS.map(({ cor, texto }, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-300">
                <span className={`mt-0.5 ${cor}`}>✦</span>
                {texto}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Card citação ── */}
        <div className="relative">
          <div className="card rounded-2xl p-8 relative z-10">
            <div className="text-4xl text-center mb-4 opacity-30 font-display">♟</div>
            <blockquote className="font-display text-2xl text-center text-gray-200 italic leading-relaxed mb-6">
              "Não é só UI. É estratégia aplicada<br />
              à <span className="text-gradient">decisão de compra.</span>"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-rose flex items-center justify-center text-black text-xs font-bold">
                CM
              </div>
              <div>
                <p className="font-body text-sm font-medium text-gray-200">Castro Mídia</p>
                <p className="font-body text-xs text-gray-500">@castro_midia</p>
              </div>
            </div>
          </div>

          {/* Bordas decorativas */}
          <div className="absolute -top-3 -right-3 w-20 h-20 border border-rose/15 rounded-2xl pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-14 h-14 border border-gold/15 rounded-xl  pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
