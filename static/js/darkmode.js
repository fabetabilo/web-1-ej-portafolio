// Aqui, obtiene el tema activo de el local storage
let darkmode = localStorage.getItem("darkmode")

const themeSwitch = document.getElementById("theme-switch")

const logo = document.getElementById("main-logo") // utilizo esta const para alternar entre un logo y otro

const enableDarkmode = () => {
    document.body.classList.add("darkmode") // le agrega la clase "darkmode" al body
    logo.src = "assets/logo-560-105d.png"; // cambia el logo a la "version oscura"
    localStorage.setItem("darkmode", "active")  // guarda un valor en local storage con clave "darkmode" y un "active" xq parece que el navegador no puede guardar booleanos
}
const disableDarkmode = () => {
    document.body.classList.remove("darkmode") // le quita esa clase "darkmode"
    logo.src = "assets/logo-560-105.png";       // entonces => el logo que se establece, es el de version clara
    localStorage.setItem("darkmode", null)      // guarda un null, => desactivado
}

if (darkmode === "active") { enableDarkmode() }

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode") // obtiene el valor que persiste en local storage
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()    // operador ternario, si darkmode es distinto de "active", entonces ejecuta funcion enableDarkmode(), caso contrario disableDarkmode()
});