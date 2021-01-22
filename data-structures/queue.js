// Node =====================
function Node(data) {
  this.data = data;
}

// Queue ====================
const queue = []

function isEmpty(queue) {
  return queue.length == 0;
}

function peek(queue) {
  return queue[0]?.data
}

function add(queue, data) {
  const node = new Node(data)
  queue.push(node)
  return queue.length
}

function remove(queue) {
  return queue.shift().data
}

console.group('Queue')
  console.log('is empty: ' + isEmpty(queue))
  console.log(add(queue, 'first'))
  console.log(add(queue, 'second'))
  console.log(add(queue, 'third'))
  console.log('peek: ' + peek(queue))
  console.log('remove: ' + remove(queue))
  console.log('remove: ' + remove(queue))
  console.log('is empty: ' + isEmpty(queue))
  console.log('remove: ' + remove(queue))
  console.log('is empty: ' + isEmpty(queue))
console.groupEnd();