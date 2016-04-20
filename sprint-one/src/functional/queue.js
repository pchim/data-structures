var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var end = 0;
  var size = 0; //end - front;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
    size = end - front;
  };

  someInstance.dequeue = function() {
    if (size > 0){ 
      front++;
      size = end - front;
      return storage[front-1];
    } 
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
