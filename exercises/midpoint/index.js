// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

/** Solution 1: O(3n) ~ O(n) */
// function midpoint(list) {
//   const listLength = list.size();
//   if (listLength%2 === 0) {
//     return list.getAt(((listLength||2) - 2)/2);
//   } else {
//     return list.getAt((listLength - 1)/2);
//   }
// }

/** Solution 2: O(n/2) ~ O(n) */
function midpoint(list) {
  let fastPtr = list.getFirst();
  let slowPtr = list.getFirst();

  while (fastPtr && fastPtr.next && fastPtr.next.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr;
}

module.exports = midpoint;
