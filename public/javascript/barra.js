
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
