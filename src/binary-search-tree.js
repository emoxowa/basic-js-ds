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
    return searchWithin(this.root_, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
         return searchWithin(node.right, data);
      }
    }

  }

  find(data) {
    return searchWithin(this.root_, data);

    function searchWithin(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }

  }

  remove(data) {
    
  }

  min() {
    if (!this.root_) {
      return
    } 
    let node = this.root_;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
     if (!this.root_) {
       return;
     }
     let node = this.root_;
     while (node.right) {
       node = node.right;
     }
     return node.data;   
  }
}

module.exports = {
  BinarySearchTree
};