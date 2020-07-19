// Variables
var generateBtn = document.querySelector("#generate");
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerArray = "abcdefghijklmnopqrstuvwxyz"
var numberArray = "123456789"
var symbolArray = "-_!@#$%^&*()"
var getUserChoice = []
var passwordLength = 0

// Writes the password to the generate password box using querySelector.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// starts the specification of th password.
function generatePassword() {
  let userStop = prompt("Enter Password Length.")
  if (userStop == null) {
// if user chooses nothing, stops the loop.
    alert("Thank you come back when you need another password.")
    return "Your Secure Password"
  }
// if user types non integer tells them invalid input.
  else if (isNaN(Number(userStop))) {
    alert("Invalid input, try again...")
    return generatePassword()
  }

// if the user types in a number between 8 and 128 it will take "take user choice" or tell the user to use a number between 8 and 128
  passwordLength = parseInt(userStop)
  console.log(passwordLength)
  if (passwordLength >= 8 && passwordLength < 128) {
    return takeUserChoice()
  }
  else {
    alert("Password has to be between 8 and 128 characters long.")
    return generatePassword()
  }
}

// Asks the user if they want the various parameters.
function takeUserChoice() {
  var yesUpper = confirm("Would you like to have upper case letters in your password?")
  var yesLower = confirm("Would you like to have lower case letters in your password?")
  var yesNumbers = confirm("Would you like to have numbers in your password?")
  var yesSymbols = confirm("Would you like to have symbols in your password?")
  getUserChoice = []
  if (yesUpper) {
    getUserChoice += upperArray
  }
  if (yesLower) {
    getUserChoice += lowerArray
  }
  if (yesNumbers) {
    getUserChoice += numberArray
  }
  if (yesSymbols) {
    getUserChoice += symbolArray
  }
  if (getUserChoice.length > 0) {
    console.log(getUserChoice)
    var password = ""
    for (let i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * getUserChoice.length)
      password += getUserChoice[index]
    }
    console.log(password)
    return password
  }

// notifies the user to choose 1 option.
  else {
    alert("You have to choose at least one option...")
    return takeUserChoice()
  }
}

// when button is clicked prompts the user to start the parameters of the password
generateBtn.addEventListener("click", writePassword);
