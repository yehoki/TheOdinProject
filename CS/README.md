# A Bit of Computer Science

Although designing websites and being a developer involves knowing how to do things, we also want to learn how to solve problems - we want to solve them **WELL**.
But what does solving problems _well_ actually mean?

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

It describes how we go about counting objects. However, as we previously mentioned we want to solve problems _well_, and one of the metrics in deciding whether an algorithm is performing _well_ or not, is the speed of it - we will see later how it is measured.
For now, instead consider counting _pairs at a time_. We get something like this, with a conditional at the end, in the case we get an odd number:

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

They are often used in [Divide and Conquer Algorithms](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) - which are a design of algorithms based on _multi-branched_ recursion.
It works recursively by breaking down a problem into two or more sub-problems of the same/related type, until they become simple enough to be solved directly.
All the previous solutions are then combined to yield a solution to the original problem.

Every problem that we can solve recursively, we can also solve iteratively - and vice versa. However, there are times when we should use one or the other.
It is not always the _best_ idea to use recursion, however sometimes it is the _better_ solution.

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

Note here, we have two cases: The _Base_ case, and The _Recursive_ case.

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

## Time and Space Complexity

In order to write good code, many metrics are involved when comparing good code to _not so good_ code. At the beginning, it is essential you adopt a habit of writing code that is readable and maintainable, however there is also another metric - efficiency.
When writing code, we should expect to know, and understand, how well our code will perform.
Now, this depends on many factors, some of which are:

- Size of our dataset
- The data structures used to store the data
- The algorithms used to process the data
- The machine on which it is performed

We will be now look at two ways of measuring code efficiency: **Time Complexity** and **Space Complexity**.

### Time Complexity

Time Complexity relates to, you guessed it, how efficient our code is with regards to timing.
What might first come to mind when measuring how slow or quick our code runs is the time in seconds, or minutes.
This however, is extremely ambigious - let's see an example:

Your friend wrote some code to count up the total number of individual files on your computer, let's say he's quite new to code so it involved just going inside every single directory as a tree recursively and just counting how many files (not directories) there are.
Because he has the newest 128GB RAM computer and there aren't many more than just the root files, it takes him seconds (I don't actually know how long it would take).

However, you are still using that 2007 Dell, which let's be honest could be worse. But it also could probably be powered by a Hamster and still run.
He send you over the code, and you sit there waiting for 5 minutes until it finishes.

The difference is clear here, and should show why using the standard time measurement for time complexity would not be a good idea in the Computer Science world.

**Ladies and Gentleman, please welcome to the stage: _The Big O_ and Asymptotic notations**

#### Asymptotic Notation

As we saw in an example above, using standard time measurement to measure how long our code takes to run is a poor metric.
Instead, we take the measurement based on the number of steps taken with regards to the input of our function.
Consider this example of a code where we count the number of even numbers up to and including a number:

```JS
function isEven(num){
    let currentNumber = 1;
    while (currentNumber < num){
        if(currentNumber % 2 == 0){
            console.log("It is Even");
        }
        currentNumber++;
    }
}
```

For a simplicity, let's take `num = 6` for now, and go through what's happening here:
1. First, we assign a new variable with a set `value` of 1 - that's one step
2. Next, we begin a while loop, in which multiple things take place:
    1. We compare `currentNumber` with our input - one step
    2. Check if `currentNumber` is even - one step
    3. Every second number (how even numbers work), we log it out in the console - let's say 0.5 steps for now
    4. Increment `currentNumber` by one - one step.
3. We compare one final time, but see that indeed `currentNumber = 7` and `num = 6` which is one step, but we quit the function.

Let's count this up:
1. Single step: Sum is 1
2. For each number 1, 2, 3, 4, 5, 6 we repeat this, so let's just count up what's inside the while loop and multiply it by 6:
    3.5 steps each
    Multiply by 6
    Sum is 1 + 21
3. Finally, we add one last compare: Sum is 1 + 21 + 1

However, we can write this with regards to the number we input: 1 + 3.5 * num + 1.
So, depending on the number we choose, this function will run for 2 + 3.5 * num, or simply 2 + 3.5n steps.

