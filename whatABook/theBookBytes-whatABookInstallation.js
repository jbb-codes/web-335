// ============================================
// File: theBookBytes-whatABookInstallation.js
// Author: Amanda Ruff & Jarren Bess
// Date: 03 March 2026
// Description: Installation script for the WhatABook project
// ===========================================

// ==============================
// Drop Collections
// Author: Jarren
// ==============================
db.books.drop();
db.customers.drop();
db.wishlistitems.drop();

// ==============================
// Create Collections
// Author: Amanda
// Co-author: Jarren - added schema validation
// ==============================
db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        bookId: {
          bsonType: "string",
        },
        title: {
          bsonType: "string",
        },
        author: {
          bsonType: "string",
        },
        genre: {
          bsonType: "string",
        },
      },
    },
  },
});

db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        customerId: {
          bsonType: "string",
        },
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
      },
    },
  },
});

// JB: I used AI to find that the JSON schema BSON type was set to string by accident
db.createCollection("wishlistitems", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        customerId: {
          bsonType: "string",
        },
        items: {
          bsonType: "array",
        },
      },
    },
  },
});

// ==============================
// Insert Documents: books
// Author: Amanda
// ==============================
db.books.insertMany([
  {
    bookId: "b1001",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
  },
  {
    bookId: "b1002",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
  },
  {
    bookId: "b1003",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  },
  {
    bookId: "b1004",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
  },
  {
    bookId: "b1005",
    title: "Go Set a Watchman",
    author: "Harper Lee",
    genre: "Fiction",
  },
  {
    bookId: "b1006",
    title: "White Nights",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
  },
]);

// ==============================
// Insert Documents: customers
// Author: Jarren
// ==============================
db.customers.insertMany([
  {
    customerId: "c1001",
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    customerId: "c1002",
    firstName: "John",
    lastName: "Smith",
  },
  {
    customerId: "c1003",
    firstName: "Bob",
    lastName: "Jones",
  },
  {
    customerId: "c1004",
    firstName: "Neil",
    lastName: "Lane",
  },
]);

// ==============================
// Insert Documents: wishlistitems
// Author: Jarren
// ==============================
db.wishlistitems.insertMany([
  {
    customerId: "c1001",
    items: ["b1001", "b1003"],
  },
  {
    customerId: "c1002",
    items: ["b1002", "b1004"],
  },
  {
    customerId: "c1003",
    items: ["b1002"],
  },
]);
// End of installation script
