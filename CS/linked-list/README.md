# Linked list implementation in JavaScript

This is a JavaScript class representing a linked list, designed as per the specification in [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists).

## Classes:
- `Node`: A simple class, with two fields: `value` and `nextNode` representing the data stored inside a Linked List Node, and a pointer or reference to its next Node element, `null` if none exists.
- `LinkedList`: A class representing a LinkedList, by default the head Node is `null`, contains all the method listed below.

## Methods:
- `append(value)`: Adds a new Node containing `value` to the end of the list
- `prepend(value)`: Adds a new Node containing `value` to the start of the list, replacing the head Node
- `size`: Returns the number of Nodes in the list.
- `head`: Returns the first Node in the list
- `tail`: Returns the last Node in the list.
- `at(index)`: Takes an integer-valued input and returns the Node at the given `index`, if the index exceeds the size of the list a relevant message is displayed.
- `pop` - Removes the last element in the list
- `contains(value)`: Returns true if the `value` is in some Node in the list, otherwise returns `false`.
- `find(value)`: Returns the index of the node containing value, or `null` if the value is not found - the head Node is at index 0.
- `toString`: Represents the current Linked List interpreted in string in the format of:
```
( value ) -> ( value ) -> null
```
where each `( value ) -> ` represents a Node.
- `insertAt(value, index)`: Inserts a new Node element with `value` at the `index` provided, if the `index` exceeds the size of the list, it inserts it as a new Node at the end.
- `removeAt(index)`: Removes a Node at the given `index`, if this exceeds the size of the list, it deletes the last element in the list.