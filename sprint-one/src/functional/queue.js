var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numElements = 0;
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    numElements++;
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    if (numElements > 0) {
      numElements--;
      result = storage[counter-numElements];
      return result;
    }
  };

  someInstance.size = function() {
    return numElements;
  };

  return someInstance;
};