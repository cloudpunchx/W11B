// when a user clicks a book, update the cookie to contain the obj clicked
function addToCart(event){
    // setting parent variable up, to target parent of the button for each book choice
    let parent = event.target.parentElement;
    // if the parent id of the button is book1 then
    if(parent.id == `book1`){
        let book1Json = JSON.stringify(book1);
        let x = document.cookie + Cookies.set(`bookSelection`, book1Json);
    } else if(parent.id == `book2`){
        let book2Json = JSON.stringify(book2);
        let x = document.cookie + Cookies.set(`bookSelection`, book2Json);
    } else if(parent.id == `book3`){
        let book3Json = JSON.stringify(book3);
        let x = document.cookie + Cookies.set(`bookSelection`, book3Json);
    }
}

Cookies.set(`bookSelection`, `MakeASelection`);

let book1 = {
    title: `The Elementals`,
    img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603974397l/301053._SY475_.jpg`,
    price: 5.99
}

let book2 = {
    title: `Jaws`,
    img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1220052263l/941283.jpg`,
    price: 5.99
}

let book3 = {
    title: `Ready Player One`,
    img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500930947l/9969571._SY475_.jpg`,
    price: 11.99
}

// let book4 = {
//     title: `The Only Good Indians`,
//     img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601545259l/52180399._SY475_.jpg`,
//     price: 11.99
// }

// let book5 = {
//     title: `Fight Club`,
//     img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1558216416l/36236124._SY475_.jpg`,
//     price: 5.99
// }

// let book6 = {
//     title: `American Psycho`,
//     img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436934349l/28676._SY475_.jpg`,
//     price: 11.99
// }

// setting the Event Listener for each button on click
let choices = []
let bookSelection1 = document.getElementById(`book1`);
bookSelection1.querySelector(`button`).addEventListener(`click`, addToCart);

let bookSelection2 = document.getElementById(`book2`);
bookSelection2.querySelector(`button`).addEventListener(`click`, addToCart);

let bookSelection3 = document.getElementById(`book3`);
bookSelection3.querySelector(`button`).addEventListener(`click`, addToCart);

// setting the Event Listener for the click count
document.getElementById(`button1`).addEventListener(`click`, clickCount);
document.getElementById(`button2`).addEventListener(`click`, clickCount);
document.getElementById(`button3`).addEventListener(`click`, clickCount);

// let bookSelection4 = document.getElementById(`book4`);
// bookSelection4.querySelector(`button`).addEventListener(`click`, addToCart);

// let bookSelection5 = document.getElementById(`book5`);
// bookSelection5.querySelector(`button`).addEventListener(`click`, addToCart);

// let bookSelection6 = document.getElementById(`book6`);
// bookSelection6.querySelector(`button`).addEventListener(`click`, addToCart);

// the user should have a link to the checkout page that contains
// summary of all the clicked items, (their img, name, price, desc)
// show items clicked more than once

// if there is nothing in the cookie, show message: Your Cart Is Empty

// ---------------------------------------------------------------------------------------------
// me trying things:::

// this is an Object, with Objects nested for each Book
// let bookSelection = {
//     theElementals: {
//         img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603974397l/301053._SY475_.jpg`,
//         price: 5.99,
//     },
//     jaws: {
//         img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1220052263l/941283.jpg`,
//         price: 5.99,
//     },
//     readyPlayerOne: {
//         img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500930947l/9969571._SY475_.jpg`,
//         price: 11.99,
//     },
//     theOnlyGoodIndians: {
//         img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601545259l/52180399._SY475_.jpg`,
//         price: 11.99,
//     },
//     fightClub: {
//         img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1558216416l/36236124._SY475_.jpg`,
//         price: 5.99,
//     },
//     americanPsycho: {
//         img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436934349l/28676._SY475_.jpg`,
//         price: 11.99,
//     }
// }

// let book1Json = JSON.stringify(book1);
// let book2Json = JSON.stringify(book2);
// let book3Json = JSON.stringify(book3);
// let book4Json = JSON.stringify(book4);
// let book5Json = JSON.stringify(book5);
// let book6Json = JSON.stringify(book6);