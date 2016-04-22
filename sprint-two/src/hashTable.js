

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple = [k, v];

  if ( Array.isArray(bucket) ){
    var change = false;
    
    for (var i = 0; i < bucket.length; i++){
      if (bucket[i][0] === k){
        change = true;
        bucket[i][1] = v;
      } 
    }
    if (!change){
      bucket.push(tuple);
    } 

  } else {
    this._storage.set(index, [tuple]);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k){
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k){
      bucket[i][1] = undefined;
    } 
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


