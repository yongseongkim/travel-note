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
    return jsonify([])


if __name__ == "__main__":
    app.run()
