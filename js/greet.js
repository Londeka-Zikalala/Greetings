function Greeting(){
    var alreadyGreeted = {};
    var greetingsCounter = 0;

    function inputString(name) {
      const regex = /^[a-zA-Z]+$/;
      return typeof name === 'string' && name.trim() !== '' && regex.test(name.trim());
    }
    
    
  function greetFunction(name, language) {
    if (!inputString(name) || language === "") {
      return 'Select a language and enter a valid name';
    }
    if (!alreadyGreeted[inputString(name)] && language === 'Swati') {
      greetingsCounter++;
      return 'Sawubona ' + name;
    } else if (!alreadyGreeted[inputString(name)] && language === 'English') {
      greetingsCounter++;
      return 'Hello ' + name;
    } else if (!alreadyGreeted[inputString(name)] && language === 'Sotho') {
      greetingsCounter++;
      return 'Dumela ' + name;
    }
  }
      

        function getCounter(){
            return greetingsCounter
        }
        function reset(){
            greetingsCounter = 0;
            alreadyGreeted = {};
            return greetingsCounter, alreadyGreeted
            
        }
    return {
        inputString,
        greetFunction,
        getCounter,
        reset
    }
  }