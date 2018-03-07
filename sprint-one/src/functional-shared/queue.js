var Queue = function() {
  let someInstance = {};
  someInstance.min = 0;
  someInstance.max = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    // add to max
    this.max++;
    // assign 
    this[this.max] = value;
  },
  dequeue: function() {
    this.min++;
    let result = this[this.min];
    delete this[this.min];
    return result;
  },
  size: function() {
    return this.max - this.min < 0 ? 0 : this.max - this.min;
  }
};


