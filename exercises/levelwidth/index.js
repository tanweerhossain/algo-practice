// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Queue = require('../queue');

function levelWidth(root) {
  const queue = new Queue();
  const result = [];

  if (!root) return result;
  queue.add({ node: root, level: 0 });

  while (queue.isEmpty()) {
    const { node, level } = queue.remove();

    result[level] = result[level] ? result[level] + 1 : 1;

    for (const child of node.children) {
      queue.add({ node: child, level: level + 1});
    }
  }
  
  return result;
}

module.exports = levelWidth;
