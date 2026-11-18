// Seleccionamos el botón del modo oscuro
const botonModo = document.getElementById("btn-modo");

// Comprobamos que el botón exista
if (botonModo) {

    // Escuchamos el evento de clic
    botonModo.addEventListener("click", () => {

        // Activamos o desactivamos el modo oscuro
        document.body.classList.toggle("oscuro");

        // Cambiamos el texto del botón
        if (document.body.classList.contains("oscuro")) {
            botonModo.textContent = "☀️ Modo claro";
        } else {
            botonModo.textContent = "🌙 Modo oscuro";
        }

    });

}