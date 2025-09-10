/* main.js JavaScript, es un punto de entrada, me contiene:
la logica, configuracion inicial y estructura principal de la interfaz de usuario */

// para el menu movil
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", e => {
    navLinks.classList.toggle("open");
    // alterna entre el icono del menu, una X o el hamburguesa respectivamente
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");

});

navLinks.addEventListener("click", e => {
    if  (e.tagName === "A") {   // de esta manera me aseguro, que solo se cerrara al hacer click en una opcion <a>
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    }
});

// para que detecte en la pagina que este, y le asigne una clase personalizada (negrita)
const paginaActiva = window.location.pathname.split("/").pop(); // detecta la pagina actual
const navItemLinks = document.querySelectorAll(".nav-item"); // agarra todos los item del nav

navItemLinks.forEach(link => {
    const linkPagina = link.getAttribute("href")
    if (linkPagina === paginaActiva) {
        link.classList.add("activa")
    }
});
