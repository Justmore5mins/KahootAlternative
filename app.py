from sanic import Sanic
from sanic_cors import CORS
from sanic.response import html, json
from sanic import request
from json import load

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


@app.route("/getPlayerData")
async def getPlayerData(req):
    return json(load(open("data.json")))

@app.route("/getValidPins")
async def getValidPins(req):
    return json(load(open("validGames.json")))

@app.route("/addPin", methods=["POST"])
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

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True, auto_reload=True)