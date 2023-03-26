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

A lot of the time, a single line in the subject will be enough to describe the issue, for example if there was a typo in the manual. In this case, we can simply use the `-m` option with `git commit`.

However, when the commit requires more explanation, we need to write a body of the message. In order to write this, simply write `git commit` and then insert the commit below the initial lines in your configured text editor. This will create a subject line and a body in the commit message.

We can now use `git log --oneline` to see the list of just the subject lines of the previous commits, and `git shortlog` which groups by user but prints out just the subject lines.

### 2. Limit the subject line to 50 characters

Keeping the subject line short and conscice will make sure it gets straight to the point. If you are having trouble summarizing it, there's a chance there are too many commits going on at once.

### 3. Capitalize the subject line

Simply begin the subject line with a capital letter, makes it look nicer and more professional.

### 4. Do not end the subject line with a period

First, you have 50 characters why waste one of them on a period? Second, it doesn't look right in the title.

### 5. Use the imperative mood in the subject line

What's the *imperative mood* ? Sounds scary, doesn't it? Essentially it just means the language as if spoken or written as a command or an instruction. For example, using words like *Refactor*, *Update*, *Remove* instead of *Fixed*, *Changing*.

The general rule of thumb is that adding the subject line to the end of this sentence will make sense:

**If applied, this commit will *your subject line***

### 6. Wrap the body at 72 characters

As Git does not wrap text automatically, writing the commit message you must mind its right margin and wrap the text manually.

### 7. Use the body to explain *what* and *why* rather than how

Here is a great example, as quoted in the source, explaining what changed and why:

```
   Simplify serialize.h's exception handling

   Remove the 'state' and 'exceptmask' from serialize.h's stream
   implementations, as well as related methods.

   As exceptmask always included 'failbit', and setstate was always
   called with bits = failbit, all it did was immediately raise an
   exception. Get rid of those variables, and replace the setstate
   with direct exception throwing (which also removes some dead
   code).

   As a result, good() is never reached after a failure (there are
   only 2 calls, one of which is in tests), and can just be replaced
   by !eof().

   fail(), clear(n) and exceptions() are just never called. Delete
   them.
```

In many cases, we can leave out the details, however looking back at it in the future everyone (including yourself) will thank you.
