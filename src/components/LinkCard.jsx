import { Links } from "../data/infos";

function LinkCard() {
  return (
    <div className="w-full">
      {Links.map((link) => (
        <div key={link.nome} className="w-full ">
          <a
            href={link.url}
            className="bg-white rounded-[4rem] flex flex-row items-center p-2 mb-4 w-full h-19 overflow-hidden gap-2 transition-transform duration-300 hover:scale-110"
          >
            <img
              src={link.icone}
              alt={link.nome}
              className="w-16 h-16 object-contain flex-shrink-0"
            />

            <div className="flex flex-col flex-1">
              <h3 className="text-sm font-semibold text-gray-800">
                {link.nome}
              </h3>
              <p className="text-[10px] text-gray-500 leading-tight line-clamp-3">
                {link.descricao}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default LinkCard;
