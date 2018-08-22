function LinkedList() {
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    var node = new Node(element); //instantiate new node
    if (head === null) { //if head is not defined
        head = node; //assign head to node
    } else {
        var currentNode = head; //starting point is head
        while (currentNode.next) { //as long as next exists
            currentNode = node.next; //keep iterating over next node
        }
        currentNode.next = node; //if next is null, that means we reached to the last node, so appoint node to next
    }
    length++; //increment length
  };

  this.remove = function(element){
    var currentNode = head; //starting point is head
    var previousNode; //set value later to link nodes
    if(currentNode.element === element){ //if head node contains element
        head = currentNode.next; //replace head with next node
    } else {
        while(currentNode.element !== element) { //as long as node doesn't contain element
            previousNode = currentNode; //keep track of node
            currentNode = currentNode.next; //iterate over next node
        }
        previousNode.next = currentNode.next; //when node does contain element, set previousNode next to currentNode.next (skip currentNode)
    }
    length --;
  };

  this.indexOf = function(element) {
    var index = 0; //set index to 0
    var currentNode = head; //starting point is head node
    if (currentNode.element === element) return index; // if head node contains element, return index as is
    else {
      while (currentNode.element !== element) { //start looping as long as node doesn't contain element
        currentNode = currentNode.next; //iterate over next node
        index++; //increment index as well
      }
      return index; //when node does contain element, return index
    }
    return -1; //if no node contains element, return -1
  };

  this.elementAt = function(index) {
    var currentIndex = 0; //variable to track index
    var currentNode = head; //starting point is head
    if (index === 0) return currentNode; //if index is 0, return head
    else {
      while (currentIndex !== index) { //go through each index node as long as currentIndex is not the given index
        currentNode = currentNode.next; //go to the next node
        currentIndex++; //increment
      }
    }
    if (currentNode.element === null) return undefined; //if currentIndex never matched w given index, return undefined
    return currentNode.element; //when curentIndex becomes given index, return currentNode
  };

  this.removeAt = function(index) {
    var currentIndex = 0; //track index
    var currentNode = head; //starting point is head
    var removed, previousNode; //variables to define later
    if (index < 0 || index >= length) return null; //edge case
    if (index === 0) { //if index is 0
      var removed = head.element;
      currentNode = head.next; //replace node with the next node
      length--;
      return removed;
    } else {
      while (currentIndex !== index) { //loop through as long as currentIndex is not index
        previousNode = currentNode; //keep track of prev node
        currentNode = currentNode.next; //go to next node
        currentIndex++; //increase currentIindex
      }
      removed = currentNode.element;
      previousNode.next = currentNode.next //when both indexes match, we will replace the prev next node w current next node
      length--;
      return removed;
    }
  }

  //don't think this is right tho?
  this.addAt = function(index, element) {
    var node = new Node(element);
    var currentNode = head;
    var currentIndex = 0;
    var previousNode;
    if (index > length) return false;
    if (index = 0) {
      currentNode.element = element;
      currentNode.next = head;
      length++;
    } else {
      while (currentIndex !== index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      //set prevNode to element node
      //set element node.next = currentNode
      length++;
    }
    
    this.isEmpty = function() {
      if (head === null) return true;
      else return false;
    }
  }
}