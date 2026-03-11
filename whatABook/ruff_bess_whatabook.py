# ============================================
# File: theBookBytes-whatABook.py
# Author: Amanda Ruff & Jarren Bess
# Date: 7 March 2026
# Description: Python console application for the WhatABook project
# ============================================

from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient(
    "mongodb+srv://web335_user:s3cret@cluster0.lujih.mongodb.net/web335DB?retryWrites=true&w=majority"
)

db = client["web335DB"]

print("=================================")
print("       Welcome to WhatABook      ")
print("=================================")


# ==============================
# Display all books
# Co-Authored: Amanda & Jarren
# ==============================
def show_books():
    print("\nAvailable Books")
    print("-----------------------------------------------")

    for book in db.books.find({}):
        print(f"ID: {book['bookId']}")
        print(f"Title: {book['title']}")
        print(f"Author: {book['author']}")
        print(f"Genre: {book['genre']}")
        print("-----------------------------------------------")


# ==============================
# Display books by genre
# Co-Authored: Amanda & Jarren
# ==============================
def show_books_by_genre():
    genres = ["Fiction", "Dystopian", "Classic", "Fantasy"]
    print("Genres: Fiction, Dystopian, Classic, Fantasy")
    genre = input("Enter genre: ")

    if not genre in genres:
        print("-----------------------------------------------")
        print("\nInvalid genre")
        show_books_by_genre()
        return

    print("\nBooks in Genre")
    print("-----------------------------------------------")

    for book in db.books.find({"genre": genre}):
        print(book["title"])


# ==============================
# Display a customer's wishlist By customerId
# Co-Authored: Amanda & Jarren
# ==============================
def view_wishlist():
    print("\nExample Id: c1000")
    customer_id = input("Enter customerId: ")
    customer = db.customers.find_one({"customerId": customer_id})
    if not customer:
        print("-----------------------------------------------")
        print("\nInvalid customerId\n")
        view_wishlist()
        return

    pipeline = [
        {"$match": {"customerId": customer_id}},
        {
            "$lookup": {
                "from": "wishlistitems",
                "localField": "customerId",
                "foreignField": "customerId",
                "as": "wishlist",
            }
        },
        {
            "$project": {
                "wishlist._id": 0,
                "wishlist.customerId": 0,
            },
        },
    ]

    print("\nYour Wishlist")
    print("-----------------------------------------------")

    # JB: I used AI to figure out how to avoid errors from empty wishlists
    # and also used suggested variable names
    for item in db.customers.aggregate(pipeline):
        try:
            book_ids = item["wishlist"][0]["items"]
        except (KeyError, IndexError):
            book_ids = []
            print("You haven't added any books to your wish list")
        for book_id in book_ids:
            book = db.books.find_one({"bookId": book_id})
            print(book["title"])


# ==============================
# Display all books on startup
# Author: Jarren
# ==============================
show_books()

# ==============================
# Menu to control console application
# Co-Authored: Amanda & Jarren
# ==============================
while True:
    print("\n========== WhatABook Menu ==========")
    print(
        """
1 View Books
2 View Books by Genre
3 View Wishlist
4 Exit
"""
    )

    choice = input("Select option: ")

    if choice == "1":
        show_books()
    elif choice == "2":
        show_books_by_genre()
    elif choice == "3":
        view_wishlist()
    elif choice == "4":
        print("\nThank you for using WhatABook. Goodbye!\n")
        break
