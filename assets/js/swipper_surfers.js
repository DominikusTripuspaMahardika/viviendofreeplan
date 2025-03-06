/* JavaScript untuk Swiper dan Zoom Gambar */
document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".swiper-container-subwayskinsvvd-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-subwayskinsvvd",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  // Fitur Zoom Gambar
  document.querySelectorAll(".swiper-slide-subwayskinsvvd-card-img").forEach(img => {
    img.addEventListener("click", function() {
      const modal = document.createElement("div");
      modal.classList.add("zoom-modal-subwayskinsvvd");
      modal.innerHTML = `<div class='zoom-modal-content-subwayskinsvvd'><img src='${img.src}' class="zoom-modal-content-img-subwayskinsvvd"><span class='close-modal-subwayskinsvvd'>&times;</span></div>`;
      document.body.appendChild(modal);
      
      modal.querySelector(".close-modal").addEventListener("click", () => {
        modal.remove();
      });
    });
  });
});