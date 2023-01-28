const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  inputEl.className =
    Number(inputEl.dataset.length) === inputEl.value.length
      ? "valid"
      : "invalid";
});
