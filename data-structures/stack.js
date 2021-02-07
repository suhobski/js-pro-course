// Node =====================
function Node(data) {
  this.data = data;
}

// Stack ====================
function Stack() {
	const stack = [];

	function add (value) {
    const node = new Node(value)
    stack.push(node)
    return stack.length
  }
  
  function peek() {
    const lastIndex = stack.length - 1
    return stack[lastIndex]?.data
  }
  
  function remove() {
    return stack.pop().data
  }
  
  function isEmpty() {
    return stack.length == 0;
  }
	
	return {
  	add,
    peek,
    remove,
    isEmpty,
  }
}

const stack = new Stack()

console.log(stack);

console.group('Stack')
  console.log('is empty: ' + stack.isEmpty())
  console.log('peek: ' + stack.peek())
  stack.add('first')
  console.log('add first')
  stack.add('second')
  console.log('add second')
  stack.add('third')
  console.log('add third')
  console.log('peek: ' + stack.peek())
  console.log('remove: ' + stack.remove())
  console.log('remove: ' + stack.remove())
  console.log('is empty: ' + stack.isEmpty())
  console.log('remove: ' + stack.remove())
  console.log('is empty: ' + stack.isEmpty())
console.groupEnd();