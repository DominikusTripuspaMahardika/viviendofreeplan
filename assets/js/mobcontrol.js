document.getElementById('toggleButtonMobControl').addEventListener('click', function () {
    const buttonContainer = document.getElementById('buttonContainerMobControl');
    const toggleIcon = document.getElementById('toggleIconMobControl');
  
    // Toggle visibility of the button container
    if (buttonContainer.style.display === 'none' || buttonContainer.style.display === '') {
      buttonContainer.style.display = 'flex';
      toggleIcon.classList.remove('fa-chevron-down');
      toggleIcon.classList.add('fa-chevron-up');
    } else {
      buttonContainer.style.display = 'none';
      toggleIcon.classList.remove('fa-chevron-up');
      toggleIcon.classList.add('fa-chevron-down');
    }
  });