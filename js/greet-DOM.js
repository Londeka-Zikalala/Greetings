// Get references to HTML elements
const errorMessageElement = document.querySelector('.errorMessage');
const inputTextElement = document.querySelector('.input-box');
const greetBtnElement = document.querySelector('.greetBtn');
const resetBtnElement = document.querySelector('.resetButton');
const chooseLanguageElements = document.querySelectorAll('.chooseLanguageRadio');
const greetMessageElement = document.querySelector('.message');
const counterElement = document.querySelector('.counter');

// Call the factory function
const greet = Greeting();

function greetDOM() {
  const checkedRadioBtn = document.querySelector("input[name='chooseLanguage']:checked");
  const name = greet.inputString(inputTextElement.value);

  let language = '';
  if (checkedRadioBtn) {
    language = checkedRadioBtn.value;
  }

 

  const errorMessage = greet.errorMessages(name, language);
  if (errorMessage) {
    errorMessageElement.innerHTML = errorMessage;
    errorMessageElement.style.display = 'block';
    setTimeout(function () {
      errorMessageElement.style.display = 'none';
    }, 2000);
    inputTextElement.value = '';
    greetMessageElement.innerHTML = '';
    return;
  }
  const repeatedName = greet.greetedFunction(name); 

  if (repeatedName) {
    errorMessageElement.innerHTML = 'Already greeted ' + name;
    errorMessageElement.style.display = 'block';
    setTimeout(function () {
      errorMessageElement.style.display = 'none';
    }, 2000);
    inputTextElement.value = '';
    greetMessageElement.innerHTML = '';
    return;
  }

  greetMessageElement.innerHTML = greet.greetFunction(name, language);
  counterElement.innerHTML = "Greetings: " + greet.getCounter();
  inputTextElement.value = '';

  // Update greeting counts in local storage
  const greetings = {
    greetingsCounter: greet.getCounter(),
  };

  localStorage.setItem('greetings', JSON.stringify(greetings));
}

// Get greeting counts from local storage
const storedGreetings = localStorage.getItem('greetings');
if (storedGreetings) {
  const parsedGreetings = JSON.parse(storedGreetings);
  greet.greetingsCounter = parsedGreetings.greetingsCounter || 0;
  counterElement.textContent = "Greetings: " + greet.getCounter(); // Updated to include "Greetings: "
}

greetBtnElement.addEventListener('click', greetDOM);

function theReset() {
  greet.reset();
  inputTextElement.value = '';
  errorMessageElement.style.display = 'none';
  greetMessageElement.innerHTML = '';
  counterElement.innerHTML = 'Greetings: ' + 0;
  const checkedRadioBtn = document.querySelector("input[name='chooseLanguage']:checked");
  if (checkedRadioBtn) {
    checkedRadioBtn.checked = false;
  }
}

resetBtnElement.addEventListener('click', theReset);
