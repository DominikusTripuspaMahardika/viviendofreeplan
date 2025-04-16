// Tampilkan popup setelah 5 detik
setTimeout(() => {
    document.getElementById('aksesbetavvdc-popup').classList.add('show');
  }, 5000);

  // Tombol close (✖)
  document.getElementById('aksesbetavvvdc-close').addEventListener('click', () => {
    document.getElementById('aksesbetavvdc-popup').classList.remove('show');
  });

  // Tombol Buy Data Now
  document.querySelector('.modern-button-bulananorpermanen').addEventListener('click', () => {
    // Tutup popup
    document.getElementById('aksesbetavvdc-popup').classList.remove('show');
  });