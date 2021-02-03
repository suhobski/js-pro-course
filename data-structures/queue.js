// Node =====================
function Node(data) {
  this.data = data;
}

// Queue ====================
function Queue() {
	const queue = [];

	function add (value) {
    const node = new Node(value)
    queue.push(node)
  }
  
  function peek() {
    return queue[0]?.data
  }
  
  function remove() {
    return queue.shift().data
  }
  
  function isEmpty() {
    return queue.length == 0;
  }
	
	return {
  	add,
    peek,
    remove,
    isEmpty,
  }
}

const queue = new Queue()

console.log(queue);

console.group('Queue')
  console.log('is empty: ' + queue.isEmpty())
  console.log('peek: ' + queue.peek())
  queue.add('first')
  console.log('add first')
  queue.add('second')
  console.log('add second')
  queue.add('third')
  console.log('add third')
  console.log('peek: ' + queue.peek())
  console.log('remove: ' + queue.remove())
  console.log('remove: ' + queue.remove())
  console.log('is empty: ' + queue.isEmpty())
  console.log('remove: ' + queue.remove())
  console.log('is empty: ' + queue.isEmpty())
console.groupEnd();