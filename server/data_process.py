def addOne(num):
        print("Before, num = ", num)
        num += 1
        print("After, num = ", num)

# Input (JSON) => Output (JSON)
# Input: array of points, point = {"data": {x,y}, "elapsedTime": time}
# Output: array of clusters, cluster = {""}
def classify_fixation(data, t1, t2):
        if len(data) == 0:
                print("*******NO DATA*******")
                return
        # Print input data out
        print("***data***")
        print(data)
        print("t1 = ", t1)
        print("t2 = ", t2)

        cur_fixation_id = 0

        