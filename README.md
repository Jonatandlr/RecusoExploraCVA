# BiblioRecursoCVA

Este proyecto fue creado como una biblioteca de recursos recomendados para el Centro Virtual de Aprendizaje, inicializado con [Astro](https://astro.build/).
puedes visualizar el repositorio [aqui](https://github.com/Jonatandlr/RecusoExploraCVA)

## 🚀 Project Structure
Inside of your Astro project, you'll see the following folders and files:
```text
├───public
│   │   CVADesktop.png
│   │   CVAMovil.png
│   │   favicon.png
│   │   favicon.svg
│   │   TecDesktop.png
│   │   TecMovil.png
│   │
│   └───imagenesRecursos
│           capsulas.png
│           charlasE.png
│
└───src
    │   env.d.ts
    │
    ├───components
    │   │   Footer.astro
    │   │   NavBar.astro
    │   │   Personaje.astro
    │   │   Principal.astro
    │   │   Title3D.astro
    │   │   TitleMain.astro
    │   │
    │   └───ReactComponents
    │           Botoncito.tsx
    │           Card.tsx
    │           LinkRecursos.tsx
    │           RecursosContainer.tsx
    │           SearchBar.tsx
    │
    ├───hooks
    │       useAdultos.tsx
    │       useJovenes.tsx
    │       useNinos.tsx
    │
    ├───layouts
    │       Layout.astro
    │
    └───pages
            creditos.astro
            index.astro
            recursos.astro
```
### Descripcion de carpetas importantes 

`src/hook`
* useAdultos.tsx, useJovenes.tsx, useNinos.tsx: son Hooks que contienen la informacion de las tarjetas de los recursos para facilitar una edicion rapida en la pagina de recursos,
  si se desea agregar un curso, quitarlo, actualizar un link o un titulo solo falta con modificar el hook deseado ya que la informacion se agarra de aqui

`src/components`
* En esta carpeta se muestran los componentes que se utilizan en la aplicacion, la facilidad de astro es que es poliframework lo que permite poder trabajar con
  react, astro, vue, [etc.](https://docs.astro.build/en/guides/framework-components/)



## ✨Como Contribuir 
Si eres parte del CVA posiblemente se te entrege un zip con los documentos, en el encontraras una carpeta llamada 'BiblioExploraCVA' (puede tener otro nombre)  que va a ser la carpeta 
que te genera el `npm run build` y es la carpeta que contiene el **index.htmnl** de donde el servidor del tec cuelga la pagina y la que tendras que entregar al CVA 
y tendras otras carpetas como public y src que contendra los archivos de **.astro** en donde desarrollaras 

tambien siempre puedes clonar este repositorio que fue la version que se entrego el **10/06/2024**

``` sh
git clone https://github.com/Jonatandlr/RecusoExploraCVA
cd RecusoExploraCVA
```

sea como sea que tengas el proyecto cuando estes dentro de el tiendes que instalar las dependencias 
```sh
npm install
npm run dev
```


recomiendo fuertemente hacer un fork a este repositorio para poder tener un control de versiones ya que al cva se cuelga del servidor por lo que entregaras un zip 

## ✨Como entregar tu zip al CVA

* Para darle tus proyecto al CVA tendras que darle el zip e indicar donde esta el **index.html** de donde colgaran la pagina y para ello tendars que construir la aplicacion con el siguiente comando 

 `npm run build`   
Este comando construira la aplicacion y te dara un zip generalmente con el nombre de './dist'

* despues de construir la aplicacion dentro de la carpeta que te genera estara el .html del cual sera en donde se cuelgue la pagina y antes de daserla al cva tendras que editar los paths del css y los js
  ya que los paths que te generan son '/loquesea/loquesea' y tu tendras que ponerle un punto al inicio './loquesea/loquesea' para que sepa bien las rutas, de lo contrario cuando el CVA lo suba desde su servidor no se cargara como debe de ser la pagina

## 🙌 Puntos de mejoras 

* **DISEÑO:** El diseño es algo que yo recomiendo mejorar, hacer un diseño UI/UX
* **Performance:** El performance de los modelos 3d para hacer que cargue mas rapido


## Equipo de desarollo

| persona                   | contacto                                         |
| :------------------------ | :----------------------------------------------- |
| `Jonatan De La Rosa`      | [jonatandlr](https://jonatandlr.vercel.app/)     |



