const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");
btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});
// ____________________________________________
// ******js_memory*****

let emojis = [
  "👽",
  "👽",
  "👾",
  "👾",
  "🤖",
  "🤖",
  "🛸",
  "🛸",
  "🚀",
  "🚀",
  "🦂",
  "🦂",
  "💩",
  "💩",
  "🛰",
  "🛰",
];
let shuffle_emojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));
let scort = 0;
let best_scort = 999;
// *******game_board******
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "items";
  box.innerHTML = shuffle_emojis[i];
  document.querySelector(".game").appendChild(box);
  // __________________________________________________

  // ******flip_box****
  box.onclick = function () {
    this.classList.add("boxOpen");
    // _________________________

    // *******match_box******
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        scort++;
        step.innerText = scort;
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
          // __________________________________

          // ********win_game**********
          if (document.querySelectorAll(".boxMatch").length == emojis.length) {
            if (best_scort < scort) {
              best_scort = scort;
              console.log(best_scort);
              console.log(best_scort.toString());
              localStorage.setItem("scort", best_scort.toString());
            }
            alert("you win : " + scort + " step");
          }
          // _____________________________________

          // ********!match_card******
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
      // ________________________
    }, 700);
    if (best_scort > scort) {
      best_scort = scort;
      localStorage.setItem("scort", best_scort);
    }
  };
}

// *******reset_game******
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    window.location.reload();
  }
});
// ___________________________________
