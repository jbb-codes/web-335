// Used AI to research performing these queries, including using the
// Date function, the update operator 'set', and using simple
// projections with the find function.

// Used to add a new user document to the users collection.
db.users.insertOne({
  firstName: "John",
  lastName: "Doe",
  employeeId: "1020",
  email: "jdoe@mail.com",
  dateCreated: new Date(),
});

// Used to update a user's email in the document.
db.users.updateOne({employeeId: "1009"}, {$set: {email: "mozart@me.com"}});

// Used to display all users with only the first name, last name, and email fields.
db.users.find({}, {firstName: 1, lastName: 1, email: 1});
