// Assignment code here
function selectors() {
  var lowerSlct = confirm("Click OK to confirm including lower case characters.");
  var upperSlct = confirm("Click OK to confirm including upper case characters.");
  var numberSlct = confirm("Click OK to confirm including numeric characters.");
  var specialSlct = confirm("Click OK to confirm including special characters.");
}

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
