document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Preencha todos os campos!");
    return;
  }

  const texto = `Olá! Meu nome é ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;

  const numero = "5521971088704"; // seu WhatsApp

  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
});

  // 🔹 Formulário
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

    alert("Mensagem enviada com sucesso!");
  });
;

// 🔹 Particles (fora do DOMContentLoaded pode funcionar, mas assim é mais seguro)
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#00ff88" },
    shape: { type: "circle" },
    opacity: { value: 0.8, random: true },
    size: { value: 4, random: true },
    move: {
      enable: true,
      direction: "bottom",
      speed: 2,
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});

// Rolamento 

document.addEventListener("DOMContentLoaded", function () {

  const botaoContato = document.querySelector(".botao1");
  const formulario = document.getElementById("formulario");

  if (botaoContato && formulario) {
    botaoContato.addEventListener("click", function (e) {
      e.preventDefault();
      formulario.scrollIntoView({ behavior: "smooth" });
    });
  }

});

// Git-Hub //
fetch("https://api.github.com/users/Takakae09/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projetos-api");

    data.forEach(repo => {
      const card = document.createElement("div");

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sem descrição"}</p>
        <a href="${repo.html_url}" target="_blank">Ver projeto</a>
      `;

      container.appendChild(card);
    });
  });
