const fs = require("fs");

const removeFields = obj =>
  Object.keys(obj)
    .filter(key => obj[key])
    .map(key => ({ [key]: obj[key] }))
    .reduce(Object.assign);

const findStudent = id => getStudents().find(student => student.id == id);

const getStudents = () => JSON.parse(fs.readFileSync("students.json"));

const createStudent = student => {
  const students = getStudents();
  const ids = getStudents().map(s => s.id);
  const id = Math.max(...ids) + 1;
  console.log(id);
  const newStudent = {
    id,
    ...student
  };
  const data = JSON.stringify([...students, newStudent], null, 4);
  fs.writeFileSync("students.json", data);
  return newStudent;
};

const updateStudent = (id, updated) => {
  const students = getStudents();
  const student = findStudent(id);
  const newStudent = {
    ...student,
    ...removeFields(updated)
  };
  if (!student) return;
  const newArr = students.map(e => (e.id == id ? newStudent : e));
  const data = JSON.stringify(newArr, null, 4);
  fs.writeFileSync("students.json", data);
  return newStudent;
};

const updateSubject = (id, subjects) =>
  updateStudent(id, { courses: subjects });

const deleteStudent = id => {
  const students = getStudents();
  const newArr = students.filter(e => e.id != id);
  const data = JSON.stringify(newArr, null, 4);
  fs.writeFileSync("students.json", data);
  return findStudent(id);
};

module.exports = {
  findStudent,
  getStudents,
  createStudent,
  updateStudent,
  updateSubject,
  deleteStudent
};
