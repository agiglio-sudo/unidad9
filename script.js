let victoriasUsuario = 0;
let victoriasMaquina = 0;

// Función para jugar una ronda
function jugar(jugada) {

    // Normalizamos la jugada
    jugada = jugada.toLowerCase();

    // La máquina elige un valor al azar
    let azar = Math.random();
    let jugadaMaquina = "";

    if (azar < 0.33) {
        jugadaMaquina = "piedra";
    } else if (azar < 0.66) {
        jugadaMaquina = "papel";
    } else {
        jugadaMaquina = "tijera";
    }

    // Mostramos las jugadas
    document.getElementById("jugadaUsuario").textContent =
        `Tu jugada: ${jugada}`;

    document.getElementById("jugadaMaquina").textContent =
        `Jugada de la máquina: ${jugadaMaquina}`;

    // Determinamos quién gana
    if (jugada === jugadaMaquina) {

        document.getElementById("mensaje").textContent =
            "🤝 ¡Empate!";

    } else if (
        (jugada === "piedra" && jugadaMaquina === "tijera") ||
        (jugada === "papel" && jugadaMaquina === "piedra") ||
        (jugada === "tijera" && jugadaMaquina === "papel")
    ) {

        victoriasUsuario++;

        document.getElementById("mensaje").textContent =
            "🎉 ¡Ganaste esta ronda!";

    } else {

        victoriasMaquina++;

        document.getElementById("mensaje").textContent =
            "😢 La máquina ganó esta ronda.";
    }

    // Actualizamos el marcador
    document.getElementById("puntosUsuario").textContent =
        victoriasUsuario;

    document.getElementById("puntosMaquina").textContent =
        victoriasMaquina;

    // Verificamos si terminó el torneo
    if (victoriasUsuario === 2 || victoriasMaquina === 2) {

        // Operador ternario
        let campeon = victoriasUsuario === 2
            ? "🏆 ¡Ganaste el torneo!"
            : "🤖 ¡La máquina ganó el torneo!";

        document.getElementById("mensaje").textContent = campeon;

        // Desactivamos los botones
        document.getElementById("piedra").disabled = true;
        document.getElementById("papel").disabled = true;
        document.getElementById("tijera").disabled = true;
    }
}


// Botón Piedra
document.getElementById("piedra").addEventListener("click", function () {
    jugar("Piedra");
});


// Botón Papel
document.getElementById("papel").addEventListener("click", function () {
    jugar("Papel");
});


// Botón Tijera
document.getElementById("tijera").addEventListener("click", function () {
    jugar("Tijera");
});


// Volver a jugar
document.getElementById("reiniciar").addEventListener("click", function () {

    victoriasUsuario = 0;
    victoriasMaquina = 0;

    document.getElementById("puntosUsuario").textContent = 0;
    document.getElementById("puntosMaquina").textContent = 0;

    document.getElementById("mensaje").textContent =
        "Elegí una opción para comenzar";

    document.getElementById("jugadaUsuario").textContent =
        "Tu jugada: -";

    document.getElementById("jugadaMaquina").textContent =
        "Jugada de la máquina: -";

    document.getElementById("piedra").disabled = false;
    document.getElementById("papel").disabled = false;
    document.getElementById("tijera").disabled = false;
});
