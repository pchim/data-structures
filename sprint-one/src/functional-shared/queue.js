var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {};
  queueInstance.length = 0;
  queueInstance.storage = {};
  queueInstance.front = 0;
  queueInstance.end = 0;
  _.extend(queueInstance, queueMethods);

  return queueInstance;
};

var queueMethods = {};
queueMethods.size = function(){
  return this.length;
};
queueMethods.enqueue = function(value){  
  this.storage[this.end] = value;
  this.end++;
  this.length = this.end - this.front;
};
queueMethods.dequeue = function(){
  if (this.length > 0){
    this.front++;    
    this.length = this.end - this.front;
    return this.storage[this.front-1];
  }
};
