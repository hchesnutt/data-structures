var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new node
    var newNode = Node(value);
    // if tail exists, point curr tail to newnode and point tail to newnode
    if (list.tail) {
      list.tail.next= newNode;
      list.tail = newNode;
    } else {
    // else set tail and head to newnode
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // save old head
    var temp = list.head;
    // set head to head's next
    list.head = list.head.next;
    // return old head
    return temp.value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
