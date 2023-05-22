// Get references to HTML elements
const errorMessageElement = document.querySelector('.errorMessage');
const inputTextElement = document.querySelector('.input-box');
const greetBtnElement = document.querySelector('.greetBtn');
const resetBtnElement = document.querySelector('.resetButton');
const chooseLanguageElement = document.querySelector('.chooseLanguageRadio');
const greetMessageElement = document.querySelector('.message');
const counterElement = document.querySelector('.counter');

// Call the factory function
const greet = Greeting();

function greetDOM() {
  const checkedRadioBtn = document.querySelector("input[name='chooseLanguage']:checked");

  if (!checkedRadioBtn) {
    errorMessageElement.innerHTML = 'Choose a language';
    errorMessageElement.style.display = 'block';
    setTimeout(function () {
      errorMessageElement.style.display = 'none';
    }, 2000);
    return;
  }

  const languages = checkedRadioBtn.value;
  const name = inputTextElement.value.trim();

  if (!greet.inputString(name)) {
    errorMessageElement.innerHTML = 'Enter a valid name';
    errorMessageElement.style.display = 'block';
    setTimeout(function () {
      errorMessageElement.style.display = 'none';
    }, 2000);
    return;
  }

  errorMessageElement.style.display = 'none';

  if (languages === 'Swati') {
    greetMessageElement.innerHTML = greet.swatiGreet(name);
    greet.getSwatiGreetings();
    counterElement.innerHTML = greet.getAllGreetings();
  } else if (languages === 'English') {
    greetMessageElement.innerHTML = greet.englishGreet(name);
    greet.getEnglishGreetings();
    counterElement.innerHTML = greet.getAllGreetings();
  } else if (languages === 'Sotho') {
    greetMessageElement.innerHTML = greet.sothoGreet(name);
    greet.getSothoGreetings();
    counterElement.innerHTML = greet.getAllGreetings();
  }

  // Update greeting counts in local storage
  const greetings = {
    swatiGreetings: greet.getSwatiGreetings(),
    englishGreetings: greet.getEnglishGreetings(),
    sothoGreetings: greet.getSothoGreetings()
  };
  localStorage.setItem('greetings', JSON.stringify(greetings));
}


// Get  greeting counts from local storage
const storedGreetings = localStorage.getItem('greetings');
if (storedGreetings) {
  const parsedGreetings = JSON.parse(storedGreetings);
  greet.swatiGreetings = parsedGreetings.swatiGreetings || 0;
  greet.englishGreetings = parsedGreetings.englishGreetings || 0;
  greet.sothoGreetings = parsedGreetings.sothoGreetings || 0;
  counterElement.innerHTML = greet.getAllGreetings();
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
