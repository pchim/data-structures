var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null && list.tail === null){
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var result;
    if (list.head !== null){
      result = list.head;
      list.head = list.head.next;
    } 
    return result.value;
  };

  list.contains = function(target) {

    var checkItem = function(currentNode, target) {
      if (currentNode.value === target) {
        return true;
      } else if (currentNode.next !== null) {
        return checkItem(currentNode.next, target);
      } else {  
        return false;
      }     
    };

    return checkItem(list.head, target);
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
