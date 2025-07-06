let perfilSalud = null;

document.getElementById("form-cuestionario").addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener datos del formulario
  const peso = document.getElementById("peso").value;
  const edad = document.getElementById("edad").value;
  const actividad = document.getElementById("actividad").value;
  const restricciones = document.getElementById("restricciones").value;

  perfilSalud = {
    peso: Number(peso),
    edad: Number(edad),
    actividad,
    restricciones: restricciones.trim() || "Ninguna",
  };

  alert("Perfil de salud guardado correctamente.");
  document.getElementById("error").classList.add("hidden");
});

function generarRutina(tipo) {
  const resultado = document.getElementById("resultado");
  const contenido = document.getElementById("contenido-rutina");
  const error = document.getElementById("error");

  if (!perfilSalud) {
    resultado.classList.add("hidden");
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");
  resultado.classList.remove("hidden");

  if (tipo === "ejercicio") {
    contenido.innerHTML = `
      <h3>Ejercicio sugerido</h3>
      <ul>
        <li>Caminar 30 minutos diarios (nivel: ${perfilSalud.actividad})</li>
        <li>Estiramientos suaves por 15 minutos</li>
        <li>Ejercicio de respiración para controlar el estrés</li>
      </ul>
    `;
  } else {
    contenido.innerHTML = `
      <h3>Plan de alimentación</h3>
      <ul>
        <li>Desayuno: Avena + fruta (sin azúcar)</li>
        <li>Almuerzo: Proteína magra + vegetales + cereal integral</li>
        <li>Cena ligera: Sopa o ensalada con huevo cocido</li>
        <li>Restricciones especiales: ${perfilSalud.restricciones}</li>
      </ul>
    `;
  }
}
document.addEventListener("DOMContentLoaded", () => {
    const aside = document.querySelector("aside");
    const items = aside.querySelectorAll(".item");
    const menuIcon = aside.querySelector("ul li:first-child img");

    let lockedOpen = false; // estado persistente si se hace clic

    // Alternar apertura fija al hacer clic
    menuIcon.addEventListener("click", () => {
        lockedOpen = !lockedOpen;
        updateItems();
    });

    // Hover solo si no está bloqueado
    aside.addEventListener("pointerenter", () => {
        if (!lockedOpen) {
            items.forEach(item => item.classList.add("abierto"));
        }
    });

    aside.addEventListener("pointerleave", () => {
        if (!lockedOpen) {
            items.forEach(item => item.classList.remove("abierto"));
        }
    });

    // Actualiza clases según el estado bloqueado
    function updateItems() {
        items.forEach(item => {
            item.classList.toggle("abierto", lockedOpen);
        });
    }
});
