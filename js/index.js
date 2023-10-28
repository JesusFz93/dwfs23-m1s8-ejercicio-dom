// OBTENER ELEMENTOS DEL DOM
// const h1TituloPrincipal = document.getElementById("h1TituloPrincipal");
// console.log(h1TituloPrincipal);

// const texto_blanco = document.getElementsByClassName("texto-blanco");
// console.log(texto_blanco);

// const h1s = document.getElementsByTagName("input");
// console.log(h1s);

// const h1TituloPrincipal = document.querySelector("#h1TituloPrincipal");
// console.log(h1TituloPrincipal);

// const inputs = document.querySelectorAll("input");
// console.log(inputs);

// CREAR ELEMENTOS EN EL DOM
// const seccion_secundaria = document.getElementById("seccion_secundaria");
// const parrafo = document.createElement("p");
// const texto = document.createTextNode("hola mundo");

// parrafo.appendChild(texto);
// seccion_secundaria.appendChild(parrafo);

// EVENTOS DEL DOM
// const saludar = () => {
//   console.log("Hola mundo");
// };

// const despedir = () => {
//   console.log("Adios");
// };

// const btnDespedir = document.getElementById("btnDespedir");
// btnDespedir.addEventListener("click", despedir);

// const imagenManzana = document.getElementById("imagenManzana");
// imagenManzana.addEventListener("mousedown", console.log("mousedown"));

// MANIPULACION ATRIBUTOS
const imagenManzana = document.getElementById("imagenManzana");

const mostrarAtributo = () => {
  const valorAtributo = imagenManzana.getAttribute("src");
  console.log(valorAtributo);
};

const agregarAtributo = () => {
  imagenManzana.setAttribute(
    "src",
    "https://huacalli.com.mx/wp-content/uploads/MANZANA-VERDE.png"
  );
};

const comprobarAtributo = () => {
  const tieneAtributo = imagenManzana.hasAttribute("src");
  console.log(tieneAtributo);
};

const eliminarAtributo = () => {
  imagenManzana.removeAttribute("src");
};

const articleAlerta = document.getElementById("articleAlerta");

const alertaBien = () => {
  articleAlerta.setAttribute("class", "alerta todo_bien");
};

const alertaMal = () => {
  articleAlerta.setAttribute("class", "alerta todo_mal");
};
