const myLibrary = [];
let i = 0;

class Book {
    constructor(title, author, pages, readOrNot) {
        this.title = title
        this.author = author
        this.pages = pages
        this.readOrNot = readOrNot
    }
    
    get allInfo() {
        return `${this.title}
by ${this.author},
${this.pages} pages`
    }

    get readInfo() {
        return this.readOrNot
    }
}

function addBookToLibrary() {
    if(readOrNot.checked){
        readOrNot.value = 'read';
    } else {
        readOrNot.value = 'not read'
    }
    
    const book01 = new Book(title.value, author.value, pages.value, readOrNot.value);

    return myLibrary.push(book01);
}

function empty(element) {
    element.replaceChildren(); 
}

function displayBooks() {
    const answer = document.querySelector('.answer');

    empty(answer);

    while (i < myLibrary.length) {
        const content = document.createElement('div');

        content.classList.add('content');

        content.setAttribute('data-book-index', `${i}`);

        content.textContent = `${myLibrary[i].allInfo} `;

        const btn = document.createElement('button');

        btn.classList.add('btn');

        btn.textContent = 'Remove book';

        const btn2 = document.createElement('button');

        btn2.classList.add('btn2');

        btn2.textContent = `${myLibrary[i].readInfo}`;

        content.appendChild(btn2);

        content.appendChild(btn);

        answer.appendChild(content);
        
        i++
    }

    i=0;
}

function removeBook() {   
    const btn = document.querySelectorAll('.btn');

    btn.forEach(button => {
        button.addEventListener('click', (e) => {
            myLibrary.splice(e.target.parentNode.dataset.bookIndex, 1);
            
            e.target.parentNode.remove();

            const content = document.querySelectorAll('.content');

            while (i < myLibrary.length - 1){
                content.forEach(card => {
                    card.setAttribute('data-book-index', `${i}`);

                    i++
                })
            }

            i=0;

            const answer = document.querySelector('.answer');
            
            if(answer.hasChildNodes() === false) {
                myLibrary.length = 0;
            }
        });
    });
}

function updateStatus() {
    const btn2 = document.querySelectorAll('.btn2');

    btn2.forEach(button => {
        button.addEventListener('click', (e) => {
            if(e.target.textContent === 'read'){

                e.target.textContent = 'not read';

                myLibrary[e.target.parentNode.dataset.bookIndex].readOrNot = 'not read';
            } else {

               e.target.textContent = 'read';
               
               myLibrary[e.target.parentNode.dataset.bookIndex].readOrNot = 'read';
            }
        })
    })
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

    displayBooks();

    removeBook();

    updateStatus();

    formToReset.reset();
    
    modal.close();
})