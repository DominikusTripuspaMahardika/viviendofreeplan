// Toggle function for showing/hiding the schedule message
function toggleSchedule(messageId, iconId) {
    var message = document.getElementById(messageId);
    var icon = document.getElementById(iconId);

    // Toggle visibility of the message
    if (message.style.display === 'none' || message.style.display === '') {
      message.style.display = 'block';
      icon.classList.add('rotate-up-jadwal');
    } else {
      message.style.display = 'none';
      icon.classList.remove('rotate-up-jadwal');
    }
  }