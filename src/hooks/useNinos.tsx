const useNinos = () => {
  const data = [
    {
      Recurso: "Curso en Introducción al Mundo Computacional",
      Descripción:
        "Aprenderás conceptos básicos del uso de una computadora, cómo manejarla eficazmente, los diferentes tipos de ordenadores y sus aplicaciones prácticas.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-introduccion-al-mundo-computacional-version-animada",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/intro_al_mundo_computacional_ver._animada_0.png?itok=ivGrpHAE",
    },
    {
      Recurso: "Los Componentes Físicos de la Computadora",
      Descripción:
        "Descubre las partes internas y externas de un computador, aprende sobre su funcionamiento y usos, y adquiere habilidades para mantener el equipo en buen estado.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-uso-de-los-componentes-fisicos-de-la-computadora",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/uso_de_componentes_fisicos_de_la_computadora.png?itok=mK_SYpAe",
    },
    {
      Recurso: "Manejo del Sistema Windows y sus Utilerías",
      Descripción:
        "Aprende a utilizar correctamente el sistema operativo Windows, explorando todos los conceptos y utilerías necesarias para una gestión eficiente.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-manejo-del-sistema-windows-y-sus-utilerias",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/9_1.png?itok=CqUDXnu7",
    },
    {
      Recurso:
        "Comunidad Virtual para el Cuidado del Medio Ambiente",
      Descripción:
        "Aprende sobre la importancia del cuidado del medio ambiente y descubre prácticas sostenibles para proteger la naturaleza en nuestra vida diaria.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/accion-climatica/cursos/aprendizaje-verde-comunidad-virtual-para-el-cuidado-del-medio-ambiente",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/copia_de_aprendizaje_verde_comunidad_virtual_para_el_cuidado_del_medio_ambiente.png?itok=tC4lxBSE",
    },
    {
      Recurso: "Curso en Ciencias: El Universo",
      Descripción:
        "Explora el fascinante mundo del universo, aprendiendo sobre planetas, estrellas, cometas y otros cuerpos celestes.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/cursos/curso-en-ciencias-el-universo",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/ciencias.png?itok=vjpBvVmP",
    },
    {
      Recurso: "Curso en Ciencias: la Vida",
      Descripción:
        "Descubre los avances científicos sobre el origen de la vida en la Tierra y su evolución hasta nuestros días.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/cursos/curso-en-ciencias-la-vida",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/la_vida.png?itok=HsxjTYF1",
    },
    {
      Recurso: "Conceptos Básicos de Astronomía (AIDA)",
      Descripción:
        "Fomenta el estudio de la astronomía y fortalece la motivación y formación del talento humano a través de este curso introductorio.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-conceptos-basicos-de-astronomia-aida",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/astronomia.png?itok=ToBYtCCG",
    },
    {
      Recurso: "Ortografía y su Impacto en la Comunicación Escrita",
      Descripción:
        "Mejora tu producción escrita aprendiendo y aplicando las reglas de ortografía y acentuación adecuadas.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-ortografia-y-su-impacto-en-la-comunicacion-escrita",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/ortografia_0.png?itok=ytD9kfSm",
    },
    {
      Recurso: "Matemáticas para Empezar",
      Descripción:
        "Aprende a realizar operaciones básicas de matemáticas, incluyendo sumas, restas, multiplicaciones y divisiones de manera sencilla.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-en-matematicas-para-empezar",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/matematicas_para_empezar_1.png?itok=u9HvRE3E",
    },
    {
      Recurso: "Cultura de la Legalidad",
      Descripción:
        "Contribuye a la construcción de una Cultura de la Legalidad, sumándote a la transformación de nuestra ciudad mediante el entendimiento y aplicación de las leyes.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/cursos/curso-cultura-de-la-legalidad",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/cultura_legalidad2.png?itok=FUpQ8w27",
    },
    {
      Recurso: "Crisis Climática y Calentamiento Global",
      Descripción:
        "Comprende la importancia de cuidar nuestro planeta y descubre acciones que todos podemos tomar para mitigar la crisis climática y el calentamiento global.",
      URL: "https://www.centroscomunitariosdeaprendizaje.org.mx/accion-climatica/cursos/curso-en-crisis-climatica-y-calentamiento-global",
      imagen:
        "https://www.centroscomunitariosdeaprendizaje.org.mx/sites/default/files/styles/teaser/public/cursos/cambio_climatico.png?itok=ltqNMBXb",
    },
  ];

  return data;
};

export default useNinos;
