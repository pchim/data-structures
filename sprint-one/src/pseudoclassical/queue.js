var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.head = 0;
  this.tail = 0;
  this.storage = {};
};

//var myQueue = new Queue();
Queue.prototype.size = function(){
  return this.length;
};
Queue.prototype.enqueue = function(val){
  this.storage[this.tail] = val;
  this.tail++;
  this.length = this.tail - this.head;
};
Queue.prototype.dequeue = function(){
  if (this.length > 0){
    this.head++;
    this.length = this.tail - this.head;
    return this.storage[this.head-1];
  }
};


