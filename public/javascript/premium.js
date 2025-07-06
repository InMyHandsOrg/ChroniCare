document.getElementById("formPago").addEventListener("submit", function (event) {
  event.preventDefault();

  const plan = document.getElementById("plan").value;
  const nombre = document.getElementById("nombre").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const fecha = document.getElementById("fecha").value;
  const cvv = document.getElementById("cvv").value.trim();
  const mensaje = document.getElementById("mensaje");

  // Simulación de validación
  const esTarjetaValida = numero === "4242424242424242" && cvv === "123";

  if (!plan || !nombre || !numero || !fecha || !cvv) {
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.style.color = "red";
    return;
  }

  if (!esTarjetaValida) {
    mensaje.textContent = "❌ Error en el pago. Verifica tus datos o intenta con otro método.";
    mensaje.style.color = "red";
    return;
  }

  // Simular actualización de perfil con plan premium
  localStorage.setItem("perfilPremium", JSON.stringify({
    plan,
    nombre,
    suscrito: true,
    fecha: new Date().toLocaleString()
  }));

  mensaje.textContent = "✅ Suscripción completada. Ahora tienes acceso a beneficios premium.";
  mensaje.style.color = "green";
  this.reset();
});
