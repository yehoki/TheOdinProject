import mergeSort from "../recursion/mergeSort.js";
// Node class

class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Tree class

class Tree {
  constructor(arr = []) {
    this.arr = arr;
    this.root = null;
  }

  //   sets the array
  setArray(arr) {
    this.arr = arr;
  }

  // merge sort the array
  sortArr(arr) {
    arr = mergeSort(arr);
    return arr;
  }

  // remove duplicates from the array
  removeDuplicates(arr) {
    arr = [...new Set(arr)];
    return arr;
  }

  // PrettyPrint function given from the assignment
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  // checkArray makes sure that the array is sorted and does not contain duplicates
  checkArray(arr) {
    arr = this.sortArr(arr);
    arr = this.removeDuplicates(arr);
    this.setArray(arr);
  }

  //   buildTree function to build the tree from the array
  buildTree(arr = this.arr, start = 0, end = arr.length - 1) {
    if (start > end) {
      return null;
    }
    let middle = Math.floor((start + end) / 2);
    let root = new Node(arr[middle]);
    root.left = this.buildTree(arr, start, middle - 1);
    root.right = this.buildTree(arr, middle + 1, end);
    return root;
  }

  // Set the tree from the root node
  setRoot(root) {
    this.root = root;
    return;
  }

  // function to insert a specific node based on its value
  insert(root, value) {
    if (root == null) {
      return new Node(value);
    }
    if (value < root.data) {
      root.left = this.insert(root.left, value);
    } else {
      root.right = this.insert(root.right, value);
    }
    return root;
  }

  // finds the inorder sucessor
  getInorderSuccessor(root) {
    let current = root;
    // Find the left-most leaf from the root
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // delete value function
  delete(root, value) {
    // If tree is empty, return the tree
    if (root == null) {
      return root;
    }
    if (value < root.data) {
      root.left = this.delete(root.left, value);
    }
    if (value > root.data) {
      root.right = this.delete(root.right, value);
    } else {
      // If it contains no children at all
      if (root.left == null && root.right == null) {
        root = null;
      }
      // exactly one child node.
      else if (root.left == null) {
        let tmp = root;
        root = root.right;
      } else if (root.right == null) {
        let tmp = root;
        root = root.left;
      }
      // 2 children nodes.
      else {
        let tmp = this.getInorderSuccessor(root.right);
        root.data = tmp.data;
        root.right = this.delete(root.right, tmp.data);
      }
    }
    return root;
  }

  // find function to find the node at which a value is located, otherwise return null;
  find(value, root = this.root) {
    if (root == null) {
      return null;
    }
    if (root.data == value) {
      return root;
    }
    if (value < root.data) {
      return this.find(value, root.left);
    } else {
      return this.find(value, root.right);
    }
  }

  // Accepts a function as its parameter, and applies the function to each node using breadth-first search
  levelOrder(fn, root) {
    let orderArr = [];
    let queue = [];
    queue.push(root);
    // console.log("queue1", queue);
    while (queue.length !== 0) {
      // console.log("queue2", queue);
      let current = queue[0];
      // push adds the element as the last element of an array;
      orderArr.push(current.data);
      console.log(current.data);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
      // Shift removes the first element in an array, and returns it;
      queue.shift();
    }
    if (fn == undefined) {
      return orderArr;
    } else {
      orderArr.forEach((value) => fn(this.find(value, root)));
    }
  }

  // inorder traversal
  inorder(fn, root) {
    if (root == null) {
      return;
    }
    this.inorder(fn, root.left);
    console.log(root.data);
    this.inorder(fn, root.right);
  }

  // preorder traversal
  preorder(fn, root) {
    if (root == null) {
      return;
    }
    console.log(root.data);
    this.preorder(fn, root.left);
    this.preorder(fn, root.right);
  }

  postorder(fn, root) {
    if (root == null) {
      return;
    }
    this.postorder(fn, root.left);
    this.postorder(fn, root.right);
    console.log(root.data);
  }

  // height function - returns the height of a node

  height(root = this.root) {
    if (root == null) {
      return 0;
    } else {
      let leftHeight = this.height(root.left);
      let rightHeight = this.height(root.right);

      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      } else {
        return rightHeight + 1;
      }
    }
  }

  // depth function
  depth(root, node, depth = 0) {
    if (this.find(node.data, root) == null) {
      return -1;
    }
    if (node == root) {
      return depth;
    }
    if (node.data < root.data) {
      return this.depth(root.left, node, (depth += 1));
    } else {
      return this.depth(root.right, node, (depth += 1));
    }
  }

  // checks if a tree is balanced based on its root node
  isBalanced(root) {
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }
    return true;
  }

  // rebalances an unbalanced tree
  rebalance(root = this.root) {
    if (this.isBalanced == true) {
      return;
    }
    let arr = this.levelOrder(undefined, root);
    arr.sort((a, b) => a - b);
    return (this.root = this.buildTree(arr));
  }
}

// const test = new Tree([1, 2, 4, 3, 12, 11, 15, 2215, 21312312, 100, 150]);
// console.log(test);
// test.checkArray(test.arr);
// console.log(test);
// test.buildTree(test.arr);
// const newTest = test.buildTree(test.arr, 0, test.arr.length - 1);
// console.log(newTest);
// console.log(test.prettyPrint(test.buildTree()));
// console.log(test.prettyPrint());
// console.log(test.root);
// test.setRoot(test.buildTree())
// console.log(test.root);
// console.log(test.prettyPrint(test.root));
// test.setRoot(test.insert(test.root, 8));
// console.log(test.prettyPrint(test.root));
// console.log(test.delete(test.root, 150));
// console.log(test.prettyPrint(test.root));
// console.log(test.find(3));
// console.log(test.levelOrder(undefined, test.root));
// test.inorder(undefined, test.root);
// test.preorder(undefined, test.root);
// test.postorder(undefined, test.root);

// const next = new Tree();
// next.insert(next.root, 10);
// next.setRoot(next.insert(next.root, 9));
// next.setRoot(next.insert(next.root, 11));
// next.setRoot(next.insert(next.root, 12));

// console.log(next.root);
// console.log(test);
// console.log(test.height(test.root));
// console.log(test.depth(test.root, test.find(11, test.root)));
// console.log(test.isBalanced(test.root));
// console.log(test.prettyPrint(test.root));
// test.rebalance(test.root);
// console.log(test.root);
// console.log(test.prettyPrint(test.root));

// ---------------------- Driver Script

// 1.
const randArr = [];
for (let i = 0; i < 10; i++) {
  randArr.push(Math.round(Math.random() * 10));
}
const newTree = new Tree(randArr);
newTree.setRoot(newTree.buildTree(newTree.arr));
// 2.
console.log(newTree.isBalanced(newTree.root));
// 3.
console.log("Level Order:");
newTree.levelOrder(undefined, newTree.root);
console.log("Preorder:");
newTree.preorder(undefined, newTree.root);
console.log("Postorder");
newTree.postorder(undefined, newTree.root);
console.log("Inorder");
newTree.inorder(undefined, newTree.root);
// 4.
newTree.setArray(newTree.insert(newTree.root, 1250));
newTree.setArray(newTree.insert(newTree.root, 590));
newTree.setArray(newTree.insert(newTree.root, 120));
newTree.setArray(newTree.insert(newTree.root, 675));
// 5.
console.log(newTree.isBalanced(newTree.root));
// 6.
newTree.rebalance();
// 7.
console.log(newTree.isBalanced(newTree.root)); 
newTree.prettyPrint(newTree.root);
// 8.
console.log("Level Order:");
newTree.levelOrder(undefined, newTree.root);
console.log("Preorder:");
newTree.preorder(undefined, newTree.root);
console.log("Postorder:");
newTree.postorder(undefined, newTree.root);
console.log("Inorder:");
newTree.inorder(undefined, newTree.root);