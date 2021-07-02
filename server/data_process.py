from statistics import mean
from math import sqrt
import json
# mongo db
import pymongo

# ** MongoDB configuration **
#name of the database
db_name = "pitch_data"
client = pymongo.MongoClient('mongodb+srv://dev:Devdev123@pitch-cluster.02iwu.mongodb.net/{db_name}?retryWrites=true&w=majority'.format(db_name=db_name))
db = client.pitch_data

# TODO: To be deleted
def addOne(num):
        print("Before, num = ", num)
        num += 1
        print("After, num = ", num)

# ** Helper functions **

# print the final result
# Input (object): Object of the post processed data
# Output: None
def printFinalData(data):
        print("**********Post-Processed Data**********")
        print(data)

# Get distance between two points
# Input (4 doubles): coordinates of 2 points
# Output (double): Distance between two points
def getPointsDist(x1,x2,y1,y2):
        return sqrt((x1-x2)**2 + (y1-y2)**2)

# Check whether current point is at most "t2" distance away from rest of the points
# Input (list, double, double, int): list of points, p1_x coordinate, p1_y coordinate, threshold 2 (diameter)
# Output (bool): True=valid, False=not valid
def isPointValidInCluster(cluster, p1_x, p1_y, t2):
        for p2 in cluster:
                p2_x = p2[0]
                p2_y = p2[1]
                # print("comparing with => ({x},{y})".format(x=p2_x, y=p2_y), end=", ")

                diff = getPointsDist(p1_x,p2_x,p1_y,p2_y)

                # print("diff =", diff)
                if diff > t2:
                        return False
        return True

# Remove points that are further than at least one other point in the cluster by "t2"
# Input (list, int): one cluster and the threshold 2 or the diameter
# Output (list): New cluster satisfying t2 constraint
def removeOutOfBoundPoints(cluster, t2):
        # print(cluster)
        new_cluster = {
                "points": [],
                "times": []
        }
        for idx in range(len(cluster['points'])):
                p1 = cluster['points'][idx]
                p1_time = cluster['times'][idx]
                p1_x = p1[0]
                p1_y = p1[1]
                # print("**Current point => ({x},{y})".format(x=p1_x, y=p1_y), end=" ")
                if isPointValidInCluster(cluster['points'], p1_x, p1_y, t2) == True:
                        # print("[SAVED]")
                        new_cluster["points"].append(p1)
                        new_cluster["times"].append(p1_time)
                # else:
                #         print("[REMOVED]")
                
                # print()
        
        return new_cluster

def produceFixations(cluster_t2):
        fixations = {}
        for key in cluster_t2:
                # last index of the array of times
                lastIdx = len(cluster_t2[key]['times'])-1
                startTime = cluster_t2[key]['times'][0]
                endTime = cluster_t2[key]['times'][lastIdx]
                duration = endTime - startTime
                fixations[key] = {
                        'points': [p for p in cluster_t2[key]['points']],
                        'startTime': startTime,
                        'endTime': endTime,
                        'duration': duration
                }
        return fixations

# Input (JSON): array of points, point = {"data": {x,y}, "elapsedTime": time}
# Output (JSON): array of clusters, cluster = {""}
# **NOTE: Curent behavior is that points out of the diameter (greater than t2) are just removed
def classify_fixation(data, t1, t2):
        # if len(data) == 0:
        #         print("*******NO DATA*******")
        #         return
        # Print input data out
        print("***data***")
        print(data)
        print("t1 = ", t1)
        print("t2 = ", t2)

        cur_cluster_id = 0
        cur_cluster_x = []
        cur_cluster_y = []
        cur_cluster_times = []
        cur_cluster_mean_x = 0
        cur_cluster_mean_y = 0
        clusters = {}

        # Find clusters - using threshold 1
        for i in range(len(data)):
                cur_y = data[i]['data']['y']
                cur_x = data[i]['data']['x']
                cur_t = data[i]['elapsedTime']
                
                # Get the midpoint coord. in the current cluster
                cur_cluster_mean_x = mean(cur_cluster_x) if len(cur_cluster_x) > 0 else cur_x
                cur_cluster_mean_y = mean(cur_cluster_y) if len(cur_cluster_y) > 0 else cur_y

                dist = getPointsDist(cur_x, cur_cluster_mean_x, cur_y, cur_cluster_mean_y)

                # if distance is greater than the mean, create new cluster and flush out cur_clusters
                if dist > t1:
                        # Add points and their corresponding times into "clusters"
                        clusters[cur_cluster_id] = {
                                "points": [xy for xy in zip(cur_cluster_x, cur_cluster_y)],
                                "times": [t for t in cur_cluster_times]
                        }

                        cur_cluster_id += 1
                        cur_cluster_x.clear()
                        cur_cluster_y.clear()
                        cur_cluster_times.clear()
                        cur_cluster_mean_x = 0
                        cur_cluster_mean_y = 0
                
                cur_cluster_x.append(cur_x)
                cur_cluster_y.append(cur_y)
                cur_cluster_times.append(cur_t)
        
        if len(cur_cluster_x) > 0:
                newEntry = {
                        "points": [xy for xy in zip(cur_cluster_x, cur_cluster_y)],
                        "times": cur_cluster_times
                }
                clusters[cur_cluster_id] = newEntry

        print("***************clusters***************")
        print(clusters)
        print()
        
        # Finalize fixations - using threshold 2
        cluster_t2 = {}
        for i in range(len(clusters)):
                cluster_t2[i] = removeOutOfBoundPoints(clusters[i],t2)

        print("***************cluster_t2***************")
        print(cluster_t2)
        print()

        fixations = produceFixations(cluster_t2)

        print("***************fixations (fixation + time)***************")
        print(fixations)
        print()

        # Check if threshold 2 is of any use
        # print("Cluster size - fixation size =", len(clusters[0]['points']) - len(fixations[0]['points']))

        return fixations

# Distance between current point and previous point + mean of each fixation points
def measureDistance(fixations):
        prevFixMid = None
        for key in fixations:
                # first fixation, no distance
                if key == 0:
                        fixations[key]['distance'] = 0
                        # get and set midpoint
                        cur_x_coords = [p[0] for p in fixations[key]['points']]
                        cur_y_coords = [p[1] for p in fixations[key]['points']]
                        mean_x = mean(cur_x_coords)
                        mean_y = mean(cur_y_coords)
                        fixations[key]['midpoint'] = (mean_x, mean_y)
                        prevFixMid = fixations[key]['midpoint']
                else:
                        # get midpoint
                        cur_x_coords = [p[0] for p in fixations[key]['points']]
                        cur_y_coords = [p[1] for p in fixations[key]['points']]
                        mean_x = mean(cur_x_coords)
                        mean_y = mean(cur_y_coords)
                        fixations[key]['midpoint'] = (mean_x, mean_y)
                        # get distance
                        fixations[key]['distance'] = getPointsDist(prevFixMid[0], mean_x, prevFixMid[1], mean_y)
                        prevFixMid = fixations[key]['midpoint']

        print("***************fixations (fixation + time + distance + midpoint)***************")
        print(fixations)
        print()
        return fixations

# TODO: Need distance first
# Output ()
def measureVelocities(fixations):
        prevEndTime = None
        for key in fixations:
                # first fixation, no velocity
                if key == 0:
                        prevEndTime = fixations[key]['endTime']
                        fixations[key]['velocity'] = 0
                        continue
                # Calculate velocity w.r.t. previous fixation 
                # NOTE: fixations[key]['distance'] = distance between current fixation's midpoint and previous fixation's midpoint
                fixations[key]['velocity'] = fixations[key]['distance'] / (fixations[key]['startTime'] - prevEndTime)
                prevEndTime = fixations[key]['endTime']
        # NOTE: getting divided by 0 might happen in "testing" dataset if time elapsed aren't set properly

        print("***************fixations (fixation + time + distance + midpoint + velocity)***************")
        print(fixations)
        print()

        return fixations

# separate collected information into "fixations" data and "saccades" data
# Input (object): information we collected and formulated from previous functions
# Output (objects) x2: structured fixation and saccades information
def produceStructureOfData(fixations):
        final_fixations = {}
        final_saccades = {}
        prevEndTime = None

        for key in fixations:

                # current fixation info
                cur_fixation = {
                        'points': [d for d in fixations[key]['points']],
                        'startTime': fixations[key]['startTime'],
                        'endTime': fixations[key]['endTime'],
                        'midpoint': fixations[key]['midpoint'],
                        'duration': fixations[key]['duration'],
                        'num_points': len(fixations[key]['points']),
                }

                final_fixations[key] = cur_fixation

                # if this is the first fixation, no saccade info yet
                if key == 0:
                        prevEndTime = fixations[key]['endTime']
                        continue
                
                # current saccade info
                cur_saccade = {
                        'distance': fixations[key]['distance'],
                        'duration': fixations[key]['startTime'] - prevEndTime,
                        'velocity': fixations[key]['velocity'],  # NOTE: in pixels/ms
                }

                # final_saccades[0] is the saccade from fixation[0] to fixation[1]
                final_saccades[key-1] = cur_saccade

                # update prevEndTime
                prevEndTime = fixations[key]['endTime']

        print("***************final fixations***************")
        print(final_fixations)
        print("***************final saccades***************")
        print(final_saccades)

        return final_fixations, final_saccades

# measure reading score
# Input (object): fixations
# Output (int): reading score
def measureReadingScore(fixations):
        prev_x_coord = None
        reading_score = 0

        for key in fixations:
                if key == 0:
                        prev_x_coord = fixations[key]['midpoint'][0]
                        continue

                cur_x = fixations[key]['midpoint'][0]
                if cur_x < prev_x_coord:
                        reading_score -= 1
                else:
                        reading_score += 1
        
        return reading_score

def structureProcessedData(final_fixations, final_saccades, reading_score):
        processed_data = {
                'fixations': [final_fixations[key] for key in final_fixations],
                'saccades': [final_saccades[key] for key in final_saccades],
                'reading_score': reading_score,
        }
        return processed_data

def writeToDB(processed_data):
        # get next id
        json_object = {}
        with open("./database/database_info.json", "r") as openfile:
                json_object = json.load(openfile)

        next_id = json_object['id']
        json_object['id'] += 1

        # update next id
        new_json_object = json.dumps(json_object, indent=4)
        with open("./database/database_info.json", "w") as outfile:
                outfile.write(new_json_object)

        # create new entry in the database
        new_file_name = "entry_{name}".format(name=next_id)
        processed_data_json_object = json.dumps(processed_data, indent=4)
        with open("./database/{file_name}.json".format(file_name=new_file_name), "w") as outfile:
                outfile.write(processed_data_json_object)

        print("Created database entry!")
        return

def casualVideoDataToMongoDB(processed_data):
        casual_video_collection = db.casual_video
        casual_video_collection.insert_one(processed_data)

def seriousVideoDataToMongoDB(processed_data):
        serious_video_collection = db.serious_video
        serious_video_collection.insert_one(processed_data)

def readingDataToMongoDB(processed_data):
        reading_collection = db.reading
        reading_collection.insert_one(processed_data)