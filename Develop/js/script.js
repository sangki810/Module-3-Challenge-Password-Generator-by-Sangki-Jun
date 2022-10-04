// Assignment code here
// generatePassword function containing prompt, confirms, alerts, and the final password calculator
function generatePassword() {
  //prompt, alerts, and confirms asking to user input and storing them in variables
  var lengthSlct = prompt("How many characters would you like your password to contain? \ (Choose between 8-128 characters)");
  //turns lengthSlct prompt response into a number value
  var length = Number(lengthSlct);
  //limits responses to numerical values between 8 and 128 only
  if (!length) {
    alert("Please choose a value between 8 and 128!");
    return;
  } else if (length < 8 || length > 128) {
    alert("Please choose a value between 8 and 128!");
    return; 
  };
  //stores response in boolean data of true or false in variables
  var lowerSlct = confirm("Click OK to confirm including lower case characters.");

  var upperSlct = confirm("Click OK to confirm including upper case characters.");

  var numberSlct = confirm("Click OK to confirm including numeric characters.");

  var specialSlct = confirm("Click OK to confirm including special characters.");
  //stops user from preceding if no characters are included
  if (lowerSlct === false && upperSlct === false && numberSlct === false && specialSlct === false) {
    alert("You must choose at least one type of character set!");
    return;
  };
  //notifies users on which character types they chose to include
  alert("You chose:\nLength: " + length + "\nLower case: " + lowerSlct + "\nUpper case: " + upperSlct + "\nNumbers: " + numberSlct + "\nSpecial Characters: " + specialSlct);

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
  //counts how many were confirmed to include
  var typesCount = lowerSlct + upperSlct + numberSlct + specialSlct;
  //filters out unconfirmed characters from the array
  var typesArray = [{lowerSlct}, {upperSlct}, {numberSlct}, {specialSlct}].filter
  (
    item => Object.values(item)[0]
  );
  // for loop which runs the random generator functions for each matching variables storing the confirmed characters
  for (var i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      var functionName = Object.keys(type)[0];
      generatedPassword += randomFunctions[functionName]();
    });
  };
  // limits the generated password length to the actual user input length
  var finalPassword = generatedPassword.slice(0, [length + 1])
  // pushes the final correctly generated password 
  return finalPassword;
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // prints the password from the generatePassword function onto the page
  passwordText.value = password;
    
};

// Add event listener to generate button, listens for a click and runs writePassword function
generateBtn.addEventListener("click", writePassword);