function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.findMin = () => { //min value is always at the far left
    var currentNode = this.root; //starting point is head
    if (!currentNode) return currentNode; //edge case
    while (currentNode.left !== null) { //until left node is null
      currentNode = currentNode.left; //keep going through each node
    }
    return currentNode.value; //return the current value if no left node
  }

  this.findMax = () => { //max value is always at the far right
    var currentNode = this.root; //starting point is head
    if (!currentNode) return currentNode; //edge case
    while (currentNode.right !== null) { //until right node is null
      currentNode = currentNode.right; //keep going through each node
    }
    return currentNode.value; //return the current value if no right node
  };

  this.add = (value) => {
    var node = new Node(value);
    var currentNode = this.root;
    if (!this.root) this.root = node;
    while(currentNode !== null) {
      if(currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      }
    }
    currentNode = node;
  }
  
  this.isPresent = (value) => {
    if(!this.root) return false; //if no tree
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
  
  this.findMinHeight = () => {
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
    return height.sort()[0];
  }

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

  this.isBalanced = () => {
    var minHeight = this.findMinHeight();
    var maxHeight = this.findMaxHeight();
    
    if (minHeight+= maxHeight || minHeight === maxHeight) {
      return true;
    }
    return false;
  }
}