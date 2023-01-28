function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

const onBtnClick = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textEl.textContent = color;
};

changeColorBtn.addEventListener("click", onBtnClick);
