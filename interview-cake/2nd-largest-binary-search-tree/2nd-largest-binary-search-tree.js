/*
Write a function to find the 2nd largest element in a binary search tree

note: binary search tree has nodes where left node is less than the parent value and right node is greater than parent value

o number
i binary search tree
c none
e none

find the highest value by looking through the right side of the node (since it contains the greater value)

from there we can assume that the 2nd highest value could either be...
  1. the parent of the highest value
  2. the child of the highest value
      1. only left node
      2. has right node
*/

