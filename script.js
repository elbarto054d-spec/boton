   function mostrarSeccion(id) {
    // Ocultar todas las secciones
    document.querySelectorAll(".seccion").forEach(sec => {
        sec.classList.remove("activa");
    });

    // Mostrar la seleccionada
    const seccion = document.getElementById(id);
    if (seccion) seccion.classList.add("activa");

    // CONTROL DEL HERO
    const hero = document.querySelector(".hero");

    if (id === "inicio") {
        hero.style.display = "flex";   // aparece
    } else {
        hero.style.display = "none";   // desaparece
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
        (function () {
            const menu = document.getElementById("fx-menu");
            const submenu = document.getElementById("fx-submenu");
            const overlay = document.getElementById("fx-overlay");
            const btn = document.getElementById("fx-toggle");

            function toggle() {
                submenu.classList.toggle("fx-show");
                overlay.classList.toggle("fx-show");
                menu.classList.toggle("fx-active");
                menu.classList.toggle("fx-animar");
            }

            btn.addEventListener("click", toggle);
            overlay.addEventListener("click", toggle);
        })();
