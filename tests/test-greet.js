describe('The greetings function', function(){
    it('should input word strings only', function(){
        var greeter = Greeting();
        let invalid = 256
        assert.equal(greeter.inputString(invalid), false)
    })
    it('should recognise "john" and "John" as the same name', function(){
        var greeter = Greeting();
        var name = 'John'
        var name2 = 'john'
        assert.equal(greeter.inputString(name), 'john')
        assert.equal(greeter.inputString(name2), 'john')

    })
    it('should greet any name in Swati', function(){
        var greeter = Greeting();
        assert.equal(greeter.greetFunction('Londeka', 'Swati'), 'Sawubona Londeka')
        assert.equal(greeter.greetFunction('Nate', 'Swati'), 'Sawubona Nate')
        assert.equal(greeter.greetFunction('Nsovo', 'Swati'), 'Sawubona Nsovo')
    })

    it('should greet any name in Sotho', function(){
        var greeter = Greeting();
        assert.equal(greeter.greetFunction('Londeka', 'Sotho'), 'Dumela Londeka')
        assert.equal(greeter.greetFunction('Nate', 'Sotho'), 'Dumela Nate')
        assert.equal(greeter.greetFunction('Nsovo', 'Sotho'), 'Dumela Nsovo')


    })

    it('should greet any name in English',function(){
        var greeter = Greeting();
        assert.equal(greeter.greetFunction('Londeka', 'English'), 'Hello Londeka')
        assert.equal(greeter.greetFunction('Nate', 'English'), 'Hello Nate')
        assert.equal(greeter.greetFunction('Nsovo', 'English'), 'Hello Nsovo')

    })
    })

   
describe('greeting counters',function(){
    it('should not increment the counter if a name has already been greeted', function(){
        var greeter = Greeting();
        greeter.greetedFunction('Londeka')
        greeter.greetFunction('Londeka', 'Swati')
        greeter.greetFunction('Londeka', 'Swati')

        assert.equal(greeter.getCounter(), 1)


    })
    it('should keep a count of Swati greetings', function(){
        var greeter = Greeting();
        greeter.greetFunction('Nsovo', 'Swati')
        greeter.greetFunction('Lala', 'Swati')
        greeter.greetFunction('Nate','Swati')
        greeter.greetFunction('Londeka','Swati')
            greeter.greetedFunction('Nsovo');
            greeter.greetedFunction('Lala');
            greeter.greetedFunction('Nate');
            greeter.greetedFunction('Londeka');

        assert.equal(greeter.getCounter(), 4)
    })
    it('should keep a count of Sotho greetings', function(){
        var greeter = Greeting();
        greeter.greetFunction('Nsovo', 'English')
        greeter.greetFunction('Lala', 'English')
        greeter.greetFunction('Nate','English')
        greeter.greetFunction('Londeka','English')
            greeter.greetedFunction('Nsovo');
            greeter.greetedFunction('Lala');
            greeter.greetedFunction('Nate');
            greeter.greetedFunction('Londeka');

        assert.equal(greeter.getCounter(), 4)
    })
    
    it('should keep a count of English greetings', function(){
        var greeter = Greeting();
        greeter.greetFunction('Nsovo', 'Sotho')
        greeter.greetFunction('Lala', 'Sotho')
        greeter.greetFunction('Nate','Sotho')
        greeter.greetFunction('Londeka','Sotho')
            greeter.greetedFunction('Nsovo');
            greeter.greetedFunction('Lala');
            greeter.greetedFunction('Nate');
            greeter.greetedFunction('Londeka');

        assert.equal(greeter.getCounter(), 4)
    })

    it('should keep a count of all greetings', function(){
        var greeter = Greeting();
        greeter.greetFunction('Nsovo', 'Swati')
        greeter.greetFunction('Lala', 'Sotho')
        greeter.greetFunction('Nate','English')
        greeter.greetFunction('Londeka','Swati')
            greeter.greetedFunction('Nsovo');
            greeter.greetedFunction('Lala');
            greeter.greetedFunction('Nate');
            greeter.greetedFunction('Londeka');

        assert.equal(greeter.getCounter(), 4)
    })


})
    

describe('error messages', function(){
    it('should give an error message of "Select a language and enter a valid name" when an invalid input is made', function(){
        var greeter = Greeting();

        assert.equal(greeter.greetFunction(1234 , 'Swati'), 'Select a language and enter a valid name')
    })
    it('should give an error message of "Select a language and enter a valid name" when a language is not selected', function(){
        var greeter = Greeting();

        assert.equal(greeter.greetFunction('Londeka' , ''), 'Select a language and enter a valid name')
    })
    it('should give an error message of "Already greeted Thabang" when Thabang has been greeted', function(){
        var greeter = Greeting();
    
        greeter.greetFunction('Thabang', 'Swati')
        greeter.greetFunction('Thabang', 'English')
        greeter.greetedFunction('Thabang')
        assert.equal(greeter.greetedFunction('Thabang'), 'Already greeted Thabang');
    })


})

