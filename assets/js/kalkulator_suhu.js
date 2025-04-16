function konversiSuhu() {
    const nilai = parseFloat(document.getElementById('nilaiSuhu').value);
    const awal = document.getElementById('satuanAwal').value;
    const tujuan = document.getElementById('satuanTujuan').value;
    const hasilEl = document.getElementById('hasilKonversi');
  
    if (isNaN(nilai)) {
      hasilEl.innerText = "Mohon masukkan angka suhu yang valid.";
      hasilEl.style.display = "block";
      return;
    }
  
    if (awal === tujuan) {
      hasilEl.innerText = `Nilai tetap: ${nilai.toFixed(2)} ${formatSatuan(tujuan)}`;
      hasilEl.style.display = "block";
      return;
    }
  
    let celsius;
  
    // Ubah semua ke Celsius dulu
    switch (awal) {
      case "celsius": celsius = nilai; break;
      case "fahrenheit": celsius = (nilai - 32) * 5 / 9; break;
      case "reamur": celsius = nilai * 5 / 4; break;
      case "kelvin": celsius = nilai - 273.15; break;
    }
  
    let hasil;
  
    // Ubah dari Celsius ke tujuan
    switch (tujuan) {
      case "celsius": hasil = celsius; break;
      case "fahrenheit": hasil = (celsius * 9 / 5) + 32; break;
      case "reamur": hasil = celsius * 4 / 5; break;
      case "kelvin": hasil = celsius + 273.15; break;
    }
  
    hasilEl.innerText = `${nilai} ${formatSatuan(awal)} = ${hasil.toFixed(2)} ${formatSatuan(tujuan)}`;
    hasilEl.style.display = "block";
  }
  
  function formatSatuan(satuan) {
    switch (satuan) {
      case "celsius": return "°C";
      case "fahrenheit": return "°F";
      case "reamur": return "°R";
      case "kelvin": return "K";
      default: return "";
    }
  }
  