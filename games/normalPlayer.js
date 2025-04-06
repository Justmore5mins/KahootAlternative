window.onload = function (){
        fetch(`http://${location.hostname}/api/player/getQuestion`)
        .then(res => res.json())
        .then(data => {
            for(const [qID, details] of data){
                document.getElementById("question").innerHTML = qID
                console.log(qID)
            }
        })
}

