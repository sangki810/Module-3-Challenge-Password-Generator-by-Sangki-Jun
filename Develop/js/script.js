// Assignment code here

// object containing random generator functions
var randonFunctions = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSpecial,
}

// random character generator functions
function randomLower() {
  var lowerChar = "abcdefghijklmnopqrstuvwxyz"
  return lowerChar[Math.floor(Math.random() * lowerChar.length)];
}

function randomUpper() {
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperChar[Math.floor(Math.random() * upperChar.length)];
}

function randomNumber() {
  var numberChar = "0123456789"
  return numberChar[Math.floor(Math.random() * numberChar.length)];
}

function randomSpecial() {
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthSlct = prompt("How many characters would you like your password to contain? (8-128 characters)");
  if (lengthSlct < 8 || lengthSlct > 128) {
    alert("Please choose a value between 8 and 128 characters!");
  } else if (lengthSlct !== "number") {
    alert("Please input a numberic value between 8 and 128!");
  } else {
    var lowerSlct = confirm("Click OK to confirm including lower case characters.");
    var upperSlct = confirm("Click OK to confirm including upper case characters.");
    var numberSlct = confirm("Click OK to confirm including numeric characters.");
    var specialSlct = confirm("Click OK to confirm including special characters.");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
