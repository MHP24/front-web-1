let nav = document.querySelector(".nav");
let hamburguer = document.querySelector(".hamburger");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("showNav");
});

window.addEventListener("click", w => {
    if(nav.classList.contains("showNav") 
    && w.target != document.querySelector("#nav__bar")
    && w.target !=hamburguer ) {
        nav.classList.toggle("showNav");
    }
});