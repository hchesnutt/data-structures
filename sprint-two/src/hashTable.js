

var HashTable = function() {
  this._count = 0;
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
  this._count++;
  this.checkResize();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  if (!this._storage.get(index)) {
    return undefined;
  }
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
  this._count--;
  this.checkResize();
};

HashTable.prototype.checkResize = function() {
  if (this._count / this._limit > 0.75) {
    this.resize(this._limit * 2);
  }
  if (this._count / this._limit < 0.25) {
    this.resize(Math.floor(this._limit / 2));
  }
};

HashTable.prototype.resize = function(newSize) {
  var tempArray = LimitedArray(newSize);
  this._storage.each(array => {
    if(array) {
      for (var i = 0; i < array.length; i++) {
        var index = getIndexBelowMaxForKey(array[i][0], newSize);
        if (Array.isArray(tempArray.get(index))) {
          tempArray.get(index).push([array[i][0],array[i][1]]);
        } else {
          tempArray.set(index, [[array[i][0],array[i][1]]]);
        }
      }
    }
  });
  // set storage to tempArray
  this._storage = tempArray;
  this._limit = newSize;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


