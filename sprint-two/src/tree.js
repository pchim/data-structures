var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {


  var checkTree = function(node, target){
    if (node.value === target){
      return true;
    } 
    if (node.children.length > 0){
      for (var i = 0; i < node.children.length; i++){
        var result;
        // checkTree(node.children[i], target);
        result = checkTree(node.children[i], target);
        if(result) {
          return true;
        }
      }
    }
    return false;
  };
  // debugger;
  return checkTree(this, target);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */




  // var checkTree = function(node, target){
  //   if (node.value === target){
  //     return true;
  //   } else if (node.children.length > 0){
  //     for (var i = 0; i < node.children.length; i++){
  //       return checkTree(node.children[i], target);
  //     }
  //   } else return false;
  // };
