const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");
btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

function validatePassword(password) {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
  return passwordPattern.test(password);
}

let pseudo;
console.log(pseudo);
let passWord;

let verifPseudo = localStorage.getItem("pseudo");
let verifPassword = localStorage.getItem("password");

inputPseudo.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});
inputPassword.addEventListener("input", (e) => {
  passWord = e.target.value;
  console.log(passWord);
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo === verifPseudo && passWord === verifPassword) {
    document
      .querySelector(".profil-sidebar")
      .classList.remove("profil-sidebar");
    window.location.href = "../layouts/profil.html";
  } else {
    document.getElementById("error-connection").textContent =
      "Pseudo or password incorrect";
  }
});
