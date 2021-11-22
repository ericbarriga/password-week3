//dom elemets get elements from the html 
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');




//where to store all the random functions
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};



// eventListener 
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasSymbol = symbolsEl.checked;
  const hasNumber = numbersEl.checked;


  resultEl.innerText = generatePassword(hasNumber, hasSymbol, hasUpper, hasLower, length);
});



// Generate password function 

function generatePassword(lower, upper, number, symbol, length) {

  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;


  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
      item => Object.values(item)[0]
    );


  if (typesCount === 0) {
    return '';
  }
  //loop 
  for (let i = 0; i < length; i += typesCount) {
    typeArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatePassword += randomFunc[funcName]();
    });
  }
  // final password 
  const finalPassword = (generatePassword.slice(0, length));
  return finalPassword;


}


// functions to get random letters and numbers 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()_+=[]{}?/.,<>'
  return symbols[Math.floor(Math.random() * symbols.length)]
}




