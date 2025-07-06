document.getElementById("btnSentir").addEventListener("click", () => {
  document.getElementById("estadoContainer").classList.remove("hidden");
  document.getElementById("resultado").textContent = "";
});

document.getElementById("evaluarBtn").addEventListener("click", () => {
  const estado = document.getElementById("estado").value;
  const resultado = document.getElementById("resultado");

  // Simulación de fallo de conexión (10% de probabilidad)
  const falloConexion = Math.random() < 0.1;

  if (falloConexion) {
    resultado.textContent = "❌ No se pudo evaluar tu estado. Intenta nuevamente más tarde.";
    resultado.style.color = "red";
    return;
  }

  if (!estado) {
    resultado.textContent = "⚠️ Por favor, selecciona cómo te sientes.";
    resultado.style.color = "orange";
    return;
  }

  resultado.style.color = "#1a73e8";

  switch (estado) {
    case "feliz":
      resultado.textContent = "😊 ¡Qué bueno que te sientas bien! Mantén ese ánimo y comparte tu alegría.";
      break;
    case "ansioso":
      resultado.textContent = "😰 Prueba ejercicios de respiración profunda o una caminata corta. Hablar con alguien también ayuda.";
      break;
    case "triste":
      resultado.textContent = "😢 Recuerda que está bien sentirse así. Haz algo que disfrutes o habla con alguien de confianza.";
      break;
    case "estresado":
      resultado.textContent = "😓 Tómate un pequeño descanso. Escuchar música relajante o estirarte puede ayudar.";
      break;
    case "enojado":
      resultado.textContent = "😠 Respira profundamente y cuenta hasta 10. Es mejor expresarte cuando estés más tranquilo.";
      break;
    case "cansado":
      resultado.textContent = "😴 Intenta dormir bien esta noche o tomar un pequeño descanso si puedes. Tu cuerpo te lo agradecerá.";
      break;
    default:
      resultado.textContent = "";
  }
});
