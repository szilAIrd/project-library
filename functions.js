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
    this.setRead = function()
        {this.read = true}
}

let library = [];

function addBookToLibrary(title, author,year,read){
    let book = new Book(title, author, year, read)
    return library.push(book)
}

addBookToLibrary('The Hobbit 1','Tolkien', 1971, false)
addBookToLibrary('The Hobbit 2','Tolkien', 1972, false)
addBookToLibrary('The Hobbit 3','Tolkien', 1973, false)

function displayLibrary(){
    const library = document.getElementById('library')
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    

    const bookTitle = document.createElement('div');
    bookTitle.classList.add('title');
    bookCard.appendChild(bookTitle)

    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    bookCard.appendChild(bookAuthor)

    const bookYear = document.createElement('div');
    bookYear.classList.add('year');
    bookCard.appendChild(bookYear)

    const bookRead = document.createElement('div')
    bookRead.classList.add('read')
    bookCard.appendChild(bookRead)

    const bookActions = document.createElement('div')
    bookActions.classList.add('actions')
    const bookActionRead = document.createElement('div')
    bookActionRead.classList.add('read-button')
    bookActions.appendChild(bookActionRead)
    const bookActionDelete = document.createElement('div')
    bookActionDelete.classList.add('delete-button')
    bookActions.appendChild(bookActionDelete)
    bookCard.appendChild(bookActions)




    library.appendChild(bookCard)

}

