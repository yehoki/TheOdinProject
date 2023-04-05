function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${name} by ${author}, has ${pages} pages, and has ${read?'been read':'not been read'}.`
    }
}

const testBook = new Book('Test', 'test author', 5010, false);

console.log(testBook.info());