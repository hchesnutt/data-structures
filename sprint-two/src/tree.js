var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new tree
  var newTree = Tree(value);
  // push new tree to this.children
  this.children.push(newTree); 
};

// will be called on a node in the tree
treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        result = true;
        break;
      }
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
