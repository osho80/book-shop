'use strict';

function onInit() {
    createBooks();
    renderBooks();
    doTrans();
}

function renderBooks() {
    //debugger
    var books = gBooks;
    var strHTMLs = books.map(function getBookHTML(book) {
        return `<tr>
        <td>${book.Idx}</td> <td>${book.title}</td> <td>${formatCurrency(book.price)}</td> 
        <td><button class="read" onclick="onReadDetails(${book.Idx})" data-trans="detailsBtn">Details</button></td>
        <td><button class="update" onclick="onUpdateBook(${book.Idx})" data-trans="updateBtn">Update</button></td>
        <td><button class="delete" onclick="onRemoveBook(${book.Idx})" data-trans="deleteBtn">Delete</button></td></tr>`
    })

    document.getElementById('books-display').innerHTML = strHTMLs.join('');
    // document.querySelector('.books-container tbody').innerHTML = strHTMLs.join('');
}


function onAddBook() {
    const elTitleInput = document.querySelector('.add-book input[name="title"]');
    const elPriceInput = document.querySelector('.add-book input[name="price"]');
    const title = elTitleInput.value;
    const price = elPriceInput.value;
    if(price <= 0 || title ==='') return;
    
    // console.log(title);
    // console.log(price);
    addBook(title, price);
    renderBooks();
    elTitleInput.value = '';
    elPriceInput.value = '';
    
    
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
    // onSetRating(bookIdx);
}


function closeDetailModal() {
    document.querySelector('.book-details').style.display = 'none';
    // elBookDetails.display = 'none';
    //document.querySelector('.book-details').hidden = true;
}


function onSetLang(lang) {
    setLang(lang);
    // TODO: if lang is hebrew add RTL class to document.body
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    renderBooks();
    doTrans();
}

function renderDetailsModal(booksIdx) {
    document.querySelector('.book-details h2').innerText = gBooks[booksIdx].title; 
    var bookImage = gBooks[booksIdx].Idx;
    
    
    document.querySelector('.book-details .book-image').innerHTML = `
    <img src="/img/${bookImage}.jpg" width="200px" alt="">`; 
    
    gElBookDesc.innerHTML = gBooks[booksIdx].desc;
    var rate = gBooks[booksIdx].rating
    onSetRating(rate);
}

function onSetRating(booksRate) {
   //debugger
   console.log(booksRate);
    
    
    
}
