const myLibrary = [];

Book.prototype = {
    info : function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let title = prompt('Please enter a title');
    let author = prompt('Please tell me the author');
    let pages = prompt('How many pages');
    let read = prompt('Already read or not');

    const book01 = new Book(title, author, pages, read);

    return myLibrary.push(book01);
}

function displayBooks() {
    let i = 0;
    
    while (i < myLibrary.length) {
        const container = document.querySelector('.container');

        const content = document.createElement('div');

        content.classList.add('content');

        content.setAttribute('style','border: 1px solid blue;');

        content.textContent = `${myLibrary[i].info()}`;

        container.appendChild(content);
        
        i++
    }

    i = 0;
}