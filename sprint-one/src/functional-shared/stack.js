var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	'storage': {},
  	'counter': 0
  };
  for (var key in stackMethods) {
  	someInstance[key] = stackMethods[key];
  }
  return someInstance;
};

var stackMethods = {
	push: function(value) {
		this.counter++;
    	this.storage[this.counter] = value;
  	},
  	pop: function() {
    	if (this.counter > 0) {
      		for (var key in this.storage) {
        		if (key == this.counter) {
          			var result = this.storage[key];
          			break;
        		}
      		}
      		this.counter--;
      		return result;
    	}
  	},
  	size: function() {
    	return this.counter;
    }
};


