document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");
  const toggleEye = document.getElementById("toggleEye");
  const resetPasswordDiv = document.getElementById("resetPassword");


  let passwordVisible = false;
  toggleEye.addEventListener("click", () => {
    passwordVisible = !passwordVisible;
    passwordInput.type = passwordVisible ? "text" : "password";
    toggleEye.src = passwordVisible ? "eye-icon.svg" : "eye-slash.svg";
  });

  
  resetPasswordDiv.addEventListener("click", () => {
    alert("Visit Zairza");
  });

 
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("All fields are required.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Invalid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    alert("Yesss.. You are successfully logged in!");
  });
});
