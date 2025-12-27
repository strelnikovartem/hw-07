const allList = document.querySelector("#categories");

console.log(allList.children);

console.log(`Numbers of categories: ${allList.children.length}`);

console.log(`Categories: ${allList}`);

const newEl = document.createElement("li");
newEl.classList.add("item");

const newTitleEl = document.createElement("h2");
newTitleEl.textContent = "Cars";

newEl.append(newTitleEl);
allList.append(newEl);
console.log(newEl);
