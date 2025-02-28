// Cek lokasi pengguna berdasarkan IP
fetch('https://ipapi.co/json/')
.then(response => response.json())
.then(data => {
  if (data.country !== "ID") { // "ID" adalah kode negara untuk Indonesia
    window.location.href = "coomingsoon.html";
    }
})
.catch(error => console.error('Error fetching IP data:', error));