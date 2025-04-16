function convertTime() {
    const input = parseFloat(document.getElementById("timeInput").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
  
    const timeUnitsInSeconds = {
      nanodetik: 1e-9,
      mikrodetik: 1e-6,
      milidetik: 1e-3,
      detik: 1,
      menit: 60,
      jam: 3600,
      hari: 86400,
      minggu: 604800,
      bulan: 2629800, // approx. 30.44 days
      tahun: 31557600, // approx. 365.25 days
      dekade: 315576000,
      abad: 3155760000,
      milenium: 31557600000
    };
  
    if (isNaN(input)) {
      document.getElementById("resultTime").innerText = "Masukkan nilai waktu yang valid.";
      return;
    }
  
    const result = (input * timeUnitsInSeconds[from]) / timeUnitsInSeconds[to];
    document.getElementById("resultTime").innerText = `${input} ${from} = ${result.toLocaleString("id-ID", { maximumFractionDigits: 10 })} ${to}`;
  }
  