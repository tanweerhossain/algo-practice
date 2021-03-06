// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.pool = [];
  }
  add(element) {
    this.pool.push(element);
  }
  remove() {
    return this.pool.shift(1);
  }
  isEmpty() {
    return !!this.pool.length;
  }
  size() {
    return this.pool.length;
  }
}

module.exports = Queue;
