# A Bit of Computer Science

Although designing websites and being a developer involves knowing how to do things, we also want to learn how to solve problems - we want to solve them **WELL**.
But what does solving problems *well* actually mean?

Well, as we have realised already, there are many ways to write code with the same output or result. However, we often see drawbacks to some methods, which makes one method the `correct` or the `efficient` way to do things.
The first example that comes to mind is using the `.map` method in JavaScript instead of simply looping over an array.
Yes, they can both achieve the same thing, however using `.map` is a much cleaner and shorter way of formulating the same thing.

## Algorithms and Pseuocode

In Computer Science, an `algorithm` is a set of instructions which solves some problem. This set of instructions is executed step-by-step and most likely will be run by computers.
An example of an algorithm in the real world would be a cooking recipe - it will tell you the steps, in order one after another, to successfully bake a cake, make a curry or just make a bowl of cereal.

Another example of an algorithm us humans can use, would be counting objects. The most common way of doing this, is we start with 0 and once we point or refer to a 'thing' or an object, we add one to our total. We repeat this until there are no more things to count.
We can write this using `pseudocode` - it's the human readable version of writing algorithms, which resembles a programming language. In other words, it's the English syntax of writing an algorithm.
```
let N = 0
for each object
    set N = N + 1
```
It describes how we go about counting objects. However, as we previously mentioned we want to solve problems *well*, and one of the metrics in deciding whether an algorithm is performing *well* or not, is the speed of it -  we will see later how it is measured.
For now, instead consider counting *pairs at a time*. We get something like this, with a conditional at the end, in the case we get an odd number:
```
let N = 0
for each pair of objects
    set N = N + 2
if an object remains
    set N = N + 1
```

Although in the early stages of developing websites, since we won't be dealing with a lot of data, the performance of an algorithm compared to almost anything else will be almost exactly the same, due to the small sample size.
However, as we move on in web development and scale up our websites and applications, we begin to see that indeed algorithms will play a large role in speeding up specific actions.

## Recursive methods

Recursion is pretty straight-forward from the word itself, to do something recursively is to do the same thing repetively until it finishes.
When it comes to a function or an algorithm, it's pretty much the same idea - we call the function over and over inside itself until we finish the problem.

They are often used in [Divide and Conquer Algorithms](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) - which are a design of algorithms based on *multi-branched* recursion.
It works recursively by breaking down a problem into two or more sub-problems of the same/related type, until they become simple enough to be solved directly.
All the previous solutions are then combined to yield a solution to the original problem.

Every problem that we can solve recursively, we can also solve iteratively - and vice versa. However, there are times when we should use one or the other.
It is not always the *best* idea to use recursion, however sometimes it is the *better* solution.

A common example is the factorial function - the function that takes an integer as an input and returns the product of all the consecutive numbers up to and including that integer - denoted by a number followed by an exclamation mark, 5! for example.
Of course, we could easily write this up iteratively as follows:
```JS
function fact(num){
    let ans = 1
    for (let i = 1; i < num; i++){
        ans = i * ans; //Can also write ans *= i;
    }
    return ans;
}
```
We can see we will go through the loop `num` times, and complete the multiplication of the previous number and a new number - here is how we can write it recursively:
```JS
function fact(num){
    if(num == 0 || num == 1){
        return 1;
    }
    return num * fact(num - 1);
}
```
Note here, we have two cases: The *Base* case, and The *Recursive* case.
- The Base case is the known solution, or the first option - in our case we know the factorial of 1 is just 1, so we return it. This also stops the recursive process.
- The recursive case, is where the recursion takes place but with an altered input or way, in hope of making our processing simpler or easier.


### Merge Sort

Merge sort is one type of sorting algorithms that we will often encounter in different places, here is the pseudocode for it:
```
Take an array of size n > 1
Sort the left half of the array (assuming n > 1)
Sort the right half of the array (assuming n > 1)
Merge the two halves together
```

