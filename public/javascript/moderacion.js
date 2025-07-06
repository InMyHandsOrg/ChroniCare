function cargarPublicaciones() {
  const lista = document.getElementById("publicaciones");
  lista.innerHTML = "";

  const publicaciones = JSON.parse(localStorage.getItem("publicaciones")) || [];

  publicaciones.forEach(p => {
    const li = document.createElement("li");
    li.setAttribute("data-id", p.id);
    li.innerHTML = `
      <p><strong>Autor:</strong> ${p.autor}</p>
      <p><strong>Grupo:</strong> ${p.grupo}</p>
      <p><strong>Publicación:</strong> ${p.texto}</p>
      <p class="estado">Estado: ${p.estado}</p>
      <button onclick="aprobar(${p.id})">Aprobar</button>
      <button onclick="rechazar(${p.id})">Rechazar</button>
    `;
    lista.appendChild(li);
  });
}

function actualizarEstado(id, nuevoEstado) {
  const publicaciones = JSON.parse(localStorage.getItem("publicaciones")) || [];

  const publicacion = publicaciones.find(p => p.id === id);
  if (!publicacion) return;

  if (publicacion.estado !== "pendiente") {
    alert("Esta publicación ya ha sido moderada.");
    return;
  }

  publicacion.estado = nuevoEstado;
  localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
  alert(`Publicación ${nuevoEstado}. El autor ha sido notificado.`);
  cargarPublicaciones();
}

function aprobar(id) {
  actualizarEstado(id, "aprobado");
}

function rechazar(id) {
  actualizarEstado(id, "rechazado");
}

window.onload = cargarPublicaciones;
