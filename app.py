from sanic import Sanic
from sanic_cors import CORS
from sanic.response import html, json
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

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True, auto_reload=True)