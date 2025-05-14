let main = document.querySelector(".cold");
let brew = document.querySelector(".brew");

let num = Math.floor(Math.random()*10000000000);

main.innerText = "ZEN-"+ num;
brew.innerText = "ZEN-"+ num;
console.log(num);

document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    toast: true,
    position: 'top-left',
    icon: 'info',
    text:   'Hey Hunter!.Welcome to the Forest.Click on ZAIRZEST 4.0 to proceed to home page.',
   
    customClass: {
      popup: 'panda-toast',
      icon: 'panda-icon',
      closeButton: 'panda-close'
    },
    timer: 0, 
    timerProgressBar: false,
    position: 'top-start'
  });
});
