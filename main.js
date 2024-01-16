const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const body = document.body;
const sectionImagen = document.querySelector(".sec-imagen");
const sectionTexto = document.querySelector(".sec-texto");
const panelAside = document.querySelector("#panel");
const divImagen = document.querySelector(".contenedorImagen")
const cargarImagen = document.getElementById("cargarImagen")


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

/************************cargar fotos desde la url**************** */

cargarImagen.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            imagenContainer.innerHTML = '';
            const divImagen = document.querySelector(".imagenInterna");
            divImagen.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
});



/**************************cargar foto desde compu******************** */
function cargarFoto() {
    const urlInput = document.getElementById('urlInput').value;
    const imagenContainer = document.querySelector('.imagenInterna');

    const imagen = document.createElement('img');
    imagen.src = urlInput;

    imagenContainer.innerHTML = ''; 
    imagenContainer.appendChild(imagen);
    }



/************elimina texto de imagen por defecto de la carga de compu*********** */
document.addEventListener('DOMContentLoaded', function () {
        const fileInput = document.getElementById('cargarImagen');
        const customFileUpload = document.getElementById('customFileUpload');

        fileInput.addEventListener('change', function () {
            const fileName = fileInput.files[0]?.name || 'Ningún archivo seleccionado';
            customFileUpload.textContent = fileName;
        });
    });