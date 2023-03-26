# Git Commit messages


## What are commit messages?
They are messages that come along the commit, i.e. the "snapshot" of the code into the remote repository. They should tell the story or rather the history of what happened to the code, without looking at what actually happens inside the commits themselves, and hence will be incredibly useful when looking back through the code - whether an app-breaking bug happened, or you just want to refresh your memory on what has been already done.

When we write code, it's best practice to commit the code to the remote repository every time and meaningful changes take place in the code. Well, what does a meaningful change mean? The understanding of this will increase over time, however for now it will be whenever a bug or typo is fixed, or you get the function working like it's supposed to for some examples.

## What is the difference between good and bad commit messages?

Although we have just mentioned that not writing commit messages themselves can be bad for the codebase, there are also bad commit messages themselves. We want our commit messages to have the most amount of information, in as little text as possible - that sounds easy enough, right? At the beginning it will be difficult to understand whether or not a commit message makes sense, purely due to the lack of experience. However, as the journey moves forward and you get more feedback from colleagues, or self-criticism from own mistakes, you will get a grasp of what should be in commit messages.

## The seven rules of a great Git commit message
This is straight up taken from [How to Write a Git Commit Message](https://cbea.ms/git-commit/).

Before we go through these rules, here is an example of a great commit message:

```
Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```

### 1. Separate subject from body with a blank line

### 2. Limit the subject line to 50 characters

### 3. Capitalize the subject line

### 4. Do not end the subject line with a period

### 5. Use the imperative mood in the subject line

### 6. Wrap the body at 72 characters

### 7. Use the body to explain *what* and *why* rather than how


