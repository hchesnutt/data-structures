var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.pop = function() {
    if (counter > 0) {
      for (var key in storage) {
        if (key == counter) {
          var result = storage[key];
          break;
        }
      }
      counter--;
      return result;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
}


