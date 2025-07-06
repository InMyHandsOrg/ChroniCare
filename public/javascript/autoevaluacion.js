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

const firstTestCard = document.querySelectorAll(".test-card")[0];
const modal = document.getElementById("test-modal");
const closeModal = document.getElementById("close-modal");
const bfrTestSection = document.getElementById("bfrTestSection")
const testSection = document.getElementById("testSection")
const startTest = document.getElementById("startTest")
const submitTest = document.getElementById("submit-test")
const aftTestSection = document.getElementById("aftTestSection")
const adherenceText = document.getElementById("adherence-text");
const adherenceBar = document.getElementById("adherence-bar");
const adherenceMessage = document.getElementById("adherence-message");

let answered = 0
let score = 0


firstTestCard.addEventListener("click", () => {
    modal.style.display='block'
});

closeModal.addEventListener("click", () => {
    modal.style.display='none'
    bfrTestSection.style.display = 'block'
    testSection.style.display = 'none'
    aftTestSection.style.display = 'none'
});

startTest.addEventListener("click", () => {
    bfrTestSection.style.display = 'none'
    testSection.style.display = 'block'
})

submitTest.addEventListener("click", () => {
    const totalQuestions = 5;

    for (let i = 1; i <= totalQuestions; i++) {
        if (document.querySelector(`input[name='q${i}']:checked`)) {
            const selected = document.querySelector(`input[name='q${i}']:checked`)
            answered++;
            const value = selected.nextSibling.textContent.trim();

            switch (value) {
                case "Nunca": score += 4; break;
                case "Raramente": score += 3; break;
                case "A veces": score += 2; break;
                case "Frecuentemente": score += 1; break;
                case "Siempre": score += 0; break;
            }
        }
    }

    if (answered === totalQuestions) {
        testSection.style.display = 'none'
        aftTestSection.style.display = 'block'
        closeModal.style.display = 'none'
        answered = 0

        const maxScore = totalQuestions * 4;
        const percentage = Math.round((score / maxScore) * 100);
        adherenceText.textContent = `Adherencia al tratamiento: ${percentage}%`;
        adherenceBar.style.width = `${percentage}%`;

        if (percentage >= 80) {
            adherenceMessage.textContent = "Tu nivel de adherencia al tratamiento es alto. Sigue así para mantener tu salud y bienestar.";
        } else if (percentage >= 50) {
            adherenceMessage.textContent = "Tu adherencia al tratamiento es moderada. Considera hablar con tu médico sobre cómo mejorarla.";
        } else {
            adherenceMessage.textContent = "Tu adherencia al tratamiento es baja. Es importante que sigas las indicaciones médicas para mejorar tu salud.";
        }
    } else {
        alert("Debes responder todas las preguntas para obtener un resultado")
    }
});