var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var min = 0;
  var max = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    max++;
    someInstance[max] = value;
  };

  someInstance.dequeue = function() {
    min++;
    result = someInstance[min];
    delete someInstance[min];
    return result;
  };

  someInstance.size = function() {
    return max - min < 0 ? 0 : max - min;
  };

  return someInstance;
};
