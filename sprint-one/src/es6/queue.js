class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {},
  	this.numElements = 0,
  	this.counter = 0
  }

  enqueue(value) {
    this.numElements++;
    this.counter++;
    this.storage[this.counter] = value;
  }
  	
  dequeue() {
    if (this.numElements > 0) {
      	this.numElements--;
      	var result = this.storage[this.counter - this.numElements];
      	return result;
    }
  }
  	
  size() {
    return this.numElements;
  }

}
