from sanic import Sanic
from sanic_cors import CORS
from sanic.response import html, json
from sanic import request
from json import load,dump

# !CONSTANTS
HomePagePth = "index.html"
PlayerPagePth = "player.html"
DataStorage = "data.json"

app = Sanic(__name__)
CORS(app, origin="*")
app.static("/","./")

@app.route("/")
async def main(req):
    return html(open(HomePagePth).read())


@app.route("/api/getPlayerData")
async def getPlayerData(req):
    return json(load(open("data.json")))

@app.route("/api/getValidPins")
async def getValidPins(req):
    return json(load(open("validGames.json")))

@app.route("/api/addPin", methods=["POST"])
async def addPin(req):
    data = req.json
    pin = data.get("pin")
    if pin:
        print(pin)
        with open("validGames.json","w") as file:
            file.write(f"[{pin}]")
        return json({"message": str(pin)})
    else:
        return json({"message": "No pin provided"}, status=400)

@app.route("/api/player/getQuestion")
async def getQuestion(req):
    return json(load(open("question.json")))

@app.route("/api/addQuestion", methods=["POST"])
async def addQuestion(req):
    dump(req.json, open("question.json","w"))
    return json({"message": str(req.json)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True, auto_reload=True)