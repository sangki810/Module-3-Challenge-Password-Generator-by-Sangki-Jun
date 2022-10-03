// Assignment code here
function randomLower() {
  var lower = "abcdefghijklmnopqrstuvwxyz"
  return lower[Math.floor(Math.random() * lower.length) ];
}

function randomUpper() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upper[Math.floor(Math.random() * upper.length) ];
}

function randomNumber() {
  var number = "0123456789"
  return number[Math.floor(Math.random() * number.length) ];
}

function randomSpecial() {
  var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  return special[Math.floor(Math.random() * special.length) ];
}

console.log(randomSpecial())

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
