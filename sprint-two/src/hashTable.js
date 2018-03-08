

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage.get(index))) {
    this._storage.get(index).push([k,v]);
  } else {
    this._storage.set(index, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  this._storage.get(index).forEach(tuple => {
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var parent = this._storage.get(index);
  for (var i = 0; i < parent.length; i++) {
    if (parent[i][0] === k) {
      parent.splice(i, 1);
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


