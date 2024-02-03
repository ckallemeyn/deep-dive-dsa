
// simplified array based approach:
class ArrayStack {
  constructor() {
    this.stack = [];
    this.size = this.stack.length;
  }

  push(item) {
    this.stack.push(item);
    this.size++;
  }

  pop() {
    this.stack.pop();
    this.size--;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

// Traditional implementation of stack:
class Stack {
  constructor() {
    this.height = 0;
    this.storage = {};
  }

  push(item) {
    this.storage[this.height] = item;

    this.height++;
  }

  pop() {
    if (this.height <= 0) {
      console.warn('cannot remove an element from an empty stack');
      return;
    }
    this.height--;

    const key = this.height;
    const element = this.storage[key];

    delete this.storage[key];

    return element;
  }

  peek() {
    return this.storage[this.height];
  }

  size() {
    return this.height;
  }
}






