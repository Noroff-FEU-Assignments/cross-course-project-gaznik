const form = document.querySelector("#contactForm");

const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const phoneNumber = document.querySelector("#phoneNumber");
const phoneNumberError = document.querySelector("#phoneNumberError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const inquiry = document.querySelector("#inquiry");
const inquiryError = document.querySelector("#inquiryError");
const message = document.querySelector(".message");
const button = document.querySelector("button");

message.innerHTML = " ";

function validateForm(event) {
  event.preventDefault();

  if (checkLength(username.value, 2) === true) {
    usernameError.style.display = "none";
  } else {
    usernameError.style.display = "block";
  }

  if (checkLength(phoneNumber.value, 8) === true) {
    phoneNumberError.style.display = "none";
  } else {
    phoneNumberError.style.display = "block";
  }

  if (checkLength(inquiry.value, 5) === true) {
    inquiryError.style.display = "none";
  } else {
    inquiryError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  form.reset();

  message.innerHTML = '<div class="message">Your message has been sent!</div>';
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}