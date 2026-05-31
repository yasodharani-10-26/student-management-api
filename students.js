export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Student A" },
    { id: 2, name: "Student B" }
  ]);
}
