const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const body = document.body;
const sectionImagen = document.querySelector(".sec-imagen");
const sectionTexto = document.querySelector(".sec-texto");
const panelAside = document.querySelector("#panel");


modoOscuroBtn.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');

    if (body.classList.contains('modo-oscuro')) {
        modoOscuroBtn.innerHTML = '<i class="fa-regular fa-lightbulb"></i>Modo claro';
    } else {
        modoOscuroBtn.innerHTML = '<i class="fa-regular fa-lightbulb"></i>Modo oscuro';
    }
});
function mostrarPanel(){
document.getElementById("panel").style.display="block";
}
function ocultarPanel(){
    document.getElementById("panel").style.display="none";
    }

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

