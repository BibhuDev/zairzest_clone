document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");
  const toggleEye = document.getElementById("toggleEye");
  const resetPasswordDiv = document.getElementById("resetPassword");


  function showCustomToast(message, icon = 'warning') {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,

    color: 'white',
    customClass: {
      popup: 'my-toast',
      icon: 'no-tint-icon'
    }
  });
}
resetPasswordDiv.addEventListener("click", () => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    icon: 'info',
    title: 'Visit Zairza',
    customClass: {
      popup: 'zairza-toast',
      icon: 'zairza-icon'
    }
  });
});




  let passwordVisible = false;
  toggleEye.addEventListener("click", () => {
    passwordVisible = !passwordVisible;
    passwordInput.type = passwordVisible ? "text" : "password";
    toggleEye.src = passwordVisible ? "eye-icon.svg" : "eye-slash.svg";
  });

  
 

 
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    

  if (!email || !password) {
  showCustomToast('All fields are required.');
  return;
}

if (!email.includes("@") || !email.includes(".")) {
  showCustomToast('Please enter a valid email address.', 'error');
  return;
}

if (password.length < 6) {
  showCustomToast('Password should be at least 6 characters.', 'info');
  return;
}



  
  });
});
