// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slowPtr = list.getFirst();
  let fastPtr = list.getFirst();

  while (n-- && fastPtr) fastPtr = fastPtr.next;
  while (fastPtr.next) [slowPtr, fastPtr] = [slowPtr.next, fastPtr.next];
  
  return slowPtr;
}

module.exports = fromLast;
