function Greeting(){
    var name = "";
    var alreadyGreeted = {};
    var swatiGreetings= 0;
    var englishGreetings = 0;
    var sothoGreetings = 0;

    function inputString(name){
       return typeof  name === 'string' && name.trim()
    }

    function swatiGreet(name){
        if (inputString(name)) {
            if (!alreadyGreeted[name]) {
              alreadyGreeted[name] = true; 
              swatiGreetings++;  
            }
            return 'Sawubona ' + name;
          } else {
            return 'Enter a valid name';
          }
        }
    
        function englishGreet(name){
            if (inputString(name)) {
                if (!alreadyGreeted[name]) {
                  alreadyGreeted[name] = true; 
                  englishGreetings++;  
                }
                return 'Hello ' + name;
              } else {
                return 'Enter a valid name';
              }
            
        }
        function sothoGreet(name){
            if (inputString(name)) {
                if (!alreadyGreeted[name]) {
                  alreadyGreeted[name] = true; 
                  sothoGreetings++;  
                }
                return 'Dumela ' + name;
              } else {
                return 'Enter a valid name';
              }
        }
    
        function getSwatiGreetings(){
            return swatiGreetings
        }

        function getEnglishGreetings(){
            return englishGreetings
        }

        function getSothoGreetings(){
            return sothoGreetings
        }
        function getAllGreetings(){
            var allGreetings = sothoGreetings + swatiGreetings + englishGreetings;
            return allGreetings;
        }
        function reset(){
            swatiGreetings = 0;
            englishGreetings = 0;
            sothoGreetings = 0;
            return swatiGreetings, englishGreetings, sothoGreetings 
            
        }
    return {
        inputString,
        swatiGreet,
        englishGreet,
        sothoGreet,
        getSwatiGreetings,
        getEnglishGreetings,
        getSothoGreetings,
        getAllGreetings,
        reset
    }
}

//DOM CODE
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
    var checkedRadioBtn = document.querySelector("input[name='chooseLanguage']:checked");
    if (checkedRadioBtn) {
      const languages = checkedRadioBtn.value;
      const name = inputTextElement.value;
  
      if (greet.inputString(name)) {
        if (languages === "") {
          errorMessageElement.innerHTML = 'Choose a language';
          errorMessageElement.style.display = 'block';
          
        } else if (languages === 'Swati') {
          greetMessageElement.innerHTML = greet.swatiGreet(name);
        } else if (languages === 'English') {
          greetMessageElement.innerHTML = greet.englishGreet(name);
        } else if (languages === 'Sotho') {
          greetMessageElement.innerHTML = greet.sothoGreet(name);
        }
      } else {
        errorMessageElement.innerHTML = 'Enter a valid name';
        errorMessageElement.style.display = 'block';
    
      }

    } 
  
    errorMessageElement.classList.add('errorMessage');
  }
  
  greetBtnElement.addEventListener('click', greetDOM);

  
  function theReset(){
    greet.reset();
    
  inputTextElement.value = ''; 
  errorMessageElement.style.display = 'none'; 
  greetMessageElement.innerHTML = ''; 
  }

  resetBtnElement.addEventListener('click', theReset)