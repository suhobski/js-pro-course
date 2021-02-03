// Information from the lesson

// Node =============================================================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Queue ============================================================
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head == null;
  }

  peek() {
    return this.head?.data;
  }

  add(data) {
    const node = new Node(data);
    
    if(this.tail !== null) {
      this.tail.next = node;
    }

    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }
  }

  remove() {
    const data = this.head.data;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return data;
  }
}
// Queue end ===========================================

// const queue = new Queue();

// queue.add('FIrst');
// queue.add('node2');
// queue.add('node3');
// queue.add('node4');
// console.log(queue);

// Stack =================================================================
class Stack {
  constructor() {
    this.top = null;
    this.next = null;
  }

  isEmpty() {
    return this.top == null;
  }

  peek() {
    return this.top?.data;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top
    this.top = node
  }

  pop() {
    const data = this.top.data;
    this.top = this.top.next
    return data
  }
}
// Stack end ======================================

// const stack = new Stack()

// console.log(stack.isEmpty())
// stack.push('First')
// stack.push('Second')
// stack.push('Third')
// stack.push('Fourth')
// console.log(stack.isEmpty())
// console.log(stack.peek())
// console.log(stack);
// console.log(stack.top)
// console.log(stack);