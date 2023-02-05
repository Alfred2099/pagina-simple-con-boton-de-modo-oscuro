document.addEventListener("DOMContentLoaded", function() {
const darkModeBtn = document.querySelector("#dark-mode-btn");
const body = document.querySelector("body");

darkModeBtn.addEventListener("click", function() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    darkModeBtn.innerHTML = "Modo oscuro";
  } else {
    body.classList.add("dark-mode");
    darkModeBtn.innerHTML = "Modo claro";
  }
});

})
console.log("si lees esto te crees hacker")