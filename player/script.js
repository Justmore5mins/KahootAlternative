const api = `http://${location.hostname}/api/getValidPins`

function joinGame(){
    const gamePIN = Number(document.getElementById("gamePinPlayer").value);
    fetch(api)
    .then(res => res.json())
    .then(data => {
        for(const item of data){
            if(item === gamePIN){
                location.href = `http://${location.hostname}/games/normalPlayer.html`
                return;
            }
        }
        alert("PIN not exist")
    })
}

