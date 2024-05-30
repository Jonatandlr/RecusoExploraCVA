const useNinos = () => {
  const data = [
    {
      Recurso: "Curso en Introducción al Mundo Computacional",
      Descripción:
        "Aprenderás a conocer una que es y como se usa una computadora. Ademas, identificarás los tipos de ordenadores que existen y a poder manejarlos de manera eficaz.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-introduccion-al-mundo-computacional-version-animada",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/intro_al_mundo_computacional_ver._animada_0.png?itok=ivGrpHAE",
    },
    {
      Recurso: "Curso en Uso de los Componentes Físicos de la Computadora",
      Descripción:
        "En este curso encontrarás cuales son sus partes internas y externas de un computador, su funcionamiento, sus usos y de que manera se puede mantener el equipo en buen estado.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-uso-de-los-componentes-fisicos-de-la-computadora",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/uso_de_componentes_fisicos_de_la_computadora.png?itok=mK_SYpAe",
    },
    {
      Recurso: "Manejo del Sistema Windows y sus Utilerías",
      Descripción:
        "Aprenderás todos los conceptos necesarios para utilizar propiamente el sistema operativo de Windows.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-manejo-del-sistema-windows-y-sus-utilerias",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/9_1.png?itok=CqUDXnu7",
    },
    {
      Recurso:
        "Aprendizaje Verde: Comunidad Virtual para el Cuidado del Medio Ambiente",
      Descripción:
        "Aprenderás a cuidar el medio ambiente y a conocer la importancia de la naturaleza en nuestras vidas.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/accion-climatica/cursos/aprendizaje-verde-comunidad-virtual-para-el-cuidado-del-medio-ambiente",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/copia_de_aprendizaje_verde_comunidad_virtual_para_el_cuidado_del_medio_ambiente.png?itok=tC4lxBSE",
    },
    {
      Recurso: "Curso en Ciencias: El Universo",
      Descripción:
        "Aprenderás sobre el universo, los planetas, las estrellas y los cometas.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/cursos/curso-en-ciencias-el-universo",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/ciencias.png?itok=vjpBvVmP",
    },
    {
      Recurso: "Curso en Ciencias: la Vida",
      Descripción:
        "Aprenderás un poco de los descubrimientos de la ciencia hasta ahora, cómo se comenzó a dar la vida en la Tierra y como luego  fue evolucionando hasta lo de hoy en dia.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/cursos/curso-en-ciencias-la-vida",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/la_vida.png?itok=HsxjTYF1",
    },
    {
      Recurso: "Conceptos Básicos de Astronomía. (AIDA)",
      Descripción:
        "Promover el estudio de la astronomía como vehículo capaz de fortalecer la motivación y formación del talento humano ",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-conceptos-basicos-de-astronomia-aida",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/astronomia.png?itok=ToBYtCCG",
    },
    {
      Recurso: "Ortografía y su Impacto en la Comunicación Escrita",
      Descripción:
        "Adquirir las herramientas necesarias para mejorar tu producción escrita aplicando reglas de ortografía y acentuación.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-ortografia-y-su-impacto-en-la-comunicacion-escrita",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/ortografia_0.png?itok=ytD9kfSm",
    },
    {
      Recurso: "Matemáticas para Empezar",
      Descripción:
        "Aprenderás a realizar operaciones básicas de matemáticas, como sumas, restas, multiplicaciones y divisiones.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-matematicas-para-empezar",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/matematicas_para_empezar_1.png?itok=u9HvRE3E",
    },
    {
      Recurso: "Cultura de la Legalidad",
      Descripción:
        "Todos tenemos un rol importante en la construcción de la Cultura de la Legalidad, sumándonos a la transformación de nuestra ciudad.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-cultura-de-la-legalidad",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/cultura_legalidad2.png?itok=FUpQ8w27",
    },
    {
      Recurso: "Crisis Climática y Calentamiento Global",
      Descripción:
        "El cuidado de nuestro planeta tierra nos corresponde a todos, es el único lugar donde hemos vivido y las generaciones futuras también lo harán",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/accion-climatica/cursos/curso-en-crisis-climatica-y-calentamiento-global",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/cambio_climatico.png?itok=ltqNMBXb",
    },
  ];

  return data;
};

export default useNinos;
