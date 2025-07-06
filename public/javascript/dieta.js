document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formPlan");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const paciente = document.getElementById("paciente").value;
    const plantilla = document.getElementById("plantilla").value;
    const recomendacion = document.getElementById("recomendacion").value.trim();

    // Validación: se necesita paciente y al menos un contenido de plan
    if (!paciente || (!plantilla && !recomendacion)) {
      mensaje.textContent = "Debes completar la información del plan y seleccionar un paciente.";
      mensaje.style.color = "red";
    } else {
      mensaje.textContent = "✅ El plan ha sido asignado correctamente al perfil del paciente.";
      mensaje.style.color = "green";

      // Aquí puedes simular guardar la data o llamar a una API
      console.log({
        paciente,
        plantilla,
        recomendacion
      });

      form.reset();
    }
  });
});
function enviarRecomendacion() {
  const plan = document.getElementById("plan").value.trim();
  const paciente = document.getElementById("paciente").value;

  if (plan === "" || paciente === "") {
    alert("Debes completar la información del plan y seleccionar un paciente.");
    return;
  }

  // Código para procesar la recomendación si todo está completo
  console.log("Recomendación enviada correctamente.");
}
