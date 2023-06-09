// Get references to HTML elements
const errorMessageElement = document.querySelector('.errorMessage');
const inputTextElement = document.querySelector('.input-box');
const greetBtnElement = document.querySelector('.greetBtn');
const resetBtnElement = document.querySelector('.resetButton');
const chooseLanguageElements = document.querySelectorAll('.chooseLanguageRadio');
const greetMessageElement = document.querySelector('.message');
const counterElement = document.querySelector('.counter');
const alertElement = document.querySelector('.alert');

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
    checkedRadioBtn.checked = false;
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
    checkedRadioBtn.checked = false;
    return;
  }

  greetMessageElement.innerHTML = greet.greetFunction(name, language);
  counterElement.innerHTML = "Greetings: " + greet.getCounter();
  inputTextElement.value = '';
  if (checkedRadioBtn !== null) { // Check if checkedRadioBtn is not null
    checkedRadioBtn.checked = false;
  }

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
  counterElement.textContent = "Greetings: " +  greet.greetingsCounter;
}

greetBtnElement.addEventListener('click', greetDOM);

function theReset() {
  // Confirmation alert before resetting
  const confirmReset = confirm("Are you sure you want to reset?");
  if (confirmReset) {
  greet.reset();
  inputTextElement.value = '';
  errorMessageElement.style.display = 'none';
  greetMessageElement.innerHTML = '';
  counterElement.innerHTML = 'Greetings: ' + 0;
  const checkedRadioBtn = document.querySelector("input[name='chooseLanguage']:checked");
  if (checkedRadioBtn !== null) { // Check if checkedRadioBtn is not null
    checkedRadioBtn.checked = false;
  }
    alertElement.innerHTML = "Counter reset successful";
    localStorage.clear();//reset local storage
  }
}


resetBtnElement.addEventListener('click', theReset);
