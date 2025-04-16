let coursePurchaseCount = localStorage.getItem("coursePurchaseCount") ? parseInt(localStorage.getItem("coursePurchaseCount")) : 0;

async function showCoursePaymentNotificationPaymentKursusKelasOnline(event, coursePrice) {
  event.preventDefault();

  let response = await fetch('https://ipapi.co/json/');
  let data = await response.json();
  let currency = data.currency || "IDR";
  let countryCode = data.country_code || "ID";

  let exchangeRateResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/IDR`);
  let exchangeData = await exchangeRateResponse.json();
  let exchangeRate = exchangeData.rates[currency] || 1;

  let serviceFee = coursePrice * 0.15;
  let totalPayment = coursePurchaseCount >= 3 ? 0 : coursePrice + serviceFee;
  let hasUsedPromo = false;
  
  const formatCurrency = (amount) => amount.toLocaleString(countryCode, { style: "currency", currency: currency });

  const notification = document.createElement("div");
  notification.style.position = "fixed";
  notification.style.top = "50%";
  notification.style.left = "50%";
  notification.style.transform = "translate(-50%, -50%)";
  notification.style.backgroundColor = "#fff";
  notification.style.border = "1px solid #ddd";
  notification.style.padding = "24px";
  notification.style.borderRadius = "12px";
  notification.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
  notification.style.zIndex = "1000";
  notification.style.width = "90%";
  notification.style.maxWidth = "400px";
  notification.style.textAlign = "center";

  notification.innerHTML = `
      <button id="close-course-popup" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 18px; cursor: pointer; color: #999;">✖</button>
      <p style="font-size: 18px; font-weight: 600; color: #333;">Course Purchase Details</p>
      <p><strong>Course Price:</strong> ${formatCurrency(coursePrice * exchangeRate)}</p>
      <p><strong>Service Fee:</strong> ${formatCurrency(serviceFee * exchangeRate)}</p>
      <p id="course-discount-info" style="display: none; color: green;"></p>
      <p id="total-course-payment"><strong>Total Payment:</strong> ${formatCurrency(totalPayment * exchangeRate)}</p>
      <div style="margin: 10px 0;">
          <div style="width: 100%; background-color: #ccc; border-radius: 8px; overflow: hidden;">
              <div id="course-progress-bar" style="width: ${(coursePurchaseCount / 3) * 100}%; height: 20px; background-color: #28a745; transition: width 0.3s;"></div>
          </div>
          <p>Free Courses: ${coursePurchaseCount}/3</p>
      </div>
      <input id="course-promo-code" type="text" placeholder="Enter promo code" style="margin: 10px 0; padding: 8px; width: 100%; border: 1px solid #ccc; border-radius: 5px;" ${coursePurchaseCount >= 3 ? 'disabled' : ''}/>
      <button id="apply-course-promo" style="margin-top: 10px; padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; width: 100%;" ${coursePurchaseCount >= 3 ? 'disabled' : ''}><i class="fas fa-percent"></i> Apply Promo</button>
      <div id="course-promo-warning" style="display: none; color: red;">⚠️ Promo Code Already Used ⚠️</div>
      <button id="confirm-course-payment" style="margin-top: 10px; padding: 12px 24px; background-color: #007bff; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%;"><i class="fas fa-dollar"></i> Confirm Purchase</button>
  `;

  document.body.appendChild(notification);

  document.getElementById("close-course-popup").addEventListener("click", () => {
      document.body.removeChild(notification);
  });

  document.getElementById("apply-course-promo").addEventListener("click", () => {
      if (hasUsedPromo) {
          document.getElementById("course-promo-warning").style.display = "block";
          return;
      }

      const promoInput = document.getElementById("course-promo-code").value.toUpperCase();
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
        "QZKWMXLTJHPD": 0.50,
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

          document.getElementById("course-discount-info").textContent = `Discount: -${formatCurrency(discount * exchangeRate)}`;
          document.getElementById("course-discount-info").style.display = "block";
          document.getElementById("total-course-payment").innerHTML = `<strong>Total Payment:</strong> ${formatCurrency(totalPayment * exchangeRate)}`;
      }
  });

  document.getElementById("confirm-course-payment").addEventListener("click", () => {
      notification.innerHTML = `
          <i class="fas fa-spinner fa-spin" style="font-size: 48px; color: #ffc107; margin-bottom: 20px;"></i>
          <p style="font-size: 18px; font-weight: 600; color: #333;">Processing payment... Please wait!</p>
      `;
      setTimeout(() => {
          coursePurchaseCount++;
          if (coursePurchaseCount > 3) {
              coursePurchaseCount = 0;
          }
          localStorage.setItem("coursePurchaseCount", coursePurchaseCount);
          window.location.href = "https://sociabuzz.com/viviendochannel/tribe";
      }, 5000);
  });
}

function showCoursePaymentNotificationPaymentKursusKelasOnlineCoominigSoon(event) {
    event.preventDefault();
    // Cek apakah modal sudah ada untuk mencegah duplikasi
    if (document.getElementById("courseModal")) return;
    const modal = document.createElement("div");
    modal.id = "courseModal";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.width = "90%";
    modal.style.maxWidth = "400px";
    modal.style.padding = "20px";
    modal.style.background = "#fff";
    modal.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
    modal.style.borderRadius = "12px";
    modal.style.textAlign = "center";
    modal.style.fontFamily = "Arial, sans-serif";
    modal.style.zIndex = "1000";
    modal.innerHTML = `
        <p style="font-size: 16px; color: #333; margin-bottom: 15px;">
            🚧 This course is not available yet. Stay tuned!
        </p>
        <button id="closeModalBtn-kelaskursusonline" style="
            padding: 10px 20px;
            border: none;
            background: #007bff;
            color: white;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.3s;
            width: 100%;
        ">Close</button>
    `;
    document.body.appendChild(modal);
    document.getElementById("closeModalBtn-kelaskursusonline").addEventListener("click", () => {
        modal.style.opacity = "0";
        setTimeout(() => modal.remove(), 300);
    });
}