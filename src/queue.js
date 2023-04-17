const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    if (!this.head) {
      return null;
    }
    const removedHead = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return removedHead.value;
  }
}

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  getUnderlyingList() {
    return this.linkedList.head;
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    return this.linkedList.removeHead();
  }
}

module.exports = {
  Queue
};

// const queue = new Queue;
// console.log(queue);
// console.log(queue.queue);
// console.log(queue.queue.push(2));
// console.log(queue.queue.push(3));
// console.log(queue.queue.push(4));
// console.log(queue.queue.push(5));
// console.log(queue);
// console.log(queue.queue.shift());
// console.log(queue);



