import express from "express";

const app = express();

app.use(express.json());

app.get("/api/students", (req, res) => {
  res.json([{ id: 1, name: "Student A" }]);
});

export default app;
