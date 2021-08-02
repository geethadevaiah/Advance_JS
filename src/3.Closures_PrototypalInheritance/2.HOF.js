// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...


// You should be able to do:
const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4) // 8






//---- solution-----


// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...
const multiplyBy = (num1) => {
  return function (num2) {
    return num1 * num2;
  }
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)