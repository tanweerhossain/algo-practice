// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  /** Solution 1: Recurrsion */
  insert(data) {
    if (data <= this.data && this.left) {
      this.left.insert(data);
    } else if (data <= this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
  /** Solution 2: Iteration */
  // insert(data) {
  //   let node = this;

  //   while (node.left || node.right) {
  //     if (node.data >= data) {
  //       if (node.left) {
  //         node = node.left;
  //       } else {
  //         node.left = new Node(data);
  //         return;
  //       }
  //     } else {
  //       if (node.right) {
  //         node = node.right;
  //       } else {
  //         node.right = new Node(data);
  //         return;
  //       }
  //     }
  //   }

  //   if (node.data >= data) {
  //     node.left = new Node(data);
  //   } else {
  //     node.right = new Node(data);
  //   }
  // }
  contains(data) {
    if (this.data === data) return this;

    if (data <= this.data) return this.left && this.left.contains(data);
    else return this.right && this.right.contains(data);
  }
}

module.exports = Node;
