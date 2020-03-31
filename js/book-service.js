'use strict';

const KEY = 'books';
var gBooks;
var gBookIdx = 1001
var gElBookDesc = document.querySelector('.book-desc');//.innerHTML;
//console.log(gElBookDesc);

function _createBook(title, price) {
    return {
        Idx: gBookIdx++,
        id: makeId(),
        title: title,
        price: price,
        desc: makeLorem(),
        rating: 0
    }
}

function createBooks() {
    var books = loadFromStorage(KEY);

    if (books && books.length) {        //cars if condition is better
        gBooks = books;
        saveToStorage(KEY, gBooks)
        return
    }

    books = [];
    books.push(_createBook('Romeo and Juliette', 9.80));
    books.push(_createBook('El amor en los tiempos de corona', 21.70));
    books.push(_createBook('Learn to code', 32.90));

    gBooks = books;
    saveToStorage(KEY, gBooks)

}

function removeBook(bookIdx) {

    var booksIdx = gBooks.findIndex(function (book) {
        return bookIdx === book.Idx
    })

    console.log(booksIdx);

    gBooks.splice(booksIdx, 1);
    saveToStorage(KEY, gBooks);
    // console.log(gBooks);

}

function updateBook(bookIdx, newPrice) {
    var booksIdx = gBooks.findIndex(function (book) {
        return bookIdx === book.Idx
    })

    gBooks[booksIdx].price = newPrice;
}

function addBook(title, price) {
    var book = _createBook(title, price);
    gBooks.unshift(book);
    saveToStorage();
}

function getBookDetails(bookIdx) {
    
    // var elBookDesc = document.querySelector('.book-desc');
    var booksIdx = gBooks.findIndex(function (book) {
        return bookIdx === book.Idx
    }) 
    
    // console.log(gElBookDesc);
    gElBookDesc.innerHTML = gBooks[booksIdx].desc;
    // console.log(gBooks[booksIdx].desc);
    
    
}   

