// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
const Queue = require('../queue');
const Stack = require('../stack');
class Node {
  constructor(data, ...children) {
    this.data = data;
    this.children = children;
  }
  add(...data) {
    for (const ele of data) {
      this.children.push(new Node(ele));
    }
  }
  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  /** Solution 1 */
  // traverseDF(fn) {
  //   if (this instanceof Tree) {
  //     Tree.prototype.traverseDF.call(this.root, fn);
  //   } else if (this instanceof Node) {
  //     fn(this);
  //     for (const node of this.children) {
  //       Tree.prototype.traverseDF.call(node, fn)
  //     }
  //   }
  // }

  /** Solution 2 */
  traverseDF(fn) {
    const stack = new Stack();

    if (!this.root) return;

    stack.push(this.root);

    while (stack.peek()) {
      const node = stack.pop();
      fn(node);
      for (const child of Array.prototype.reverse.call(node.children)) {
        stack.push(child);
      }
    }
  }

  traverseBF(fn) {
    const queue = new Queue();

    if (!this.root) return;

    queue.add(this.root);

    while (queue.isEmpty()) {
      const node = queue.remove();
      fn(node);
      for (const child of node.children) {
        queue.add(child);
      }
    }
  }
}

module.exports = { Tree, Node };
