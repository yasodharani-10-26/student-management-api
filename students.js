import express from "express";
const app = express();

app.get("/api/students", (req, res) => {
  res.json([{ id: 1, name: "Ravi" }]);
});

export default app;
