const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");
btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

const form = document.querySelector("form");
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
  return emailPattern.test(email);
}
function validatePassword(password) {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
  return passwordPattern.test(password);
}

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

let pseudo, email, password;

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorPseudo.textContent = "Le pseudo doit faire entre 3 et 20 caractères";
    pseudo = null;
  } else {
    errorPseudo.textContent = "";
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!validateEmail(value)) {
    errorMail.textContent = "Entrée un email valide";
    email = null;
  } else {
    errorMail.textContent = "";
    email = value;
  }
};

const passWordChecker = (value) => {
  if (!validatePassword(value)) {
    errorPassWord.textContent = "Le mot de passe n'est pas correct";
    password = null;
  } else {
    errorPassWord.textContent = "";
    password = value;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "passWord":
        passWordChecker(e.target.value);
        break;
      default:
        null;
    }
    if (pseudo && email && password) {
      document.querySelector(".ready").classList.add("sub");
    } else {
      document.querySelector(".ready").classList.remove("sub");
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password) {
    const data = {
      pseudo,
      email,
      password,
    };
    localStorage.setItem("pseudo", pseudo);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("formulaire validée");
    inputs.forEach((input) => (input.value = ""));
    window.location.href = "./signin.html";
  } else {
    alert("veuillez remplir correctement les champs");
  }
});
