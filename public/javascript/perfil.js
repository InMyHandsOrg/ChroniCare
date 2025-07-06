const form = document.getElementById("perfilForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const condicion = document.getElementById("condicion").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();

  if (!condicion || !descripcion) {
    mensaje.textContent = "❌ Por favor completa todos los campos requeridos.";
    mensaje.style.color = "red";
    return;
  }

  // Guardar datos en localStorage (simulación)
  const perfil = {
    condicion,
    descripcion,
    tratamiento: document.getElementById("tratamiento").value.trim(),
    alergias: document.getElementById("alergias").value.trim(),
    visibilidad: document.getElementById("visibilidad").value
  };

  localStorage.setItem("perfilPaciente", JSON.stringify(perfil));

  mensaje.textContent = "✅ Perfil actualizado correctamente. Información disponible para los profesionales.";
  mensaje.style.color = "green";
  form.reset();
});
