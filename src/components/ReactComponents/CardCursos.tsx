interface CardCursosProps {
  recurso: string;
  descripcion: string;
  link: string;
  imagen: string;
}

export default function CardCursos({
  recurso,
  descripcion,
  link,
  imagen,
}: CardCursosProps) {
  return (
    <div className=" h-[250px] aspect-square flex text-center border-2 rounded-[20px] overflow-hidden relative group">
      <img
        src={imagen}
        alt="Primeros Auxilios"
        className="object-cover group-hover:scale-105 transform transition-all duration-300 ease-in-out"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 group-hover:bg-opacity-20 transition duration-500 " />
      <a
        href={link}
        target="_blank"
        className="absolute top-0 left-0 px-2 w-full h-full flex flex-col items-center justify-center text-white opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
      >
        <h3 className="lg:text-xl text-2xl font-bold">{recurso}</h3>
        {/* <p className="lg:text-xl text-lg lg:max-w-lg max-w-52">{descripcion}</p> */}
      </a>
    </div>
  );
}
