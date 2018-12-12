// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI(){}

UI.prototype.addBookToList = function (book){
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

UI.prototype.showAlert = (message, className) => {
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

UI.prototype.deleteBook = (target) => {
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


// Event Listeners
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

  ui.showAlert('Book Added!','success');

  // Clear fields
  ui.clearFields();

  }

  e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click',(e)=>{

  ui = new UI();

  ui.deleteBook(e.target);

  //Show message

  ui.showAlert('Book removed!','success');

  e.preventDefault();
})