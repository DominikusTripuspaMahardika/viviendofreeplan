document.addEventListener('DOMContentLoaded', () => {
  // Trigger the notification to appear after the page loads
  function showNotification() {
      const notification = document.getElementById('subscribe-notification');
      if (notification) {
          notification.classList.add('show');
          
          // Hide the notification after 5 seconds
          setTimeout(() => {
              notification.classList.remove('show');
          }, 5000);
      }
  }
  
  showNotification();
});

function viewData(game) {
  alert('Viewing data for ' + game);
  // Implement navigation or data fetching logic here
}

function redirectToYouTube() {
  window.open("https://www.youtube.com/@ViVienDoChannel", "_blank");
}