document.addEventListener("DOMContentLoaded", function () {
    let userPoints = parseInt(localStorage.getItem("userPoints")) || 0;
    document.getElementById("userPoints").textContent = userPoints;
    document.getElementById("rewardProgress").value = userPoints;

    function updatePoints(points) {
        userPoints += points;
        localStorage.setItem("userPoints", userPoints);
        document.getElementById("userPoints").textContent = userPoints;
        document.getElementById("rewardProgress").value = userPoints;
    }

    // Kalender Login Harian
    const today = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const totalDays = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
    let loginCalendar = JSON.parse(localStorage.getItem("loginCalendar")) || {};
    let calendarDiv = document.getElementById("calendar");
    let loginButton = document.getElementById("loginButton");

    function renderCalendar() {
        calendarDiv.innerHTML = "";
        for (let i = 1; i <= totalDays; i++) {
            let day = document.createElement("div");
            day.textContent = i + " ";
            day.classList.add("rewardvvd-day");
            let icon = document.createElement("span");
            
            if (loginCalendar[i] === "claimed") {
                icon.textContent = "✅";
                day.dataset.claimed = "true";
            } else if (i < today) {
                icon.textContent = "❌";
                day.dataset.claimed = "false";
            } else {
                icon.textContent = "⏳";
            }
            
            day.appendChild(icon);
            calendarDiv.appendChild(day);
        }
    }
    
    renderCalendar();

    loginButton.addEventListener("click", function () {
        if (!loginCalendar[today]) {
            loginCalendar[today] = "claimed";
            localStorage.setItem("loginCalendar", JSON.stringify(loginCalendar));
            updatePoints(2500);
            renderCalendar();
        }
    });

    // Tukar Poin
    let redeemButton = document.getElementById("claimReward");
    let redeemInput = document.getElementById("redeemPoints");
    let rewardStatus = document.getElementById("rewardStatus");
    let promoCodeDisplay = document.getElementById("promoCodeDisplay");
    
    redeemInput.addEventListener("input", function () {
        let redeemAmount = parseInt(redeemInput.value);
        redeemButton.disabled = isNaN(redeemAmount) || redeemAmount > userPoints || redeemAmount <= 0;
    });
    
    redeemButton.addEventListener("click", function () {
        let redeemAmount = parseInt(redeemInput.value);
        if (!isNaN(redeemAmount) && redeemAmount > 0 && redeemAmount <= userPoints) {
            userPoints -= redeemAmount;
            localStorage.setItem("userPoints", userPoints);
            document.getElementById("userPoints").textContent = userPoints;
            document.getElementById("rewardProgress").value = userPoints;
            rewardStatus.textContent = "Poin berhasil ditukar!";
            redeemInput.value = "";
            redeemButton.disabled = true;
            
            // Menampilkan kode promo jika memenuhi syarat
            if (redeemAmount >= 250000 && redeemAmount <= 499999) {
                promoCodeDisplay.textContent = "Kode Promo: QZKWMXLTJHPD";
            } else if (redeemAmount >= 500000 && redeemAmount <= 999999) {
                promoCodeDisplay.textContent = "Kode Promo: WMXLTQZKJHPD";
            } else if (redeemAmount >= 1000000) {
                promoCodeDisplay.textContent = "Kode Promo: XWMZKQLTJHPD";
            } else {
                promoCodeDisplay.textContent = "";
            }
        } else {
            rewardStatus.textContent = "Poin tidak cukup atau input tidak valid!";
        }
    });
});