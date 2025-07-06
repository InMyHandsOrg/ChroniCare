const searchInput = document.getElementById("searchInput");
const medItems = document.querySelectorAll(".med-list-item");
const noResultsMessage = document.getElementById("noResultsMessage")

let matches = 0;

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    medItems.forEach(item => {
        const titleEl = item.querySelector(".med-title");
        const title = titleEl ? titleEl.textContent.toLowerCase() : "";
        const match = title.includes(filter);
        item.style.display = match ? "flex" : "none";

        if (match) matches++
    });

    if (matches == 0) noResultsMessage.style.display = "flex";
    if (matches > 0) noResultsMessage.style.display = "none"
    matches = 0
});