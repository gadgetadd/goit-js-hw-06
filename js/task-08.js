const formEl = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  console.log({
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  });

  event.currentTarget.reset();
};

formEl.addEventListener("submit", onFormSubmit);
