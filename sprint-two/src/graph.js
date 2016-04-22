

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.storage = {};

  // this.tail = null;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  //this.tail = node;
  this.storage[node] = Node(node);
  this.storage.length++;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.storage[node]) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.storage[fromNode].edges.indexOf(toNode) > -1) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.storage[fromNode]){this.addNode(fromNode);}
  if (!this.storage[toNode]){this.addNode(toNode);}
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFrom = this.storage[fromNode].edges.indexOf(toNode);
  var indexTo = this.storage[toNode].edges.indexOf(fromNode);
  this.storage[fromNode].edges.splice(indexFrom, 1);
  this.storage[toNode].edges.splice(indexTo, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.storage) {
    cb(this.storage[key].value);
  }
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.edges = [];

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

















// // ------------------------
// // Instantiate a new graph
// var Graph = function() {
//   this.storage = [];
//   this.tail = null;
// };

// // ------------------------
// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
  
//   //this.tail = node;
//   var item = Node(node);
//   this.storage.push(item);
// };

// // ------------------------
// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//   for (var i = 0; i < this.storage.length; i++){
//     if (this.storage[i].value === node){
//       return true;
//     }
//   }
//   return false;
// };

// // ------------------------
// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
//   for (var i = 0; i < this.storage.length; i++){
//     if (this.storage[i].value === node){
//       this.storage.splice(i, 1);
//     }
//   }
// };

// // ------------------------
// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {

// };

// // ------------------------
// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {
//   var fromIndex, toIndex;
//   for(var i = 0; i < this.storage.length; i++) {
//     if(this.storage[i].value === fromNode) {
//       fromIndex = i;
//       continue;
//     }
//     if(this.storage[i].value === toNode) {
//       toIndex = i;
//       continue;
//     }
//   }
//   this.storage[fromIndex].edge = toNode;
//   this.storage[toIndex].edge = fromNode;
// };

// // ------------------------
// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
// };

// // ------------------------
// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.edges = [];

//   return node;
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */


