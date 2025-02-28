function toggleMenunavbarviviendo() {
    document.querySelector(".nav-navbarviviendo-menu").classList.toggle("navbarviviendo-active");
}
/* Hide Loader After Page Loads */
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".pageloader-viviendo").style.opacity = "0";
        setTimeout(() => document.querySelector(".pageloader-viviendo").style.display = "none", 500);
    }, 1000);
});