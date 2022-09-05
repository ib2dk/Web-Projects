let main = document.querySelector("#main");
let small = document.querySelectorAll(".smallImg");
const hamburger = document.querySelector("#open");
const link = document.querySelector("#ul");
const a = document.querySelectorAll("header ul a");
let login_switch = document.getElementById("sign__login");
let create_switch = document.getElementById("sign__create");
let form = document.querySelector(".sign__form-reg ");
let form2 = document.querySelector(".sign__form-reg2 ");
let bottom_create = document.getElementById("sign__bottom");
let create_btn = document.getElementById("sign__bottom-create");
let login = true;
let show_hide = document.getElementById("show_hide");
let password = document.getElementById("password");
let confirmpass = document.getElementById("confirmPass");
let loginBtn = document.querySelector("#sign__first-btn a");

if (small && main) {
    small[0].onclick = () => {
        main.src = small[0].src;
    };
    small[1].onclick = () => {
        main.src = small[1].src;
    };
    if (small[2]) {
        small[2].onclick = () => {
            main.src = small[2].src;
        }
    };
};

if (show_hide && login_switch && create_switch) {
    show_hide.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            show_hide.className = "fa-solid fa-eye-slash";
        } else {
            password.type = "password";
            show_hide.className = "fa-solid fa-eye";
        }
    })
    login_switch.addEventListener("click", () => {
        Login();
        console.log(login + " login");

    }
    );
    create_switch.addEventListener("click", () => {
        createAccount();
        console.log(login + " create");

    }
    );
}


function Login() {
    login = true;
    login_switch.style.color = login ? "tomato" : null;
    form.style.display = "none";
    form2.style.display = "none";
    create_switch.style.color = "grey";
    bottom_create.textContent = "New to Ola's coulture";
    create_btn.innerHTML = "CREATE AN ACCOUNT";
    confirmpass.style.display = "none";
     loginBtn.textContent = "LOGIN";
}
function createAccount() {
    login = false;
    form.style.display = "block";
    form2.style.display = "flex";
    confirmpass.style.display = "block";
    create_switch.style.color = login ? null : "tomato"
    login_switch.style.color = "grey";
    bottom_create.textContent = "Already have an account?";
    create_btn.textContent = "LOGIN";
    loginBtn.textContent = "CREATE ACCOUNT";
}

function log_sign() {
    console.log(login + " H1");
    login ? createAccount() : Login();
}
let openBar = document.querySelector(".open");
let closeBar = document.querySelector(".close");
let nav = document.querySelector("header .nav");
let Link = document.querySelectorAll(".bnav a");
if (openBar && closeBar && Link) {
    openBar.onclick = () => {
        nav.classList.toggle("toggle");
        openBar.classList.toggle("active");
    };

    Link.forEach(x => {
        x.onclick = () => {
            nav.classList.toggle("toggle");
            openBar.classList.toggle("active");
        }
    })
}

let cartBar = document.querySelector(".cart-Bar");
let cartSide = document.querySelector(".cart__sidebar");

if (cartBar && cartSide) {
    cartBar.onclick = () => {
        cartBar.classList.toggle("active");
        cartSide.classList.toggle("active");
    }
}

const browseCont = [...document.querySelectorAll(".browse")]
const rightBtn = [...document.querySelectorAll(".right-btn")]
const leftBtn = [...document.querySelectorAll(".left-btn")]

if (rightBtn && leftBtn) {
    browseCont.forEach((col, index) => {
        let colRect = col.getBoundingClientRect();
        let colWidth = colRect.width;

        leftBtn[index].onclick = () => {
            col.scrollLeft += colWidth;
        }
        rightBtn[index].onclick = () => {
            col.scrollLeft -= colWidth;
        }

    });
};

let year = new Date().getFullYear();
console.log(year);
document.getElementById("year").textContent = year;




