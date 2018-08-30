const fs = require("fs")

module.exports = {
    findStudent: function(id) {
        const student =  this.getStudents().find( student => student.id === id)
        if( student !== undefined) return student
        return null
    },

    create: function(student) {
        const students = this.getStudents()
        const ids = this.findStudent().map(s => s.id).sort().reverse()
        const id = ids[0]+1
        const newStudent = {
            id,
            ...student
        }
        const data = JSON.stringify([...students, newStudent] , null, 4)
        fs.writeFileSync('students.json', data)
    },

    getStudents: () => JSON.parse(fs.readFileSync("students.json")),

    update: function(id, updated) {
        const students = this.getStudents()
        const student = this.findStudent(id)
        if(! (student) ) return
        const newArr = students.filter( e => e.id !== id)
        const newStudent = {
            ... student,
            ...updated
        }
        const data = JSON.stringify([...newArr, newStudent].sort( (a,b) => a.id-b.id) , null, 4)
        fs.writeFileSync('students.json', data)
    },
    delete: function(id) {
        const students = this.getStudents()
        const newArr = students.filter( e => e.id !== id)
        const data = JSON.stringify(newArr , null, 4)
        fs.writeFileSync('students.json', data)
    },
    removeFields: function(obj){
        return Object.keys(obj).filter(key => obj[key]).map(key => { 
            this[key] = obj[key]
            return this
        }).reduce( (a,b) => { return {...a,...b} })
    }  
}
