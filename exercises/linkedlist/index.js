// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.totalNodes = 0;
  }
  insertFirst(element) {    
    this.head = new Node(element, this.head);;
    this.totalNodes++;
  }
  size() {
    return this.totalNodes;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let pointer = this.head;

    if (!pointer) return pointer;

    while (pointer.next) pointer = pointer.next;

    return pointer;
  }
  clear() {
    this.head = null;
    this.totalNodes = 0;
  }
  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;
    this.totalNodes--;
  }
  removeLast() {
    this.totalNodes--;
    let pointer = this.head;

    if (!pointer) return pointer;
    if (!pointer.next) {
      this.head = null;
      return pointer.data;
    }

    while (pointer.next.next) pointer = pointer.next;

    pointer.next = pointer.next.next;

  }
  insertLast(element) {
    let pointer = this.head;

    if (!pointer) return this.insertFirst(element);
    this.totalNodes++;

    while (pointer.next) pointer = pointer.next;

    pointer.next = new Node(element);
  }
  getAt(index) {
    let pointer = this.head;

    for (let i = 1; i <= index; i++) {
      if (pointer) pointer = pointer.next;
      else break;
    }

    return pointer;
  }
  removeAt(index) {
    if (!this.head) return;
    let currentPtr = this.head;
    let prevPtr = currentPtr;

    for (let i = 1; i <= index; i++) {
      if (currentPtr) {
        prevPtr = currentPtr;
        currentPtr = currentPtr.next;
      }
      else break;
    }

    if ((index === 0) && (currentPtr === prevPtr)) {
      this.head = this.head.next;
      this.totalNodes--;
    } else if (currentPtr) {
      prevPtr.next = currentPtr.next;
      this.totalNodes--;
    }
  }

  insertAt(data, index) {
    let currentPtr = this.head;
    let prevPtr = currentPtr;

    for (let i = 1; i <= index; i++) {
      if (currentPtr) {
        prevPtr = currentPtr;
        currentPtr = currentPtr.next;
      }
      else break;
    }

    if ((index === 0) && (currentPtr === prevPtr)) {
      this.head = new Node(data, this.head);
      this.totalNodes++;
    } else {
      prevPtr.next = new Node(data, currentPtr);
      this.totalNodes++;
    }
  }

  forEach(fn) {
    for (const ptr of this) {
      fn(ptr);
    }
  }

  // [Symbol.iterator]() {
  //   return {
  //     currentPtr: this.head,
  //     next() {
  //       if (this.currentPtr) {
  //         const value = this.currentPtr;
  //         this.currentPtr = this.currentPtr.next;
  //         return { done: false, value };
  //       } else {
  //         return { done: true };
  //       }
  //     }
  //   };
  // }

  *[Symbol.iterator]() {
    let ptr = this.head;

    while (ptr) {
      yield ptr;
      ptr = ptr.next;
    }
  }
}

module.exports = { Node, LinkedList };
