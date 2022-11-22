





function addToCart(event){
    // setting parent variable up, to target parent of the button for each book choice
    let parent = event.target.parentElement;
    // if the parent id of the button is book1 then
    if(parent.id == `book1`){
        // stringify book1 so we can send it to checkout.html
        let book1Json = JSON.stringify(book1);
        // document.cookie returns the cookies associated with the document
        let x = document.cookie;
        // setting cookie with book1json
        Cookies.set(`bookSelection`, book1Json);
    } 
}
function addToCart2(event){
    // setting parent variable up, to target parent of the button for each book choice
    let parent = event.target.parentElement;
    // if the parent id of the button is book1 then
    if(parent.id == `book2`){
        let book2Json = JSON.stringify(book2);
        let x = document.cookie + Cookies.set(`bookSelection2`, book2Json);
    }
}
function addToCart3(event){
    // setting parent variable up, to target parent of the button for each book choice
    let parent = event.target.parentElement;
    // if the parent id of the button is book1 then
    if(parent.id == `book3`){
        let book3Json = JSON.stringify(book3);
        let x = document.cookie + Cookies.set(`bookSelection3`, book3Json);
    }
}

// show `make a selection` when nothing is selected
Cookies.set(`bookSelection`, `MakeASelection`);
Cookies.set(`bookSelection2`, `MakeASelection`);
Cookies.set(`bookSelection3`, `MakeASelection`);

// objects - stringify will be set within the function
let book1 = {
    title: `The Elementals`,
    img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603974397l/301053._SY475_.jpg`,
    price: 5.99,
    count: 1
}

let book2 = {
    title: `Jaws`,
    img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1220052263l/941283.jpg`,
    price: 5.99,
    count: 1
}

let book3 = {
    title: `Ready Player One`,
    img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500930947l/9969571._SY475_.jpg`,
    price: 11.99,
    count: 1
}

let cart = [];
// setting the Event Listener for each button on click
let bookSelection1 = document.getElementById(`book1`);
bookSelection1.querySelector(`button`).addEventListener(`click`, addToCart);

let bookSelection2 = document.getElementById(`book2`);
bookSelection2.querySelector(`button`).addEventListener(`click`, addToCart2);

let bookSelection3 = document.getElementById(`book3`);
bookSelection3.querySelector(`button`).addEventListener(`click`, addToCart3);

// the user should have a link to the checkout page that contains
// summary of all the clicked items, (their img, name, price, desc)
// show items clicked more than once
// if there is nothing in the cookie, show message: Your Cart Is Empty

// ---------------------------------------------------------------------------------------------
// 
// function addToCart(event){
//     // setting parent variable up, to target parent of the button for each book choice
//     let parent = event.target.parentElement;
//     // if the parent id of the button is book1 then
//     if(parent.id == `book1`){
//         let book1Json = JSON.stringify(book1);
//         let x = document.cookie;
//         Cookies.set(`bookSelection`, book1Json);
//     } else if(parent.id == `book2`){
//         let book2Json = JSON.stringify(book2);
//         let x = document.cookie + Cookies.set(`bookSelection`, book2Json);
//     } else if(parent.id == `book3`){
//         let book3Json = JSON.stringify(book3);
//         let x = document.cookie + Cookies.set(`bookSelection`, book3Json);
//     }
// }
// this is an array of objects
// let books = [
//     {
//         title: `The Elementals`,
//         img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603974397l/301053._SY475_.jpg`,
//         price: 5.99,
//         count: 1 
//     },
//     {
//         title: `Jaws`,
//         img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1220052263l/941283.jpg`,
//         price: 5.99,
//         count: 1
//     },
//     {
//         title: `Ready Player One`,
//         img: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500930947l/9969571._SY475_.jpg`,
//         price: 11.99,
//         count: 1
//     }
// ];

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
//     }
// }