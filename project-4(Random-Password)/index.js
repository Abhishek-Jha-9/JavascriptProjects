let password = document.querySelector("#Password");
let length = 12;
let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*(){}<>?/-=";

function createRandomPassword() {
  let randomPassword = "";

  for (let i = 0; i < 3; i++) {
    randomPassword +=
      uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
    randomPassword +=
      lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
    randomPassword += number[Math.floor(Math.random() * number.length)];
    randomPassword += symbol[Math.floor(Math.random() * symbol.length)];
  }
  password.value = randomPassword;
}

function copyPassword() {
  password.select();
  document.execCommand("copy");
}
