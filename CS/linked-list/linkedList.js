// Linked List class
class LinkedList {
  constructor(headNode = new Node(null, null)) {
    this.headNode = headNode;
  }
  // Add a node with value to the end
  append(value) {
    if (this.headNode.nextNode == null) {
      this.headNode.value = new Node(value, null);
    } else {
      let tmp = this.headNode;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value, null);
    }
  }
  // Add a node with value to the head of the list
  prepend(value) {
    let tmp = this.headNode;
    this.headNode = new Node(value, tmp);
  }

  // returns the length of the linked list
  size() {
    if (this.headNode.nextNode == null) {
      return 1;
    }
    let size = 1;
    let tmp = this.headNode;
    while (tmp.nextNode !== null) {
      size++;
      tmp = tmp.nextNode;
    }
    return size;
  }

  //   return the first node in the list
  head() {
    return this.headNode;
  }

  // return the last node in the list
  tail() {
    if (this.headNode.nextNode == null) {
      return this.headNode;
    }
    let tmp = this.headNode;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  //   returns the node at the given index
  at(index) {
    if (index == 1) {
      return this.headNode;
    }
    if (index > this.size()) {
      return "Index exceeds the size of the linked list";
    }
    let tmp = this.headNode;
    for (let i = 1; i < index; i++) {
      console.log(i);
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  //   removes the last element from the list
  pop() {
    if (this.headNode.nextNode == null) {
      this.headNode = new Node();
    }
    let tmp = this.headNode;
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = null;
  }

  //   Returns true if value is in list, false otherwise
  contains(value) {
    if (this.headNode.nextNode == null) {
      return this.headNode.value == value;
    }
    let tmp = this.headNode;
    while (tmp.nextNode !== null) {
      if (tmp.nextNode.value == value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  //   finds the index of the node containing the value, returns null if not found
  find(value) {
    if (!this.contains(value)) {
      return null;
    }
    if (this.headNode.nextNode == null) {
      return this.headNode.value == value ? 1 : null;
    }
    let index = 1;
    let tmp = this.headNode;
    while (tmp.nextNode !== null) {
      if (tmp.nextNode.value == value) {
        return index + 1;
      }
      tmp = tmp.nextNode;
      index++;
    }
    return null;
  }
//   convert the list to a string 
  toString() {
    if (this.headNode.nextNode == null){
        return `( ${this.headNode.value} ) -> ${null}`;
    }
    let tmp = this.headNode;
    let output = `( ${tmp.value} ) -> `;
    while (tmp.nextNode !== null){
        output += `( ${tmp.nextNode.value} ) -> `;
        tmp = tmp.nextNode;
    }
    output += `${null}`;
    return output;
  }

//   inserts a value at the specified index
  insertAt(value, index) {
    // three cases: index is the head node, index is in the middle of the list, index is after the size
    // head node: change headnode value
    // Inside, find the index using find and replace it
    // After the size of the list, simply add it as another node to the end.
  }
}

// Node class
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const test = new LinkedList(new Node(5, new Node(10, null)));

console.log(test.size());
test.append(25);
console.log(test.size());
console.log(test);

test.prepend(11);
console.log(test);

console.log(test.head());
console.log(test.tail());

console.log(test.at(1));
console.log(test.at(2));
console.log(test.at(3));
console.log(test.at(20));

console.log(test.contains(25));
console.log(test.contains(2515));

console.log(test.find(25));
console.log(test.find(10));
console.log(test.find(12412));

console.log(test.tail());
test.pop();
console.log(test.tail());


console.log(test.toString());