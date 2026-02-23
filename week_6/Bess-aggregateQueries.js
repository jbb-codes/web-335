// Show all students.
db.students.find();

// Insert a new student and check the document was successfully added.
db.students.insertOne({
  firstName: "Jim",
  lastName: "Smith",
  studentId: "s1019",
  houseId: "h1011",
});
db.students.findOne({studentId: "s1019"});

// Update the document and show the change.
db.students.updateOne({studentId: "s1019"}, {$set: {firstName: "John"}});
db.students.findOne({studentId: "s1019"});

// Delete the created document and prove its removal.
db.students.deleteOne({studentId: "s1019"});
db.students.findOne({studentId: "s1019"});

// Display all students by house.
db.houses.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "teamId",
      foreignField: "teamId",
      as: "students",
    },
  },
]);

// Display students in house Gryffindor.
db.houses.aggregate([
  {$match: {founder: "Godric Gryffindor"}},
  {
    $lookup: {
      from: "students",
      localField: "teamId",
      foreignField: "teamId",
      as: "students",
    },
  },
]);

// Display students with an eagle mascot.
db.houses.aggregate([
  {$match: {mascot: "Eagle"}},
  {
    $lookup: {
      from: "students",
      localField: "teamId",
      foreignField: "teamId",
      as: "students",
    },
  },
]);
