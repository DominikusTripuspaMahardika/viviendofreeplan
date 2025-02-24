function showGameAlert(gameName) {
  var gameTitle = document.getElementById('gameTitle');
  var downloadButton = document.getElementById('downloadButton');
  var viewDataButton = document.getElementById('viewDataButton');
  
  // Set the game title
  gameTitle.innerHTML = gameName;
  
  // Define the Play Store link based on the game
  var playStoreLink = '';
  var dataLink = '';
  if (gameName === 'Mob Control') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.vincentb.MobControl';
    dataLink = 'mobcontrol.html';
  } else if (gameName === 'Subway Surfers') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf';
    dataLink = 'subwaysurfers.html';
  } else if (gameName === 'Plants Vs Zombies 2') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.ea.game.pvz2_row';
    dataLink = 'plantsvszombies2.html';
  }
  
  // Set button actions
  downloadButton.onclick = function() {
    window.location.href = playStoreLink;
  };
  
  viewDataButton.onclick = function() {
    window.location.href = dataLink;
  };
  
  // Show the alert
  document.getElementById('gameAlert').style.display = 'flex';
}

// Close alert if clicked outside of content
window.onclick = function(event) {
  if (event.target === document.getElementById('gameAlert')) {
    document.getElementById('gameAlert').style.display = 'none';
  }
};

function closeModal() {
  document.getElementById('gameAlert').style.display = 'none';
}