const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const body = document.body;
const sectionImagen = document.querySelector(".sec-imagen");
const sectionTexto = document.querySelector(".sec-texto");
const panelAside = document.querySelector("#panel");
const divImagen = document.querySelector(".contenedorImagen")
const cargarImagen = document.getElementById("cargarImagen")
const imagen = document.querySelector('.contenedor-imagen');
const imagenInterna = document.querySelector('.imagenInterna');
const fileInput = document.getElementById('cargarImagen');
const selectFondo = document.getElementById('selec-fondo');

/********************modo oscuro************************ */
modoOscuroBtn.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');

    if (body.classList.contains('modo-oscuro')) {
        modoOscuroBtn.innerHTML = '<i class="fa-regular fa-lightbulb"></i>Modo claro';
    } else {
        modoOscuroBtn.innerHTML = '<i class="fa-regular fa-lightbulb"></i>Modo oscuro';
    }
});



/********************mostar paneles desde menu************** */
function mostrarPanel() {
    document.getElementById("panel").style.display = "block";
}

function ocultarPanel() {
    document.getElementById("panel").style.display = "none";
}


/*********************ocultar panel con el checkbox************ */
document.querySelector(".imagen").addEventListener("click", (e) => {
    sectionTexto.classList.add("oculto");
    sectionImagen.classList.remove("oculto");
    mostrarPanel();
    e.preventDefault();
})

document.querySelector(".texto").addEventListener("click", (e) => {
    sectionImagen.classList.add("oculto");
    sectionTexto.classList.remove("oculto");
    mostrarPanel();
    e.preventDefault();
})


/*///////////////////////////PANEL IMAGEN/////////////////////////*/


/************************cargar fotos desde la url**************** */
function cargarFotoInterna() {
    const fileInput = document.getElementById('cargarImagen');
    const imagenInterna = document.querySelector('.imagenInterna');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;

            imagenInterna.innerHTML = '';
            imagenInterna.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }

}



/**************************cargar foto desde compu******************** */
function cargarFoto() {
    const urlInput = document.getElementById('urlInput').value;
    const imagenInterna = document.querySelector('.imagenInterna');

    const imagen = document.createElement('img');
    imagen.src = urlInput;

    imagenInterna.innerHTML = '';
    imagenInterna.appendChild(imagen);
}

/************elimina texto de imagen por defecto de la carga de compu*********** */
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('cargarImagen');
    const customFileUpload = document.getElementById('customFileUpload');

    fileInput.addEventListener('change', function () {
        const fileName = fileInput.files[0] ?.name || 'Ningún archivo seleccionado';
        customFileUpload.textContent = fileName;
    });
});

/***********************funcion para fondo foto********* */

const colorFondoFoto = (e) => {

    document.getElementById('colorFondo').innerHTML = e.target.value.toUpperCase();
    document.querySelector('.imagenInterna').style.backgroundColor = e.target.value;


};

/*********************mezcla con los colores blendMode*************** */

document.getElementById("selec-fondo").onchange = () => {
    const selectedValue = document.getElementById("selec-fondo").value;
    document.querySelector("img").style.mixBlendMode = selectedValue;
    console.log(selectedValue);
};


/*********************filtros ********************************** */
let brilloValue = 1;
let opacidadValue = 1;
let contrasteValue = 100;
let desenfoqueValue = 0;
let escalaGrisesValue = 0;
let sepiaValue = 0;
let hueValue = 0;
let saturadoValue = 100;
let negativoValue = 0;

function aplicarFiltros() {
    const imagen = document.querySelector('.imagenInterna img');

    if (imagen) {
        imagen.style.filter = `
            brightness(${brilloValue})
            opacity(${opacidadValue})
            contrast(${contrasteValue}%)
            blur(${desenfoqueValue}px)
            grayscale(${escalaGrisesValue}%)
            sepia(${sepiaValue})
            hue-rotate(${hueValue}deg)
            saturate(${saturadoValue}%)
            invert(${negativoValue})
        `;
    }
}

/***** Función para restablecer filtros*****/
function restablecerFiltros() {
    brilloValue = 1;
    opacidadValue = 1;
    contrasteValue = 100;
    desenfoqueValue = 0;
    escalaGrisesValue = 0;
    sepiaValue = 0;
    hueValue = 0;
    saturadoValue = 100;
    negativoValue = 0;

    aplicarFiltros();
}

/****** Agregar eventos a los controles de filtros*********/
document.getElementById('brillo').addEventListener('input', (e) => {
    brilloValue = e.target.value;
    aplicarFiltros();
});

document.getElementById('opacidad').addEventListener('input', (e) => {
    opacidadValue = e.target.value;
    aplicarFiltros();
});

document.getElementById('contraste').addEventListener('input', (e) => {
    contrasteValue = e.target.value;
    aplicarFiltros();
});

document.getElementById('desenfoque').addEventListener('input', (e) => {
    desenfoqueValue = e.target.value;
    aplicarFiltros();
});

document.getElementById('escala-grises').addEventListener('input', (e) => {
    escalaGrisesValue = e.target.value;
    aplicarFiltros();
});

document.getElementById('sepia').addEventListener('input', (e) => {
    sepiaValue = e.target.value;
    aplicarFiltros();
});

document.getElementById('hue').addEventListener('input', (e) => {
    hueValue = e.target.value;
    aplicarFiltros();
});

document.getElementById('saturado').addEventListener('input', (e) => {
    saturadoValue = e.target.value;
    aplicarFiltros();
});

document.getElementById('negativo').addEventListener('input', (e) => {
    negativoValue = e.target.value;
    aplicarFiltros();
});

/*************** Botón para restablecer filtros ****************/
document.querySelector('.reestablecer-filtros').addEventListener('click', () => {
    restablecerFiltros();
});