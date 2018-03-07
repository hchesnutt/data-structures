var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {},
  this.numElements = 0,
  this.counter = 0
};

Queue.prototype.enqueue = function(value) {
	this.numElements++;
    this.counter++;
    this.storage[this.counter] = value;
}

Queue.prototype.dequeue = function() {
	if (this.numElements > 0) {
      	this.numElements--;
      	result = this.storage[this.counter - this.numElements];
      	return result;
    }
}

Queue.prototype.size = function() {
	return this.numElements;
}


