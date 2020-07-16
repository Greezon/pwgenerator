// Assignment Code
// ID of the button
var generateBtn = document.querySelector("#generate");
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerArray = "abcdefghijklmnopqrstuvwxyz"
var numberArray = "123456789"
var symbolArray = "-_!@#$%^&*()"
var getUserChoice = []
var passwordLength = 0
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let userStop = prompt("Enter Password Length ;)")
  if (userStop === null) {
    alert("Thank you come again, when you need another password.")
    return "Your Secure Password"
  }

  passwordLength = parseInt(userStop)
  console.log(passwordLength)
  if (passwordLength >= 8 && passwordLength < 126) {
    return takeUserChoice()
  }
  else {
    alert("Password has to be between 8 and 126 characters long.")
    return generatePassword()
  }
}

function takeUserChoice() {
  var yesUpper = confirm("Would you like to have upper case letters in your PW?")
  var yesLower = confirm("Would you like to have lower case letters in your PW?")
  var yesNumbers = confirm("Would you like to have #s in your PW?")
  var yesSymbols = confirm("Would you like to have 5ym80L5 in your PW?")
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
  else {
    alert("You have to choose at least ONE option...")
    return takeUserChoice()
  }
}

generateBtn.addEventListener("click", writePassword);
