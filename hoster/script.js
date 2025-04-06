function createGame() {
  
    const pin = Math.floor(100000 + Math.random() * 900000);
  
    localStorage.setItem('gamePin', pin);
    
 
    window.location.href = "SettingGame.html";
}
