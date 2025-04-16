// Data contoh untuk pencarian (biasanya diambil dari API atau database)
const searchData = [
    { name: 'Mob Control', url: 'mobcontrol.html' },
    { name: 'Subway Surfers', url: 'subwaysurfers.html' },
    { name: 'Online Course', url: 'kelaskursus.html' },
    { name: 'Articles & Resources', url: 'itarticle.html' },
    { name: 'Digital Services', url: 'service.html' },
    { name: 'Contact Us', url: 'contact.html' } // Menyimpan ID modal untuk Tools Hacking
];

// Fungsi untuk menampilkan hasil pencarian
function smartSearchFunction() {
    const query = document.getElementById('smartsearchvvdc-smart-search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('smartsearchvvdc-search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Filter hasil pencarian berdasarkan query
    const filteredResults = searchData.filter(item => item.name.toLowerCase().includes(query));

    // Tampilkan hasil pencarian yang sesuai
    filteredResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result-item');
        resultItem.innerHTML = result.name;

        // Set event listener untuk mengarahkan ke halaman atau membuka modal
        resultItem.onclick = function () {
            if (result.url.startsWith('smartsearchvvdc-modal-hacking')) {
                // Jika URL adalah ID modal, buka modal
                openModal(result.url);
            } else {
                // Jika bukan, arahkan ke halaman
                window.location.href = result.url;
            }
        };

        resultsContainer.appendChild(resultItem);
    });

    // Tampilkan atau sembunyikan hasil pencarian berdasarkan apakah ada hasil atau tidak
    resultsContainer.style.display = filteredResults.length > 0 ? 'block' : 'none';

    // Menutup hasil pencarian setelah 3 detik
    setTimeout(() => {
        resultsContainer.style.display = 'none';
    }, 5000);
}

// Fungsi untuk melakukan pencarian penuh (misalnya saat tombol pencarian diklik)
function performSearch() {
    const query = document.getElementById('smartsearchvvdc-smart-search-input').value.toLowerCase();
    const found = searchData.find(item => item.name.toLowerCase() === query);

    if (found) {
        if (found.url.startsWith('smartsearchvvdc-modal-hacking')) {
            // Jika URL adalah ID modal, buka modal
            openModal(found.url);
        } else {
            // Jika bukan, arahkan ke halaman
            window.location.href = found.url;
        }
    } else {
        showNoResultsMessage();
    }
}

// Fungsi untuk menampilkan pesan "No results found!"
function showNoResultsMessage() {
    const resultsContainer = document.getElementById('smartsearchvvdc-search-results');
    resultsContainer.innerHTML = '<div class="smartsearchvvdc-no-results-message">No results found!</div>';
    resultsContainer.style.display = 'block';

    // Menutup hasil pencarian setelah 3 detik
    setTimeout(() => {
        resultsContainer.style.display = 'none';
    }, 5000);
}

// Fungsi untuk membuka modal berdasarkan ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block'; // Menampilkan modal
    }
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none'; // Menutup modal
    }
}