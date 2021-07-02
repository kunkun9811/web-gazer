import pymongo
# name of the database
db_name = "pitch_data"
# connect to the database on MongoDB Atlas
client = pymongo.MongoClient('mongodb+srv://dev:Devdev123@pitch-cluster.02iwu.mongodb.net/pitch_data?retryWrites=true&w=majority')

db = client.pitch_data
people = db.casual_video

casual_video_collection = db.casual_video
serious_video_collection = db.serious_video
reading_collection = db.reading

new_cv = {
        "test": "test_string",
        "description": "for casual_video_collection"
}

new_sv = {
        "test": "test_string",
        "description": "for serious_video_collection"
}

new_r = {
        "test": "test_string",
        "description": "for reading_collection"
}

casual_video_collection.insert_one(new_cv)
serious_video_collection.insert_one(new_sv)
reading_collection.insert_one(new_r)


# ** Working example **
# import datetime
# personDocument = {
#   "name": { "first": "Alan", "last": "Turing" },
#   "birth": datetime.datetime(1912, 6, 23),
#   "death": datetime.datetime(1954, 6, 7),
#   "contribs": [ "Turing machine", "Turing test", "Turingery" ],
#   "views": 1250000
# }

# people.insert_one(personDocument)
