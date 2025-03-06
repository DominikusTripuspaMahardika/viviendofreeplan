document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("navoverlayvvdc-menuToggle");
    const overlay = document.getElementById("navoverlayvvdc-overlay");
    const closeButton = document.getElementById("navoverlayvvdc-close");

    // Menampilkan overlay saat tombol menu diklik
    menuToggle.addEventListener("click", function () {
      overlay.classList.add("navoverlayvvdc-active");
    });

    // Menutup overlay saat tombol close diklik
    closeButton.addEventListener("click", function () {
      overlay.classList.remove("navoverlayvvdc-active");
    });

    // Menutup overlay saat area luar menu diklik
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        overlay.classList.remove("navoverlayvvdc-active");
      }
    });
  });
/* Hide Loader After Page Loads */
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".pageloader-viviendo").style.opacity = "0";
        setTimeout(() => document.querySelector(".pageloader-viviendo").style.display = "none", 500);
    }, 1000);
});