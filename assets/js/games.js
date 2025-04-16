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
    dataLink = 'https://play.google.com/store/apps/details?id=com.vincentb.MobControl';
  } else if (gameName === 'Subway Surfers') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf';
    dataLink = 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf';
  } else if (gameName === 'Plants vs Zombies™ 2') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.ea.game.pvz2_row';
    dataLink = 'https://play.google.com/store/apps/details?id=com.ea.game.pvz2_row';
  } else if (gameName === 'Lands Of Jail') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.justgame.jails';
    dataLink = 'https://play.google.com/store/apps/details?id=com.justgame.jails';
  } else if (gameName === 'Solo Survivor IO Game') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.fc.monster.survivor.io';
    dataLink = 'https://play.google.com/store/apps/details?id=com.fc.monster.survivor.io';
  } else if (gameName === 'Genshin Impact') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact';
    dataLink = 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact';
  } else if (gameName === 'Honkai: Star Rail') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.HoYoverse.hkrpgoversea';
    dataLink = 'https://play.google.com/store/apps/details?id=com.HoYoverse.hkrpgoversea';
  } else if (gameName === 'Plinko Party: Coin Raid Master') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.pixio.gp.plinko.party';
    dataLink = 'https://play.google.com/store/apps/details?id=com.pixio.gp.plinko.party';
  } else if (gameName === 'Mama Chef: Cooking Puzzle Game') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.pixio.google.mcg';
    dataLink = 'https://play.google.com/store/apps/details?id=com.pixio.google.mcg';
  } else if (gameName === 'Summoners Greed: Tower Defense') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.pixio.google.mtd';
    dataLink = 'https://play.google.com/store/apps/details?id=com.pixio.google.mtd';
  } else if (gameName === 'Cooking Marina - cooking games') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.cscmobi.cookingmarina';
    dataLink = 'https://play.google.com/store/apps/details?id=com.cscmobi.cookingmarina';
  } else if (gameName === 'Cooking Sizzle: Master Chef') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.abi.game.cooking.fever.chef';
    dataLink = 'https://play.google.com/store/apps/details?id=com.abi.game.cooking.fever.chef';
  } else if (gameName === 'Orecraft: Orc Mining Camp') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.evrika.miner.camp';
    dataLink = 'https://play.google.com/store/apps/details?id=com.evrika.miner.camp';
  } else if (gameName === 'Blue Archive') {
    playStoreLink = 'https://play.google.com/store/apps/details?id=com.nexon.bluearchive';
    dataLink = 'https://play.google.com/store/apps/details?id=com.nexon.bluearchive';
  } 
  
  // Set button actions
  downloadButton.onclick = function() {
    window.location.href = playStoreLink;
  };
  
  viewDataButton.onclick = function() {
    window.location.href = dataLink;
  };
  
  // Show the alert
  document.getElementById('gameAlertModal').style.display = 'flex';
}

// Close alert if clicked outside of content
window.onclick = function(event) {
  if (event.target === document.getElementById('gameAlertModal')) {
    document.getElementById('gameAlertModal').style.display = 'none';
  }
};

function closeAlertModal() {
  document.getElementById('gameAlertModal').style.display = 'none';
}