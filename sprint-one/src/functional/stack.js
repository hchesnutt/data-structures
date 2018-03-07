var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    let popped;
    if (count - 1 < 0) {
      count = 0; 
    } else {
      popped = storage[count];
      delete storage[count];
      count--;
    }
    return popped;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
