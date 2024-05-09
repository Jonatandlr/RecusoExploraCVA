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
  console.log(idName);
  return (
    <div className={`${estilo}`}>
      <a
        id={idName}
        href={`/recursos?id=${ruta}`}
        aria-label='Recursos'
        data-astro-prefetch='viewport'
        className={`text-white w-60 aspect-full md:aspect-2/3 inline-block select-none  pointer-events-auto  relative`}
      >
      </a>
    </div>
  );
}
