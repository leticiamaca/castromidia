import fotomobile from "../../../public/foto.png";

export default function HeroSection() {
  const whatsappLink =
    "https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços.";
  return (
    <section
      id="hero"
      className="min-h-screen h-full flex flex-col xl:flex-row justify-around items-center overflow-x-hidden py-10 lg:p-0"
    >
      <div className="z-10 flex flex-col max-w-xl p-10 xl:p-0 gap-3 items-center">
        <p className="text-sm uppercase tracking-[0.3em] text-yellow-600 font-medium items-center lg:text-start">
          Agência de Marketing
        </p>

        <h1 className="text-3xl xl:text-5xl font-black text-white leading-tight uppercase text-center lg:text-start">
          Não vendemos <span className="text-yellow-600">cliques.</span>
          <br />
          Vendemos{" "}
          <span className="relative inline-block">
            resultados.
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-600 rounded-full text-center lg:text-start" />
          </span>
        </h1>

        <p className="text-gray-400 text-base xl:text-lg leading-relaxed text-center lg:text-start">
          Estratégias reais para empresas que querem crescer de verdade — sem
          achismo, só resultado mensurável.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-center group flex items-center gap-3 w-fit mt-2 btn-gold font-bold text-sm uppercase tracking-widest px-5 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
        >
          {/* ícone WhatsApp */}
          <svg
            className="w-5 h-5 fill-black"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.664 4.785 1.82 6.773L2 30l7.448-1.79A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.87-1.618l-.42-.25-4.418 1.062 1.1-4.3-.274-.44A11.46 11.46 0 014.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.29-8.563c-.345-.172-2.04-1.005-2.355-1.12-.315-.114-.545-.171-.774.172-.23.344-.887 1.12-1.088 1.349-.2.23-.4.258-.745.086-.344-.172-1.455-.537-2.77-1.71-1.025-.913-1.716-2.04-1.917-2.384-.2-.344-.022-.53.15-.701.154-.154.344-.402.516-.603.172-.2.229-.344.344-.573.115-.23.057-.43-.029-.602-.086-.172-.774-1.866-1.06-2.555-.28-.672-.565-.58-.774-.59l-.659-.012c-.23 0-.602.086-.917.43-.315.344-1.203 1.176-1.203 2.87 0 1.693 1.232 3.33 1.404 3.56.172.23 2.427 3.707 5.878 5.197.822.354 1.463.566 1.963.724.824.263 1.575.226 2.168.137.66-.098 2.04-.834 2.327-1.64.286-.805.286-1.494.2-1.64-.086-.143-.315-.23-.66-.401z" />
          </svg>
          Falar com especialista
        </a>
      </div>

      <img src={fotomobile} className="w-[85%] md:w-[70%] lg:w-[40%] mt-10" />
    </section>
  );
}
