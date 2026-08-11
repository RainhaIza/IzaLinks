import { Sociais } from "../data/infos.jsx";
import fotoHero from "../assets/hero.png";
import nome from "../assets/nome.png";

function Header() {
  return (
    <div>
      <img
        className="w-3/4  mx-auto h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.85)]"
        src={fotoHero}
        alt="hero"
      />
      <section className="flex flex-col items-center mt-4">
        <img
          src={nome}
          alt="Nome"
          className="z-10 w-3/4  mx-auto h-auto object-contain"
        />
        <h2 className="text-lg text-white">Você chegou ao lugar certo!</h2>
      </section>
      <section className="flex justify-center gap-6 mt-4 mb-5">
        {Sociais.map((social) => (
          <div key={social.nome}>
            <a
              href={social.url}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
            >
              {social.icone}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Header;
