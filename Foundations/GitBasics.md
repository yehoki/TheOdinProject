# Git Basics

Here we will include some basic Git commands and examples to be used throughout

All git related commands will begin with `git ...`

## Best Practices

### Atomic commits

What is an Atomic Commit? It's a commit that includes changes related to only one feature or task of the program.

There are two main reasons for this:

1. If something with the change turns out to cause more problems than expected, this is easily reversed without losing other changes;
1. Enables us to write better commit messages

### clone

`git clone [ssh key]` Use this to clone a repository locally

### remote

`git remove -v` displays the URL of the repo created on GitHub

### status

`git status` displays the current status of the files between the branch locally and remotely in GitHub

### add

`git add [file]` adds the file to the staging area in Git, i.e. the 'waiting room' in Git before we push it to the remote repository


### commit

`git commit -m <message>` commits the currently staged files into GitHub with a commit message (the -m option)


### restore

`git restore --staged <file>` restores the file i.e. takes it out of the staging area in Git

### log

`git log` displays the entries for any previous commits and changes to the repo

### push

`git push` pushes the committed changes to the remote repository in GitHub
`git push origin main` to make sure it pushes it to the main branch of the repo

