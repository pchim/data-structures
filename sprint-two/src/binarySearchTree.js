var BinarySearchTree = function(value) {
  var treeInst = {};
  treeInst.left = null;
  treeInst.right = null;
  treeInst.value = value;
  var level = 0;

  treeInst.insert = function(value){
    var newNode = BinarySearchTree(value);
    
    var checkChild = function(rootNode){
      if (value < rootNode.value){//if left
        if (rootNode.left  !== null){//if left exists
          checkChild(rootNode.left);//recurse on this left node
        } else {//otherwise create a left node
          rootNode.left = newNode;
        }
      } else {//if right
        // rootNode.right = newNode;
        if (rootNode.right !== null){//if right exists
          checkChild(rootNode.right);//recurse on this right node
        } else {//otherwise create a right node
          rootNode.right = newNode;
        }      
      }
    };

    checkChild(treeInst);

  };
  treeInst.contains = function(value){
    var result;
    var checkTree = function(node){    
      if (node.value === value){
        return true;
      } else {
        if (node.left){
          result = checkTree(node.left);
          if (result){
            return true;
          }
        }
        if (node.right){
          result = checkTree(node.right);
          if (result){
            return true;
          }          
        }

      }
      return false;
    };

    return checkTree(treeInst);

  };
  treeInst.depthFirstLog = function(cb){
    var callEach = function(node) {
      cb(node.value);
      if(node.left !== null) {
        callEach(node.left);
      } 
      if(node.right !== null){
        callEach(node.right);
      }
    };
    callEach(treeInst);
    
  };

  return treeInst;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
