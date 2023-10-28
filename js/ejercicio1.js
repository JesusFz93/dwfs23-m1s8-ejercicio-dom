const header = document.getElementById("header");
const parrafo = document.getElementById("parrafo");
parrafo.innerHTML = "<span>Esto es un span</span>";

const agregarEncabezado = () => {
  const h1 = document.createElement("h1");
  const texto = document.createTextNode("Encabezado");
  h1.appendChild(texto);
  header.appendChild(h1);
};

const agregarParrafo = () => {
  const p = document.createElement("p");
  const texto = document.createTextNode("Este es un parrafo");
  p.appendChild(texto);
  header.appendChild(p);
};
