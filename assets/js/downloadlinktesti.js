function startDownloadProcesstestimoniviviendo() {
    // Mendapatkan tanggal saat ini dan tanggal terakhir tombol ditekan
    let lastDownloadDate = localStorage.getItem('lastDownloadDate');
    let currentDate = new Date();

    // Jika tombol sudah ditekan dalam dua minggu terakhir, tampilkan hitungan mundur
    if (lastDownloadDate) {
        lastDownloadDate = new Date(lastDownloadDate);
        let timeDiff = currentDate - lastDownloadDate; // selisih waktu dalam milidetik
        let twoWeeksInMillis = 14 * 24 * 60 * 60 * 1000; // dua minggu dalam milidetik

        if (timeDiff < twoWeeksInMillis) {
            let countdown = Math.ceil((twoWeeksInMillis - timeDiff) / 1000); // hitung mundur dalam detik
            document.getElementById('testimoniviviendo-downloadwarning').style.display = 'block';
            let countdownElement = document.getElementById('testimoniviviendo-countdown');
            let interval = setInterval(function() {
                countdown--;
                let days = Math.floor(countdown / (24 * 3600));
                let hours = Math.floor((countdown % (24 * 3600)) / 3600);
                let minutes = Math.floor((countdown % 3600) / 60);
                let seconds = countdown % 60;
                countdownElement.textContent = `🚫 ${days}d ${hours}h ${minutes}m ${seconds}s 🚫`;

                if (countdown <= 0) {
                    clearInterval(interval);
                    document.getElementById('testimoniviviendo-downloadwarning').style.display = 'none';
                }
            }, 1000);
            return; // Jangan lanjutkan jika sudah ada hitungan mundur
        }
    }

    // Jika tidak ada data terakhir atau sudah lebih dari dua minggu, tampilkan tombol download
    localStorage.setItem('lastDownloadDate', currentDate); // Simpan tanggal sekarang
    document.getElementById('testimoniviviendo-downloadwarning').style.display = 'none';
    document.getElementById('testimoniviviendo-downloadlink').style.display = 'block';
}

function copyDownloadLink() {
    let copyText = document.getElementById('testimoniviviendo-download-url');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    let notification = document.getElementById('testimoniviviendo-copy-notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

function closePopuptestimoniviviendo() {
    document.getElementById("testimoniviviendo-downloadlink").style.display = "none";
}
