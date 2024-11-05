const criarContaLink = document.querySelector(".criar-conta");
const voltarLink = document.querySelector(".voltar");
const formLogin = document.querySelector(".form-login");
const formCriarConta = document.querySelector(".form-criar-conta");

criarContaLink.addEventListener("click", () => {
  formLogin.style.display = "none";
  formCriarConta.style.display = "block";
});

voltarLink.addEventListener("click", () => {
  formLogin.style.display = "block";
  formCriarConta.style.display = "none";
});
