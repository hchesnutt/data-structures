var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: constant
 contains: constant
 remove: constant
 
 for later use: http://www.pdiniz.com/time-complexity-of-javascripts-built-in-methods/
 */
