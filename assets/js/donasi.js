document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("donation-popup-dnsipantiasuhan");
    const closeBtn = document.getElementById("close-donation-popup-dnsipantiasuhan");
    const donateBtn = document.getElementById("donate-now-dnsipantiasuhan");

    function closePopup() {
        popup.style.display = "none";
        document.removeEventListener("click", outsideClickListener);
    }

    function outsideClickListener(event) {
        if (!popup.contains(event.target) && event.target !== closeBtn) {
            closePopup();
        }
    }

    setTimeout(function () {
        popup.style.display = "flex";
        document.addEventListener("click", outsideClickListener);
    }, 2000); // Popup muncul setelah 2 detik

    closeBtn.addEventListener("click", function () {
        closePopup();
    });

    donateBtn.addEventListener("click", function () {
        window.location.href = "https://sociabuzz.com/viviendochannel/tribe";
    });
});