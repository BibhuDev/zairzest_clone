function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const regno = document.getElementById("regno").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const namePattern = /^[A-Za-z\s]+$/;
  const regPattern = /^\d{8,}$/;

  
  function showToast(message) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'warning',
      title: message,
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      customClass: {
        popup: 'form-toast',
        icon: 'form-icon'
      }
    });
  }

  if (!name || !regno || !email || !password) {
    showToast("All fields are required.");
    return;
  }

  if (!namePattern.test(name)) {
    showToast("Name should contain only letters.");
    return;
  }

  if (!regPattern.test(regno)) {
    showToast("Registration number must be at least 8 digits.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    showToast("Invalid email address.");
    return;
  }

  if (password.length < 6) {
    showToast("Password should be at least 6 characters.");
    return;
  }
Swal.fire({
    icon: 'success',
    title: 'Registration Successful!',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      popup: 'fun-toast'
    }
  });

  // ⏳ Then redirect after alert
  setTimeout(() => {
    window.location.href = "panda.html"; // change to your actual homepage file
  }, 3000);
}



const passwordInput = document.getElementById("password");
const toggleEye = document.getElementById("toggleEye");

let passwordVisible = false;

toggleEye.addEventListener("click", () => {
  passwordVisible = !passwordVisible;

  passwordInput.type = passwordVisible ? "text" : "password";
  toggleEye.src = passwordVisible ? "eye-icon.svg" : "eye-slash.svg";
});
