var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
      result = storage[counter-size];
      return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};