from flask import Flask, Response, request, make_response, jsonify
import json
from data_process import *

app = Flask(__name__)
# NOTE: For production
threshold_1 = 100
threshold_2 = 200

# NOTE: For development testing
# threshold_1 = 1
# threshold_2 = 2

@app.route('/')
def hello():
        res = Response("<h1>This is Aankh's API, it is currently in development :)</h1>")
        res.headers['Access-Control-Allow-Origin'] = '*'
        return res

@app.route('/casual_video', methods=['POST', 'OPTIONS'])
def casual_video():
        if request.method == 'POST':
                # unpack json
                json_data = json.loads(request.data)
                
                if len(json_data) == 0:
                        print("*******NO DATA*******")
                        # TODO: Double check the correct status code
                        res = make_response("No Data", 400)
                        res.headers['Access-Control-Allow-Origin'] = '*'
                        return res

                # received data confirmation
                print("Received data casual video...")

                # set type of data
                casual_video_dataType = 0

                # process json_data into useful features for data analysis
                processed_data = processData(json_data, threshold_1, threshold_2, casual_video_dataType)

                # NOTE: MongoDB (currently using free version)
                # store to database and get inserted doc's ID to send back to the front end
                newDocId = insertToMongoDB(processed_data)
                

                res = make_response(jsonify({
                        "newDocId": newDocId,
                        # "data": processed_data,
                }), 200)
                res.headers['Access-Control-Allow-Origin'] = '*'
                return res
        elif request.method == 'OPTIONS':
                print("Processing OPTIONS request")
                res = make_response(200)
                res.headers["Access-Control-Allow-Origin"] = "*"
                res.headers["Content-Type"] = "*"
                return res

@app.route('/serious_video', methods=['POST', 'OPTIONS'])
def serious_video():
        if request.method == 'POST':
                # unpack json
                json_data = json.loads(request.data)
                
                if len(json_data) == 0:
                        print("*******NO DATA*******")
                        # TODO: Double check the correct status code
                        res = make_response("No Data", 400)
                        res.headers['Access-Control-Allow-Origin'] = '*'
                        return res
                
                # received data confirmation
                print("Received data for serious video...")

                # set type of data
                serious_video_dataType = 1

                # process json_data into useful features for data analysis
                processed_data = processData(json_data, threshold_1, threshold_2, serious_video_dataType)

                # NOTE: MongoDB (currently using free version)
                # store to database and get inserted doc's ID to send back to the front end
                newDocId = insertToMongoDB(processed_data)

                res = make_response(jsonify({
                        "newDocId": newDocId,
                        # "data": processed_data,
                }), 200)
                res.headers['Access-Control-Allow-Origin'] = '*'
                return res
        elif request.method == 'OPTIONS':
                print("Processing OPTIONS request")
                res = make_response(200)
                res.headers["Access-Control-Allow-Origin"] = "*"
                res.headers["Content-Type"] = "*"
                return res

# easy reading
@app.route('/reading', methods=['POST', 'OPTIONS'])
def reading():
        if request.method == 'POST':
                # unpack json
                json_data = json.loads(request.data)
                
                if len(json_data) == 0:
                        print("*******NO DATA*******")
                        # TODO: Double check the correct status code
                        res = make_response("No Data", 400)
                        res.headers['Access-Control-Allow-Origin'] = '*'
                        return res
                
                # received data confirmation
                print("Received data for easy reading...")

                # set type of data
                easy_reading_dataType = 2

                # process json_data into useful features for data analysis
                processed_data = processData(json_data, threshold_1, threshold_2, easy_reading_dataType)

                # NOTE: MongoDB (currently using free version)
                # store to database and get inserted doc's ID to send back to the front end
                newDocId = insertToMongoDB(processed_data)

                # TODO: Send processed_Data back too
                # print("processed_data type = ", type(processed_data))

                res = make_response(jsonify({
                        "newDocId": newDocId,
                        # "processed_data": JSON.stringify(processed_data),
                }), 200)
                res.headers['Access-Control-Allow-Origin'] = '*'
                return res
        elif request.method == 'OPTIONS':
                print("Processing OPTIONS request")
                res = make_response(200)
                res.headers["Access-Control-Allow-Origin"] = "*"
                res.headers["Content-Type"] = "*"
                return res

# hard reading
@app.route('/hard_reading', methods=['POST', 'OPTIONS'])
def hard_video():
        if request.method == 'POST':
                # unpack json
                json_data = json.loads(request.data)
                
                if len(json_data) == 0:
                        print("*******NO DATA*******")
                        # TODO: Double check the correct status code
                        res = make_response("No Data", 400)
                        res.headers['Access-Control-Allow-Origin'] = '*'
                        return res
                
               # received data confirmation
                print("Received data for hard reading...")

                # set type of data
                hard_reading_dataType = 3

                # process json_data into useful features for data analysis
                processed_data = processData(json_data, threshold_1, threshold_2, hard_reading_dataType)

                # NOTE: MongoDB (currently using free version)
                # store to database and get inserted doc's ID to send back to the front end
                newDocId = insertToMongoDB(processed_data)

                res = make_response(jsonify({
                        "newDocId": newDocId,
                        # "data": processed_data,
                }), 200)
                res.headers['Access-Control-Allow-Origin'] = '*'
                return res
        elif request.method == 'OPTIONS':
                print("Processing OPTIONS request")
                res = make_response(200)
                res.headers["Access-Control-Allow-Origin"] = "*"
                res.headers["Content-Type"] = "*"
                return res

# ***** Get averages *****
# 0 = casual_video
# 1 = serious_video
# 2 = reading
@app.route('/get_latest_casual_video', methods=['GET'])
def getLastEntryCasualVideo():
        data = getLatestData(0)
        res = make_response(data, 200)
        res.headers['Access-Control-Allow-Origin'] = '*'
        return res

@app.route('/get_latest_serious_video', methods=['GET'])
def getLastEntrySeriousVideo():
        data = getLatestData(1)
        res = make_response(data, 200)
        res.headers['Access-Control-Allow-Origin'] = '*'
        return res

@app.route('/get_latest_reading', methods=['GET'])
def getLastEntryReading():
        data = getLatestData(2)
        res = make_response(data, 200)
        res.headers['Access-Control-Allow-Origin'] = '*'
        return res

if __name__ == "__main__":
        app.run(use_reloader=False)