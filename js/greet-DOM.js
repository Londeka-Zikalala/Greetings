//get references to HTML elements
const errorMessageElement = document.querySelector('.errorMessage');
const inputTextElement = document.querySelector('.input-box')
const greetBtnElement = document.querySelector('.greetBtn')
const resetBtnElement = document.querySelector('.resetButton')
const chooseLanguageElement = document.querySelector('.chooseLanguageRadio')
const greetMessageElement = document.querySelector('.message')

// call the factory function

const greet = Greeting();

function greetDOM() {
    const checkedRadioBtn = document.querySelector("input[name='chooseLanguage']:checked");
  
    if (!checkedRadioBtn) {
      errorMessageElement.innerHTML = 'Choose a language';
      errorMessageElement.style.display = 'block';
      setTimeout(function() {
        errorMessageElement.style.display = 'none';
      }, 2000); 
      
    }
  
    const languages = checkedRadioBtn.value;
    const name = inputTextElement.value.trim();
  
    if (!greet.inputString(name)) {
      errorMessageElement.innerHTML = 'Enter a valid name';
      errorMessageElement.style.display = 'block';
      setTimeout(function() {
        errorMessageElement.style.display = 'none';
      }, 2000);
      
    }
  
    errorMessageElement.style.display = 'none';
  
    if (languages === 'Swati') {
      greetMessageElement.innerHTML = greet.swatiGreet(name);
    } else if (languages === 'English') {
      greetMessageElement.innerHTML = greet.englishGreet(name);
    } else if (languages === 'Sotho') {
      greetMessageElement.innerHTML = greet.sothoGreet(name);
    }
  }
  
  
  greetBtnElement.addEventListener('click', greetDOM);

  
  function theReset(){
    greet.reset();
  inputTextElement.value = ''; 
  errorMessageElement.style.display = 'none'; 
  greetMessageElement.innerHTML = ''; 
  const checkedRadioBtn = document.querySelector("input[name='chooseLanguage']:checked");
  if (checkedRadioBtn) {
    checkedRadioBtn.checked = false;
  }

  }

  resetBtnElement.addEventListener('click', theReset)