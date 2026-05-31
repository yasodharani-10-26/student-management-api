export default function handler(req, res) {
  const students = [
    { id: 1, name: "yamini" },
    { id: 2, name: "karthi" }
  ];

  res.status(200).json(students);
}
