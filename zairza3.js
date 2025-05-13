let main = document.querySelector(".cold");
let brew = document.querySelector(".brew");

let num = Math.floor(Math.random()*10000000000);

main.innerText = "ZEN-"+ num;
brew.innerText = "ZEN-"+ num;
console.log(num);

