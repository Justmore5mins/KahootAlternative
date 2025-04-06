const api = "http://notfound.local/getValidPins"

function joinGame(){
    const gamePIN = Number(document.getElementById("gamePinPlayer").value);
    fetch(api)
    .then(res => res.json())
    .then(data => {
        for(const item of data){
            if(item === gamePIN){
                console.log(true)
                return;
            }
        }
        console.log(false)
    })
}