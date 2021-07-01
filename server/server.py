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
        res = Response('Hello from flask backend!')
        res.headers['Access-Control-Allow-Origin'] = '*'
        addOne(2)
        return res

@app.route('/process', methods=['POST', 'OPTIONS'])
def process():
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
                processed_data = structureProcessedData(final_fixations, final_saccades, reading_score)
                # print processed data
                printFinalData(processed_data)

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