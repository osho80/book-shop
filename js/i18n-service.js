var gTrans = {
    title: {
        en: 'Book Shelf',
        he: 'מדף הספרים'
    },
    subtitle: {
        en: 'A good boook will take you a long way... even while quarantined',
        he: 'ספר טוב יכול לקחת אותך רחוק, גם מתוך ההסגר'
    },
    searchInput: {  // button: line13
        en: 'Enter title / author',
        he: 'הכנס כותר / סופר/ת'
    },
    searchBtn: {
        en: 'Search',
        he: 'חפש'
    },
    addTitleInput: {
        en: 'Book title',
        he: 'חפש כותר'
    },
    addPriceInput: {
        en: 'Price',
        he: 'מחיר'
    },
    addBtn: {
        en: 'Add book',
        he: 'הוסף כותר'
    },
    tableIdx: {
        en: 'Idx',
        he: '#'
    },
    tableBookTitle: {
        en: 'Title',
        he: 'כותר'
    },
    tableBookPrice: {
        en: 'Price',
        he: 'מחיר'
    },
    tableActions: {
        en: 'Actions',
        he: 'פעולות'
    },
    booksdetails : {    // title in modal
        en: 'Book\'s details',
        he: 'פרטי הספר'
    },
    booksrating: {  // appear in modal
        en: 'Book\'s rating',
        he: 'דירוג'
    },
    detailsBtn: {
        en: 'Details',
        he: 'פרטים'
    },
    updateBtn: {
        en: 'Update',
        he: 'עדכן'
    },
    deleteBtn: {
        en: 'Delete',
        he: 'הסר'
    },
    currency: {
        en: '$',
        he: '?'
    } 
}

var gCurrLang = 'en';


function setLang(lang) {
    gCurrLang = lang;
}

function getTrans(transKey) {
    // Get from gTrans
    var langTransMap = gTrans[transKey]
    // If key is unknown return 'UNKNOWN'
    if (!langTransMap) return 'UNKNOWN';
    
    // If translation not found - use english
    var trans = langTransMap[gCurrLang]
    if (!trans) trans = langTransMap['en']
    return trans;
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    console.log('els', els);
    els.forEach(el =>{
        const key = el.dataset.trans;
        const trans = getTrans(key)

        if (el.placeholder)  el.placeholder = trans
        else el.innerText = trans
    })
}


function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL',{ style: 'currency', currency: 'ILS' }).format(num);
}

