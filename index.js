const  f = require("./functions")
let students

students = f.getStudents()
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
// f.create(newStudent)
// f.delete(4)
f.update(0,{name:"jeff bezos"})
students = f.getStudents()
console.log(f.findStudent(0))