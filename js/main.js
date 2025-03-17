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
