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