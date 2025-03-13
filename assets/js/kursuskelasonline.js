function filterKursus() {
    let input = document.getElementById('searchKursus').value.toLowerCase();
    let filter = document.getElementById('filterKategori').value;
    let kursusItems = document.querySelectorAll('.kursuskelasonline-item-kursusvvd');

    kursusItems.forEach(item => {
        let title = item.querySelector('.kursuskelasonline-item-kursusvvd-h3').textContent.toLowerCase();
        let kategori = item.getAttribute('data-kategori');

        if ((title.includes(input) || input === "") && (kategori === filter || filter === "")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}