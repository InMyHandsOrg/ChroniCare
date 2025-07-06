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

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const noResultsMessage = document.getElementById("noResultsMessage");
  const articles = document.querySelectorAll(".article");
  let matches = 0;

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    console.log(filter)

    articles.forEach(article => {
      const titleEl = article.querySelector(".title");

      const title = titleEl ? titleEl.textContent.toLowerCase() : "";

      const match = title.includes(filter);
      article.style.display = match ? "flex" : "none";
      
      if(match) matches++;
    });

    noResultsMessage.classList.toggle("visible", matches == 0);
    noResultsMessage.classList.toggle("hidden", matches > 0);
    matches = 0;
  });
});