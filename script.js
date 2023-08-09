// Filter Books
function filterbookshelf(e) {
    const selection = document.querySelectorAll(".hover-wrapper");
    let filter = e.target.dataset.filter;

    selection.forEach(item => {
        if (filter === '*' || item.classList.contains(filter)) {
            item.style.display = 'flex';

        } else {
            item.style.display = 'none';
        }
    });
}
