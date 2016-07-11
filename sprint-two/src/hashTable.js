

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
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
      this._size++;
      if (this._size === this._limit - 1) {
        this._limit *= 2;
        this.rehash();
      }

      bucket.push(tuple);
    } 

  } else {
    this._size++;
    if (this._size === this._limit) {
      this._limit *= 2;
      this.rehash();
    }
    this._storage.set(index, [tuple]);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket.length) return;
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k){
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket.length) return;
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k){
      var deleted = bucket.splice(i, 1)[0];
      this._size--;
      if (this._size === this._limit / 2 && this._limit > 2) {
        this._limit /= 2;
        this.rehash();
      }
      
    } 
  }

};

HashTable.prototype.rehash = function() {
  var allTuples = [];
  this._storage.each(function(bucket) {
    if (!bucket) return;
    for (var i = 0; i < bucket.length; i++) {
      allTuples.push(bucket[i]);
    }
  });
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < allTuples.length; i++) {
    this.insert(allTuples[i][0], allTuples[i][1]);
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


