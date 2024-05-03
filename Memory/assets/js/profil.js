const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");
btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

let pseudo = localStorage.getItem("pseudo");
console.log(pseudo);
let email = localStorage.getItem("email");
console.log(email);
let scort = localStorage.getItem("scort");
console.log(scort);

profilNom.textContent = pseudo;
profilMail.textContent = email;
bestScort.textContent = scort;
