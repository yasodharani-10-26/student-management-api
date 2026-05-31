const express = require("express");
const app = express();

app.use(express.json());

let students = [];

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Student Management API is running successfully"
  });
});

// GET Students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST Student
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const student = {
    id: students.length + 1,
    name,
    age,
    course
  };

  students.push(student);

  res.status(201).json({
    message: "Student Added Successfully",
    student
  });
});

// DELETE Student
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(student => student.id !== id);

  res.json({
    message: "Student Deleted Successfully"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
