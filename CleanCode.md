# Clean Code

Although developers spend a lot of time actually writing the code, they spend even more time reading through it. So, as a favour to others and yourself, writing clean and readable code is extremely important.

Here are some general rules of thumb to help us write clean code:

## Indentation

When we indent code, it's not how or why we use a specific style over another but we have to make sure that it is consistent through the code. In majority of the projects, two spaces === one tab indentation will be used.

## Semicolons

Although semicolons are mostly optional in JavaScript since the compiler will insert them automatically, it can still sometimes break in some situations, which can be easily fixed by adding semicolons.

## Line length

Your lines of code don't have a set limit, however everyone knows it is a lot easier to read the code if you don't have to scroll through.

A general rule is you should manually break lines of code longer than 80 characters, and when breaking lines this should be done immediately after an operator or a comma.

## Naming conventions

Every variable name should be descriptive in the least, naming something as `userInput` instead of `a` is a massive improvement. For JavaScript variables, always use camelCase, and if you move on to a different programming language, use their naming convention. Variables should always begin with a noun or an adjective and functions with a verb.

## Commenting your code

As in the blog article[code tells you how comments tell you why](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/), we should aim to comment the reason behind the code, as the code itself should be self-explanatory to what it does. We should always write our code as if comments didn't exist, and only explain in particular situations.

