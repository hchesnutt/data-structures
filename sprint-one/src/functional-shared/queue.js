var Queue = function() {
  var someInstance = {
  	'storage': {},
  	'numElements': 0,
  	'counter': 0
  };
  for (var key in queueMethods) {
  	someInstance[key] = queueMethods[key];
  }
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



