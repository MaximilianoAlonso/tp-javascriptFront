//Micro desafío - Paso 1:
/* Desde el archivo /public/js/index.js, capturar los siguientes elementos: <main>,
<h2>, <a> y <p>, ubicados en el archivo: /views//index.ejs. */
const labelMain = document.querySelector("main");
const labelh2 = document.querySelector  ("h2");
const labelA = document.querySelector("a");
const labelP = document.querySelectorAll(".informacion p");

/* Haciendo uso del prompt, indicar al usuario que: “Ingrese su nombre”. */
let nombreUsuario = prompt("Ingrese su nombre");

/* En caso de que el usuario no coloque su nombre, a la etiqueta <h2>, se le debe
agregar la palabra “Invitado”. En caso contrario, se le debe agregar el nombre que el
usuario ingresó. */
nombreUsuario ? labelh2.innerText += nombreUsuario : labelh2.innerText += " Invitado"

/* Agregar a la etiqueta <h2> el estilo uppercase. */
labelh2.style.textTransform= "uppercase";

/* A la etiqueta <a>, colocarle el estilo correspondiente para que asuma el siguiente
color: #E51B3E. */
labelA.style.color="#E51B3E"

/* Mediante el confirm, preguntar al usuario “¿Desea colocar un fondo de
pantalla?”. Si la respuesta es afirmativa por parte del usuario, agregar al <body> la
clase “fondo”. */

let cambiarFondo = confirm("¿Desea colocar un fondo de pantalla?")

/* A todos los párrafos que fueron capturados, asignar a los pares la clase:
“descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”. */



labelP.forEach(a =>  {
     if (a%2 == 0 ) {
        labelP.classList.add("descatadoPar")
     } else {
        labelP.classList.add("destacadoImpar")
        }
    })
    

/* Finalmente, establecer como visible a la etiqueta <main> en el browser o
navegador, aplicando el estilo: display : block. */ 
labelMain.style.display="block" 