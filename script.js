const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
const rand = Math.floor(Math.random() * letters.length);
// Assignment Code
var generateBtn = document.querySelector("#generate");
const lenght = 8;

function generatePassword(){
  
 
  
  return  getRandomNumber() + getRandomLower() + getRandomUpper() + getRandomSymbol() 
  + length ; 
}


// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








/*const random ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol,
  length :  10,
}*/



function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]=<>.,';
  return symbols[Math.floor(Math.random()* symbols.length)];
}
