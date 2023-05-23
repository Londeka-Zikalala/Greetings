function Greeting(){
    var alreadyGreeted = {};
    var swatiGreetings= 0;
    var englishGreetings = 0;
    var sothoGreetings = 0;
    var allGreetings = 0;

    function inputString(name) {
      return typeof name === 'string' && name.trim() !== "" && name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
    }
    

    function swatiGreet(name){
      if (!inputString(name)) {
        return 'Enter a valid name';}

          if (!alreadyGreeted[name]) {
            alreadyGreeted[name] = true; 
            swatiGreetings++;  
          return 'Sawubona ' + name  
        }
        }
    
        function englishGreet(name){

            if (!inputString(name)) {
              return 'Enter a valid name';}

                if (!alreadyGreeted[name]) {
                  alreadyGreeted[name] = true; 
                  englishGreetings++;  
                return 'Hello ' + name  
              }
            
        }
        function sothoGreet(name){
          if (!inputString(name)) {
            return 'Enter a valid name';}

              if (!alreadyGreeted[name]) {
                alreadyGreeted[name] = true; 
                sothoGreetings++;  
              return 'Dumela ' + name  
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
            allGreetings = sothoGreetings + swatiGreetings + englishGreetings;
            return allGreetings;
        }
        function reset(){
            swatiGreetings = 0;
            englishGreetings =0
            sothoGreetings = 0;
            allGreetings = 0
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