// Write your solution here!
const cats  = ['Milo', 'Otis', 'Garfield'];



    function destructivelyAppendCat(name){
        console.log("Name:",name);
        cats.push('Ralph');
        
    }

    function destructivelyPrependCat(name){
        console.log("Name:", name);
        cats.unshift('Bob');


    }

    function destructivelyRemoveFirstCat(name){
         console.log("Name:",name);
         cats.shift('Bob');


    }

    function destructivelyRemoveLastCat(name){
        console.log("Name:",name);
        cats.pop('Ralph');

    }

    function appendCat(name){
        return [...cats,(name)];
    } 
    function prependCat(name){
        return [(name),...cats];
    }
    function removeLastCat(name){
        return cats.slice(0,length -1);
    }

    function removeFirstCat(name){
        return cats.slice(1,cats.slicelength);
    }