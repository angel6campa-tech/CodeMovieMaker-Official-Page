
(() => {
  "use strict";

  // PARTICULAS DEL FONDO
  const particleArea = document.getElementById("particles");

  if (particleArea) {
    for (let i = 0; i < 45; i++) {
      const particle = document.createElement("div");

      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";
      particle.style.animationDelay =
        (-Math.random() * 10) + "s";

      particleArea.appendChild(particle);
    }
  }

  // ANIMACIONES AL DESPLAZARSE
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }

  // NOTIFICACIONES
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toastTitle");
  const toastMessage = document.getElementById("toastMessage");

  let toastTimer;

  function showToast(title, message) {
    if (!toast || !toastTitle || !toastMessage) return;

    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }

  // ENLACES OFICIALES DE DESCARGA
  const DOWNLOADS = {
    PLUS: "https://github.com/angel6campa-tech/CodeMovieMaker-Official-Page/releases/download/v1.0.0-plus/CodeMovieMaker.PLUS.Setup.1.0.0.exe"
  };

  // BOTONES DE INSTALACION
  document.querySelectorAll(".install-button").forEach(button => {
    button.addEventListener("click", () => {
      const edition = button.dataset.edition;

      if (edition === "PLUS") {
        showToast(
          "CODEMOVIEMAKER PLUS",
          "Iniciando descarga del instalador..."
        );

        window.location.href = DOWNLOADS.PLUS;
        return;
      }

      if (edition === "NORMAL FREE") {
        showToast(
          "CODEMOVIEMAKER NORMAL",
          "La descarga estará disponible próximamente."
        );
      }
    });
  });

})();
