var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.length = 0;
  queueInstance.front = 0;
  queueInstance.end = 0;
  queueInstance.storage = {};
  return queueInstance;
};

var queueMethods = {
  size: function(){
    return this.length;
  },
  enqueue: function(value){
    this.storage[this.end] = value;
    this.end++;
    this.length = this.end - this.front;
  },
  dequeue: function(){
    if (this.length > 0){
      this.front++;
      this.length = this.end - this.front;
      return this.storage[this.front-1];
    }
  }
};

// Queue.prototype.size = queueMethods.size;
// Queue.prototype.enqueue = queueMethods.enqueue;
// Queue.prototype.dequeue = queueMethods.dequeue;


