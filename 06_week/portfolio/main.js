const overlay = document.querySelector(".overlay");
const backTotopBtn = document.querySelector("#backTotopBtn");
const closeButton = document.querySelector("#closeButton");
const modalButton = document.querySelector("#seeMore");
const modeButton = document.querySelector("#modeButton");
const body = document.body;

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backTotopBtn.style.display = "block";
  } else {
    backTotopBtn.style.display = "none";
  }
};

const displayElement = () => {
  document.querySelector(".overlay").classList.toggle("hidden");
};

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
const toggleLightSwitch = () => {
  document.body.classList.toggle("darkMode");
  
  const currentMode = document.body.classList.contains("darkMode");
  localStorage.setItem("darkMode", JSON.stringify(currentMode));
};
const darkModeOn = JSON.parse(localStorage.getItem("darkMode"));

if (darkModeOn) {
  document.body.classList.add("darkMode");
} else {
  document.body.classList.remove("darkMode");
}



backTotopBtn.addEventListener("click", backToTop);
modalButton.addEventListener("click", displayElement);
closeButton.addEventListener("click", displayElement);
modeButton.addEventListener("click", toggleLightSwitch);
