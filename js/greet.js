function Greeting() {
  var alreadyGreeted = {};
  var greetingsCounter = 0;

  function inputString(name) {
    const regex = /^[a-zA-Z]+$/i;
    return typeof name === 'string' && name.trim() !== '' && regex.test(name.trim()) ? name.toLowerCase() : '';
  }

  function greetedFunction(name, language) {
    if (alreadyGreeted[inputString(name)] && alreadyGreeted[inputString(name)][language]) {
      return 'Name already greeted in ' + language;
    } else {
      alreadyGreeted[inputString(name)] = alreadyGreeted[inputString(name)] || {};
      alreadyGreeted[inputString(name)][language] = true;
      greetingsCounter++;
      return false;
    }
  }

  function greetFunction(name, language) {
    if (!inputString(name) || language === "") {
      return 'Select a language and enter a valid name';
    } else {
      if (language === 'Swati') {
        return 'Sawubona ' + name;
      } else if (language === 'English') {
        return 'Hello ' + name;
      } else if (language === 'Sotho') {
        return 'Dumela ' + name;
      }
    }
  }

  function getCounter() {
    return greetingsCounter;
  }

  function reset() {
    greetingsCounter = 0;
    alreadyGreeted = {};
    return greetingsCounter, alreadyGreeted;
  }

  return {
    inputString,
    greetedFunction,
    greetFunction,
    getCounter,
    reset
  };
}
