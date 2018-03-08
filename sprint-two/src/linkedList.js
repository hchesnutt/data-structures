var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.removeTail = function() {
    if (list.tail === null) {
      throw new Error('cannot remove tail from empty list');
    }
    var temp;
    if (list.head === list.tail) {
      temp = list.head;
      list.head = null;
      list.tail = null;
      return temp.value;
    }
    temp = list.tail;
    list.tail.prev.next = null;
    list.tail = list.tail.prev;
    return temp.value;
  };
  
  list.addToTail = function(value) {
    // create new node
    var newNode = Node(value);
    // if tail exists, point curr tail to newnode and point tail to newnode
    if (list.tail) {
      newNode.prev = list.tail;
      list.tail.next= newNode;
      list.tail = newNode;
    } else {
    // else set tail and head to newnode
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      throw new Error('cannot remove head from empty list');
    }
    if (list.head === list.tail) {
      temp = list.head;
      list.head = null;
      list.tail = null;
      return temp.value;
    }
    // save old head
    var temp = list.head;
    // set head to head's next
    list.head = list.head.next;
    // return old head
    return temp.value;
  };
  
  list.addToHead = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
