function Greeting(){
    var name = "";
    var alreadyGreeted = {};
    var swatiGreetings= 0;
    var englishGreetings = 0;
    var sothoGreetings = 0;

    function inputString(name){
       return typeof  name === 'String'
    }

    function swatiGreet(name){
        if(inputString(name)){
            swatiGreetings++
            return 'Sawubona' + name;
        }
        else if(!inputString(name)){
            return 'Enter a valid name'
        }
        else if(alreadyGreeted[name]){
            return 'Enter a different name'
        }
    }
        function englishGreet(name){
            if(inputString(name)){
                englishGreetings++;
                return 'Sawubona' + name;
            
            }
            else if(!inputString(name)){
                return 'Enter a valid name'
            }
            else if(alreadyGreeted[name]){
                return 'Enter a different name'
            }
        }
        function sothoGreet(name){
            if(inputString(name)){
                sothoGreetings++;
                alreadyGreeted.push(name);
                return 'Dumela' + name;
            }
            else if(!inputString(name)){
                return 'Enter a valid name'
            }
            else if(alreadyGreeted[name]){
                return 'Enter a different name'
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
        reset
    }
}