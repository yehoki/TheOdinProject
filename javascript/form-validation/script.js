const email = document.getElementById("user-email");
const userPassword = document.getElementById("user-pass");
const userPasswordConfirm = document.getElementById("user-pass-conf");

window.addEventListener("load", () => {
  const isPasswordValid = userPassword.value.length === 0;
  userPassword.className = isPasswordValid ? "valid" : "invalid";
});

email.addEventListener("input", (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Email pls lol");
    console.log(email);
    email.className = "invalid";
  } else {
    email.setCustomValidity("");
    email.className = "valid";
  }
});

userPassword.addEventListener("input", (e) => {
  if (userPassword.validity.tooShort) {
    userPassword.setCustomValidity(
      `Too short lol, ${userPassword.value} at least ${
        8 - userPassword.value.length
      } more characters.`
    );
    userPassword.className = "invalid";
  } else {
    userPassword.setCustomValidity("");
    userPassword.className = "valid";
  }
});

userPasswordConfirm.addEventListener("input", (event) => {
  if (userPasswordConfirm.value !== userPassword.value) {
    userPasswordConfirm.setCustomValidity("The passwords must match");
  } else {
    userPasswordConfirm.setCustomValidity("");
  }
});
