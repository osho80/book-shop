'use strict';

function onInit() {
    createBooks();
    renderBooks();
}

function renderBooks() {
    var books = gBooks;
    var strHTMLs = books.map(function getBookHTML(book) {
        return `<tr>
        <td>${book.Idx}</td> <td>${book.title}</td> <td>${book.price} $</td>
        <td><button class="read" onclick="onReadDetails(${book.Idx})">Details</button></td>
        <td><button class="update" onclick="onUpdateBook(${book.Idx})">Update</button></td>
        <td><button class="delete" onclick="onRemoveBook(${book.Idx})">Delete</button></td></tr>`
    })

    document.querySelector('.books-container tbody').innerHTML = strHTMLs.join('');
}


function onAddBook() {
    const elTitleInput = document.querySelector('.add-book input[name="title"]');
    const elPriceInput = document.querySelector('.add-book input[name="price"]');
    const title = elTitleInput.value;
    const price = elPriceInput.value;
    if(price <= 0) return;
    // console.log(title);
    // console.log(price);
    addBook(title, price);
    renderBooks();
    elTitleInput.value = '';
    elPriceInput.value = '';
    
    saveBookstoStorage();
}


function onRemoveBook(bookIdx) {
    removeBook(bookIdx);
    renderBooks();
}

function onUpdateBook(bookIdx) {
    var newPrice = +prompt('Enter new price');
    if(newPrice <= 0) return;
    updateBook(bookIdx, newPrice);
    renderBooks();
}

function onReadDetails(bookIdx) {
    
    var elBookDetails = document.querySelector('.book-details');
    //console.log(elBookDetails.display);
    
    if (elBookDetails.style.display === 'block') return;
    elBookDetails.style.display = 'block';
    // var gElBookDesc = document.querySelector('.book-desc');
    getBookDetails(bookIdx);
}


function closeDetailModal() {
    document.querySelector('.book-details').style.display = 'none';
    // elBookDetails.display = 'none';
    //document.querySelector('.book-details').hidden = true;
}
