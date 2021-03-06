// from https://blog.jcoglan.com/2007/07/23/writing-a-linked-list-in-javascript/

// Usage
//  var list = new LinkedList.Circular()
//  list.append({value: "first val"})
//  list.append({value: "second val"})
//  list.append({value: "third val"})
//  list.first      //=>
//        { value: 'first val',
//          prev:
//           { value: 'third val',
//             prev:
//              { value: 'second val',
//                prev: [Circular],
//                next: [Circular] },
//             next: [Circular] },
//          next:
//           { value: 'second val',
//             prev: [Circular],
//             next:
//              { value: 'third val',
//                prev: [Circular],
//                next: [Circular] } } }
// list.first.next     //=>
//      same as above, but with value as "second val" and prev/next as "first val"/"third val"

function LinkedList() {}
LinkedList.prototype = {
  length: 0,
  first: null,
  last: null
};

LinkedList.Circular = function() {}
LinkedList.Circular.prototype = new LinkedList();

LinkedList.Circular.prototype.append = function(node) {
  if (this.first === null) {
    node.prev = node;
    node.next = node;
    this.first = node;
    this.last = node;
  } else {
    node.prev = this.last;
    node.next = this.first;
    this.first.prev = node;
    this.last.next = node;
    this.last = node;
  }
  this.length++;
};

LinkedList.Circular.prototype.prepend = function(node) {
  if (this.first === null) {
    node.prev = node;
    node.next = node;
    this.first = node;
    this.last = node;
  } else {
    node.prev = this.last;
    node.next = this.first;
    this.first.prev = node;
    this.last.next = node;
    this.first = node;
  }
  this.length++;
}

LinkedList.Circular.prototype.insertAfter = function(node, newNode) {
  newNode.prev = node;
  newNode.next = node.next;
  node.next.prev = newNode;
  node.next = newNode;
  if (newNode.prev == this.last) { this.last = newNode; }
  this.length++;
};

LinkedList.Circular.prototype.remove = function(node) {
  if (this.length > 1) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    if (node == this.first) { this.first = node.next; }
    if (node == this.last) { this.last = node.prev; }
  } else {
    this.first = null;
    this.last = null;
  }
  node.prev = null;
  node.next = null;
  this.length--;
};