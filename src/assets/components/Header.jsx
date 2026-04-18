// components/Header.jsx
// Fixo no topo, fundo transparente (herda o canvas do body).
// Backdrop-blur leve para separar visualmente sem criar um novo "layer" de cor.

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cases',    href: '#cases'    },
  { label: 'Contato',  href: '#contato'  },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  // Adiciona borda sutil ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        backdrop-blur-sm
        ${scrolled ? 'border-b border-gold/10' : 'border-b border-transparent'}`}
      // sem background-color: herda o canvas contínuo do body
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between p-20">

        {/* ── Logo ── */}
        <a href="#hero" className="flex items-center gap-2.5">
          <img src="../logo.png" alt="" className='h-5 w-auto' />
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        {/* ── CTA WhatsApp ── */}
        <a
          href="https://wa.me/5511952992652"
          target="_blank"
          rel="noreferrer"
          className="btn-gold hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-body tracking-wide"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          Fale conosco
        </a>

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden text-gold"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Abrir menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-5 border-t border-gold/10">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="nav-link" onClick={closeMenu}>{label}</a>
            ))}
            <a
              href="https://wa.me/5511952992652"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="btn-gold inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-full text-xs font-body mt-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ── Ícone WhatsApp inline (evita dependência extra) ── */
function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L.057 23.177a.75.75 0 0 0 .916.919l5.453-1.429A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.96-1.353l-.354-.214-3.678.964.983-3.59-.232-.368A9.75 9.75 0 1 1 12 21.75z"/>
    </svg>
  );
}
