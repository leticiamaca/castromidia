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
    <footer className="border-t border-gold/10 py-28 px-6 p-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-5">

        {/* Logo */}
        <a href="#hero">
        <img src="../logo.png" alt="" className='w-20' />
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="font-body text-xs text-white hover:text-gold transition-colors tracking-wide uppercase">
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-white">
          © {new Date().getFullYear()} Castro Mídia. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}
