let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counterEl: document.querySelector("#value"),
};

const updateCounter = (event) => {
  switch (event.currentTarget.dataset.action) {
    case "decrement":
      counterValue -= 1;
      break;

    case "increment":
      counterValue += 1;
      break;
  }

  refs.counterEl.textContent = counterValue;
};

refs.decrementBtn.addEventListener("click", updateCounter);
refs.incrementBtn.addEventListener("click", updateCounter);
