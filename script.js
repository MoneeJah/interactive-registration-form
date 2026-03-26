// DOM Elements
const form = document.getElementById("registrationForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMessage = document.getElementById("successMessage");

// Load username from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) username.value = savedUsername;
});

// Validation Functions
function validateUsername() {
  if (username.validity.valueMissing) {
    usernameError.textContent = "Username is required.";
    return false;
  } else if (username.validity.tooShort) {
    usernameError.textContent = "Username must be at least 3 characters.";
    return false;
  } else {
    usernameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Email is required.";
    return false;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password is required.";
    return false;
  } else if (!pattern.test(password.value)) {
    passwordError.textContent = "Password must be at least 8 characters, include uppercase, lowercase, and a number.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "Please confirm your password.";
    return false;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

// Real-time validation
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  const allValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

  if (allValid) {
    // Save username
    localStorage.setItem("username", username.value);

    // Show success message
    successMessage.textContent = "Registration successful!";
    
    // Optionally clear error messages
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Reset form after short delay
    setTimeout(() => {
      form.reset();
      successMessage.textContent = "";
    }, 3000);

  } else {
    // Focus first invalid field
    if (!isUsernameValid) username.focus();
    else if (!isEmailValid) email.focus();
    else if (!isPasswordValid) password.focus();
    else confirmPassword.focus();

    successMessage.textContent = "";
  }
});