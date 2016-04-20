var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.length = 0;
  stackInstance.storage = {};
  _.extend(stackInstance, stackMethods);
  return stackInstance;
};

var stackMethods = {};
stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
};

stackMethods.pop = function() {
  if(this.length > 0) { 
    this.length--; 
    return this.storage[this.length];
  }
};

