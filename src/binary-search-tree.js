const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root_ = null;
  }

  root() {
    return this.root_;
  }

  add(data) {
    this.root_ = addWithin(this.root_, data)
    
      function addWithin(node, data)  {
        if (!node) {
          return new Node(data);
        }
        if (node.data === data) {
          return node;
        }
        if (data < node.data) {
          node.left = addWithin(node.left, data);
        } else {
          node.right = addWithin(node.right, data);
        }
        return node;
      }
    }
  

  has(data) {
    
  }

  find(data) {
    
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};