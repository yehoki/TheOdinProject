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

Now we can take a look at asymptotic notations, they are used to describe the running time of an algorithm.
As we just saw, an algorithm's runtime depends on the input, from now on which we will simply describe as `n`.
The three most common notations are the following:
- **The Big O Notation**: Represents the upper bound of an algorithm, meaning the worst-case scenario.
- **The Omega (Ω) Notation**: Represents the lower bound of an algorithm, meaning the best-case scenario.
- **The Theta (Θ) Notation**: Represents both upper and lower bounds of an algorithm, so anlyses the average case.

Although here we have 3 perfectly solid ways of describing the running time, we will always want to look at the worst case scenario for our algorithm, and so we use *The Big O Notation*.

#### Big O

So, we just found out what the Big O notation represents, but how do we actually find out the running time?
As mentioned, it all depends on the input and our algorithm itself.
Below are all the possible notations in order from fastest to slowest:
- O(1) - Constant Complexity
- O(log N) - Logarithmic Complexity
- O(N) - Linear Complexity
- O(N log N) - N x log N Complexity *read as `N log N`*
- O(N<sup>2</sup>) - Quadratic complexity
- O(N<sup>3</sup>) - Cubic Complexity
- O(2<sup>N</sup>) - Exponential Complexity
- O(N!) - Factorial Complexity

Let's go through some more detail and context for each one:

##### O(1) - Constant Complexity

Constant complexity is the fastest timing possible, and it literally means it was completed in a single step. Well, kind of. What the Big O notation does not consider, is that there is an invisible constant outside of the big O.
See this in the following example:

Consider an array:
```JS
const arr = [1, 2, 3, 4, 5, 6]
```
In this array, we have 6 numbers, and to retrieve any individual number we call its index: so `arr[2] = 3` as an example.
This was completed in a single step, but not quite.
For this particular setup, the computer needs to look up where the array is in memory, since arrays in memory are stored as a block in-order, it then jumps to the index from the first element.
So, it's not exactly a single step. However, these steps are incidental, and are consistent no matter whether we complete this for an array of 5 elements or 100,000 elements, and so when we consider the steps of same or smaller magnitude (as we will see soon), we simply take them out as a constant.
To put it more mathematically: `O(1) == O(10) == O(1 + 2 + 3 + 4) == O(100000)` - they all are of constant complexity.
This is mainly due to the fact that as the data size changes, these steps are the same and so they are dropped. The Big O only tells us the steps **relative to the input**.

##### O(log N) - Logarithmic Complexity

If an algorithm is of O(log N) complexity, it simply means that everytime the dataset doubles in size, the number of steps increases by one - pretty good right?
One of the most commonly known algorithms with logarithmic complexity is [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm).
Let's see how it works for a sorted array (Note: Binary Search will not work on a non-sorted array)
```JS
const arr = [1,2,3,4,6,8,9,10]
```
Our goal is to find out whether or not the array contains the number 7.
Firstly, we find the value at the middle of the array, and compare it to 7. Since the number in the middle is 6, we discard the left side of our array and are left with:
```JS
arr = [6,8,9,10]
```
We repeat this again, find the middle of the array, and compare the value to 7 - in this case 9 is greater than 7, so we discard the right side of the array.
Repeat this, until we end up with a single item - if that item matches what we were looking for then great! However in our case, we see that 7 is not in our array.
Notice how we are essentially halving the array and comparing values so many times, and this number of steps increases only once we go past a specific threshold AKA doubling the size of the array.

##### O(N) - Linear Complexity

This is potentially one of the simplest ones here - simply think of a single loop.
As long as there are no nested loops, each iteration will have constant complexity (or O(1) complexity), and it will be completed N times.
So if we do some complexity arithmetic, let's say each iteration has 4 steps inside it: `O(N * 4) == O(N) * O(4) == O(N) * O(1) == O(N)`.
So everytime we loop over a whole array, we go through N steps where N is the size of the array, and each time we increase the size of the array by 1, we gain another step.

##### O(N log N) - N log N Complexity

This one is usually when we have two separate actions, a clear example of this would be merge sort.
As we saw previously, in Merge sort we split the arrays into left/right halves, as in Binary Search - so that part is log(N), but the merge of each array has O(N) complexity.
Combining the two, we get that Merge sort has O(N log N) complexity.

##### O(N<sup>2</sup>) - Quadratic Complexity

As we just saw with O(N log N), this will again combine two separate algorithms, but both of O(N) complexity.
The simplest way to think about this, is if we iterate over a 2-Dimensional array, where we first have a loop going over each row, and inside each of these loops we get a separate loop going over each column - and hence value.

##### O(N<sup>3</sup>) - Cubic Complexity

Similarly as Quadratic Complexity, think of triple nested loops - should you ever need it.

##### O(2<sup>N</sup>) - Exponential Complexity

For every extra element in our data set, our number of steps doubles. Don't have to say how unefficient this will get, as for size of 10 we get 1024 steps.

##### O(N!) - Factorial Complexity

You thought Exponential was the worst? Nope, here comes Factorial complexity.
The most common way we would see Factorial complexity is trying to find combinations/permutations of an array, a bit more mathematics is involved here.


### Space Complexity

The first way of measuring how well an algorithm is working was through time complexity, which refered to the number of steps relative to the input.
Space complexity will measure how much memory will be used relative to the input. But what actually is it?

Well, it we can consider it as **the total space used by an algorithm relative to the size of the input**.
It considers the space used by our algorithm in the first place, by also *auxiliary space* - that is any extra space used during the algorithm.
Some examples of these could be storing temporary variables throughout the algorithm, or if we are creating new objects.
After execution, at least in JavaScript and many other languages, we don't have to worry about that memory being freed due to a Garbage Collector, however it's important to consider it during the algorithm execution.
We will see that even though Space Complexity is not the most important when considering algorithms, it is still important in case we run into troubles, to know why things are happening by measuring it.

As with time complexity, we measure space complexity using the **Big O Notaton**, and we indeed have the same complexities as before, here are some examples:

#### O(1) - Constant Complexity

Consider an example where we take two parameters as an input, and return their product (assuming they are both numbers).
We only need to store the two variables in memory, and thus it will be constant - O(1).

#### O(N) - Linear Complexity

The majority of data structures that we will come across will have space complexity O(N), which makes sense really as we just need to store the N items inside the data structure, and if we increase our input we linearly need more space as well.

#### Other complexities

Now, if we look at the [Big-O Cheat Sheet](https://www.bigocheatsheet.com/), we immediately see that the majority of the data structures have O(N) space complexity, and for some sorting algorithms we also get O(1) complexity.
So other than the two mentioned, it's not necessary to see examples for the remaining ones.

## Data Structures
