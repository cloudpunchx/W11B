let bookSelectionJson = Cookies.get(`bookSelection`);
let selection = JSON.parse(bookSelectionJson);

document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`, `<p>${selection.title}</p>`);
document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection.price}</p>`);
document.getElementById(`checkoutSection`).insertAdjacentHTML(`afterbegin`,`<img src="${selection.img}" alt="Book Cover of Selected Book">`);