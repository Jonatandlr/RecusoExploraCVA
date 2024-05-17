import Personaje from "../Personaje.astro";

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
    // <div className={`${estilo}`}>
   
      
      <a
        id={idName}
        href={`/recursos?id=${ruta}`}
        aria-label='Recursos'
        data-astro-prefetch='viewport'
        className={`relative border`}
      >

      </a>
    // </div>
  );
}
