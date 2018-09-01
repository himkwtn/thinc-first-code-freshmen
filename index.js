const  {getStudents, findStudent, createStudent, updateStudent, deleteStudent} = require("./functions")

students = getStudents()
const newStudent = {
    name: "asd",
    contact: {
        phone: 1234,
        email: "asd@asd.com",
        line: "abbcd"
    },
    courses: [
        "asas",
        "adasd",
        "dsdsds"
    ]
}
// createStudent(newStudent)
// deleteStudent(4)
// updateStudent(2,{name:"ab cd", contact: null})
// students = getStudents()
console.log(findStudent(1))
