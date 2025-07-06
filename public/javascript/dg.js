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
