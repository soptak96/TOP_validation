const form = document.querySelector(".form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const emailError = document.querySelector("#email + .error");
const countryError = document.querySelector("#country + .error");
const zipError = document.querySelector("#zip + .error");
const passwordError = document.querySelector("#password + .error");
const passworConfirmError = document.querySelector(
  "#password-confirm + .error"
);
const modal = document.querySelector(".modal");
email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "You should enter a valid email!";
  } else if (email.validity.tooShort) {
    emailError.textContent = "too short!";
  }
});

country.addEventListener("input", (e) => {
  if (country.validity.valid) {
    countryError.textContent = "";
  }
  if (country.validity.patternMismatch) {
    countryError.textContent = "please input a valid country name!";
  }
});

zip.addEventListener("input", (e) => {
  if (zip.validity.valid) {
    zipError.textContent = "";
  } else if (zip.validity.tooShort) {
    zipError.textContent = "too short!";
  } else if (zip.validity.tooLong) {
    zipError.textContent = "too long!";
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
  } else if (password.validity.tooShort) {
    passwordError.textContent = "must have 8 characters!";
  } else if (password.validity.tooLong) {
    passwordError.textContent = "can't exceed 32 characters!";
  }
});

passwordConfirm.addEventListener("input", () => {
  console.log(password.value);
  if (passwordConfirm.value !== password.value) {
    passworConfirmError.textContent = "password does not match!";
  } else if (passwordConfirm.value === password.value) {
    passworConfirmError.textContent = "";
    passwordConfirm.classList.remove("active");
  }
});

form.addEventListener("submit", (e) => {
  console.log("hello");
  // form.reportValidity();
  if (!email.validity.valid) {
    emailError.textContent = "you must have to provide a valid email";
  }
  if (!country.validity.valid) {
    countryError.textContent = "country name is invalid!";
  }

  if (!zip.validity.valid) {
    zipError.textContent = "invalid zip!";
  }
  if (!password.validity.valid) {
    passwordError.textContent = "please fill it!";
  }

  if (passwordConfirm.classList.contains("active")) {
    passworConfirmError.textContent = "password doesn't match!";
  } else {
    modal.showModal();
  }
  e.preventDefault();
});
