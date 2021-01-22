// Node =====================
function Node(data) {
  this.data = data;
}

// Stack ====================
const stack = []

function isEmpty(stack) {
  return stack.length == 0;
}

function peek(stack) {
  const lastIndex = stack.length - 1
  return stack[lastIndex]?.data
}

function add(stack, data) {
  const node = new Node(data)
  stack.push(node)
  return stack.length
}

function remove(stack) {
  return stack.pop().data
}

console.group('Stack')
  console.log('is empty: ' + isEmpty(stack))
  console.log('peek: ' + peek(stack))
  console.log(add(stack, 'first'))
  console.log(add(stack, 'second'))
  console.log(add(stack, 'third'))
  console.log('peek: ' + peek(stack))
  console.log('remove: ' + remove(stack))
  console.log('remove: ' + remove(stack))
  console.log('is empty: ' + isEmpty(stack))
  console.log('remove: ' + remove(stack))
  console.log('is empty: ' + isEmpty(stack))
console.groupEnd();
