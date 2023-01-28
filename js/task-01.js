const categoriesEl = document.querySelector("#categories");

const logItemsContent = (list) => {
  Array.from(list.children).forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
};

console.log(`Number of categories: ${categoriesEl.children.length}`);

logItemsContent(categoriesEl);
