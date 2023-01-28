const refs = {
  inputEl: document.querySelector("#name-input"),
  nameEl: document.querySelector("#name-output"),
};

const changeGreetingName = (event) => {
  refs.nameEl.textContent =
    event.currentTarget.value !== "" ? event.currentTarget.value : "Anonymous";
};

refs.inputEl.addEventListener("input", changeGreetingName);
