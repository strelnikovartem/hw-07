const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", renameName);

function renameName(event) {
  const value = event.target.value;
  spanEl.textContent = value;
}
