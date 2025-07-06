const palabrasProhibidas = ["muerte", "mierda", "carajo", "desgracia"];

function publicarMensaje() {
  const sesionActiva = document.getElementById("sesionActiva").checked;
  const grupo = document.getElementById("grupo").value;
  const texto = document.getElementById("comentario").value.trim();

  if (!sesionActiva) {
    alert("Debes iniciar sesión para publicar en el foro.");
    return;
  }

  if (texto === "") return;

  const contieneOfensa = palabrasProhibidas.some(palabra =>
    texto.toLowerCase().includes(palabra)
  );

  if (contieneOfensa) {
    alert("Mensaje no permitido: contiene lenguaje inapropiado.");
    return;
  }

  const fecha = new Date().toLocaleString();

  // Crear objeto publicación
  const publicacion = {
    id: Date.now(), // ID único
    grupo,
    texto,
    autor: "Paciente", // En real sería el nombre del usuario
    fecha,
    estado: "pendiente"
  };

  // Guardar en localStorage
  const publicaciones = JSON.parse(localStorage.getItem("publicaciones")) || [];
  publicaciones.push(publicacion);
  localStorage.setItem("publicaciones", JSON.stringify(publicaciones));

  alert("Tu pregunta fue publicada y está pendiente de aprobación.");
  document.getElementById("comentario").value = "";

  mostrarPublicaciones();
}

function mostrarPublicaciones() {
  const grupoSeleccionado = document.getElementById("grupo").value;
  const lista = document.getElementById("mensajes");
  lista.innerHTML = "";

  const publicaciones = JSON.parse(localStorage.getItem("publicaciones")) || [];

  publicaciones
    .filter(p => p.grupo === grupoSeleccionado)
    .forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>[${p.fecha}]</strong> ${p.texto} <br>
                      <em>Estado: ${p.estado}</em>`;
      lista.appendChild(li);
    });
}

document.getElementById("grupo").addEventListener("change", mostrarPublicaciones);
window.onload = mostrarPublicaciones;
