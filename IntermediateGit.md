# Intermediate Git
At the beginning of the course we were introduced to version control with Git, including some basic commands in [Git Basics](./Foundations/GitBasics.md).
It is time now, before we move onto some more advanced projects and topics, to come across some more Git commands and utilities.

## A Deeper Look At Git
Since we began using Git, the three basics we probably used were `git add .`, `git commit` and `git push`.
They are extremely useful, however in order to become a professional web developer, learning more of version control with Git is crucial.
Going over topics like Remotes, Pointers and Changing Git History, but also visualing of what is actually going on under the hood when things happen.

### Changing History
I can guarantee you I can find an imperfect commit - whether the message is meh, you didn't wait until the last moment or it's somewhat all over the place.
Well, changing what took place usually is extremely difficult bar impossible - but not with Git.

#### Changing the Last Commit
Imagine we have 2 files, but we only added and committed the first one:
```
$ git add file1.txt && git commit -m "Add file1.txt"
```
We can use `$ git commit --amend` to fix this:
```
$ git add file2.txt
$ git commit --amend
```
As we run the `amend` option, what actually happens?
Well, we replace the latest commit with our new one, which now includes the missing file.
However, since it does not edit the latest commit but **replaces** that commit with a new one - **REMEMBER: Only amend commits that have not been pushed anywhere!**
This will prevent you overwriting someone else's work in a group/team environment.
Rewriting history sounds great, but with great power comes great responsibility and even greater consequences.

#### Changing multiple commits
Let's say we have more than one commit in our history which we are not quite happy with, here we can now use `rebase`.
`rebase -i` can be used to interactively stop after each commit we try to modify, and make changes to them.
We have to tell rebase which is the last commit we want to edit:
```
$ git log
$ git rebase -i HEAD~2 
```
This allows to edit the last two commits, but they are in reverse order of how they're displayed when using `git log`.
We get many commands with `rebase`, one of which is the `edit` option, as well as many others.
We need to change `pick` into one of the commands, save and exit the editor after which we should get a message on what to do next from Git - if succcessful.
**NOTE**: Similarly as with editing a single commit, this is **EXTREMELY** dangerous if misused.
If you are using a **shared repo**, have a really good reason for rebasing commits, and make sure your colleagues are aware.

#### Squshing commits
Squashing sounds funny, like squashing a bug or an insect - or it's a sport or a drink if you're from the U.K.
But in this case, it does exactly what it intends - puts things closely together.
Squashing commits makes it a lot easier for others to understand what took place in the project.
Let's say we are working on a component in React, and we create loads of commits specifically to that component.
At the time, they are incredibly important to understand what's the progress of the component.
However, looking at the entire history of the branch, it's not necessary to understand why there is a commit on *adding phone number state*.

Now, going back to our `file1.txt` and `file2.txt` example, let's say we want to instead change it so they're both sent together:
```
$ git rebase -i --root
```
