// Mostrar formulario de retroalimentación
function mostrarFormularioRetro() {
  const form = document.getElementById('formRetro');
  if (form) form.style.display = 'block';
}

// Enviar retroalimentación
function enviarRetro() {
  alert("Retroalimentación enviada");
  // Aquí puedes añadir lógica para enviar por fetch/AJAX.
}

// Generar PDF del historial clínico
async function generarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Título
  doc.setFontSize(18);
  doc.text("Historial Clínico - ChroniCare", 10, 20);

  // Línea de separación
  doc.setLineWidth(0.5);
  doc.line(10, 25, 200, 25);

  // Datos del Paciente
  doc.setFontSize(12);
  doc.text("Datos del Paciente:", 10, 35);
  doc.setFontSize(11);
  doc.text("Nombre: Juan Pérez", 10, 42);
  doc.text("Edad: 42 años", 10, 48);
  doc.text("DNI: 12345678", 10, 54);
  doc.text("Fecha de Atención: 04/07/2025", 10, 60);

  // Motivo de consulta
  doc.setFontSize(12);
  doc.text("Motivo de Consulta:", 10, 70);
  doc.setFontSize(11);
  doc.text("Dolor persistente en la zona lumbar.", 10, 76);

  // Antecedentes
  doc.setFontSize(12);
  doc.text("Antecedentes:", 10, 86);
  doc.setFontSize(11);
  doc.text("- Hipertensión arterial", 10, 92);
  doc.text("- Cirugía de apéndice (2012)", 10, 98);

  // Diagnóstico
  doc.setFontSize(12);
  doc.text("Diagnóstico:", 10, 108);
  doc.setFontSize(11);
  doc.text("Lumbalgia crónica.", 10, 114);

  // Tratamiento
  doc.setFontSize(12);
  doc.text("Tratamiento:", 10, 124);
  doc.setFontSize(11);
  doc.text("- Analgésicos (Paracetamol 500mg cada 8h)", 10, 130);
  doc.text("- Fisioterapia durante 4 semanas", 10, 136);

  // Recomendaciones
  doc.setFontSize(12);
  doc.text("Recomendaciones:", 10, 146);
  doc.setFontSize(11);
  doc.text("- Evitar esfuerzos físicos.", 10, 152);
  doc.text("- Acudir a control en 1 mes.", 10, 158);

  // Firma
  doc.text("Firma del profesional: ____________________", 10, 180);

  // Guardar PDF
  doc.save("historial_clinico.pdf");
}

// Enviar reclamo
function enviarReclamo() {
  alert("Tu reclamo ha sido enviado. ¡Gracias!");
  // Aquí podrías usar fetch() para enviar los datos a un backend.
}

// Enviar solicitud de alianza
function enviarAlianza() {
  alert("Solicitud enviada. Nos pondremos en contacto contigo.");
  // Aquí podrías usar fetch() para enviar los datos.
}

    const modal = document.getElementById('editModal');
    const closeBtn = document.getElementById('closeEditModal');
    const form = document.getElementById('editForm');
    const titleInput = document.getElementById('recordTitleInput');
    const dateInput = document.getElementById('recordDateInput');

    const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    let currentCard = null;
  
    function parseDate(dateStr) {
        const months = {
            enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
            julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
        };

        const match = dateStr.toLowerCase().match(/(\d{1,2}) de (\w+), (\d{4})/);
        if (!match) return null;

        const day = parseInt(match[1], 10);
        const monthName = match[2];
        const year = parseInt(match[3], 10);

        const month = months[monthName];
        if (month === undefined) return null;

        return new Date(year, month, day);
    }

    document.querySelectorAll('.record-card').forEach(card => {
        card.addEventListener('click', () => {
            const isLocked = card.dataset.blocked === "true";
            if (isLocked) {
                alert("Este registro no puede ser modificado sin autorización profesional");
                return;
            }

            currentCard = card;
            const title = card.querySelector('.record-title').textContent;
            const dateText = card.querySelector('.record-date').textContent;

            const parsedDate = parseDate(dateText);

            titleInput.value = title;
            dateInput.value = parsedDate.toISOString().split("T")[0];

            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!currentCard) return;

        const newTitle = titleInput.value;
        const newDate = dateInput.value;

        currentCard.querySelector('.record-title').textContent = newTitle;

        const dateAux = new Date(newDate);
        const formatted = dateAux.getUTCDate().toString() + " de " +  meses[dateAux.getUTCMonth()] + ", " + dateAux.getFullYear().toString()

        currentCard.querySelector('.record-date').textContent = formatted;

        modal.style.display = 'none';
    });

    function deleteSelectedRecord() {
        currentCard.style.display = 'none';
    }