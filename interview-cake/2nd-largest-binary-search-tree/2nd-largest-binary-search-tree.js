/*
Write a function to find the 2nd largest element in a binary search tree

note: binary search tree has nodes where left node is less than the parent value and right node is greater than parent value

  (4)
  / \
(1) (3)

o >> number
i >> binary search tree
c >> none
e >> if no tree, throw err

thinking process
  - loop through the tree and loop through the right nodes
  - from there we can assume that the 2nd highest value could either be...
    1. the parent of the highest value
    2. the left node of the highest value
*/


//find the highest value first
function findLargest(node) {
  if (!node) throw new Error('node needs to exist'); //edge case

  //call recursively until reach last right node
  if (node.right) findLargest(node.right);
  return node.value;
}


function findSecondLargest(rootNode) {
   if (!rootNode || (!rootNode.left && !rootNode.right)) {
     throw new Error('Tree must have at least 2 nodes');
   }

   var current = rootNode;

   while (current) { //loop through tree

    //if node doesn't have right node but only left node
    if (current.left && !current.right) {
      // the node is highest value atm
      return findLargest(current.left); // 2nd highest val is in the left node
    }

     // current is parent of highest value atm
      // case: current is parent of largest, and largest has no children, so current is 2nd largest
     if (current.right && !current.right.left && !current.right.right) {
       return current.value;
     }

     // set current to right node (loop through right nodes)
     current = current.right;
   }
}


