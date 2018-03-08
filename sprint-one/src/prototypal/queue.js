var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.numElements = 0;
  return someInstance;
};

var queueMethods = {
	enqueue: function(value) {
    	this.numElements++;
    	this.counter++;
    	this.storage[this.counter] = value;
  	},
  	dequeue: function() {
    	if (this.numElements > 0) {
      		this.numElements--;
      		result = this.storage[this.counter - this.numElements];
      		return result;
    	}
  	},
  	size: function() {
    	return this.numElements;
  	}
};


