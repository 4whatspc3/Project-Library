const myLibrary = [];

Book.prototype = {
    info : function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.readOrNot}`
    }
}

function Book(title, author, pages, readOrNot) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readOrNot = readOrNot
}

function addBookToLibrary() {
    if(readOrNot.checked){
        readOrNot.value = 'read';
    } else {
        readOrNot.value = 'not read yet'
    }
    
    const book01 = new Book(title.value, author.value, pages.value, readOrNot.value);

    return myLibrary.push(book01);
}

function empty(element) {
    element.replaceChildren(); 
}

function displayBooks() {
    let i = 0;
    
    const answer = document.querySelector('.answer');

    empty(answer);

    while (i < myLibrary.length) {
        const content = document.createElement('div');

        content.classList.add('content');

        content.setAttribute('style','border: 1px solid blue;');

        content.textContent = `${myLibrary[i].info()}`;

        answer.appendChild(content);
        
        i++
    }

    i = 0;
}

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const formToReset = document.querySelector('.form');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

formToReset.addEventListener('submit', (e) => {
    e.preventDefault();
    
    addBookToLibrary();

    console.log(myLibrary);

    displayBooks();

    formToReset.reset();
    
    modal.close();
})
