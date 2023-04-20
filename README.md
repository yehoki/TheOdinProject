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

##### JSON 

##### Asynchronous Code

##### Working with APIs

##### Async and Await

#### A bit of Computer Science

##### A very brief intro to CS

##### Recursive Methods

##### Time Complexity

##### Space Complexity

##### Common Data Structures and Algorithms

#### Testing JavaScript

[Some personal notes on TDD](https://github.com/yehoki/TheOdinProject/blob/main/javascript/testing/README.md)

##### Testing Basics

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

