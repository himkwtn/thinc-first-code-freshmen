const {
  findStudent,
  createStudent,
  updateSubject,
  deleteStudent
} = require("../functions");
const { Router } = require("express");
const router = Router();

router.get("/read/:id", (req, res) => {
  const id = req.params.id;
  const student = findStudent(id);
  res.send(student);
});

router.get("/delete", (req, res) => {
  const id = req.query.id;
  const studentToDelete = deleteStudent(id);
  res.send(studentToDelete);
});

router.post("/create", (req, res) => {
  const data = req.body;
  const newStudent = createStudent(data);
  res.send(newStudent);
});

router.post("/update", (req, res) => {
  const { id, subjects } = req.body;
  const updated = updateSubject(id, subjects);
  res.send(updated);
});

router.get("/delete", (req, res) => {
  const id = req.query.id;
  const deleted = deleteStudent(id);
  console.log(deleted);
  res.send(deleted);
});

module.exports = router;
