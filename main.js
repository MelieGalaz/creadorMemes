const modoOscuroBtn = document.getElementById("modoOscuroBtn");
const body = document.body;
const sectionImagen = document.querySelector(".sec-imagen");
const sectionTexto = document.querySelector(".sec-texto");
const panelAside = document.querySelector("#panel");
const divImagen = document.querySelector(".contenedorImagen");
const cargarImagen = document.getElementById("cargarImagen");
const contenedorMeme = document.querySelector(".contenedor-meme");
const imagen = document.querySelector(".contenedor_imagen");
const imagenInterna = document.querySelector(".imagenInterna");
const fileInput = document.getElementById("cargarImagen");
const selectFondo = document.getElementById("selec-fondo");
const customFileUpload = document.getElementById("customFileUpload");
const textoSuperiorInput = document.getElementById("tex-superior");
const textoInferiorInput = document.getElementById("tex-inferior");
const sinTextoSuperiorCheckbox = document.getElementById("sin-tex-superior");
const sinTextoInferiorCheckbox = document.getElementById("sin-tex-inferior");
const contenedorTextoSuperior = document.querySelector(
  ".texto-meme:nth-of-type(1)"
);
const contenedorTextoInferior = document.querySelector(
  ".texto-meme:nth-of-type(2)"
);
const familiaFuentesSelect = document.getElementById("familia-fuentes");
const inputTamañoTexto = document.getElementById("texto-tamaño");
const textoDerechaBtn = document.getElementById("texto-derecha");
const textoCentroBtn = document.getElementById("texto-centro");
const textoIzquierdaBtn = document.getElementById("texto-izquierda");
const fondoTransparenteCheckbox = document.getElementById("fondo-transparente");
const textoColorFondo = document.getElementById("textoColorFondo");
const espaciadotexto = document.getElementById("espaciadoTex");
const interlineadoTexto = document.getElementById("interlineadoTex");
const ninguno = document.getElementById("contorno-ninguno");
const claro = document.getElementById("contorno-claro");
const oscuro = document.getElementById("contorno-oscuro");
const descargarMemeBtn = document.querySelector(".descargar-meme");
const imagenTotalMeme = document.getElementById("imagenTotalMeme");
const colorLetra = document.querySelector("color-letra");
const contenedor = document.querySelector(".contenedor");
const anchoVentana = window.visualViewport.width;
const aside = document.querySelector("aside.destok");
const texMemeSuperior = document.getElementById("tex-meme-superior");
const texMemeInferior = document.getElementById("tex-meme-inferior");
/*+++++++++++++++++++++++modo oscuro++++++++++++++++++++++++++++*/
modoOscuroBtn.addEventListener("click", () => {
  body.classList.toggle("modo-oscuro");

  if (body.classList.contains("modo-oscuro")) {
    modoOscuroBtn.innerHTML =
      '<i class="fa-regular fa-lightbulb" arial-label="cambiar modo claro"></i>Modo claro';
  } else {
    modoOscuroBtn.innerHTML =
      '<i class="fa-regular fa-lightbulb" arial-label="cambiar modo oscuro"></i>Modo oscuro';
  }
});

/********************************************************** */

/*++++++++++++++++++++++mostar paneles desde menu+++++++++++++++++++++++*/
function mostrarPanel() {
  const anchoVentana = window.visualViewport.width;
  document.getElementById("panel").style.display = "block";
  document.body.style.height = "auto";
  if (anchoVentana <= 970) {
    document.body.style.height = "auto";
  } else {
    document.body.style.height = "100vh";
  }
}

function ocultarPanel() {
  document.getElementById("panel").style.display = "none";
  document.body.style.height = "100vh";
}

/*********************ocultar panel con el checkbox************ */
document.querySelector(".imagen").addEventListener("click", (e) => {
  sectionTexto.classList.add("oculto");
  sectionImagen.classList.remove("oculto");
  mostrarPanel();
  e.preventDefault();
});

document.querySelector(".texto").addEventListener("click", (e) => {
  sectionImagen.classList.add("oculto");
  sectionTexto.classList.remove("oculto");
  mostrarPanel();
  e.preventDefault();
});

/******************* funcion para que el contenedor del meme y boton crezcan exponencialmente **********/
document.addEventListener("DOMContentLoaded", () => {
  const resizeHandler = () => {
    imagen.style.height = `${window.visualViewport.width}px`;
    contenedor.style.height = `${window.visualViewport.width}px`;
    contenedorMeme.style.height = `${window.visualViewport.width}px`;

    if (window.visualViewport.width < 500) {
      imagen.style.height = `${window.visualViewport.width}px`;
      contenedor.style.height = `${window.visualViewport.width}px`;
      contenedorMeme.style.height = `${window.visualViewport.width}px`;
    } else {
      imagen.style.height = "500px";
      imagen.style.width = "500px";
      contenedor.style.height = "500px";
      contenedor.style.width = "500px";
      contenedorMeme.style.height = "500px";
      contenedorMeme.style.width = "500px";
    }
  };

  window.visualViewport.addEventListener("resize", resizeHandler);

  resizeHandler();
});

/********************   cambio para destok  *********************/
function ajustarEstilosPantalla() {
  if (anchoVentana <= 970) {
    panelAside.style.display = "block";
  } else {
    panelAside.style.display = "none";
    body.style.Height = "100vh";
  }
}

/*///////////////////////////PANEL IMAGEN/////////////////////////*/

/*+++++++++++++++++++++++cargar fotos+++++++++++++++++++++++++*/

/************************cargar fotos desde la url**************** */
function cargarFotoInterna() {
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgElement = document.createElement("img");
      imgElement.src = e.target.result;

      imagenInterna.innerHTML = "";
      imagenInterna.appendChild(imgElement);
    };
    reader.readAsDataURL(file);
  }
}

/**************************cargar foto desde compu******************** */
function cargarFoto() {
  const urlInput = document.getElementById("urlInput").value;

  const imagen = document.createElement("img");
  imagen.src = urlInput;

  imagenInterna.innerHTML = "";
  imagenInterna.appendChild(imagen);
}

/************elimina texto de imagen por defecto de la carga de compu*********** */
document.addEventListener("DOMContentLoaded", function () {
  fileInput.addEventListener("change", function () {
    const fileName = fileInput.files[0]?.name || "Ningún archivo seleccionado";
    customFileUpload.textContent = fileName;
  });
});

/*++++++++++++++++++++++++funcion para fondo foto++++++++++++++++++++++++*/

const colorFondoFoto = (e) => {
  document.getElementById("colorFondo").innerHTML =
    e.target.value.toUpperCase();
  document.querySelector(".contenedor").style.backgroundColor = e.target.value;
};

/*++++++++++++++++++++++++mezcla con los colores blendMode+++++++++++++++++++*/

document.getElementById("selec-fondo").onchange = () => {
  const selectedValue = document.getElementById("selec-fondo").value;
  document.querySelector(".imagenInterna").style.mixBlendMode = selectedValue;
};

/*++++++++++++++++++++++++++filtros+++++++++++++++++++++++++++++++*/

const controles = {
  brillo: document.getElementById("brillo"),
  opacidad: document.getElementById("opacidad"),
  contraste: document.getElementById("contraste"),
  desenfoque: document.getElementById("desenfoque"),
  escalaGrises: document.getElementById("escala-grises"),
  sepia: document.getElementById("sepia"),
  hue: document.getElementById("hue"),
  saturado: document.getElementById("saturado"),
  negativo: document.getElementById("negativo"),
};

function aplicarFiltros() {
  imagen.style.filter = `
        brightness(${controles.brillo.value})
        opacity(${controles.opacidad.value})
        contrast(${controles.contraste.value}%)
        blur(${controles.desenfoque.value}px)
        grayscale(${controles.escalaGrises.value}%)
        sepia(${controles.sepia.value}%)
        hue-rotate(${controles.hue.value}deg)
        saturate(${controles.saturado.value}%)
        invert(${controles.negativo.value})
      `;
}

function restablecerFiltros() {
  for (let key in controles) {
    controles[key].value =
      controles[key].type === "range" ? controles[key].defaultValue : "";
  }
  aplicarFiltros();
}

for (let key in controles) {
  controles[key].addEventListener("input", aplicarFiltros);
}

document
  .querySelector(".reestablecer-filtros")
  .addEventListener("click", restablecerFiltros);
/*/////////////////////////PANEL  TEXTO////////////////////////// */

/*************Función para actualizar textos*********************/

function actualizarTextos() {
  const textoSuperior = textoSuperiorInput.value.trim();
  const textoInferior = textoInferiorInput.value.trim();

  if (sinTextoSuperiorCheckbox.checked) {
    contenedorTextoSuperior.textContent = "";
    texMemeSuperior.style.paddingBlock = "0px";
  } else {
    contenedorTextoSuperior.textContent =
      textoSuperior === "" ? "Texto superior" : textoSuperior;
    texMemeSuperior.style.paddingBlock = "10px";
  }

  if (sinTextoInferiorCheckbox.checked) {
    contenedorTextoInferior.textContent = "";
    texMemeInferior.style.paddingBlock = "0px";
  } else {
    contenedorTextoInferior.textContent =
      textoInferior === "" ? "Texto inferior" : textoInferior;
    texMemeInferior.style.paddingBlock = "10px";
  }
}

textoSuperiorInput.addEventListener("input", actualizarTextos);
textoInferiorInput.addEventListener("input", actualizarTextos);
sinTextoSuperiorCheckbox.addEventListener("change", actualizarTextos);
sinTextoInferiorCheckbox.addEventListener("change", actualizarTextos);

actualizarTextos();

/*+++++++++++++++++++++++++++++++++ familia de fuentes++++++++++++++++++++++++*/

function cambiarFuenteTexto() {
  const nuevaFuente = familiaFuentesSelect.value;

  contenedorTextoSuperior.style.fontFamily = nuevaFuente;

  contenedorTextoInferior.style.fontFamily = nuevaFuente;
}

familiaFuentesSelect.addEventListener("change", cambiarFuenteTexto);

cambiarFuenteTexto();

/*++++++++++++++++++++++++++++cambiar tamaño fuente+++++++++++++++++++++++*/

function cambiarTamañoTexto() {
  const nuevoTamaño = inputTamañoTexto.value + "px";
  contenedorTextoSuperior.style.fontSize = nuevoTamaño;
  contenedorTextoInferior.style.fontSize = nuevoTamaño;
}

inputTamañoTexto.addEventListener("input", cambiarTamañoTexto);

cambiarTamañoTexto();

/*+++++++++++++++++++++++++++ cambiar posicion del texto++++++++++++++++++*/

function cambiarPosicionTexto(elemento, posicion) {
  elemento.style.textAlign = posicion;
}

textoDerechaBtn.addEventListener("click", () => {
  cambiarPosicionTexto(contenedorTextoSuperior, "left");
  cambiarPosicionTexto(contenedorTextoInferior, "left");
});

textoCentroBtn.addEventListener("click", () => {
  cambiarPosicionTexto(contenedorTextoSuperior, "center");
  cambiarPosicionTexto(contenedorTextoInferior, "center");
});

textoIzquierdaBtn.addEventListener("click", () => {
  cambiarPosicionTexto(contenedorTextoSuperior, "right");
  cambiarPosicionTexto(contenedorTextoInferior, "right");
});

/*+++++++++++++++++++++++++ color de la letra texto ++++++++++++++++++++*/

const colorletraMeme = (e) => {
  document.getElementById("colorTexto").innerHTML =
    e.target.value.toUpperCase();
  contenedorTextoSuperior.style.color = e.target.value;
  contenedorTextoInferior.style.color = e.target.value;
};

/*+++++++++++++++++++++++++ color de fondo al texto +++++++++++++++++++*/

const fondoTextoColor = (e) => {
  const color = e.target.value;
  if (e.target.value !== "on") {
    textoColorFondo.innerHTML = color.toUpperCase();
  }

  if (fondoTransparenteCheckbox.checked) {
    contenedorTextoSuperior.style.backgroundColor = "transparent";
    contenedorTextoInferior.style.backgroundColor = "transparent";

    imagenTotalMeme.style.position = "relative";
    texMemeSuperior.style.position = "absolute";
    texMemeInferior.style.position = "absolute";
    texMemeInferior.style.bottom = "0px";
    texMemeSuperior.style.top = "0px";
    texMemeInferior.style.zIndex = "2";
    texMemeSuperior.style.zIndex = "2";
  } else {
    contenedorTextoSuperior.style.backgroundColor = color;
    contenedorTextoInferior.style.backgroundColor = color;
    texMemeSuperior.style.position = "static";
    texMemeInferior.style.position = "static";
  }
};

document
  .getElementById("fondo-transparente")
  .addEventListener("change", fondoTextoColor);

/*++++++++++++++++++++++++++ contorno del texto ++++++++++++++++++++++++++*/

const contornotexto = (contorno) => {
  if (contorno === ninguno) {
    contenedorTextoSuperior.style.textShadow = "none";
    contenedorTextoInferior.style.textShadow = "none";
  } else if (contorno === claro) {
    contenedorTextoInferior.style.textShadow = "3px 3px 5px #ffffff";
    contenedorTextoSuperior.style.textShadow = "3px 3px 5px #ffffff";
  } else if (contorno === oscuro) {
    contenedorTextoInferior.style.textShadow = "3px 3px 5px #050505";
    contenedorTextoSuperior.style.textShadow = "3px 3px 5px #050505";
  }
};
ninguno.addEventListener("click", () => contornotexto(ninguno));
claro.addEventListener("click", () => contornotexto(claro));
oscuro.addEventListener("click", () => contornotexto(oscuro));

/*+++++++++++++++++++++++++++++ espaciado del texto++++++++++++++++++++++++++++*/
const texEspaciado = () => {
  const espaciado = espaciadotexto.value;
  contenedorTextoInferior.style.letterSpacing = `${espaciado}px`;
  contenedorTextoSuperior.style.letterSpacing = `${espaciado}px`;
};

espaciadotexto.addEventListener("input", texEspaciado);

/*+++++++++++++++++++++++ interlineado   +++++++++++++++++++++++++++++ */

const texInterlineado = () => {
  const interlineado = interlineadoTexto.value;
  contenedorTextoInferior.style.lineHeight = interlineado;
  contenedorTextoSuperior.style.lineHeight = interlineado;
};
interlineadoTexto.addEventListener("change", texInterlineado);

/*+++++++++++++++++++ descargar meme ++++++++++++++++++++ */

descargarMemeBtn.addEventListener("click", () => {
  domtoimage.toBlob(imagenTotalMeme).then((blob) => {
    window.saveAs(blob, "meme.png");
  });
});
