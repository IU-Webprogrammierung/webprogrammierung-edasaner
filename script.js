// function filterbookshelf(e) {
//     const selection = document.querySelectorAll(".bookshelf article");
//     let filter = e.target.dataset.filter;
//     selection.forEach(selection => {
//         selection.classList.contains(filter) ?
//             selection.classList.remove('hidden') :
//             selection.classList.add('hidden');
//     });
// };

function filterbookshelf(e) {
    const selection = document.querySelectorAll(".bookshelf__item");
    let filter = e.target.dataset.filter;

    selection.forEach(item => {
        if (filter === '*' || item.classList.contains(filter)) {
            item.style.display = 'flex';
            
        } else {
            item.style.display = 'none';
        }
    });
}


// if (filter === "*") {
//     bookshelf.forEach(bookshelf => bookshelf.classList.remove("hidden"));
// }

// function filterbookshelf(e) {
//     const bookshelf = document.querySelectorAll(".list div");
//     let filter = e.target.dataset.filter;
//     if (filter === "*") {
//         bookshelf.forEach(bookshelf => bookshelf.classList.remove("hidden"));
//     } else {
//         bookshelf.forEach(animal => {
//             bookshelf.classList.contains(filter) ?
//                 bookshelf.classList.remove("hidden") : animal
//             bookshelf.classList.add("hidden");
//         })
//     }
// }