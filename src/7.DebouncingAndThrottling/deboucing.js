let counter = 0;
const getData = function(){
    console.info("get data ", counter++);
}

// debounce call
const debounce = function(fn, delay){
    let timer; // get the timer to clear later
    return function(){
        let obj = this, // get the current context
        args = arguments; // get the arguments
        clearTimeout(timer); // clear previous timeouts
        timer = setTimeout(function(){
            fn.apply(obj, arguments); // apply the main call with arguments
        }, delay); // n dela
    }
}

// on key up call 
const onKeyupSearchFunction = debounce(getData, 300);