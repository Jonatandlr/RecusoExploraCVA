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
    <div className="bg-white p-4 rounded-lg shadow-md max-w-lg ">
      <img
        src={imagen}
        alt="Primeros Auxilios"
        className="h-32 w-full object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold text-gray-800">{recurso}</h2>
      <p className="text-gray-600">
       {descripcion}
      </p>
      <a
        href={link}
        className="text-blue-700 font-bold"
      >
        Ver más
      </a>
    </div>
  );
}
