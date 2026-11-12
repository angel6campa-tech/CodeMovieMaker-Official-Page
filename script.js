(() => {
  "use strict";

  // PARTICULAS DEL FONDO
  const particleArea = document.getElementById("particles");

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
    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }

  // AVISOS DE INSTALACION
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toastTitle");
  const toastMessage = document.getElementById("toastMessage");

  let toastTimer;

  function showToast(title, message) {
    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }

  // BOTONES DE LAS DOS EDICIONES
  document.querySelectorAll(".install-button").forEach(button => {
    button.addEventListener("click", () => {
      const edition = button.dataset.edition;

      showToast(
        "CODEMOVIEMAKER " + edition,
        "El instalador oficial se está preparando."
      );
    });
  });

})();