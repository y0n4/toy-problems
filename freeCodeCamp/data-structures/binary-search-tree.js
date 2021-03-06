function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  //finds the smallest node
  this.findMin = () => { //min value is always at the far left
    var currentNode = this.root; //starting point is root node
    if (!this.root) return currentNode; //edge case
    while (currentNode.left !== null) { //until left node is null
      currentNode = currentNode.left; //keep going through each node
    }
    return currentNode.value; //return the current value if no left node
  }

  //finds the largest node
  this.findMax = () => { //max value is always at the far right
    var currentNode = this.root; //starting point is root node
    if (!this.root) return currentNode; //edge case
    while (currentNode.right !== null) { //until right node is null
      currentNode = currentNode.right; //keep going through each node
    }
    return currentNode.value; //return the current value if no right node
  };

  //add node to the tree
  this.add = (value) => {
    var node = new Node(value); //create node
    var currentNode = this.root; //starting point is root node
    if (!this.root) this.root = node; //if no tree, set node to be root
    while(currentNode !== null) { //until node is not null
      if(currentNode.value < value) { //goes to the left side if value is less than current node
        currentNode = currentNode.right;
      } else if (currentNode.value > value) { //goes to right side if value is more than current node
        currentNode = currentNode.left;
      }
    }
    currentNode = node; //set node to current position
  }
  
  //checks to see if value is present in tree
  this.isPresent = (value) => {
    if(!this.root) return false; //edge case
    if(this.root.value === value) {
        return true;
    } else { //traverse tree
      var currentNode = this.root; //starting point is parent
      while (currentNode !== null) { //as long as node is not null
        if (currentNode.value === value) { //current node value = value
          return true; 
        } else if (currentNode.value < value) { //if value is more
          currentNode = currentNode.right; //traverse through right node
        } else if (currentNode.value > value) { //if value is less
          currentNode = currentNode.left; //traverse throught left node
        }
      }
    }
    return false; //when node reached to null
  }
  
  //returns smallest number of edges
  this.findMinHeight = () => {
    var height = [];
    var total = 0;
    if(!this.root) return -1; //edge case

    function recurse(node) { //recursive func
      if(node.left === null && node.right === null) {
          height.push(total);
          total-= 1;
      }

      if(node.left) {
        total++;
        recurse(node.left);
      }

      if(node.right) {
        total++;
        recurse(node.right);
      }
    }
    recurse(this.root);
    return height.sort()[0];
  }

  //returns largest number of edges
  this.findMaxHeight = () => {
    var height = [];
    var total = 0;
    if(!this.root) return -1;

    function recurse(node) {
      if(node.left === null && node.right === null) {
          height.push(total);
          total-= 1;
      }

      if(node.left) {
        total++;
        recurse(node.left);
      }

      if(node.right) {
        total++;
        recurse(node.right);
      }
    }
    recurse(this.root);
    return height.sort((a,b) => b - a)[0];
  }

  //checks to see if tree is balanced ± 1
  this.isBalanced = () => {
    var minHeight = this.findMinHeight(); //returns number of smallest edges
    var maxHeight = this.findMaxHeight(); //returns number of largest edges
    
    if (minHeight+= maxHeight || minHeight === maxHeight) { //compare
      return true;
    }
    return false;
  }

  //depth first search >> its a traversal method where a subtree is explored as deeply as possible before moving onto another subtree- 3 methods

  //looks at left most node to right most node
  this.inorder = () => {
    var nodes = [];
    if(!this.root) return null;

    function recurse(node) {
      if(node) {
        recurse(node.left); //traverse left subtree by recursively calling
        nodes.push(node.value); //diplsay current node
        recurse(node.right); //traverse right subtree by recursively calling
      }
    }
    recurse(this.root);
    return nodes;
  }

  //explore all roots before the leaves
  this.preorder = () => {
    var nodes = [];
    if(!this.root) return null;

    function recurse(node) {
      if(node) {
        nodes.push(node.value);
        recurse(node.left);
        recurse(node.right);
      }
    }
    recurse(this.root);
    return nodes;
  }

  //explore all leaves before the roots
  this.postorder = () => {
    var nodes = [];
    if (!this.root) return null;

    function recurse(node) {
      if(node) {
        recurse(node.left);
        recurse(node.right)
        nodes.push(node.value);
      }
    }
    recurse(this.root);
    return nodes;
  }

  //breadth first search >> tree traversal method that explores the nodes on that level before continuing the next level
  this.levelOrder = () => {
    var nodes = [];
    var queue = [this.root]; //add root node to the queue
    if (!this.root) return null; //edge case

    while (queue.length) { //as long there's element in queue
      var currentNode = queue[0]; //set currentNode to first element of queue
      nodes.push(currentNode.value); //add value to nodes
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      queue.shift(); //dequeue once to focus next node
    }
    return nodes; //when there are no more elements in queue display nodes
  }

  //breadth first search with right to left
  this.reverseLevelOrder = () => {
    var nodes = [];
    var queue = [this.root];
    if (!this.root) return null;

    while (queue.length) {
      var currentNode = queue[0];
      nodes.push(currentNode.value);
      if (currentNode.right) queue.push(currentNode.right);
      if (currentNode.left) queue.push(currentNode.left);
      queue.shift();
    }
    return nodes;
  }

  this.remove = (value) => {
    var parentNode;
    var currentNode = this.root;

    //create a function that finds the desired node to delete
    var checkNode = function(value) {
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return true; 
        } else if (currentNode.value < value) {
          parentNode = currentNode;
          currentNode = currentNode.right; 
        } else if (currentNode.value > value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        }
      }
      return false; //when node reached to null
    }
    
    var isPresent = checkNode(value); 
    
    //if node is not present
    if(!isPresent) return null;

    if (!this.root.right && !this.root.right) this.root = null;

    if (isPresent) {
      if(!parentNode) return null;
      else {
        currentNode = null;
        if(parentNode.value > value) parentNode.left = currentNode;
        else parentNode.right = currentNode;
      }
    }
  }

  //invert tree (mirror the tree)
  this.invert = () => {
    if(!this.root) return null;

    function recurse(tree) {
      //change the direction of the pointers
      var temp = tree.left;
      tree.left = tree.right;
      tree.right = temp;
      
      if(tree.left) recurse(tree.left);
      if(tree.right) recursie(tree.right);
    }
    recurse(this.root);
  }
}