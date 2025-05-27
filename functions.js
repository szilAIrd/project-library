const body = document.getElementsByName('body')


function Book(title, author, year, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.title = title;
    this.author = author;
    this.year = year;
    this.id = crypto.randomUUID()
    this.read = read;
    let id = this.id
    // this.setReadStatus = function(id){
    //     const bookRead = document.querySelector(`.book-card[data-id=${id}] .read`);
    //     // this.read = true
    //         // const bookRead = getElementById
    //         if (this.read==true){
                
    //             this.read = false
    //             bookRead.textContent = 'Not read';

    //         }
    //         else {
    //             bookRead.textContent = 'Read'; 
    //             this.read = true;
    //         }
    //     }
        // () => {this.read == true ? `Book was read? ${this.read}` : `Book was read? ${!this.read}`;  }

    
    this.displayBook = function (){
        const library = document.getElementById('library')
    
    
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.id = this.id;
        
    
        const bookTitle = document.createElement('div');
        bookTitle.classList.add('title');
        bookTitle.textContent = this.title
        bookCard.appendChild(bookTitle)
    
    
        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = this.author;
        bookCard.appendChild(bookAuthor)
    

        const bookYear = document.createElement('div');
        bookYear.classList.add('year');
        bookYear.textContent = this.year;
        bookCard.appendChild(bookYear)
    

        const bookRead = document.createElement('div')
        bookRead.classList.add('read')
        bookRead.textContent = this.read;
        bookCard.appendChild(bookRead);
    

        const bookActions = document.createElement('div')
        bookActions.classList.add('actions')

        const bookActionRead = document.createElement('div')
        bookActionRead.classList.add('read-button')
        bookActionRead.textContent = 'Set read';
        bookActionRead.addEventListener('click',this.setReadStatus)
        bookActions.appendChild(bookActionRead)

        const bookActionDelete = document.createElement('div')
        bookActionDelete.classList.add('delete-button')
        bookActionDelete.textContent = 'Delete';
        bookActionDelete.addEventListener('click',removeBook)

        bookActions.appendChild(bookActionDelete)
        bookCard.appendChild(bookActions)
    
        library.appendChild(bookCard)
    }
}

let library = [];

Book.prototype.setReadStatus = function(){
    
    this.read = !this.read;
    let currentElem = this;
    let bookRead = this.parentElement.previousElementSibling;
    bookRead.textContent = this.read;
    this.textContent = ( this.read === true ? 'Set not read' : 'Set read')
    
    let bookId = currentElem.parentElement.parentElement.dataset.id;
    
    let index = library.findIndex(book => book.id === bookId)
    library[index].read=this.read

}

function removeBook(){
    let currentElem = this;
    let bookCard = currentElem.parentElement.parentElement
    let bookId = bookCard.dataset.id;

    let index = library.findIndex(book => book.id=== bookId)
    if (index !== -1) {
        library.splice(index, 1); // removes the item in-place
      }

    bookCard.remove()

    // const bookId = document.querySelector(`[data-user=]`)
}

function addBookToLibrary(event){
    // ,title, author,year,read=false
    // if (library.length==0) {
    //     title = title;
    //     author = author;
    //     year = year;
    //     read=read
    // }
    // else{
        const newBook = document.getElementById('add-book-form')
        title = newBook.children[1].value;
        author = newBook.children[3].value;
        year = newBook.children[5].value;
        read = false;
    // }
    // const addBook = document.getElementById('add-book-btn')
    event.preventDefault()
    let book = new Book(title, author, year, read)
    
    library.push(book)
    book.displayBook()
    return
}

// if (library.length==0){
// addBookToLibrary(event,'The Hobbit 1','Tolkien', 1971, false)
// addBookToLibrary('The Hobbit 2','Tolkien', 1972, false)
// addBookToLibrary('The Hobbit 3','Tolkien', 1973, false)
// displayLibrary()
// }




const addBook = document.getElementById('submit-book')
addBook.addEventListener('click', addBookToLibrary, false)


function displayLibrary(library){
   library.forEach(element => {element.displayBook()});
}




displayLibrary(library)