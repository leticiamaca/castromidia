// App.jsx
// Componente raiz. Apenas orquestra as seções.
// Nenhuma section define background — tudo herda o canvas do index.css.

import Header  from './assets/components/Header';
import Hero    from './assets/components/Hero';
import Sobre   from './assets/components/Sobre';
import Servicos from './assets/components/Servicos';
import Cases   from './assets/components/Cases';
import Contato from './assets/components/Contato';
import Footer  from './assets/components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Cases />
        <Contato />
      </main>
      <Footer />
    </>
  );
}