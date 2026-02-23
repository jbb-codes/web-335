"""
Title: Bess_usersp1.py
Author: Jarren Bess
Date: Feb 23, 2026
Description: Used to perform MongoDB operations.
"""

# Import the MongoClient
from pymongo import MongoClient

# Build a connection stream to connect to
client = MongoClient("mongodb+srv://web335_user:s3cret@cluster0.lujih.mongodb.net/web335DB?retryWrites=true&w=majority")

print(client)

# Configure a variable to access the web335DB
db = client['web335DB']

# Call the find function to display all the users in the collection
# using projections to show only the first and last names.
for user in db.users.find({}, {"firstName": 1, "lastName": 1}):
    print(user)

# Use find_one to display a document by employeeID
print(db.users.find_one({"employeeId": "1011"}))

# Use the find_one function to display the document with the last name Mozart.
print(db.users.find_one({"lastName": "Mozart"}))
