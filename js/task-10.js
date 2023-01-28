function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = (30 + i * 10).toString() + "px";
    box.style.height = (30 + i * 10).toString() + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  refs.boxesEl.append(...boxes);
};

const destroyBoxes = () => {
  refs.boxesEl.innerHTML = "";
};

const onCreateClick = () => {
  if (refs.inputEl.value > 100) {
    return alert("Перевищено ліміт! Максимум блоків - 100");
  }
  createBoxes(refs.inputEl.value);
};

refs.createBtn.addEventListener("click", onCreateClick);
refs.destroyBtn.addEventListener("click", destroyBoxes);
