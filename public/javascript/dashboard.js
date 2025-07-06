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

document.addEventListener("DOMContentLoaded", () => {
    const btnLlamada = document.querySelector(".container-llamada");
    const confirmarBox = document.querySelector(".confirmar");
    const cancelarBtn = document.querySelector(".cancelar");

    btnLlamada.addEventListener("click", () => {
        confirmarBox.classList.add("active");
    });

    cancelarBtn.addEventListener("click", () => {
        confirmarBox.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const confirmar = document.querySelector(".confirmar");
    const cancelar = confirmar.querySelector(".cancelar");
    const mensaje = confirmar.querySelector("p");

    confirmar.addEventListener("click", (e) => {
        // Si NO se hizo click en el span cancelar
        if (!e.target.classList.contains("cancelar")) {
            mensaje.textContent = "Alerta enviada a contactos de emergencia";
            cancelar.textContent = "Volver";
        }
    });
});
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";

    document.querySelectorAll(".container").forEach(function (el) {
      el.style.display = "flex"; // O "block", según tu diseño
    });
  }, 2500); // 2000 milisegundos = 2 segundos
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openTutorialBtnHeader");
  const closeBtn = document.getElementById("closeTutorialBtn");
  const modal = document.getElementById("tutorialModal");

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const openHelpBtn = document.querySelector(".openHelpMaterialBtn");
  const closeHelpBtn = document.getElementById("closeHelpMaterialBtn");
  const helpModal = document.getElementById("helpMaterialModal");

  if (openHelpBtn && closeHelpBtn && helpModal) {
    openHelpBtn.addEventListener("click", () => {
      helpModal.style.display = "block";
    });

    closeHelpBtn.addEventListener("click", () => {
      helpModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === helpModal) {
        helpModal.style.display = "none";
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        helpModal.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const openNotifBtn = document.getElementById("openNotificacionesBtn");
  const closeNotifBtn = document.getElementById("closeNotificacionesBtn");
  const notifModal = document.getElementById("notificacionesModal");
  const guardarNotifBtn = document.getElementById("guardarNotificacionesBtn");
  const tonoSelect = document.getElementById("tono");
  const desactivarCheckbox = document.getElementById("desactivar");

  if (openNotifBtn && closeNotifBtn && notifModal && guardarNotifBtn && tonoSelect && desactivarCheckbox) {
    
    openNotifBtn.addEventListener("click", () => {
      notifModal.style.display = "block";
    });

    closeNotifBtn.addEventListener("click", () => {
      notifModal.style.display = "none";
    });

    guardarNotifBtn.addEventListener("click", () => {
      const tono = tonoSelect.value;
      const desactivar = desactivarCheckbox.checked;

      if (!tono && !desactivar) {
        alert("Por favor, selecciona un tono o activa la opción de desactivar notificaciones.");
        return;
      }

      console.log("Preferencias guardadas:", { tono, desactivar });
      alert("Tus preferencias se han guardado correctamente.");
      notifModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === notifModal) {
        notifModal.style.display = "none";
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        notifModal.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const openVitalesBtn = document.getElementById("openVitalesBtn");
  const closeVitalesBtn = document.getElementById("closeVitalesBtn");
  const vitalesModal = document.getElementById("vitalesModal");

  if (openVitalesBtn && closeVitalesBtn && vitalesModal) {
    openVitalesBtn.addEventListener("click", () => {
      vitalesModal.style.display = "block";
    });

    closeVitalesBtn.addEventListener("click", () => {
      vitalesModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === vitalesModal) {
        vitalesModal.style.display = "none";
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        vitalesModal.style.display = "none";
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const openUs21Btn = document.getElementById("openUs21Btn");
  const closeUs21Btn = document.getElementById("closeUs21Btn");
  const us21Modal = document.getElementById("us21Modal");

  if (openUs21Btn && closeUs21Btn && us21Modal) {
    openUs21Btn.addEventListener("click", () => {
      us21Modal.style.display = "block";
    });

    closeUs21Btn.addEventListener("click", () => {
      us21Modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === us21Modal) {
        us21Modal.style.display = "none";
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        us21Modal.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const openTreatmentsBtn = document.querySelector(".openTreatmentsBtn");
  const closeTreatmentsBtn = document.getElementById("closeTreatmentsBtn");
  const treatmentsModal = document.getElementById("treatmentsModal");

  if (openTreatmentsBtn && closeTreatmentsBtn && treatmentsModal) {
    openTreatmentsBtn.addEventListener("click", () => {
      treatmentsModal.style.display = "block";
    });

    closeTreatmentsBtn.addEventListener("click", () => {
      treatmentsModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === treatmentsModal) {
        treatmentsModal.style.display = "none";
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        treatmentsModal.style.display = "none";
      }
    });
  }
});