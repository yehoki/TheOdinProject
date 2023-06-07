# TheOdinProject

The Odin Project 2023 - Yehoki

In this repository I will be storing all my information gained and projects created from [The Odin Project](https://www.theodinproject.com).


## Q & A
I will be treating the Q & A section as a way to *qucikly refresh* anything, by listing all the **Knowledge check** questions at the end of a lesson, with my answers - whether they are directly from the lesson, from the articles provided or my own combination.

## Foundations

#### Git Basics

##### Introduction to Git

##### Git Basics

#### HTML Foundations

##### Introduction to HTML and CSS

##### Elements and Tags

##### HTML Boilerplate

##### Working with Text

##### Lists

##### Links and Images

##### Commit messages

#### CSS Foundations

##### CSS Foundations

##### Inspecting HTML and CSS

##### The Box Model

##### Block and Inline

#### Flexbox

##### Introduction to Flexbox

##### Growing and Shrinking

##### Axes

##### Alignment

#### JavaScript Basics

##### Fundamentals Part 1

##### Fundamentals Part 2

##### JavaScript Developer Tools

##### Fundamentals Part 3

##### Understanding Errors

##### Clean Code
[Previous Notes](https://github.com/yehoki/TheOdinProject/blob/main/CleanCode.md)

##### Installing Node.js

##### Fundamentals Part 4

##### DOM Manipulation and Events

##### Revisiting Rock Paper Scissors

##### Fundamentals Part 5

## Full Stack JavaScript

### Intermediate HTML and CSS

#### Intermediate HTML Concepts

##### Introduction

##### Emmet

##### SVG

##### Tables

#### Intermediate CSS Concepts

##### Default Styles

##### CSS Units

##### More Text Styles

##### More CSS Properties

##### Advanced Selectors

##### Positioning

##### CSS Functions

##### Custom Properties

##### Browser Compatibility

##### Frameworks and Preprocessors

#### Forms

##### Form Basics

##### Form Validation

#### Grid

##### Introduction to Grid

##### Creating a Grid

##### Positioning Grid Elements

##### Advanced Grid Properties

##### Using Flexbox and Grid

### JavaScript

#### Introduction

##### Linting

#### Organizing your JavaScript Code

##### Objects and Object Constructors

##### Factory Functions and the Module Pattern

##### Classes

##### ES6 Modules

##### Webpack

##### OOP Principles

#### JavaScript in the Real World

##### Dynamic User Interface Interactions

##### Form Validation with JavaScript

##### What is ES6?

#### Asynchronous JavaScript and APIs

##### Asynchronous Code

- What is a callback?
    * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function in order to complete an aciton or routine.

- What is a promise?
    * A Promise is an object in JavaScript, which represents the eventual completion (or failure) of asynchronous operation and its resulting value.

##### Working with APIs

##### Async and Await

#### A bit of Computer Science
[Some personal notes on CS](https://github.com/yehoki/TheOdinProject/blob/main/CS/README.md)
##### A very brief intro to CS

- What is an Algorithm?
    * A sequence of instructions given to a computer or device in order to solve a problem step-by-step.

- What is the importance of algorithms in web development?
    * Although making web pages does not require any specific algorithms and neither does HTML or CSS, it's when we have data which we need to process to take from or display on our web page that we might consider algorithms to speed up the process and make it more efficient.

- What is pseudocode?
    * Pseudocode is English-like syntax used to describe the steps of an algorithm.

##### Recursive Methods

- How would you briefly define a recursive function?
    * A recursive function is one which repeatedly calls itself in order to solve a problem.

- What is the point of recursion? Is it more efficient than using a plain loop?
    * The point of recursion is to reduce the amount of 'workers' necessary for each function, since we are continuously completing the same task, we only really need the same operation over and over, and to then store it in memory. It might not always be efficient than a plain loop, however it has some tradeoffs such as reducing the computational load on each call, yet it may have memory constraints.

- What are the 2 main parts of a recursive function?
    * The Base Case - which is the 'least problem' possible and can be immediately solved, in turn which terminates the recursive process; The Recursive Case, where the problem is solved by calling the function for different arguments, over and over.

- What is stack overflow?
    * Stack overflow takes place when we allocate more recursion memory than we have in the stack, which causes the execution to fail as the system will not have enough memory to store the whole recursive process.

##### Time Complexity

- What is Big O?
    * Big O is an asymptotic notation which represents the worst case scenario for an algorithm, relative to the size of its input.

- What are the Big O Notations?
    * They are the different orders of speed that can be calulcated using the Big O notation, which represent the speed, relative to the input size, of an algorithm.

- Why use Big O?
    * Since using actual timing to measure the speed of algorithms is very incosistent across different devices, and even on the same device, it gives us a consistent way to measure the timing of an algorithm that will stay the same across all systems.

- What is Big Omega and why isn't it as useful?
    * Big Omega represents the *Best Case*, which will give us the best possible scenario for an algorithm, which can be extremely inconclusive as best case scenarios often happen in a rare context, for example searching an array where our value is the first index.

##### Space Complexity

- What is Space Complexity?
    * Space complexity is very similar to Time complexity, except it measures the memory used by an algorithm relative to the size of its input. Similarly here, we measure the extra memory used by the algorithm during its execution.

- How do we measure Space Complexity?
    * We can measure Space Complexity using Big O, same as for Time Complexity, and the only difference is to think about the size of variables and inputs as opposed to the timing it takes for functions and algorithms to execute.

- What are the main considerations we should consider before optimising code?
    * We should always consider how we measure our complexity - in terms of space complexity, that would mean what space are we actually measuring? One way of doing this, is by defining it as the memory which the program modifies, i.e. changes in some way.

##### Common Data Structures and Algorithms

- What is the difference between a stack and a queue?
    * Stacks and queues are both abstract, first-in-first-out (FIFO) data types. A stack, builds items on top of each other by putting one item in memory on top of another, and can only take out the most recently added item. On the other hand, in a queue we *enqueue* items to the tail (or rear) of a queue, and we *dequeue* items from the head (or front) of a queue.

- What are the *enqueue* and the *dequeue* properties?
    * Enqueuing places an item as the last item in the queue, and dequeuing removes the first element in the queue

- What is a linked list? What is a node?
    * A linked list is a linear collection of data elements of any type, which we define as nodes. Nodes have two properties: a value - which stores some data type as its value, and a pointer - which stores the next node's memory address in the list, or nothing if it's the last item in the list.

- What type of algorithm would you use to perform a binary search?
    * Binary Search Algoritm is a type of Divide and Conquer algorithms (D&D), which by definition recursively breaks down a problem into two or more sub-problems of a similar type and complexity, until these become simple enough to be solved directly in the base case of the recursive process.

- What abstract data type would you use to defer/store nodes in a breadth-first tree traversal?
    * Breadth-first tree traversal goes through each *level* of the tree first before moving onto the next. In breadth-first traversal we store the nodes in a queue, as we look at the nodes children, and enqueue them if they exist.

- What abstract data type would you use to defer/store nodes in a depth-first tree traversal?
    * Depth-first tree traversal goes through an entire branch of a tree until a leaf node, often starting with the left-most branch as the start. In depth-first traversal, we store each of the nodes in a stack, and we remove those nodes once we find out that they have no children, or each of the children have been traversed, or discovered, already.

#### Testing JavaScript

[Some personal notes on TDD](https://github.com/yehoki/TheOdinProject/blob/main/javascript/testing/README.md)

##### Testing Basics

- What are the benefits of TDD?
    * Some benefits of TDD include: Reducing the cost of change, encourages refactoring, reduces bugs and any edge case behaviours, reduces waste code.

- What are some Jest matchers?
    * Jest is a JavaScript framework used for testing and a Jest matcher is a way for expecting an output once a function has been run. Some matchers in Jest include: exact equality matcher: `toBe`; `toBeNull`, `toBeTruthy` and `toBeUndefined` are some truthiness matchers; there are inequality matchers as well with numbers like `toBeLessThan` or `toBeGreaterThan`; we can check if strings match regular expressions with `toMatch`; arrays and iterables can check if it contains something with `toContain`.

##### More Testing 

- What is tightly coupled code?
    * Tightly coupled code is when the code closely relies on other parts of the function as well as other classes and functions externally, and in general makes the code less testable and reusable.

- Two requirements for a function to be *pure*?
    * For a function to be pure it must firstly always return the same output given the same input and should only rely on the arguments of the input, and secondly it must not interact or change anything outside of the function.

- What are side effects and why is it important to identify them when testing a function?
    * Side effects are interactions with things and objects that are outside of the scope of the function, or anything that is not directly impacted by the function - some examples are changing a variable value or printing to the console.
It's important to identify them in order to track what our function is doing, and provide relevant tests, since if the function is truly pure, the test should always be the same for the same input.

- What are the two solutons to the tightly coupled code problem?
    * First, is remove anything your function depends on, if that is possible - which is not always the case. The second, is mocking which in turn is writing *fake* version of those functions, that always behave and return what you want in order to make sure it's testable.

- What is Mocking and how would you use a mock function?
    * Mocking is providing *fake* functions to another function, which will always return the required output in order to test the main function.

- How should you test incoming query messages?
    * Test incoming query messages by making assertions about what they send back. We want to test the interface without the implementation.

- Why should you not test implementation?
    * The goal for testing is to test our interface, and not the implementation, we only care about what gets returned - not about how it's done.

- Should you test private methods?
    * Do not test private methods, if we do there it binds us to the current implementation of the class or function, increases costs and we cannot improve the code without breaking the test.
Don't test them. Don't make assertions about their results. Don't expect to send them.


- Why should you not test messages with no side effects?
    * If we are sending a message without any side effects, it's invisible to the rest of our application and so we should not send it since it's a waste of time.
#### Intermediate Git

##### A deeper look at Git

- How can you amend your last commit?
    * We can amend the latest commit using `git commit --amend`

- What are some different ways to rewrite history?
    * Firstly, we can simply amend the latest commit with `git commit --amend`. We can also change multiple commit messages using `rebase`. We can `squash` together multiple commits into one, or reorder them using `rebase` again. We can separate commits using `rebase`. Finally, we can simply delete a commit with the `drop` option while rebasing.

- What is a safe way to push history changes to a remote repository?
    * Whether you are working alone or with others, try to avoid using `git push --force-with-lease` to fail-safe as it will check the branch you are attempting to push to and see if there have been any new updates.

- What are the dangers of history-changing operations?
    * Short and sweet - destroying and deleting code. Whether your own or someone else's.

- What are the best practices of history-changing operations?
    * [Best practices](IntermediateGit.md#dangers-and-best-practices)

- Explain what it means for branches to be pointers.
    * Branches are pointers in the sense that they point to a single commit, and each commit can point to another one creating a chain.

##### Using Git in the real world

#### React JS

##### React Introduction

##### State and Props

##### Handle Inputs and Render Lists

##### Lifecycle Methods

##### Hooks

##### Router

##### React Testing Part 1

##### React Testing Part 2

##### Advanced Concepts

#### JavaScript and the Backend

##### Using BaaS for your Back end

