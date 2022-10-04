// Assignment code here
// generatePassword function containing prompt, confirms, alerts, and the final password calculator
function generatePassword() {
  //prompt, alerts, and confirms asking to user input and storing them in variables
  var lengthSlct = prompt("How many characters would you like your password to contain? \ (Choose between 8-128 characters)");

  var length = Number(lengthSlct);
  
  if (!length) {
    alert("Please choose a value between 8 and 128!");
    return;
  } else if (length < 8 || length > 128) {
    alert("Please choose a value between 8 and 128!");
    return; 
  };

  var lowerSlct = confirm("Click OK to confirm including lower case characters.");

  var upperSlct = confirm("Click OK to confirm including upper case characters.");

  var numberSlct = confirm("Click OK to confirm including numeric characters.");

  var specialSlct = confirm("Click OK to confirm including special characters.");

  if (lowerSlct === false && upperSlct === false && numberSlct === false && specialSlct === false) {
    alert("You must choose at least one type of character set!");
    return;
  };

  alert("You chose to include:\nLower case: " + lowerSlct + "\nUpper case: " + upperSlct + "\nNumbers: " + numberSlct + "\nSpecial Characters: " + specialSlct);

  // object containing random generator functions
  var randomFunctions = {
    lowerSlct: randomLower,
    upperSlct: randomUpper,
    numberSlct: randomNumber,
    specialSlct: randomSpecial,
  };

  // random character generator functions
  function randomLower() {
    var lowerChar = "abcdefghijklmnopqrstuvwxyz"
    return lowerChar[Math.floor(Math.random() * lowerChar.length)];
    };

  function randomUpper() {
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return upperChar[Math.floor(Math.random() * upperChar.length)];
  };

  function randomNumber() {
    var numberChar = "0123456789"
    return numberChar[Math.floor(Math.random() * numberChar.length)];
  };

  function randomSpecial() {
    var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    return specialChar[Math.floor(Math.random() * specialChar.length)];
  };

  //final random password generator codes
  var generatedPassword = " ";

  var typesCount = lowerSlct + upperSlct + numberSlct + specialSlct;
  //filters out excluded characters from the array
  var typesArray = [{lowerSlct}, {upperSlct}, {numberSlct}, {specialSlct}].filter
  (
    item => Object.values(item)[0]
  );
   
  for (var i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      var functionName = Object.keys(type)[0];
      
      generatedPassword += randomFunctions[functionName]();
    });
  };
  var finalPassword = generatedPassword.slice(0, [length + 1])

  return finalPassword;
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
    
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);