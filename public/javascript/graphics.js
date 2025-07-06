const deleteButton = document.querySelector('.delete-data-button');
const healthBoxes = document.getElementById('healthBoxes');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('graphicsModal');
const graphicsSection = document.getElementById('graphicsSection');
const noDataMessage = document.getElementById('noDataMessage');

let dataDeleted = false;

deleteButton.addEventListener('click', () => {
    healthBoxes.style.display = 'none';
    dataDeleted = true;
});

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';

    if(dataDeleted) {
        graphicsSection.style.display = 'none';
        noDataMessage.style.display = 'block';
    }
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});