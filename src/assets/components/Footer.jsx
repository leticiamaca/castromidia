// components/Footer.jsx
// Sem background — apenas borda superior sutil.

const NAV_LINKS = [
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cases',    href: '#cases'    },
  { label: 'Contato',  href: '#contato'  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full border border-gold/50 flex items-center justify-center">
            <span className="text-gradient font-display text-sm leading-none">♟</span>
          </div>
          <span className="font-display text-base font-semibold text-gradient">Castro Mídia</span>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="font-body text-xs text-gray-600 hover:text-gold transition-colors tracking-wide uppercase">
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-body text-xs text-gray-700">
          © {new Date().getFullYear()} Castro Mídia. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}
