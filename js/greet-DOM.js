// Get references to HTML elements
let errorMessageElement = document.querySelector('.errorMessage');
let inputTextElement = document.querySelector('.input-box');
let greetBtnElement = document.querySelector('.greetBtn');
let resetBtnElement = document.querySelector('.resetButton');
let swatiLanguageElement = document.querySelector('.chooseSwatiRadio');
let englishLanguageElement = document.querySelector('.chooseEnglishRadio');
let sothoLanguageElement = document.querySelector('.chooseSothoRadio');
let greetMessageElement = document.querySelector('.message');
let counterElement = document.querySelector('.counter');

// Call the factory function
const greet = Greeting();

function greetDOM() {
  const checkedRadioBtn = document.querySelector("input[name='chooseLanguage']:checked");
  const name = inputTextElement.value.trim();

  if(!checkedRadioBtn || !greet.inputString(name) ) {
    errorMessageElement.innerHTML = 'Choose a language and enter a valid string';
    errorMessageElement.style.display = 'block';
    setTimeout(function () {
      errorMessageElement.style.display = 'none';
    }, 2000);
    return;
  }

  if (swatiLanguageElement.checked) {
    greetMessageElement.innerHTML = greet.greetFunction(name, 'Swati');
    counterElement.innerHTML = greet.getCounter();
  } else if (englishLanguageElement.checked) {
    greetMessageElement.innerHTML = greet.greetFunction(name, 'English');
    counterElement.innerHTML = greet.getCounter();
  } else if (sothoLanguageElement.checked) {
    greetMessageElement.innerHTML = greet.greetFunction(name, 'Sotho');
    counterElement.innerHTML = greet.getCounter();
  }
  

  /*if (!greet.inputString(name)) {
    errorMessageElement.innerHTML = 'Enter a valid name';
    errorMessageElement.style.display = 'block';
    setTimeout(function () {
      errorMessageElement.style.display = 'none';
    }, 2000);
    return;
  }*/

  // Update greeting counts in local storage
  const greetings = {
    greetingsCounter: greet.getCounter(),
  };

  localStorage.setItem('greetings', JSON.stringify(greetings));
}


// Get  greeting counts from local storage
const storedGreetings = localStorage.getItem('greetings');
if (storedGreetings) {
  const parsedGreetings = JSON.parse(storedGreetings);
  greet.greetingsCounter= parsedGreetings.greetingsCounter || 0;
  counterElement.innerHTML = greet.getCounter();
}



greetBtnElement.addEventListener('click', greetDOM);

function theReset() {
  greet.reset();
  inputTextElement.value = '';
  errorMessageElement.style.display = 'none';
  greetMessageElement.innerHTML = '';
  const checkedRadioBtn = document.querySelector("input[name='chooseLanguage']:checked");
  if (checkedRadioBtn) {
    checkedRadioBtn.checked = false;
  }

  counterElement.innerHTML = 0;
}

resetBtnElement.addEventListener('click', theReset);
