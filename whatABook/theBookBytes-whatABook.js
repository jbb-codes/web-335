// ============================================
// File: theBookBytes-whatABook.js
// Author: Amanda Ruff & Jarren Bess
// Date: 03 March 2026
// Description: MongoDB Queries for WhatABook Project
// ============================================

// ==============================
// Display all books
// Author: Amanda
// ==============================
db.books.find({});

// ==============================
// Display books by genre
// Author: Amanda
// ==============================
db.books.find({genre: "Fiction"});

// ==============================
// Display books by author
// Author: Amanda
// ==============================
db.books.find({author: "Harper Lee"});

// ==============================
// Display book by bookId
// Author: Amanda
// ==============================
db.books.findOne({bookId: "b1004"});

// ==============================
// Display a wish list by customerId
// Author: Jarren
// ==============================
db.customers.aggregate([
  {$match: {customerId: "c1003"}},
  {
    $lookup: {
      from: "wishlistitems",
      localField: "customerId",
      foreignField: "customerId",
      as: "wishlist",
    },
  },
  {
    $project: {
      "wishlist._id": 0,
      "wishlist.customerId": 0,
    },
  },
]);

// ==============================
// Add books to a customer's wishlist
// Author: Jarren
// ==============================
db.wishlistitems.updateOne(
  {customerId: "c1001"},
  {
    $addToSet: {items: {$each: ["b1005", "b1006"]}},
  },
);

// ==============================
// Remove a book from a customer's wishlist
// Author: Jarren
// ==============================
db.wishlistitems.updateOne(
  {customerId: "c1001"},
  {
    $pull: {items: "b1005"},
  },
);
