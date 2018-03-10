var rebalance = function(node, side) {
  // takes in a reference to an unbalanced node
  var [first, second] = getImbalancePattern(node);
  
  switch (first + second) {
  case 'leftleft':
    leftOuterRotate(node, side);
    break;
  case 'leftright':
    var child = node.left;
    if (child.right.left) {
      child.right = child.right.left;
      child.right.parent.left = null;
    } else if (child.right.right) {
      child.right = child.right.right;
      child.right.parent.right = null;
    }
    child.right.parent.parent = child.right;
    child.right.right = child.right.parent;
    child.right.parent = child;
    child.right.height++;
    child.right.right.height--;
    child.right.parent = child.parent;
    child.right.left = child;
    child.parent.left = child.right;
    child.parent = child.right;
    child.right = null;
    leftOuterRotate(node, side);
    break;
  case 'rightleft':
    var child = node.right;
    if (child.left.right) {
      child.left = child.left.right;
      child.left.parent.right = null;
    } else if (child.left.left) {
      child.left = child.left.left;
      child.left.parent.left = null;
    }
    child.left.parent.parent = child.left;
    child.left.left = child.left.parent;
    child.left.parent = child;
    child.left.height++;
    child.left.left.height--;
    child.left.parent = child.parent;
    child.left.right = child;
    child.parent.right = child.left;
    child.parent = child.left;
    child.left = null;
    rightOuterRotate(node, side);
    break;
    break;
  case 'rightright':
    rightOuterRotate(node, side);
    break;
  }
  
  // resets height for all parent nodes
  var continueHeightAdjustments = !!node.parent;
  while (continueHeightAdjustments) {
    node = node.parent;
    if ((node.left.height - node.right.height) > 1) {
      rebalance(node, 'left');
    } else if ((node.right.height - node.left.height) > 1) {
      rebalance(node, 'right');
    }
    node.height = this.getHeight(node);
    if (!node.parent) {
      continueHeightAdjustments = false;
    }
  }
};

var rightOuterRotate = function(node, side) {
  // change pointers
  // change parent node pointer to node.right
  node.parent[side] = node.right;
  // if node.right has a left child
  if (node.right.left) {
    // change node's right pointer
    node.right = node.right.left;
    // new node.right was old node.right.left
    node.right.parent = node;
  }
  // change what was node.right's left pointer to node
  node.parent[side].left = node;
  //change node's parent
  node.parent = node.parent[side];
  // adjust height
  // actual height or -1 so adding one gets to 0
  node.height = this.getHeight(node);
};

var leftOuterRotate = function(node, side) {
  // change pointers
  // change parent child pointer to node.left
  node.parent[side] = node.left;
  // if node.left has a right child
  if (node.left.right) {
    // change node's left pointer
    node.left = node.left.right;
    // new node.left was old node.left.right
    node.left.parent = node;
  }
  // change what was node.left's right pointer to node
  node.parent[side].right = node;
  // change node's parent
  node.parent = node.parent[side];
  // adjust height
  // actual height or -1 so adding one gets to 0
  node.height = this.getHeight(node);
};

var getImbalancePattern = function(node) {
  var firstImbalance;
  var secondImbalance;
  // checks if right heavy or left heavy
  if (node.left.height > node.right.height) {
    var firstImbalance = 'left';
    var unbalancedChild = node.left;
  } else {
    var firstImbalance = 'right';
    var unbalancedChild = node.right;
  }
  // navigates to appropriate child and checks if right or left heavy
  if (unbalancedChild.left.height > unbalancedChild.right.height) {
    var secondImbalance = 'left';
  } else {
    var secondImbalance = 'right';
  }

  return [firstImbalance, secondImbalance];
};