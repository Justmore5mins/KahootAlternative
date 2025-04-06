const url = `http://${location.hostname}/api/getPlayerData`

window.onload = function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        //process
        if(password === data[username].password){
            location.href = `${location.hostname}/player.html`
        }else{
            alert("are you the player?")
        }
    })
}