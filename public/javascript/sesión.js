const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

function mostrarLogin() {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  btnLogin.classList.add("active");
  btnRegister.classList.remove("active");
}

function mostrarRegistro() {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  btnLogin.classList.remove("active");
  btnRegister.classList.add("active");
}

btnLogin.addEventListener("click", mostrarLogin);
btnRegister.addEventListener("click", mostrarRegistro);

// Verifica la URL para activar la vista correspondiente
const params = new URLSearchParams(window.location.search);
if (params.get("view") === "register") {
  mostrarRegistro();
} else {
  mostrarLogin();
}
