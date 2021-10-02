
// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let slowPtr = list.getFirst();
    let fastPtr = list.getFirst();

    while (fastPtr && fastPtr.next && fastPtr.next.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if (slowPtr === fastPtr) return true;
    }

    return false;
}

module.exports = circular;
