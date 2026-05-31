const express = require("express");
const app = express();

app.use(express.json());

let students = [];

// GET API
app.get("/students", (req, res) => {
  res.json(students);
});

// POST API
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const student = {
    id: students.length + 1,
    name,
    age,
    course,
  };

  students.push(student);

  res.status(201).json({
    message: "Student Added Successfully",
    student,
  });
});
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(student => student.id !== id);

  res.json({
    message: "Student Deleted Successfully"
  });
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});