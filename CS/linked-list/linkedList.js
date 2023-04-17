// Linked List class
class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
  }

  // Add a node with value to the end
  append(value) {
    if (this.headNode == null) {
      this.headNode = new Node(value, null);
      return;
    }
    let tmp = this.headNode;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = new Node(value, null);
    return;
  }

  // Add a node with a value to the head of the list
  prepend(value) {
    let tmp = this.headNode;
    this.headNode = new Node(value, tmp);
    return;
  }

  // returns the length of the linked list
  size() {
    if (this.headNode == null) {
      return 0;
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
    if (this.headNode == null) {
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
    if (index == 0) {
      return this.headNode;
    }
    if (index > this.size() - 1) {
      console.log("Index exceeds the size of the linked list");
      return "Index exceeds the size of the linked list";
    }
    let tmp = this.headNode;
    for (let i = 1; i <= index; i++) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  //   removes the last element from the list
  pop() {
    if (this.headNode == null) {
      return;
    }
    if (this.headNode.nextNode == null) {
      this.headNode = null;
      return;
    }
    let tmp = this.headNode;
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = null;
  }

  //   Returns true if value is in list, false otherwise
  contains(value) {
    if (this.headNode == null) {
      return false;
    }
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
    if (!this.contains(value) || this.headNode == null) {
      return null;
    }
    if (this.headNode.nextNode == null) {
      return this.headNode.value == value ? 0 : null;
    }
    let index = 1;
    let tmp = this.headNode;
    while (tmp.nextNode !== null) {
      if (tmp.nextNode.value == value) {
        return index;
      }
      tmp = tmp.nextNode;
      index++;
    }
    return null;
  }

  //   convert the list to a string
  toString() {
    if (this.headNode.nextNode == null) {
      return `( ${this.headNode.value} ) -> ${null}`;
    }
    let tmp = this.headNode;
    let output = `( ${tmp.value} ) -> `;
    while (tmp.nextNode !== null) {
      output += `( ${tmp.nextNode.value} ) -> `;
      tmp = tmp.nextNode;
    }
    output += `${null}`;
    return output;
  }

  // inserts a value at the specified index
  insertAt(value, index) {
    if (index == 0 && this.headNode !== null) {
      let tmp = this.headNode.nextNode;
      this.headNode = new Node(value, tmp);
      return;
    }
    if (index == 0) {
      this.headNode.value = value;
      return;
    }
    // Add the value as a new node to the end
    if (this.at(index) == "Index exceeds the size of the linked list") {
      this.append(value);
      return;
    }

    // If it's somewhere in the middle - TypeScript would help here a lot making sure that tmp is indeed returning us a Node;
    let tmp = this.at(index);
    tmp.value = value;
  }

  // Remove the Node at the specified index
  removeAt(index) {
    if (index == 0 && this.headNode == null) {
      return;
    }
    if (index == 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }
    // Deletes the last node if it's too large, and notifies
    if (this.at(index) == "Index exceeds the size of the linked list") {
      this.pop();
      return;
    }
    // Every other case in the middle;
    if (this.at(index).nextNode !== null) {
      let tmpBefore = this.at(index - 1);
      let tmp = this.at(index);
      tmpBefore.nextNode = tmp.nextNode;
    }
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



// console.log(test.size());
// console.log(test);
// test.append(25);
// console.log(test.size());
// console.log(test);

// test.prepend(11);
// console.log(test);

// console.log(test.head());
// console.log(test.tail());

// console.log(test.at(1));
// console.log(test.at(2));
// console.log(test.at(3));
// console.log(test.at(20));

// console.log("25", test.contains(25));
// console.log("2515", test.contains(2515));

// console.log(test.find(25));
// console.log(test.find(10));
// console.log(test.find(12412));

// console.log(test.tail());
// test.pop();
// console.log(test.tail());

// console.log(test.toString());

// console.log(test);
// console.log(test);
// console.log(test.append(10));

// test.insertAt(1234, 211212);
// console.log(test.tail());

// test.insertAt(122234, 0);
// console.log(test.head());

// console.log("at11",test.at(1));
// test.insertAt(50, 1);
// console.log("at12", test.at(1));
// console.log(test.size());
// console.log("at0", test.at(0));
// console.log("at1", test.at(1));
// console.log("at2", test.at(2));

// console.log(test.size());
// console.log(test);

// console.log(test.head());
// test.removeAt(0);
// console.log(test.head());

// console.log(test.head());
// console.log(test.size());
// test.removeAt(1);
// console.log(test.size());
// console.log(test.at(1));
// console.log(test.head());

// console.log(test.head());
// test.removeAt(2);
// console.log(test.head());
