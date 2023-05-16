describe('The greetings function', function(){
    it('should input word strings only', function(){
        var greeter = Greeting();
        let name = 'Londeka'
        let invalid = 256
        assert.equal(greeter.inputString(name), false)
        assert.equal(greeter.inputString(invalid), false)
    })

    it('should greet any name in Swati', function(){
        var greeter = Greeting();
        assert.equal(greeter.swatiGreet(Londeka), 'Sawubona Londeka')
    })

    it('should greet any name in Sotho', function(){

    })

    it('should greet any name in English',function(){

    })
    it('should greet any name in each language once only', function(){

    })
    it('should keep a count of Swati greetings', function(){

    })
    it('should keep a count of Sotho greetings', function(){
        
    })
    it('should keep a count of English greetings', function(){
        
    })

})

describe('error messages', function(){
    it('should give an error message of "Enter a valid name" when an invalid input is made', function(){
        
    })
    it('should give an error message of "Enter a different name" when a name has been previously greeted"', function(){
        
    })
    it('should give an error message of "Choose a language" when the greet button is clicled without selecting a language', function(){
        
    })


})

describe('The local storage', function(){

    it('should keep a count of greetings in the local storage', function(){
        
    })
it('should reset the greetings counter once the reset button is clicked', function(){
        
    })

})