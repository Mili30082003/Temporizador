let tiempo = 0;
let corriendo = false;
let intervalo;

function actualizarTemporizador() {
    const horas = Math.floor(tiempo / 3600).toString().padStart(2, '0');
    const minutos = Math.floor((tiempo % 3600) / 60).toString().padStart(2, '0');
    const segundos = (tiempo % 60).toString().padStart(2, '0');

    document.getElementById('temporizador').textContent = `${horas}:${minutos}:${segundos}`;
}

function iniciarTemporizador() {
    if (!corriendo && tiempo > 0) {
        corriendo = true;
        intervalo = setInterval(() => {
            if (tiempo > 0) {
                tiempo--;
                actualizarTemporizador();
            } else {
                pausarTemporizador();
                alert("Tiempo finalizado");
            }
        }, 1000);
    }
}

function pausarTemporizador() {
    if (corriendo) {
        corriendo = false;
        clearInterval(intervalo);
    }
}

function resetearTemporizador() {
    pausarTemporizador();
    tiempo = 0;
    actualizarTemporizador();
}

function establecerTiempo() {
    const horas = parseInt(document.getElementById('horas').value) || 0;
    const minutos = parseInt(document.getElementById('minutos').value) || 0;
    const segundos = parseInt(document.getElementById('segundos').value) || 0;
    tiempo = (horas * 3600) + (minutos * 60) + segundos;
    actualizarTemporizador();
}