# Binary Search Tree implementation
Binary Search Tree implementation as per [The Odin Project spec](https://www.theodinproject.com/lessons/javascript-binary-search-trees)


## Classes
- `Node`: Stores the data of a tree node, as well as references to its left and right nodes.
- `Tree`: Tree class which holds the array to build the tree, as well as the root node once it is built

## Methods
- `setArray`: Equivalent of `this.arr = arr`
- `sortArray`: Sorts the array using merge sort implemented in [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursion) and returns the sorted array
- `removeDuplicates`: Removes any duplicates in an array and returns it
- `prettyPrint`: Takes the root node of a tree as an input, and 'prints' it as a tree
- `checkArray`: Applies both `sortArray` and `checkDuplicates` at once to make sure an array is ready to create a BST (Binary Search Tree) from.
- `buildTree`: Build a tree using an array, returns the root node of the tree
- `setRoot`: Equivalent of `this.root = root`
- `insert`: Takes a value and a root node as an input, and inputs the value in a correct place in the tree, returns the root
- `getInorderSuccessor`: Finds the inorder successor from a node, used in the `delete` method
- `delete`: Takes a root node and a value as an input, deletes the node which holds the value appropriately:
    * If the node has no children at all, it simply takes it out
    * If the node has exactly one child, it replaces that node with its child
    * If the node has 2 children, it gets its inorder successor to replace it, and in turn deletes the selected node
- `find`: Takes a root node and a value as an input, if that value exists in the tree it will return the node holding that value
- `levelOrder`: Applies the Breadth-first search algorithm to a tree, applies a function to each node, if it's undefined returns the array of values.
- `inorder`, `preorder`, `postorder`: Take in a function and a root node, and apply the Depth-first search algorithm variations to the tree, applying the function to each node, if the function is undefined - returns the array of values.
- `height`: Takes a node of a tree and returns its height, i.e. the number of edges in the longst path from a given node to a leaf node, where a leaf node is a node with no children.
- `depth:` Takes a node of a tree and returns its depth, i.e. the number of edges in a path from a given node to the node
- `isBalanced`: Checks if the tree is balanced, i.e. the difference in heights between the left and right subtrees is at most 1.
- `rebalance`: Using a traversal method, we create a new function which rebalances the array of the tree, recreates the newly built tree.