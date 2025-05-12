function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const regno = document.getElementById("regno").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const namePattern = /^[A-Za-z\s]+$/;
  const regPattern = /^\d{8,}$/;

  if (!name || !regno || !email || !password) {
    alert("All fields are required.");
    return false;
  }

  if (!namePattern.test(name)) {
    alert("Name should contain only letters.");
    return;
  }

  if (!regPattern.test(regno)) {
    alert("Registration number must be at least 8 digits.");
    return;
  }

  if (!email.includes("@")) {
    alert("Invalid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters.");
    return;
  }

  alert("Registration successful!");
}


const passwordInput = document.getElementById("password");
const toggleEye = document.getElementById("toggleEye");

let passwordVisible = false;

toggleEye.addEventListener("click", () => {
  passwordVisible = !passwordVisible;

  passwordInput.type = passwordVisible ? "text" : "password";
  toggleEye.src = passwordVisible ? "eye-icon.svg" : "eye-slash.svg";
});
