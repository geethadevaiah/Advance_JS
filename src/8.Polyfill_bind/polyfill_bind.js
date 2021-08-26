// trying to implement the polyfill for bind method
// what is polyfill ? :: It is the piece of code used to provide modern functionality to older browsers that do not support the features

// bind() method is used to bind the object with specific function

//  EX:
 
 let obj1  = {
      name : 'geetha',
      place: 'Bangalore'
 }
 
 function fun (){
  console.info(this.name+ ' is from '+this.place);
 }
 // binding the obj
 let funfun = fun.bind(obj1)
//  funfun();
 
//  ====================

Function.prototype.mybind = function(...args){
    let obj = this
    let params = args[0];
    let arguments1 = args.slice(1);
    return function(...args1){
        
        obj.apply(params, [...arguments1, ...args1]);
    }
}


let funfun2 = fun.mybind(obj1); 
funfun2()


/**
 * mybind return a function..
 * get the context of the invoking function(fun) -> obj to call later
 * get the context of the arguments to be invoked(obj1) -> args[0]
 * get the context of the remaining arguments if exists to concatenate with other arguments
 * 
 * then in return function call the saved context (obj) with apply method to include all arguments
 */