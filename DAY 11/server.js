const express = require("express");
const app = express();

app.use(express.json());

// =======================
// In-Memory Data
// =======================
let subjects = [
  { id: 1, name: "Mathematics" },
  { id: 2, name: "Science" }
];

// =======================
// CREATE (POST)
// =======================
app.post("/subjects", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newSubject = {
    id: Date.now(),
    name
  };

  subjects.push(newSubject);
  res.status(201).json(newSubject);
});

// =======================
// READ (GET ALL)
// =======================
app.get("/subjects", (req, res) => {
  res.json(subjects);
});

// =======================
// READ (GET BY ID)
// =======================
app.get("/subjects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const subject = subjects.find(s => s.id === id);

  if (!subject) {
    return res.status(404).json({ message: "Subject not found" });
  }

  res.json(subject);
});

// =======================
// UPDATE (PUT)
// =======================
app.put("/subjects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const subject = subjects.find(s => s.id === id);

  if (!subject) {
    return res.status(404).json({ message: "Subject not found" });
  }

  subject.name = req.body.name || subject.name;

  res.json(subject);
});

// =======================
// DELETE
// =======================
app.delete("/subjects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = subjects.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Subject not found" });
  }

  const deleted = subjects.splice(index, 1);

  res.json({ message: "Deleted successfully", deleted });
});

// =======================
// SERVER
// =======================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});