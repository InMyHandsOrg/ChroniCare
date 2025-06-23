const preguntas = document.querySelectorAll('.faq-question');

    preguntas.forEach(pregunta => {
      pregunta.addEventListener('click', () => {
        // Alternar visibilidad de la respuesta
        const respuesta = pregunta.nextElementSibling;
        respuesta.classList.toggle('show');

        // Cambiar el icono + / -
        pregunta.classList.toggle('open');
      });
    });
const menuIcon = document.getElementById('openMenuBtn');
  const menu = document.getElementById('menu');

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('abierto');
  });

  const header = document.getElementById('header');
  const main= document.getElementById('main');
  window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 0){
    header.classList.add('active');
    main.classList.add('active');
  }
  else{
    header.classList.remove('active');
    main.classList.remove('active');
  }
});
