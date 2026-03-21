// components/Cases.jsx
// Sem background próprio.

const CASES = [
  {
    tag: 'E-commerce', tagCor: 'text-gold bg-gold/10',
    titulo: 'Loja de Moda Feminina',
    sub:    'Meta Ads · 3 meses',
    metricas: [
      { valor: '4.2x',  label: 'ROAS',          cor: 'text-gradient' },
      { valor: '-38%',  label: 'Custo por venda', cor: 'text-rose'    },
    ],
  },
  {
    tag: 'Clínica', tagCor: 'text-rose bg-rose/10',
    titulo: 'Clínica de Estética',
    sub:    'Google + Meta Ads · 2 meses',
    metricas: [
      { valor: '+210%', label: 'Leads gerados',  cor: 'text-gradient' },
      { valor: 'R$18',  label: 'Custo por lead', cor: 'text-rose'    },
    ],
  },
  {
    tag: 'Infoproduto', tagCor: 'text-gold bg-gold/10',
    titulo: 'Curso Online',
    sub:    'Meta Ads · Lançamento',
    metricas: [
      { valor: 'R$320k', label: 'Faturamento', cor: 'text-gradient' },
      { valor: '6.8x',   label: 'ROAS',        cor: 'text-rose'    },
    ],
  },
];

const DEPOIMENTOS = [
  {
    texto:  'Em 60 dias a Castro Mídia reduziu nosso custo por lead pela metade e triplicou o volume. Resultado que nunca tínhamos visto com outras agências.',
    nome:   'Ana Ribeiro',
    cargo:  'CEO – Clínica BeautyPlus',
    initials: 'AR',
    gradiente: 'from-gold to-gold-dark',
  },
  {
    texto:  'A transparência nos relatórios faz toda a diferença. Sei exatamente onde cada centavo está sendo investido e qual retorno está gerando.',
    nome:   'Marcos Costa',
    cargo:  'Fundador – ProLearn Digital',
    initials: 'MC',
    gradiente: 'from-rose to-rose-light',
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header da seção */}
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">Resultados reais</p>
          <div className="divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Cases de <span className="text-gradient">Sucesso</span>
          </h2>
        </div>

        {/* Cards de cases */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {CASES.map(({ tag, tagCor, titulo, sub, metricas }, i) => (
            <div key={i} className="card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <span className={`font-body text-xs tracking-wide uppercase ${tagCor} px-3 py-1 rounded-full`}>
                  {tag}
                </span>
                <span className="font-display text-xl text-gold/20">0{i + 1}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-100 mb-1">{titulo}</h3>
              <p className="font-body text-xs text-gray-500 mb-5">{sub}</p>
              <div className="grid grid-cols-2 gap-4 border-t border-gold/10 pt-5">
                {metricas.map(({ valor, label, cor }) => (
                  <div key={label}>
                    <p className={`font-display text-2xl font-bold ${cor}`}>{valor}</p>
                    <p className="font-body text-xs text-gray-500 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-2 gap-5">
          {DEPOIMENTOS.map(({ texto, nome, cargo, initials, gradiente }) => (
            <div key={nome} className="card rounded-2xl p-6">
              <p className="text-gold text-xs mb-3 tracking-wider">★★★★★</p>
              <p className="font-body text-sm text-gray-300 italic leading-relaxed mb-5">"{texto}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradiente} flex items-center justify-center text-black text-xs font-bold`}>
                  {initials}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-gray-200">{nome}</p>
                  <p className="font-body text-xs text-gray-500">{cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
