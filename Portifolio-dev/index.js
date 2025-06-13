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


  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#00ff88"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.8,
        "random": true
      },
      "size": {
        "value": 4,
        "random": true
      },
      "move": {
        "enable": true,
        "direction": "bottom",
        "speed": 2,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  


  function smoothScrollTo(element, duration = 1000) {
    const targetY = element.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;
  
    function easeInOutQuad(t) {
      return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
    }
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * eased);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  }
  
  // Aplicar aos links do menu:
  document.querySelectorAll('.topo a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Ajuste duration (ms) conforme desejar, ex: 1500 para mais lento
        smoothScrollTo(target, 1500);
      }
    });
  });
  

  