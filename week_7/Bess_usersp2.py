"""
Title: Bess_usersp1.py
Author: Jarren Bess
Date: Feb 24, 2026
Description: Used to perform MongoDB operations.
"""

# Import the MongoClient
from pymongo import MongoClient
import datetime

# Build a connection stream to connect to
client = MongoClient(
    "mongodb+srv://web335_user:s3cret@cluster0.lujih.mongodb.net/web335DB?retryWrites=true&w=majority"
)

print(client)

# Configure a variable to access the web335DB
db = client["web335DB"]

# Create a new user document
doe = {
    "firstName": "John",
    "lastName": "Doe",
    "employeeId": "1013",
    "email": "jdoe@me.com",
    "dateCreated": datetime.datetime.now(datetime.UTC),
}

# Insert the new user document into the user's collection
doe_user_id = db.users.insert_one(doe).inserted_id
print(doe_user_id)

# Prove the new user document was inserted into the collection
print(db.users.find_one({"employeeId": "1013"}))

# Update query to change the user's email
db.users.update_one({"employeeId": "1013"}, {"$set": {"email": "john.doe@me.com"}})

# Prove the update to the user's email worked
print(db.users.find_one({"employeeId": "1013"}))

# Delete the user that was created
result = db.users.delete_one({"employeeId": "1013"})


# Display the results of the query
print(result)

# Prove the document was removed by searching the collection
print(db.users.find_one({"employeeId": "1013"}))
