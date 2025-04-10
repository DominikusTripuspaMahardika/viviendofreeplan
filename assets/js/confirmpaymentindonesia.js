document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".swiper-wrapper-dtlgmbrprdk");
  const slides = document.querySelectorAll(".gallery-slide-dtlgmbrprdk");
  const nextBtn = document.querySelector(".swiper-button-next-dtlgmbrprdk");
  const prevBtn = document.querySelector(".swiper-button-prev-dtlgmbrprdk");
  let index = 0;

  function updateSlide() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    // Pause semua video di slide yang tidak aktif
    document.querySelectorAll('.video-slide-dtlgmbrprdk').forEach(video => {
      video.pause();
      video.currentTime = 0;
  });

  // Cek jika slide aktif mengandung video, maka putar video
  let activeSlide = slides[index].querySelector(".video-slide-dtlgmbrprdk");
  if (activeSlide) {
      activeSlide.play();
    }
  }

  nextBtn.addEventListener("click", function () {
    if (index < slides.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateSlide();
  });

  prevBtn.addEventListener("click", function () {
    if (index > 0) {
      index--;
    } else {
      index = slides.length - 1;
    }
    updateSlide();
  });
});

// Image Zoom Feature
document.querySelectorAll(".zoomable-image-dtlgmbrprdk, .video-slide-dtlgmbrprdk").forEach(element => {
  element.addEventListener("click", function(event) {
    // Get the position where the user clicked on the element
    const rect = this.getBoundingClientRect();
    const offsetX = event.clientX - rect.left; // X position relative to the image/video
    const offsetY = event.clientY - rect.top;  // Y position relative to the image/video

    // Calculate the percentage of the click location relative to the image/video size
    const xPercent = offsetX / rect.width * 100;
    const yPercent = offsetY / rect.height * 100;

    // Apply the transform-origin based on where the user clicked
    this.style.transformOrigin = `${xPercent}% ${yPercent}%`;

    // Toggle zoom state
    if (this.style.transform === "scale(2)") {
      this.style.transform = "scale(1)";
    } else {
      this.style.transform = "scale(2)";
    }
  });
});

let purchaseCount = localStorage.getItem("purchaseCount") ? parseInt(localStorage.getItem("purchaseCount")) : 0;

async function showPaymentNotification(event, productPrice) {
  event.preventDefault();

  let response = await fetch('https://ipapi.co/json/');
  let data = await response.json();
  let currency = data.currency || "IDR";
  let countryCode = data.country_code || "ID";

  // Mengambil nilai tukar mata uang dari API
  let exchangeRateResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/IDR`);
  let exchangeData = await exchangeRateResponse.json();
  let exchangeRate = exchangeData.rates[currency] || 1;

  let serviceFee = productPrice * 0.05;
  let totalPayment = purchaseCount >= 5 ? 0 : productPrice + serviceFee;
  let hasUsedPromo = false;
      
  const formatCurrency = (amount) => amount.toLocaleString(countryCode, { style: "currency", currency: currency });

  const notification = document.createElement("div");
  notification.style.position = "fixed";
  notification.style.top = "50%";
  notification.style.left = "50%";
  notification.style.transform = "translate(-50%, -50%)";
  notification.style.backgroundColor = "#f9f9f9";
  notification.style.border = "1px solid #e0e0e0";
  notification.style.padding = "24px";
  notification.style.borderRadius = "12px";
  notification.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.2)";
  notification.style.zIndex = "1000";
  notification.style.width = "90%";
  notification.style.maxWidth = "400px";
  notification.style.textAlign = "center";

  notification.innerHTML = `
      <button id="close-popup" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 18px; cursor: pointer; color: #999;">✖</button>
      <p style="font-size: 18px; font-weight: 600; color: #333;">Product Purchase Details</p>
      <p><strong>Product Price:</strong> ${formatCurrency(productPrice * exchangeRate)}</p>
      <p><strong>Transaction Fees:</strong> ${formatCurrency(serviceFee * exchangeRate)}</p>
      <p id="discount-info" style="display: none; color: green;"></p>
      <p id="total-payment"><strong>Total Payouts:</strong> ${formatCurrency(totalPayment * exchangeRate)}</p>
      <div style="margin: 10px 0;">
          <div style="width: 100%; background-color: #ccc; border-radius: 8px; overflow: hidden;">
              <div id="progress-bar" style="width: ${(purchaseCount / 5) * 100}%; height: 20px; background-color: #28a745; transition: width 0.3s;"></div>
          </div>
          <p>Free to Purchase: ${purchaseCount}/5</p>
      </div>
      <input id="promo-code" type="text" placeholder="Enter promo code" style="margin: 10px 0; padding: 8px; width: 80%; border: 1px solid #ccc; border-radius: 5px; width: 100%;" ${purchaseCount >= 5 ? 'disabled' : ''}/>
      <button id="apply-promo" style="margin-top: 10px; padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; width: 100%;" ${purchaseCount >= 5 ? 'disabled' : ''}><i class="fas fa-percent"></i> Promo Confirmation</button>
      <div id="promo-warning" class="promo-warning" style="display: none;">
          ⚠️ Use One Promo Code ⚠️
      </div>
      <button id="confirm-payment" style="margin-top: 10px; padding: 12px 24px; background-color: #007bff; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%;"><i class="fas fa-dollar"></i> Purchase Confirmation</button>
  `;

  document.body.appendChild(notification);

  document.getElementById("close-popup").addEventListener("click", () => {
      document.body.removeChild(notification);
  });

  document.getElementById("apply-promo").addEventListener("click", () => {
      if (hasUsedPromo) {
          document.getElementById("promo-warning").style.display = "block";
          return;
      }

      const promoInput = document.getElementById("promo-code").value.toUpperCase();
      const promoCodes = {
        "LFXKZMWTQPHD": 0.10,
        "TQXWMKJBZDHP": 0.10,
        "PZLQNKJMXWTD": 0.10,
        "KWMJZQXLTHPD": 0.10,
        "XWMQLTJKZHPD": 0.10,
        "TQZWMXJKLHPD": 0.15,
        "ZLTXQKMWPJHD": 0.15,
        "XWQKZMLTJHPD": 0.15,
        "WMQZKXLTJHPD": 0.15,
        "XLTJQZWMKHPD": 0.15,
        "QXWMLTZKJHPD": 0.20,
        "ZWMXQKLTJHPD": 0.20,
        "XQTZKWMJLHPD": 0.20,
        "WMXLQZKJTHPD": 0.20,
        "ZMLTQXKJWHPD": 0.20,
        "XZWMQLTKJHPD": 0.25,
        "LTMQXKZJWHPD": 0.25,
        "QKWMXZLTJHPD": 0.25,
        "ZKJWMXQLTHPD": 0.25,
        "TQZKWMXJLHPD": 0.25,
        "WMQXZKLTJHPD": 0.30,
        "ZKMWXLQTJHPD": 0.30,
        "XKWMQLTZJHPD": 0.30,
        "LTJWMQXZKHPD": 0.30,
        "ZKJWMXQLTPHD": 0.30,
        "XQTWMKZJLHPD": 0.40,
        "LQZKWMXJTHPD": 0.40,
        "WZMXQKLTJHPD": 0.40,
        "XQKWMZLTJHPD": 0.40,
        "WMZKXLQTJHPD": 0.40,
        "QZSWRXLTJHPD": 0.50,
        "XLTWMQKZJHPD": 0.50,
        "WQZKMXLTJHPD": 0.50,
        "TQWMZKXJLHPD": 0.50,
        "ZKXWMQLTJHPD": 0.50,
        "WMXLTQZKJHPD": 0.80,
        "QXKWMZLTJHPD": 0.80,
        "XZKWMQLTJHPD": 0.80,
        "WZMXQLTKJHPD": 0.80,
        "ZKWMXQTLJHPD": 0.80,
        "XWMZKQLTJHPD": 1.00,
        "QKWMXZLTJHPD": 1.00,
        "LTWMXKZJQHPD": 1.00,
        "WQKZMXLTJHPD": 1.00,
        "XWMZKQLTJHPD": 1.00
    };

      if (promoCodes[promoInput] !== undefined) {
          let discount = totalPayment * promoCodes[promoInput];
          totalPayment -= discount;
          if (totalPayment < 0) {
              totalPayment = 0;
          }
          hasUsedPromo = true;

          document.getElementById("discount-info").textContent = `Discounts: -${formatCurrency(discount * exchangeRate)}`;
          document.getElementById("discount-info").style.display = "block";
          document.getElementById("total-payment").innerHTML = `<strong>Total Payouts:</strong> ${formatCurrency(totalPayment * exchangeRate)}`;
      }
  });

  document.getElementById("confirm-payment").addEventListener("click", () => {
      notification.innerHTML = `
          <i class="fas fa-spinner fa-spin" style="font-size: 48px; color: #ffc107; margin-bottom: 20px;"></i>
          <p style="font-size: 18px; font-weight: 600; color: #333;">Payment is being processed. Please wait!</p>
      `;
      setTimeout(() => {
          purchaseCount++;
          if (purchaseCount > 5) {
              purchaseCount = 0; // Reset progress bar setelah 5 pembelian
          }
          localStorage.setItem("purchaseCount", purchaseCount);
          window.location.href = "https://sociabuzz.com/viviendochannel/tribe";
      }, 5000);
  });
}

function copyPromoCodeEventLimit() {
  var promoCode = document.getElementById("promoCodeEventLimit").innerText;
  navigator.clipboard.writeText(promoCode).then(() => {
      document.getElementById("copyMessageEventLimit").style.display = "block";
      setTimeout(() => {
          document.getElementById("copyMessageEventLimit").style.display = "none";
      }, 2000);
  });
}

function updateCountdown() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu
  
  const promoCodes = {
      1: "LFXKZMWTQPHD", // Senin
      2: "TQXWMKJBZDHP", // Selasa
      3: "PZLQNKJMXWTD", // Rabu
      4: "WMQXZKLTJHPD", // Kamis
      5: "ZKXWMQLTJHPD"  // Jumat
  };
  
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime();
  const timeLeft = endOfDay - now.getTime();
  
  if (timeLeft <= 0) {
      document.getElementById("countdownEventLimit").innerHTML = "Promo akan segera diperbarui!";
      return;
  }
  
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
  document.getElementById("countdownEventLimit").innerHTML = `${hours} jam, ${minutes} menit, ${seconds} detik`;
  
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      document.getElementById("promoCodeEventLimit").innerText = promoCodes[dayOfWeek];
  } else {
      document.getElementById("promoCodeEventLimit").innerText = "Kode promo hanya tersedia pada hari Senin hingga Jumat. Pastikan untuk mengklaimnya sebelum waktu habis!";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();