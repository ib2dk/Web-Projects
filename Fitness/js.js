const col = document.querySelector(".nav .container");
const hamburger = document.querySelector(".nav .container .hamburger");
const link = document.querySelector(".nav .container ul");
const a = document.querySelectorAll(".nav .container .link a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    link.classList.toggle("active");
});


document.addEventListener("scroll", () => {
    let scrol = window.scrollY
    if (window.scrollY > 500) {
        col.style.backgroundColor = "rgba(18, 3, 3, 0.6)";
    } else {
        col.style.backgroundColor = "transparent";
    }
})

a.forEach(x => {
    x.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        link.classList.toggle("active");
    })
})


