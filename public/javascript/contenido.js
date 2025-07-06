const form = document.getElementById("form-articulo");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const contenido = document.getElementById("contenido").value.trim();
  const fuentes = document.getElementById("fuentes").value.trim();
  const rol = document.getElementById("rol").value;

  if (!fuentes) {
    mensaje.textContent =
      "Debes incluir referencias válidas para publicar contenido educativo.";
    mensaje.className = "error";
    mensaje.classList.remove("hidden");
    return;
  }

  if (rol === "validado") {
    mensaje.textContent = "✅ El artículo ha sido publicado directamente.";
    mensaje.className = "ok";
  } else {
    mensaje.textContent =
      "🕓 El artículo ha sido guardado como pendiente de validación.";
    mensaje.className = "ok";
  }

  mensaje.classList.remove("hidden");

  form.reset();
});
