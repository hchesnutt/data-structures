class BinarySearchTree {
  constructor(value) {
    this._head = this.BSTNode(value);
  }
  
  insert(value) {
    // initialize current node, default header
    var currNode = this._head;
    // initialize newNode with value
    var newNode = this.BSTNode(value);
    // initialize continue param
    var continueSearch = true;
    
    while (continueSearch) {        
      // if less than
      if (newNode.value < currNode.value) {
        // if null set to newNode
        if (!currNode.left) {
          // set newNode to left child and parent to current node and set continue = false;
          currNode.left = newNode;
          newNode.parent = currNode;
          continueSearch = false;
        } else {
        // if not null current = current.left
          currNode = currNode.left;
          continue;
        }
      // if greater than
      } else if (newNode.value > currNode.value) {
        if (!currNode.right) {
          // set newNode to right child and parent to current node and set continue = false;
          currNode.right = newNode;
          newNode.parent = currNode;
          continueSearch = false;
        } else {
        // if not null current = current.right
          currNode = currNode.right;
          continue;
        }
      }
    }
  }
  
  contains(value, currNode = this._head) {
    // check to make sure value is a number
    if (typeof value !== 'number') {
      throw new Error(`Expected ${value} to be a number`);
    }
    // check value equal to value at currentNode
    if (currNode.value === value) {
      return true;
    } else if (currNode.left && value < currNode.value) {
      return this.contains(value, currNode.left);
    } else if (currNode.right && value > currNode.value) {
      return this.contains(value, currNode.right);
    } else {
      return false;
    }
  }
  
  depthFirstLog(cb, currNode = this._head) {
    cb(currNode.value);
    if (currNode.left) {
      this.depthFirstLog(cb, currNode.left);
    }
    if (currNode.right) {
      this.depthFirstLog(cb, currNode.right);
    }
  }
  
  BSTNode(value) {
    var newNode = {};
    newNode.parent = null;
    newNode.value = value;
    newNode.left = null;
    newNode.right = null;
    return newNode;
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
