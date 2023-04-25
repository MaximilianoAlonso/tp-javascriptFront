
//Micro desafío - Paso 3:

/* Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>,
<section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs. */
const tagh1 = document.querySelector  ("h1");
const tagSection = document.querySelector("section");
const tagArticle = document.querySelector("article");


/* Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”. */
tagh1.innerHTML += "AGREGAR PELICULAS"

/* Agregar a la etiqueta <h1> la clase: “titulo”. */
tagh1.classList.add("titulo")

/* Agregar al artículo la clase: “fondoTransparente”. */
tagArticle.classList.add("fondoTransparente")

/* Agregar a la sección la clase: “fondoCRUD”. */
tagSection.classList.add("fondoCRUD")