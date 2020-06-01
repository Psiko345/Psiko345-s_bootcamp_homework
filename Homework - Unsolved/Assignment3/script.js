// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);

//Prompt: Password length (8-128 Characters)
//1. prompt user for max length, 
//2. set min length to 8
//3. save length of password in characters
//4. ensure user can only enter numbers / re-run prompt if any letters are entered

let passwordLength = prompt("How many characters long do you want your password? (8 - 128)")
  


//Prompt: Special Characters?
//1. prompt user if they want to use special characters
//2. if yes, allow generate to access array of special characters
//3. if no, do not allow access to array

prompt("Do you want to use special Characters?")
let specialCharacters = ["!#$%&()*+,-./:<=>?@[\]^_`{|}~"]


//Prompt: Integers?
//1. prompt user if they want to use numbers
//2. if yes, allow generate to access array of numbers
//3. if no, do not allow access to array

prompt("Do you want to use numbers?")
let allNumbers = ["1234567890"]

//Prompt: Uppercase?
//1. prompt user if they want to use Uppercase
//2. if yes, allow generate to access array of Uppercase
//3. if no, do not allow access to array

prompt("Do you want to use uppercase letters?")
let upperCaseletters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

//Prompt: Lowercase
//1. prompt user if they want to use lowercase
//2. if yes, allow generate to access array of lowercase
//3. if no, do not allow access to array

prompt("Do you want to use lowercase letters?")
let lowerCaseletters = ["abcdefghijklmnopqrstuvwxyz"]

//Define allowed arrays
// specialcharacters array
// numbers array
// uppercase array
// lowercase array

function getRandomCharset(allowedArrays) {
  return Math.floor(Math.random()* allowedArrays)
}

function allowedArrays(specialCharacters, allNumbers, upperCaseletters, lowerCaseletters) {

  if (specialCharacters === true) {
    return "allowed"
  } else if (specialCharacters === false) {
    return "notAllowed"
  }

  if (numbers === true) {
    return "allowed"
  } else if (numbers === false) {
    return "notAllowed"
  }

  if (upperCaseletters === true) {
    return "allowed"
  } else if (upperCaseletters === false) {
    return "notAllowed"
  }

  if (lowerCaseletters === true) {
    return "allowed"
  } else if (lowerCaseletters === false) {
    return "notAllowed"
  }
}

//Generate password
// when generate button is clicked, follow prompts
// when prompts followed, generate password 
// look at allowed length of password
// look at allowedArrays
// am i allowed special characters? IF YES, access array / IF NO, skip array
// am i allowed numbers? IF YES, access array / IF NO, skip array
// am i allowed uppercase? IF YES, access array / IF NO, skip array
// am i allowed lowercase? IF YES, access array / IF NO, skip array
// given "passwordLength", run through "allowedArrays" for each character, choosing randomly
// disply resulting password


for (let i = 0; i <= passwordLength; i++) {
  password = password + 
}

//Display password
document.getElementById("passwordDisplay").value = password;

