function createGame() {
  
    const pin = Math.floor(100000 + Math.random() * 900000);
  
    fetch(`http://${location.hostname}/api/addPin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ pin })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(`Error: ${err}`))
    
 
    location.href = "SettingGame.html";
}
