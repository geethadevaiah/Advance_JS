// Make it so that the initialize function can only be called once!
let view;
function initialize() {
      view = '🏔';
      console.log('view has been set!')
}

initialize();
initialize();
initialize();

console.log(view)



// Solution
let view;
function initialize() {
  let called = 0;
  return function() {
    if (called > 0) {
      return
    } else {
      view = '🏔';
      called = true;
      console.log('view has been set!')
    }

  }
}

const start = initialize();
start();
start();
start();
console.log(view)
