const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const body = document.body;
const sectionImagen = document.querySelector(".sec-imagen");
const sectionTexto = document.querySelector(".sec-texto");
const panelAside = document.querySelector("#panel");
const divImagen = document.querySelector(".contenedorImagen")
const cargarImagen = document.getElementById("cargarImagen")
const contenedorMeme = document.querySelector('.contenedor-meme');
const imagen = document.querySelector('.contenedor_imagen');
const imagenInterna = document.querySelector('.imagenInterna');
const fileInput = document.getElementById('cargarImagen');
const selectFondo = document.getElementById('selec-fondo');
const customFileUpload = document.getElementById('customFileUpload');
const textoSuperiorInput = document.getElementById('tex-superior');
const textoInferiorInput = document.getElementById('tex-inferior');
const sinTextoSuperiorCheckbox = document.getElementById('sin-tex-superior');
const sinTextoInferiorCheckbox = document.getElementById('sin-tex-inferior');
const contenedorTextoSuperior = document.querySelector('.texto-meme:nth-of-type(1)');
const contenedorTextoInferior = document.querySelector('.texto-meme:nth-of-type(2)');
const familiaFuentesSelect = document.getElementById('familia-fuentes');
const inputTamañoTexto = document.getElementById('texto-tamaño');
const textoDerechaBtn = document.getElementById('texto-derecha');
const textoCentroBtn = document.getElementById('texto-centro');
const textoIzquierdaBtn = document.getElementById('texto-izquierda');
const fondoTransparenteCheckbox = document.getElementById('fondo-transparente');
const textoColorFondo = document.getElementById('textoColorFondo');
const espaciadotexto = document.getElementById('espaciadoTex');
const interlineadoTexto = document.getElementById('interlineadoTex');
const ninguno = document.getElementById('contorno-ninguno');
const claro = document.getElementById('contorno-claro');
const oscuro = document.getElementById('contorno-oscuro');
const descargarMemeBtn = document.querySelector('.descargar-meme');
const imagenTotalMeme = document.getElementById('imagenTotalMeme')
const colorLetra = document.querySelector('color-letra');
const contenedor = document.querySelector('.contenedor')
const anchoVentana = window.visualViewport.width;
const aside = document.querySelector('aside.destok');



/*+++++++++++++++++++++++modo oscuro++++++++++++++++++++++++++++*/
modoOscuroBtn.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');

    if (body.classList.contains('modo-oscuro')) {
        modoOscuroBtn.innerHTML = '<i class="fa-regular fa-lightbulb" arial-label="cambiar modo claro"></i>Modo claro';
    } else {
        modoOscuroBtn.innerHTML = '<i class="fa-regular fa-lightbulb" arial-label="cambiar modo oscuro"></i>Modo oscuro';
    }
});

/********************************************************** */

/*++++++++++++++++++++++mostar paneles desde menu+++++++++++++++++++++++*/
function mostrarPanel() {
    const anchoVentana = window.visualViewport.width;
    document.getElementById("panel").style.display = "block";
    document.body.style.height = "100%";
    if (anchoVentana <= 970) {
        document.body.style.height = '100%'
    } else {
        document.body.style.height = '100vh'
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
    sectionImagen.focus();
})

document.querySelector(".texto").addEventListener("click", (e) => {
    sectionImagen.classList.add("oculto");
    sectionTexto.classList.remove("oculto");
    mostrarPanel();
    e.preventDefault();
})

/******************* funcion para que el contenedor del meme y boton crezcan exponencialmente **********/
window.visualViewport.addEventListener("resize", () => {
    console.log("resize");
    console.log("imagenInterna")
    console.log("contenedor")
    imagen.style.height = `${window.visualViewport.width}px`;
    contenedor.style.height = `${window.visualViewport.width}px`;
    contenedorMeme .style.height=`${window.visualViewport.width}px`
    
}); 
window.visualViewport.addEventListener("resize",()=>{
    if(window.visualViewport.width<500){
        imagen.style.height = `${window.visualViewport.width}px`;
        contenedor.style.height = `${window.visualViewport.width}px`;
        contenedorMeme.style.height=`${window.visualViewport.width}px`
    }else{
        
        imagen.style.height = "500px";
        imagen.style.width = "500px";
        contenedor.style.height = "500px";
        contenedor.style.width = "500px";
        contenedorMeme.style.height="500px";
        contenedorMeme.style.width="500px";
    }
})





/********************   cambio para destok  *********************/
function ajustarEstilosPantalla() {

    if (anchoVentana <= 970) {
        // Establecer estilos para pantallas menores o iguales a 970px
        panelAside.style.display = "block"; 
    } else {
        // Establecer estilos para pantallas mayores a 970px
        panelAside.style.display = "none";
        body.style.height = '100vh'
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


    const imagen = document.createElement('img');
    imagen.src = urlInput;

    imagenInterna.innerHTML = '';
    imagenInterna.appendChild(imagen);
}

/************elimina texto de imagen por defecto de la carga de compu*********** */
document.addEventListener('DOMContentLoaded', function () {

    fileInput.addEventListener('change', function () {
        const fileName = fileInput.files[0] ?.name || 'Ningún archivo seleccionado';
        customFileUpload.textContent = fileName;
    });
});

/*++++++++++++++++++++++++funcion para fondo foto++++++++++++++++++++++++*/

const colorFondoFoto = (e) => {

    document.getElementById('colorFondo').innerHTML = e.target.value.toUpperCase();
    document.querySelector('.contenedor').style.backgroundColor = e.target.value;


};

/*++++++++++++++++++++++++mezcla con los colores blendMode+++++++++++++++++++*/

document.getElementById("selec-fondo").onchange = () => {
    const selectedValue = document.getElementById("selec-fondo").value;
    document.querySelector(".imagenInterna img").style.mixBlendMode = selectedValue;
    console.log(selectedValue);
};


/*++++++++++++++++++++++++++filtros+++++++++++++++++++++++++++++++*/
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


/*/////////////////////////PANEL  TEXTO////////////////////////// */

/*+++++++++++++++++++++++++++ cambiar texto superior e inferior+++++++++++++++++*/


/*************Función para actualizar textos*********************/
function actualizarTextos() {
    const textoSuperior = textoSuperiorInput.value.trim();
    contenedorTextoSuperior.textContent = (sinTextoSuperiorCheckbox.checked || textoSuperior === '') ? '' : textoSuperior;

    const textoInferior = textoInferiorInput.value.trim();
    contenedorTextoInferior.textContent = (sinTextoInferiorCheckbox.checked || textoInferior === '') ? '' : textoInferior;


    if (textoSuperior === '') {
        contenedorTextoSuperior.textContent = 'Texto superior';
    }
    if (textoInferior === '') {
        contenedorTextoInferior.textContent = 'Texto inferior';

    }
}
textoSuperiorInput.addEventListener('input', actualizarTextos);
textoInferiorInput.addEventListener('input', actualizarTextos);
sinTextoSuperiorCheckbox.addEventListener('change', actualizarTextos);
sinTextoInferiorCheckbox.addEventListener('change', actualizarTextos);

actualizarTextos();


/*+++++++++++++++++++++++++++++++++ familia de fuentes++++++++++++++++++++++++*/


/******************cambiar la fuente del texto **************/
function cambiarFuenteTexto() {
    /***Obtener el valor seleccionado en el <select>***** */
    const nuevaFuente = familiaFuentesSelect.value;

    /*** fuente al texto superior********* */
    contenedorTextoSuperior.style.fontFamily = nuevaFuente;

    /****** fuente al texto inferior****/
    contenedorTextoInferior.style.fontFamily = nuevaFuente;
}

/*** evento al <select> para llamar a la función****/
familiaFuentesSelect.addEventListener('change', cambiarFuenteTexto);

cambiarFuenteTexto();

/*++++++++++++++++++++++++++++cambiar tamaño fuente+++++++++++++++++++++++*/


function cambiarTamañoTexto() {
    const nuevoTamaño = inputTamañoTexto.value + 'px';
    contenedorTextoSuperior.style.fontSize = nuevoTamaño;
    contenedorTextoInferior.style.fontSize = nuevoTamaño;
}

/***evento al <input> para llamar a la función******/
inputTamañoTexto.addEventListener('input', cambiarTamañoTexto);

cambiarTamañoTexto();

/*+++++++++++++++++++++++++++ cambiar posicion del texto++++++++++++++++++*/



function cambiarPosicionTexto(elemento, posicion) {
    elemento.style.textAlign = posicion;
}

textoDerechaBtn.addEventListener('click', () => {
    cambiarPosicionTexto(contenedorTextoSuperior, 'left');
    cambiarPosicionTexto(contenedorTextoInferior, 'left');
});

textoCentroBtn.addEventListener('click', () => {
    cambiarPosicionTexto(contenedorTextoSuperior, 'center');
    cambiarPosicionTexto(contenedorTextoInferior, 'center');
});

textoIzquierdaBtn.addEventListener('click', () => {
    cambiarPosicionTexto(contenedorTextoSuperior, 'right');
    cambiarPosicionTexto(contenedorTextoInferior, 'right');
});

/*+++++++++++++++++++++++++ color de la letra texto ++++++++++++++++++++*/


const colorletraMeme = (e) => {
    document.getElementById('colorTexto').innerHTML = e.target.value.toUpperCase();
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
        contenedorTextoSuperior.style.backgroundColor = 'transparent';
        contenedorTextoInferior.style.backgroundColor = 'transparent';
    } else {
        contenedorTextoSuperior.style.backgroundColor = color;
        contenedorTextoInferior.style.backgroundColor = color;
    }

};



/*******listener al checkbox para que llame a la función cuando cambie su estado****/
document.getElementById('fondo-transparente').addEventListener('change', fondoTextoColor);



/*++++++++++++++++++++++++++ contorno del texto ++++++++++++++++++++++++++*/


const contornotexto = (contorno) => {
    if (contorno === ninguno) {
        contenedorTextoSuperior.style.textShadow = 'none';
        contenedorTextoInferior.style.textShadow = 'none';

    } else if (contorno === claro) {
        contenedorTextoInferior.style.textShadow = '3px 3px 5px #ffffff';
        contenedorTextoSuperior.style.textShadow = '3px 3px 5px #ffffff';
    } else if (contorno === oscuro) {
        contenedorTextoInferior.style.textShadow = '3px 3px 5px #050505';
        contenedorTextoSuperior.style.textShadow = '3px 3px 5px #050505';
    }
}
ninguno.addEventListener('click', () => contornotexto(ninguno));
claro.addEventListener('click', () => contornotexto(claro));
oscuro.addEventListener('click', () => contornotexto(oscuro));

/*+++++++++++++++++++++++++++++ espaciado del texto++++++++++++++++++++++++++++*/

const texEspaciado = () => {
    const espaciado = espaciadoTex.value
    contenedorTextoInferior.style.padding = `${espaciado}px 50px`
    contenedorTextoSuperior.style.padding = `${espaciado}px 50px`
}
espaciadotexto.addEventListener('input', texEspaciado);

/*+++++++++++++++++++++++ interlineado   +++++++++++++++++++++++++++++ */

const texInterlineado = () => {
    const interlineado = interlineadoTexto.value
    contenedorTextoInferior.style.lineHeight = interlineado
    contenedorTextoSuperior.style.lineHeight = interlineado
}
interlineadoTexto.addEventListener('change', texInterlineado);




/*+++++++++++++++++++ descargar meme ++++++++++++++++++++ */

descargarMemeBtn.addEventListener("click", () => {
    domtoimage.toBlob(imagenTotalMeme).then((blob) => {
        window.saveAs(blob, "meme.png");
    });
});