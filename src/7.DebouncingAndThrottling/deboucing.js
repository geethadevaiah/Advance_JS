let counter = 0;
let timer; // get the timer to clear later

const getData = function(){
    console.info("get data ", counter++);
}

// debounce call
const debounce = function(fn, delay){
    
    return function(){
        let obj = this, // get the current context
        args = arguments; // get the arguments
        clearTimeout(timer); // clear previous timeouts
        timer = setTimeout(function(){
            fn.apply(obj, arguments); // apply the main call with arguments
        }, delay); // n delay
    }
}

// on key up call 
// call debounce of getData only when there is 300ms time diff in keypress 
const onKeyupSearchFunction = debounce(getData, 300);