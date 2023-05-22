describe('The greetings function', function(){
    it('should input word strings only', function(){
        var greeter = Greeting();
        let name = 'Londeka'
        let invalid = 256
        assert.equal(greeter.inputString(name), true)
        assert.equal(greeter.inputString(invalid), false)
    })

    it('should greet any name in Swati', function(){
        var greeter = Greeting();
        assert.equal(greeter.swatiGreet('Londeka'), 'Sawubona Londeka')
        assert.equal(greeter.swatiGreet('Nate'), 'Sawubona Nate')
        assert.equal(greeter.swatiGreet('Nsovo'), 'Sawubona Nsovo')
    })

    it('should greet any name in Sotho', function(){
        var greeter = Greeting();
        assert.equal(greeter.sothoGreet('Londeka'), 'Dumela Londeka')
        assert.equal(greeter.sothoGreet('Nate'), 'Dumela Nate')
        assert.equal(greeter.sothoGreet('Nsovo'), 'Dumela Nsovo')



    })

    it('should greet any name in English',function(){
        var greeter = Greeting();
        assert.equal(greeter.englishGreet('Londeka'), 'Hello Londeka')
        assert.equal(greeter.englishGreet('Nate'), 'Hello Nate')
        assert.equal(greeter.englishGreet('Nsovo'), 'Hello Nsovo')
    })

   
    })
describe('greeting counters',function(){
    it('should not increment the counter if a name is greeted more than once for each language', function(){
        var greeter = Greeting();
        greeter.englishGreet('Londeka')
        greeter.englishGreet('Londeka')

        assert.equal(greeter.getEnglishGreetings('Londeka'), 1)


    })
    it('should keep a count of Swati greetings', function(){
        var greeter = Greeting();
        greeter.englishGreet('Nsovo')
        greeter.swatiGreet('Lala')
        greeter.swatiGreet('Nate')
        greeter.swatiGreet('Londeka')

        assert.equal(greeter.getSwatiGreetings(), 3)
    })
    it('should keep a count of Sotho greetings', function(){
        var greeter = Greeting();
        greeter.sothoGreet('Nsovo')
        greeter.englishGreet('Lala')
        greeter.sothoGreet('Nate')
        greeter.swatiGreet('Londeka')

        assert.equal(greeter.getSothoGreetings(), 2)
    })
    
    it('should keep a count of English greetings', function(){
        var greeter = Greeting();
        greeter.englishGreet('Nsovo')
        greeter.englishGreet('Lala')
        greeter.englishGreet('Nate')
        greeter.swatiGreet('Londeka')

        assert.equal(greeter.getEnglishGreetings(), 3)
    })

    it('should keep a count of all greetings', function(){
        var greeter = Greeting();
        greeter.englishGreet('Nsovo')
        greeter.englishGreet('Lala')
        greeter.englishGreet('Nate')
        greeter.swatiGreet('Londeka')
        greeter.sothoGreet('Londeka')


        assert.equal(greeter.getAllGreetings(), 4)
    })


})
    

describe('error messages', function(){
    it('should give an error message of "Enter a valid name" when an invalid input is made', function(){
        var greeter = Greeting();

        assert.equal(greeter.englishGreet(1234), 'Enter a valid name')
    })


})

describe('The local storage', function(){

    it('should keep a count of greetings in the local storage', function(){
        
    })
it('should reset the greetings counter once the reset button is clicked', function(){
        
    })

})