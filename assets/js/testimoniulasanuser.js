let index = 0;
    function showReviews() {
    let reviews = document.querySelectorAll(".testuluserviviendo-review");
    reviews.forEach((review) => (review.style.display = "none"));
    index++;
    if (index > reviews.length) index = 1;
    reviews[index - 1].style.display = "block";
    setTimeout(showReviews, 3000); // Ubah setiap 3 detik
}
document.addEventListener("DOMContentLoaded", showReviews);