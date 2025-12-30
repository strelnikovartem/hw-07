const allList = document.querySelector("#categories");

console.log("Numbers of categories:", allList.children.length);

[...allList.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
