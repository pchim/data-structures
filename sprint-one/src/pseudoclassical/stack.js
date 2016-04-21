var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

var stackMethods = {
  size: function() {
    return this.length;
  },
  push: function(val) {
    this.storage[this.length] = val;
    this.length++;
  },
  pop: function() {
    if(this.length > 0) {
      var result = this.storage[this.length - 1];
      this.length--;
      return result;
    }
  }
};
Stack.prototype.size = stackMethods.size;
Stack.prototype.push = stackMethods.push;
Stack.prototype.pop = stackMethods.pop;
