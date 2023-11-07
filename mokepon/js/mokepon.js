function iniciarjuego() {
    let botonMascotaJugador = document.getElementById("Boton-Mascota")
    botonMascotaJugador.addEventListener("click" , seleccionarmascotaJugador)
}

function seleccionarmascotaJugador() {
    alert("SELECCIONASTE TU MASCOTA")
}

window.addEventListener("load" , iniciarjuego)