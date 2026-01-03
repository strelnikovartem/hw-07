const btnChangeColor = document.querySelector(".change-color");
const newColor = document.querySelector(".color");
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  newColor.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log();
