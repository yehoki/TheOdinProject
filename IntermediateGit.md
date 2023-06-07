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
This will display all commits ever done in the repository (note to self: **USE WITH CAUTION!** I almost deleted a whole repo and panicked).
Then, replace `pick` with `squash` in the `file2.txt` commit and replace the commit message with `Add file1.txt and file2.txt` et voila!
Run `git log` to confirm.

#### Splitting up a commit 
As we can combine two commits using `squash` if they can be, when a commit is too vague we can split them up using `reset`
We will be once again using `rebase` as we slowly realise it can be frequently use and is not just a one off command.
Let's say we want to split up our current commit we just did combining the two files, as we realise they are independently needed.
Change from `pick` to `edit` for the commit we will split, and run `git reset HEAD^` which resets the commit right before HEAD, and add & commit the two files separately:
```
$ git reset HEAD^
$ git add file1.txt && git commit -m "Add file1.txt complex"
$ git add file2.txt && git commit -m "Add file2.txt complex"
```
That's all well and nice, but what's actually happening under the hood?
It's one thing knowing what is happening, but let's look at how and why?

When we run `git reset`, we reset the current branch by pointing HEAD to the commit before the one it's currently at.
In the meantime, it also updated the (index) staging area with the contents of where HEAD is now pointed.
Therefore, our staging area is alo reset to what it was before the commit, and so we can now add and commit both files separately.

But what if we don't want to touch the staging area?
Well, we can use the `--soft` option: `git reset --soft`, from which we don't touch the index at all but only the HEAD is moved to point somewhere else.

What's the opposite of soft?
`git reset` has it too.
Think of it like 3 options: soft is light, no option is medium and hard is well... hard.
With `git reset --hard` we do all the things it does with no commands, but also *updates the working directory*.
This is where it can get tricky and dangerous, as our current working directory might not have everything saved.
The hard reset option overwrites the current files in the working directory so they look **exactly** like the staging area of where HEAD was pointing to.
So, similarly as `git commit --amend`, it's a destructive command where we overwrite history and can be **EXTREMELY DANGEROUS** if not used correctly.
That's not to be scared of ever using it, but when you do **make sure you know exactly why you're using it, and your colleagues should know it too**.

Personal rule of thumb: If you can't explain the reason to a 5 year old, you probably shouldn't be doing it.

### Working with Remotes
So far we worked with remote repos when we pushed or pulled from our own GitHub repo.
Let's look at some more advanced topics.

### git push --force
Suppose your individual project is now a shared one with someone else.
When working on your own local branch, did some work and wanted to commit and push it to the remote branch, using `git push` would cause a conflict on the remote repo and error causing you not to be able to push through the changes.
This is actually a good thing, a safety mechanism which makes sure you won't overwrite commits already done by someone else, which could be not ideal.
So, using `git push --force` overwrites the remote repo with your current local history.

Let's look at the following scenario:
- We push our current split commits to the main branch
- We now rebase and remove the commit for the `file2.txt` file
- We use `git push --force` and look at `git log`.
- We see that `file2.txt` does not exist anymore, it's gone from our local system and our github - it's been destroyed.

Moral of the story: `git push --force`, like many commands we just saw **MUST BE USED WITH CAUTION WHEN COLLABORATING WITH OTHERS**.

Before we go, we briefly introduce 3 more commands:
- `git revert`: It reverts the changes back to the specified location, if we used `git revert HEAD` this would revert the changes to HEAD
- `git fetch`: Downloads commits, files and refs from a remote repo to your local one. We can also specify the specific branch we want to download. This is a good way to make sure you are on the latest version of the branch before pushing your commits.
- `git merge`: Can be used to merge branched together into a single branch

### Dangers and Best Practices
With some of these commands, it's important you know what's going on - especially if you're not the only person doing them.
It can be scary, and intimidating but you get used to it.
Here are some best practices to ensure things go smoothly:
1. When working on a team project, always communicate with others before rewriting history and make sure it is safe to do.
2. Use these commands ideally only on your personal branches or branches you are working on.
3. Using the `-f` flag to force something should be scary, and ONLY do it if you have a damn good reason to do so.
4. Don't push after every commit, changing pubished history should be avoided when possible.
5. a. For `git amend` -> never amend commits that have been pushed to remote repos.
   b. For `git rebase` -> never rebase a repo that others may work off of.
   c. For `git reset` -> never reset commits that have been pushed to remote repos.
   d. For `git push --force` -> only use it when appropriate, use it with great caution and preferably default to using the failsafe of `git push --force-with-lease`.

### Branches are Pointers
We already *sort of* understand what branches are in Git - they can be like multiple versions of our files where they can be independently edited.
We also mentioned pointers when going into a bit more Computer Sciency stuff - they store the address in memory to the file location or variable.
Before we look at branches, let's look at commits.
It was mentioned they are *snapshots* - it's as if everytime we run a `git commit` the computer or machine takes a picture of all file contents that are currently in the staging area.
So it would make sense for a branch to be a group of commits - which isn't the case!
**A Branch is a pointer to a single commit.**
Within each commit, it has a pointer to the previous commit, and so does that one and so on.
Imagine a chain:
```
Branch -> latest commit -> commit before that -> ... -> first commit ever done
```
Using this as a way of thinking about branches and commits, it might make looking at how moving around the HEAD works - as that would also be, you guessed it, a pointer.
Although unrelated, pointers in memory are similar to how they are in Git.
So, with rebasing our commits let's see what happens under the hood:
- We run `git rebase -i HEAD~2` - this lets us edit the last two commits
- We start at HEAD, which is a special pointer to keep track of the current branch
- That commit points to the commit before it, which is 'commit number two', and since we only need 2 we're done.