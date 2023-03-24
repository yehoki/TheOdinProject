# Command Line Basics

[Command Line Basics](https://swcarpentry.github.io/shell-novice/)

The shell is a **CLI**, a Command Line Interface, and a scripting language

- A shell is a program whose primary purpose is to read commands and run other programs.

- This lesson uses Bash, the default shell in many implementations of Unix.

- Programs can be run in Bash by entering commands at the command-line prompt.

- The shell’s main advantages are its high action-to-keystroke ratio, its support for automating repetitive tasks, and its capacity to access networked machines.

- The shell’s main disadvantages are its primarily textual nature and how cryptic its commands and operation can be.

- bin directory: build-in programs are stored
- Users directory: users' personal directories are stored
- tmp for temporary files





## Commands

### ls

listing: Lists the conents of the current directory
Using the `-F` option: `$ ls -F` classifies the output by adding a market to the file and directory to indicate what they are

### cd

change directory: changes directory to the input, if no input returns to the home directory

`cd -`: Changes to the previous directory
`cd ..`: Goes down one directory
`cd ~`: Use tilde at the start of a path to mean "the current home directory"

### pwd

print working directory: displays the current working directory we are in

### clear

clears out the terminal of all previous work

### man

read the manual of a command: use space to scroll through quickly and `q` to quit

### --help option

displays more information on how to use the command


### mkdir

Make a new directory

### nano

Text editor

### touch

Generates a new empty file

### rm

Remove
`-i` option to delete safely - asking for confirmation
`-r` option used to remove a directory

### mv

move
`mv source destination`
`mv test.txt words.txt` changes the filename
`mv -i` stands for interactive and asks for confirmation when overwriting files

### cp

copies a file or a directory

`cp -r directory directory_backup ` stands for recursive, in order to copy a directory

### Wildcards

* is a wildcard which represents zero or more characters.
`*.txt` would show all text files

? is a wildcard which represents exactly one character
`?lane.txt` would show all text files which match this, e.g. plane.txt, slane.txt, ilane.txt and so on.

We can use multiple ?'s in order to create an exact number of characters:
`??st.txt` represents test.txt, tost.txt, mast.txt and so on

### wc

Stands for word count, use on a text file (or other type of file) to count the number of words inside
Output gives the number of lines, words and characters in the files respectively.
Can run on multiple files inside as well
`wc -l *.txt` would show only the number of lines, similarly `-m` and `-w` for characters and words.

### cat

Concatenate, joins together and prints the contents of files

### sort

Sorts things in the file, use the `-n` option to sort numbers instead of an alphanumerical effect

### head

Shows up the first n lines in a file

### tail

Shows the last n line in file

### echo

Used to print strings in the CLI

### > and >>

`>` overwrites the current version of the file

`>>` appends the text into the current version of the file

`echo test > test.txt` creates a test.txt file

`echo test1 > test.txt` changes the text inside the document to test1

`echo test2 >> test.txt` adds a new line inside the document as test2


### pipe |

The vertical bar is called a *pipe* -  it tells the shell that we want the output from the left to be used as an input on the right.


