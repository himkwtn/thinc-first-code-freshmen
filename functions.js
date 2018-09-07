const fs = require("fs");

const removeFields = obj =>
  Object.keys(obj)
    .filter(key => obj[key])
    .map(key => ({ [key]: obj[key] }))
    .reduce(Object.assign);

const findStudent = id => getStudents().find(student => student.id == id);

const getData = file => {
  try {
    const data = JSON.parse(fs.readFileSync(`./Data/${file}.json`));
    return data;
  } catch (e) {
    return "file not found";
  }
};

const getStudents = () => getData("students");

const createStudent = student => {
  const students = getStudents();
  const ids = getStudents().map(s => s.id);
  const id = Math.max(...ids) + 1;
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
  const parsedId = id.replace(/[^\d]/g, "");
  const students = getStudents();
  const newArr = students.filter(e => e.id != parsedId);
  const data = JSON.stringify(newArr, null, 4);
  fs.writeFileSync("students.json", data);
  const deletedStudent = findStudent(parsedId);
  return deletedStudent;
};

module.exports = {
  findStudent,
  getData,
  getStudents,
  createStudent,
  updateStudent,
  updateSubject,
  deleteStudent
};
