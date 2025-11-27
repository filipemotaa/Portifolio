// Alternar Tema
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Animações simples ao rolar
const elements = document.querySelectorAll("section, .service, .project, .testimonial");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0px)";
        }
    });
});

// Inicializa com opacidade 0
elements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.7s ease";
});
