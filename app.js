let myLibrary = [];
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const status = document.getElementById('status');
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary(book) {
  const bookDetails = document.getElementById('book-details');
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>
    <button class="toggle-btn">${book.status.value}</button>
    </td>
    <td><a href="#" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i>  Delete Book</a></td>
    `;
  const statusBtn = tableRow.querySelector('.toggle-btn');
  statusBtn.addEventListener('click', (e) => {
    const btn = e.target;
    btn.classList.add('btn');
    if (btn.innerHTML === 'read') {
      btn.innerHTML = 'unread';
      btn.classList.add('btn-info');
    } else {
      btn.innerHTML = 'read';
      btn.classList.remove('btn-info');
      btn.classList.add('btn-success');
    }
  });
  bookDetails.appendChild(tableRow);
}

function getBooks() {
  myLibrary = localStorage.getItem('myLibrary') === null ? [] : JSON.parse(localStorage.getItem('myLibrary'));
  return myLibrary;
}

function renderBook() {
  const books = getBooks();
  books.forEach((book) => addBookToLibrary(book));
}

function clearFields() {
  title.value = ' ';
  author.value = ' ';
  pages.value = ' ';
}

function deleteBook(element) {
  if (element.classList.contains('delete')) {
    element.parentElement.parentElement.remove();
  }
}

function addBook(book) {
  const myLibrary = getBooks();
  myLibrary.push(book);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function removeBook(title) {
  const myLibrary = getBooks();
  myLibrary.forEach((element, index) => {
    if (element.title === title) {
      element.splice(index, 1);
    }
  });
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required `);
    } else {
      showSuccess(input);
    }
  });
  setTimeout(() => {
    const small = document.querySelectorAll('.small-error');
    small.forEach(node => node.remove());
  }, 3000);
}

function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className} alert-success-style `;
  div.style.zIndex = '10';
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.header-container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}

document.addEventListener('DOMContentLoaded', renderBook);

document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const bookPages = pages.value;
  const bookStatus = status.value;
  if (bookTitle.trim() === '' || bookAuthor.trim() === '' || bookPages.trim() === '') {
    checkRequired([title, author, pages]);
  } else {
    const book = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    addBookToLibrary(book);
    showAlert('Book added to the list', 'success');
    addBook(book);
    clearFields();
  }
});

document.getElementById('book-details').addEventListener('click', (e) => {
  deleteBook(e.target);
  removeBook(e.target.parentElement.previousElementSibling.textContent);
  showAlert('Book Removed From the list', 'danger');
});

document.getElementById('add-new-book').addEventListener('click', () => {
  document.querySelector('.header-container').style.display = 'flex';
  document.querySelector('#add-new-book').style.display = 'none';
});
document.querySelector('#hide').addEventListener('click', () => {
  document.querySelector('.header-container').style.display = 'none';
  document.querySelector('#add-new-book').style.display = 'block';
});