class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
  
    list.appendChild(row);
  }
  
  showAlert(message, className){
    const div = document.createElement('div');

    div.className = `alert ${className}`;
  
    div.appendChild(document.createTextNode(message));
  
    const container = document.querySelector('.container');
    
    const form = document.querySelector('#book-form')
  
    container.insertBefore(div,form);
    
    setTimeout(()=>{
      document.querySelector('.alert').remove();
    },3000);
  }

  deleteBook(target){
      target.parentElement.parentElement.remove();
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local Storage Class
class Store {
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks(){
    const books = Store.getBooks();

    books.forEach(book => {
      const ui = new UI();

      ui.addBookToList(book);
    });
  }
 
  static addBook(book){
    // console.log(book);
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books',JSON.stringify(books));
  }

  static removeBook(isbn){
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.isbn === isbn) books.splice(index, 1)
    });

    localStorage.setItem('books',JSON.stringify(books));
  }
}

// DOM Load Event

document.addEventListener('DOMContentLoaded', Store.displayBooks);

document.getElementById('book-form').addEventListener('submit',(e)=>{
  // Get form values
  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  console.log(ui);

  //  Validate
  if(title === '' || author === '' || isbn === ''){
    ui.showAlert('Please fill in all fields', 'error');
  } else {

  ui.addBookToList(book);

  Store.addBook(book);

  ui.showAlert('Book Added!','success');

  // Clear fields
  ui.clearFields();

  }

  e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click',(e)=>{

  ui = new UI();

  if(e.target.className === 'delete'){
    ui.deleteBook(e.target);
    //Show message
    
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
    ui.showAlert('Book removed!','success');
  }


  e.preventDefault();
})