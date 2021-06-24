from flask import Flask, Response, request, make_response
import json
from data_process import *

app = Flask(__name__)
threshold_1 = 100
threshold_2 = 200

@app.route('/')
def hello():
        res = Response('Hello from flask backend!')
        res.headers['Access-Control-Allow-Origin'] = '*'
        addOne(2)
        return res

@app.route('/process', methods=['POST', 'OPTIONS'])
def process():
        if request.method == 'POST':
                print("Received data...")
                print("Processing data...")
                json_data = json.loads(request.data)
                classify_fixation(json_data, threshold_1, threshold_2)
                res = make_response("Data Processed!", 200)
                res.headers['Access-Control-Allow-Origin'] = '*'
                return res
        elif request.method == 'OPTIONS':
                print("Processing OPTIONS request")
                res = make_response(200)
                res.headers["Access-Control-Allow-Origin"] = "*"
                res.headers["Content-Type"] = "*"
                return res

if __name__ == "__main__":
        app.run(use_reloader=False)

# source ~/anaconda3/etc/profile.d/conda.sh
# conda activate my_env