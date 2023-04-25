//Micro desafío - Paso 2:

/* Desde el archivo /public/js/moviesList.js, capturar los siguientes elementos: <body>
y <h1>, ubicados en el archivo /views//moviesList.ejs. */
const tagBody = document.querySelector("body");
const tagH1 = document.querySelector("h1");
const tagUl = document.querySelector("ul");

/* Haciendo uso del prompt, preguntar al usuario: “¿Desea modo oscuro?”. Si la
respuesta es afirmativa, agregar a la etiqueta <body> un color de fondo: #7f7f7f​, y
la clase: fondoMoviesList. */
const darkMode = confirm("¿Desea modo oscuro?")
darkMode === true ? (tagBody.style.backgroundColor=("#7f7f7f"), tagBody.classList.add("fondoMoviesList"), tagUl.classList.add("colorlink")):"";

/* Agregar a la etiqueta <h1> el mensaje: “LISTADO DE PELÍCULAS”.*/
tagH1.innerHTML += "LISTADO DE PELÍCULAS"


/*  Agregar a la etiqueta <h1> los siguientes estilos:
○ Color de la fuente: white.
○ Color de fondo: teal.
○ Relleno: 20px.  */
let h1 = tagH1.style;
    h1.color="white";
    h1.backgroundColor="darkblue"
    h1.padding="20px"