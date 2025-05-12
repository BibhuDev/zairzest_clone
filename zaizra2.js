function validateForm() {
  
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  document.getElementById("togglePassword").addEventListener("click", function () {
  const password = document.getElementById("password");
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});

  if ( !email || !password) {
    alert("All fields are required.");
    return false;
  }
if (!email.includes("@")) {
    alert("Invalid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters.");
    return;
  }

}
const passwordInput = document.getElementById("password");
const toggleEye = document.getElementById("toggleEye");

let passwordVisible = false;

toggleEye.addEventListener("click", () => {
  passwordVisible = !passwordVisible;

  passwordInput.type = passwordVisible ? "text" : "password";
  toggleEye.src = passwordVisible ? "eye-icon.svg" : "eye-slash.svg";
});
 document.addEventListener("DOMContentLoaded", function () {
    const resetPasswordDiv = document.getElementById("resetPassword");
    if (resetPasswordDiv) {
      resetPasswordDiv.addEventListener("click", function () {
        alert("Visit Zairza");
      });
    }
     });