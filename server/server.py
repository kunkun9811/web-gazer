from flask import Flask, Response, request, make_response
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
                
                print("Received data...")
                print("Processing data...")
                # NOTE: data_collection is the amalgamation of fixations and saccades data
                # classify fixations
                data_collection = classify_fixation(json_data, threshold_1, threshold_2)
                # measure distance between consecutive saccades
                data_collection = measureDistance(data_collection)
                # measure velocities between consecutive fixations
                data_collection = measureVelocities(data_collection)
                # separate final fixations and saccades information in "data_collection"
                final_fixations, final_saccades = produceStructureOfData(data_collection)
                # calculate reading score
                reading_score = measureReadingScore(final_fixations)
                # combine processed informations
                processed_data = structureProcessedData(final_fixations, final_saccades, reading_score, 0)
                # print processed data
                printFinalData(processed_data)

                # NOTE: For development - write data to database
                # writeToDB(processed_data)
                # NOTE: MongoDB (currently using free version)
                insertToMongoDB(processed_data)

                res = make_response("Data Processed!", 200)
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
                # OG
                json_data = json.loads(request.data)
                
                print(json_data)

                # unpack json
                # received_data = json.loads(request.data)

                # print(received_data)

                # dataType = received_data['dataType']
                # json_data = received_data['data']
                
                if len(json_data) == 0:
                        print("*******NO DATA*******")
                        # TODO: Double check the correct status code
                        res = make_response("No Data", 400)
                        res.headers['Access-Control-Allow-Origin'] = '*'
                        return res
                
                print("Received data...")
                print("Processing data...")
                # NOTE: data_collection is the amalgamation of fixations and saccades data
                # classify fixations
                data_collection = classify_fixation(json_data, threshold_1, threshold_2)
                # measure distance between consecutive saccades
                data_collection = measureDistance(data_collection)
                # measure velocities between consecutive fixations
                data_collection = measureVelocities(data_collection)
                # separate final fixations and saccades information in "data_collection"
                final_fixations, final_saccades = produceStructureOfData(data_collection)
                # calculate reading score
                reading_score = measureReadingScore(final_fixations)
                # combine processed informations
                processed_data = structureProcessedData(final_fixations, final_saccades, reading_score, 1)
                # print processed data
                printFinalData(processed_data)

                # NOTE: For development - write data to database
                # writeToDB(processed_data)
                # NOTE: MongoDB (currently using free version)
                insertToMongoDB(processed_data)

                res = make_response("Data Processed!", 200)
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
                # OG
                json_data = json.loads(request.data)
                
                print(json_data)

                # unpack json
                # received_data = json.loads(request.data)

                # print(received_data)

                # dataType = received_data['dataType']
                # json_data = received_data['data']
                
                if len(json_data) == 0:
                        print("*******NO DATA*******")
                        # TODO: Double check the correct status code
                        res = make_response("No Data", 400)
                        res.headers['Access-Control-Allow-Origin'] = '*'
                        return res
                
                print("Received data...")
                print("Processing data...")
                # NOTE: data_collection is the amalgamation of fixations and saccades data
                # classify fixations
                data_collection = classify_fixation(json_data, threshold_1, threshold_2)
                # measure distance between consecutive saccades
                data_collection = measureDistance(data_collection)
                # measure velocities between consecutive fixations
                data_collection = measureVelocities(data_collection)
                # separate final fixations and saccades information in "data_collection"
                final_fixations, final_saccades = produceStructureOfData(data_collection)
                # calculate reading score
                reading_score = measureReadingScore(final_fixations)
                # combine processed informations
                processed_data = structureProcessedData(final_fixations, final_saccades, reading_score, 2)
                # print processed data
                printFinalData(processed_data)

                # NOTE: For development - write data to database
                # writeToDB(processed_data)
                # NOTE: MongoDB (currently using free version)
                insertToMongoDB(processed_data)

                res = make_response("Data Processed!", 200)
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
                # OG
                json_data = json.loads(request.data)
                
                print(json_data)

                # unpack json
                # received_data = json.loads(request.data)

                # print(received_data)

                # dataType = received_data['dataType']
                # json_data = received_data['data']
                
                if len(json_data) == 0:
                        print("*******NO DATA*******")
                        # TODO: Double check the correct status code
                        res = make_response("No Data", 400)
                        res.headers['Access-Control-Allow-Origin'] = '*'
                        return res
                
                print("Received data...")
                print("Processing data...")
                # NOTE: data_collection is the amalgamation of fixations and saccades data
                # classify fixations
                data_collection = classify_fixation(json_data, threshold_1, threshold_2)
                # measure distance between consecutive saccades
                data_collection = measureDistance(data_collection)
                # measure velocities between consecutive fixations
                data_collection = measureVelocities(data_collection)
                # separate final fixations and saccades information in "data_collection"
                final_fixations, final_saccades = produceStructureOfData(data_collection)
                # calculate reading score
                reading_score = measureReadingScore(final_fixations)
                # combine processed informations
                processed_data = structureProcessedData(final_fixations, final_saccades, reading_score, 3)
                # print processed data
                printFinalData(processed_data)

                # NOTE: For development - write data to database
                # writeToDB(processed_data)
                # NOTE: MongoDB (currently using free version)
                insertToMongoDB(processed_data)

                res = make_response("Data Processed!", 200)
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