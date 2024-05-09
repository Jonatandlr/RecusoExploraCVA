interface LinkRecursosProps {
  estilo: string;
  ruta: string;
  idName: string;
}

export default function LinkRecursos({
  estilo,
  ruta,
  idName
}: LinkRecursosProps) {
  return (
    <div className={`${estilo}`}>
      <a
        id='AdultosBoton'
        href={`/recursos?id=${ruta}`}
        className={`text-white w-60 aspect-full md:aspect-2/3 inline-block select-none  pointer-events-auto  relative`}
      ></a>
    </div>
  );
}
