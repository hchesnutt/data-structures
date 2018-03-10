class AVLTree {
  constructor() {
    this._root = null;
  }
  
  insert(value) {
    var newNode = this.AVLNode(value);
    // BST insert with height update
    this.bstInsert(newNode, this._root);
    console.log(this._root);
    // check for imbalanced nodes, calls cb on node
    this.checkForImbalance(newNode);
    // if left or right imbalance
    // check appropriate child imbalance for outer or inner
    // pass imbalanced node to balancing function
  }
  
  delete(value) {
    // return deleted value
  }
  
  contains(value) {
    // return t/f
  }
  
  checkForImbalance(currNode) {
    var imbalance = currNode.left.height - currNode.right.height;
    if (imbalance < -1) {
      rebalance(currNode, 'right');
    }
    if (imbalance > 1) {
      rebalance(currNode, 'left');
    }
    if(currNode.parent) {
      this.checkForImbalance(currNode.parent);
    }
  }
  
  getHeight(node) {
    if (!node) {
      return -1;
    }
    if (!node.right && !node.left) {
      return 0;
    } else if(!node.right) {
      return node.height;
    } else if(!node.left) {
      return node.height;
    } else {
      return Math.max(node.height, node.height) + 1;
    }
  }
  
  bstInsert(node, currNode) {
    if (!this._root) {
      this._root = node;
      return this._root;
    } else {
      currNode.height++;
      if (node.value > currNode.value) {
        if (!currNode.right) {
          currNode.right = node; // if node should go right and there's no right child, insert here
          node.parent = currNode;
        } else {
          this.bstInsert(node, currNode.right);
        }
      } else if (node.value < currNode.value) {
        if (!currNode.left) {
          currNode.left = node;
          node.parent = currNode;
        } else {
          this.bstInsert(node, currNode.left);
        }
      }
    }
    return node;
  }
  
  AVLNode(value) {
    var newNode = {};
    newNode.value = value;
    newNode.height = 0;
    newNode.parent = null;
    newNode.left = null;
    newNode.right = null;
    return newNode;
  } 
}