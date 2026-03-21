// components/Contato.jsx
// Sem background próprio.

import { WhatsAppIcon, InstagramIcon, EmailIcon } from './icons';

const CANAIS = [
  {
    label: 'WhatsApp',
    valor: '11 9 5299-2652',
    href:  'https://wa.me/5511952992652',
    IconComponent: WhatsAppIcon,
    iconCor:  'text-green-400',
    iconBg:   'bg-green-500/10',
    iconBgHover: 'group-hover:bg-green-500/20',
    borderHover: 'hover:border-green-500/30',
  },
  {
    label: 'Instagram',
    valor: '@castro_midia',
    href:  'https://instagram.com/castro_midia',
    IconComponent: InstagramIcon,
    iconCor:  'text-rose',
    iconBg:   'bg-rose/10',
    iconBgHover: 'group-hover:bg-rose/20',
    borderHover: 'hover:border-rose/30',
  },
  {
    label: 'E-mail',
    valor: 'contato@castromidia.com',
    href:  'mailto:contato@castromidia.com',
    IconComponent: EmailIcon,
    iconCor:  'text-gold',
    iconBg:   'bg-gold/10',
    iconBgHover: 'group-hover:bg-gold/20',
    borderHover: 'hover:border-gold/30',
  },
];

export default function Contato() {
  return (
    <section id="contato" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">Entre em contato</p>
        <div className="divider" />

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
          Pronto para sua próxima<br />
          <span className="text-gradient">jogada estratégica?</span>
        </h2>

        <p className="font-body text-sm text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
          Se você não sabe quais métricas sua agência usa para otimizar suas campanhas,
          talvez seja hora de uma conversa. Fale com a Castro Mídia — sem compromisso.
        </p>

        {/* Cards de contato */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {CANAIS.map(({ label, valor, href, IconComponent, iconCor, iconBg, iconBgHover, borderHover }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`card ${borderHover} rounded-xl p-5 flex flex-col items-center gap-3 group transition-all`}
            >
              <div className={`w-11 h-11 rounded-full ${iconBg} ${iconBgHover} transition-colors flex items-center justify-center`}>
                <IconComponent className={`w-5 h-5 ${iconCor}`} />
              </div>
              <div>
                <p className="font-body text-xs text-gray-500 mb-0.5">{label}</p>
                <p className="font-body text-sm font-medium text-gray-200">{valor}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA principal */}
        <a
          href="https://wa.me/5511952992652"
          target="_blank"
          rel="noreferrer"
          className="btn-gold inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-body text-sm tracking-wide"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Falar agora no WhatsApp
        </a>

      </div>
    </section>
  );
}
