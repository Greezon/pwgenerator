// Assignment Code
// ID of the button
var generateBtn = document.querySelector("#generate");
var upperArray="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerArray="abcdefghijklmnopqrstuvwxyz"
var numberArray="123456789"
var symbolArray="-_!@#$%^&*()"
var getUserChoice=[]
var passwordLength=0
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  passwordLength=parseInt(prompt("Enter Password Length ;)"))
console.log(passwordLength)
if (passwordLength >= 8 && passwordLength < 126){
  takeUserChoice()
}
}
function takeUserChoice(){
  var yesUpper=confirm("Would you like to have upper case letters in your PW?")
  var yesLower=confirm("Would you like to have lower case letters in your PW?")
  var yesNumbers=confirm("Would you like to have upper case letters in your PW?")
  var yesSymbols=confirm("Would you like to have upper case letters in your PW?")
  if(yesUpper){
    getUserChoice+=upperArray
  }
  if(yesLower){
    getUserChoice+=lowerArray
  }
  if(yesNumbers){
    getUserChoice+=numberArray
  }
  if(yesSymbols){
    getUserChoice+=symbolArray
  }
  if(getUserChoice.length>0){
    console.log(getUserChoice)
    // // for(let i=0;i<passwordLength;i++){
    // //   Math.random()*getUserChoice.length
    // }
  }
}


// Add event listener to generate button

// click event. AKA execute the function.
generateBtn.addEventListener("click", writePassword);


// We need the user to click on the button

// lengty
//  the inputs we need from the user are. 
// lower case 
// upper 
// symbols 
// or numbers?