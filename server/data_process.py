from statistics import mean
from math import sqrt

def addOne(num):
        print("Before, num = ", num)
        num += 1
        print("After, num = ", num)

# ** Helper functions **
# Get distance between two points
# Input (4 doubles): coordinates of 2 points
# Output (double): Distance between two points
def getPointsDist(x1,x2,y1,y2):
        return sqrt((x1-x2)**2 + (y1-y2)**2)

def isPointValidInCluster(cluster, p1_x, p1_y, t2):
        for p2 in cluster:
                p2_x = p2[0]
                p2_y = p2[1]
                print("comparing with => ({x},{y})".format(x=p2_x, y=p2_y))

                dist = getPointsDist(p1_x,p2_x,p1_y,p2_y)
                if dist > t2:
                        return False
        return True

# Remove points that are further than at least one other point in the cluster by "t2"
# Input (list, int): one cluster and the threshold 2 or the diameter
# Output (list): New cluster satisfying t2 constraint
def removeOutOfBoundPoints(cluster, t2):
        new_cluster = []
        for p1 in cluster:
                p1_x = p1[0]
                p1_y = p1[1]
                print("**Current point => ({x},{y})".format(x=p1_x, y=p1_y), end=" ")
                if isPointValidInCluster(cluster, p1_x, p1_y, t2) == True:
                        print("[SAVED]")
                        new_cluster.append(p1)
                else:
                        print("[REMOVED]")
                
                print()
        
        return new_cluster

# Input (JSON): array of points, point = {"data": {x,y}, "elapsedTime": time}
# Output (JSON): array of clusters, cluster = {""}
# NOTE: Curent behavior is that 
def classify_fixation(data, t1, t2):
        if len(data) == 0:
                print("*******NO DATA*******")
                return
        # Print input data out
        print("***data***")
        print(data)
        print("t1 = ", t1)
        print("t2 = ", t2)

        cur_cluster_id = 0
        cur_cluster_x = []
        cur_cluster_y = []
        cur_cluster_mean_x = 0
        cur_cluster_mean_y = 0
        clusters = {}

        # Find clusters - using threshold 1
        for i in range(len(data)):
                cur_y = data[i]['data']['y']
                cur_x = data[i]['data']['x']

                print("processing =>({x},{y})".format(x=cur_x, y=cur_y))

                cur_cluster_mean_x = mean(cur_cluster_x) if len(cur_cluster_x) > 0 else cur_x
                cur_cluster_mean_y = mean(cur_cluster_y) if len(cur_cluster_y) > 0 else cur_y
                dist = getPointsDist(cur_x, cur_cluster_mean_x, cur_y, cur_cluster_mean_y)


                print("dist = {dist}".format(dist=dist))

                # if distance is greater than the mean, create new cluster and flush out cur_clusters
                if dist > t1 or i == len(data)-1:
                        clusters[cur_cluster_id] = [xy for xy in zip(cur_cluster_x, cur_cluster_y)]
                        cur_cluster_x.clear()
                        cur_cluster_y.clear()
                        cur_cluster_mean_x = 0
                        cur_cluster_mean_y = 0
                        cur_cluster_id += 1
                
                cur_cluster_x.append(cur_x)
                cur_cluster_y.append(cur_y)

        # TODO: Might need to preserve time data
        print("*****clusters*****")
        print(clusters)
        
        # Finalize fixations - using threshold 2
        fixations = {}
        for i in range(len(clusters)):
                fixations[i] = removeOutOfBoundPoints(clusters[i],t2)

        print("*****fixations*****")
        print(fixations)
                


        