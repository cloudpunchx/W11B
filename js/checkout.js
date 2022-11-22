// insert book selections from index.html
let bookSelectionJson = Cookies.get(`bookSelection`);
let selection = JSON.parse(bookSelectionJson);

document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`, `<p>${selection.title}</p>`);
document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection.price}</p>`);
document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`,`<img src="${selection.img}" alt="Book Cover of Selected Book">`);

let bookSelectionJson2 = Cookies.get(`bookSelection2`);
let selection2 = JSON.parse(bookSelectionJson2);

document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`, `<p>${selection2.title}</p>`);
document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection2.price}</p>`);
document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`,`<img src="${selection2.img}" alt="Book Cover of Selected Book">`);

let bookSelectionJson3 = Cookies.get(`bookSelection3`);
let selection3 = JSON.parse(bookSelectionJson3);

document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`, `<p>${selection3.title}</p>`);
document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection3.price}</p>`);
document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`,`<img src="${selection3.img}" alt="Book Cover of Selected Book">`);