let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    
    if (scrollTop > lastScrollTop) {
        // Oculta el header al hacer scroll hacia abajo
        header.style.top = "-60px";
    } else {
        // Muestra el header al hacer scroll hacia arriba
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los enlaces dentro del nav
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el salto inmediato

            const targetId = this.getAttribute("href").substring(1); // Obtiene el id de destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajuste para evitar que quede pegado al borde
                    behavior: "smooth" // Scroll suave
                });
            }
        });
    });
});
