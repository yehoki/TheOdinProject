# TDD - Test Driven Development

## What is TDD? 
Test Driven Development, more commonly known by its short version - TDD, is the concept in software development where we focus on tests first and actually writing our code later.
Simply put, we can represent TDD as follows:
1. We create a test for our program
2. We run the test against our current program
    1. If those tests pass, we go back to the first step and create a new test again
    2. If those tests fail for whatever reason, we add a minimal tweak to our program
    3. If after making those changes, we see that the tests are now passing successfully, we return to the very first step and add yet another test.
    4. If, however, our tests are still failing, we go back to making minimal changes to our program.

That is all there is to TDD. The concept seems super simple, but software testing can be split into multiple different categories, some of which we will see later down the line.

You will hear many developers and engineer complain, in a rather naive way, that testing is boring and often unnecessary - because they know what they're doing.
Yet, the longer a project is being worked on and different people work on it, it's important to make your code not only be understood by yourself, it is also important that if another developer decides to read or change a part of your project, that it's possible.
And that it's possible without spending stupid amounts of hours trying to understand what the purpose is of function `passHere(a, b, c)`. 
Of course, that comes from writing clean and efficient code, however adding tests also allows for clean running of code once finished.

## Unit Testing

Unit Testing is a process of development where we separate the application into smallest parts possible that we could test, called *units*, and create individual tests for each unit that is independent of any other test.
Here is an example to visualise this a bit more:

Imagine we have a simple sum function:
```JS
function sum(a, b){
    return a + b;
}
```

Well, each unit in our case would look at what happens with different inputs, and looking at all possible cases:
- Can it add two positive numbers?
    * Can it add two positive numbers that are not equal to each other?
- How does adding 0 affect it?
    * What happens when we have 0 as both input values?
- Can we add negative numbers?
    * What happens when we add a negative number to a positive number?
    * Do we get 0 when we add the same absolute value of a number to its negative counterpart?
- Does it behave the same with different orders of magnitudes of numbers?
- Does it handle floats correctly?

As we can see, this is a **VERY** exhaustive list of all possible cases, however it is often necessary in unit testing - especially the larger our project or application gets, it helps us eliminate tiny edge cases over time where it may break our entire application which often makes it so we struggle to find the issue.

Let's say we have a class with a constructor and multiple methods assigned to it.
When testing, whether it is unit testing or any form of testing, we want to make sure each method is being tested individually, as well as make sure they are not dependent on an external function.
Imagine a situation where you have a method being dependent on another class' method to work, and you run tests and it fails - now we have a bit of a dillemma as to what is the *true* reason behind the test failing.
Is it the function we are testing?
Is it the external function?
Or is it something completely different?

## Tightly coupled code

At the beginning of the journey with writing code, if we simply look back to some of our projects we will see how the code is very *compact*, everything tightly fits together and kind of relies on one another.
We call this *tightly coupled code*, where we have code which relies on separate logic to produce outcomes - but we can split this logic instead.
We know that writing clean code means making sure each function has a single responsibility behind it, of course that will become clear the more code we write but especially at the beginning it is important to ask oneself some questions:
- Can I describe what it does in simple terms?
- Does it make sense splitting it up?
- What *could* go wrong here?

When we write our code with *TDD*, we are more likely to create what are called *Pure Functions*, which have these properties:
- A *Pure Function* will **always** return the same output if the same arguments are passed into the function - meaning that it does not depend on some external condition, function or data to handle the arguments given.
- A *Pure Function* will not create any **observable** side effects - these could be network requests or data mutation for example.

But what are these so called *side effects*?
Well, think of anything to do with interactions that are outside that function:
- Does it change some non-const variable's value?
- Does it send out a network request?
- Does it print to the console, or manipulate the DOM?
Why are pure functions so *majestic* you might ask?
Well, mainly from the point of view of testing or refactoring, if we have a clear purpose and we don't have to rely on anything externally, it will be really simple if we need to test and/or refactor our *pure* functions.

With that being said, it's pretty obvious that not all functions need to be, or rather should be, pure.
A good idea is if an impure function uses pure functions to do some work with arguments given and return a consistent input, and then an impure function can go from there and use it.
