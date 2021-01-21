import uuid
from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
cors = CORS(app)


@app.route("/")
def index():
    return "Hello, world!"


@app.route("/destinations")
@cross_origin()
def destinations():
    return jsonify([
        {
            "id": 1,
            "name": "example name1",
            "description": "example description",
            "bounds": {
                "north": 127.115048,
                "west": 37.508038,
                "south": 127.115248,
                "east": 37.508238
            }
        },

        {
            "id": 2,
            "name": "example name2",
            "description": "example description",
            "bounds": {
                "north": 127.115048,
                "west": 37.508038,
                "south": 127.115248,
                "east": 37.508238
            }
        }
    ])


@app.route("/destinations/<string:destination_id>")
@cross_origin()
def destination(destination_id):
    return jsonify(
        {
            "id": destination_id,
            "name": "example name",
            "description": "example description",
            "bounds": {
                "north": 127.115048,
                "west": 37.508038,
                "south": 127.115248,
                "east": 37.508238
            }
        }
    )


if __name__ == "__main__":
    app.run()
