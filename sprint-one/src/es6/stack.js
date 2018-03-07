class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.counter = 0;
  }

  push(value) {
	this.counter++;
    this.storage[this.counter] = value;
  }

  pop() {
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
  }
  	
  size() {
  	return this.counter;
  }

}