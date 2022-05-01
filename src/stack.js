const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack
};

// const mass = new Stack;
// console.log(mass);
// console.log(mass.stack);
// console.log(mass.stack.push(1));
// console.log(mass.stack.push(2));
// console.log(mass.stack.push(3));
// console.log(mass.stack.push(4));
// console.log(mass);
// console.log(mass.stack.pop());
// console.log(mass.stack.pop());
// console.log(mass);
// console.log(mass.stack.peek());


