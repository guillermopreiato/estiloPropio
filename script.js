document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const intro = document.getElementById("intro-logo");
      const header = document.getElementById("main-header");
  
      // Oculta el logo grande
      intro.style.opacity = "0";
  
      // Luego de 1 segundo lo quita y muestra el header con animación
      setTimeout(() => {
        intro.style.display = "none";
        header.classList.remove("hidden");
        header.classList.add("show");
      }, 1000);
    }, 2000); // Espera 2 segundos antes de iniciar la transición
  });
  