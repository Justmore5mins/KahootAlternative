const api = "http://notfound.local/getValidPins"

function joinGame(){
    const gamePIN = document.getElementById("gamePinPlayer").value;
    fetch(api)
    .then(res => res.json())
    .then(data => {
        for(const item in data){
            console.log(gamePIN)
            console.log(typeof(gamePIN))
        }
    })
}