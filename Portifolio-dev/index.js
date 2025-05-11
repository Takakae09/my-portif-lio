// Espera o HTML carregar
document.addEventListener("DOMContentLoaded", function () {
    const botaoContato = document.querySelector(".botao1"); // seu botão "Contato-me"
    const formulario = document.getElementById("formulario"); // o formulário no footer
  
    if (botaoContato && formulario) {
      botaoContato.addEventListener("click", function () {
        formulario.scrollIntoView({ behavior: "smooth" }); // rola até o formulário
      });
    }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const botaoContato = document.querySelector(".botao1");
    const formulario = document.getElementById("formulario");
  
    if (botaoContato && formulario) {
      botaoContato.addEventListener("click", function () {
        formulario.scrollIntoView({ behavior: "smooth" });
      });
    }
  
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();
  
      if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      // ETAPA 3 – Vamos adicionar aqui o envio com EmailJS
    });
  });
  