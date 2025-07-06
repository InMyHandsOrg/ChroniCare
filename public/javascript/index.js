function animateCounter(element, duration = 2000) {
  const target = +element.getAttribute('data-target');
  let start = 0;
  const frameRate = 60;
  const totalFrames = Math.round((duration / 1000) * frameRate);
  const increment = target / totalFrames;

  let currentFrame = 0;

  const counter = setInterval(() => {
    currentFrame++;
    start += increment;
    if (currentFrame >= totalFrames) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.round(start);
    }
  }, 1000 / frameRate);
}


const counters = document.querySelectorAll('.datos h4');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target, 3000);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
});

document.addEventListener('DOMContentLoaded', () => {
  const usuario1 = document.querySelector('.usuario-1');
  const usuario2 = document.querySelector('.usuario-2');


  if (usuario1 && usuario2) {
    setTimeout(() => {
      usuario1.classList.add('move');
      usuario2.classList.add('move');
    }, 2520);
  } else {
    console.log('No se encontraron los elementos .usuario-1 o .usuario-2');
  }
});
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";

    document.querySelectorAll(".container").forEach(function (el) {
      el.style.display = "block"; // O "block", según tu diseño
    });
  }, 2500); // 2000 milisegundos = 2 segundos
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-buttons");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

setTimeout(function () {
  document.getElementById("loader").style.display = "none";

  document.querySelectorAll(".container").forEach(function (el) {
    el.style.visibility = "visible";
    el.style.opacity = "1";
  });
}, 2500);