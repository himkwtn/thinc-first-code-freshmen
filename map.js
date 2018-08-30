const s = require('./students')
// console.log(s)
// console.log(s.map(e => e.id))
// const a = [1,2,4]
// console.log(a.find(e => e == 5))

const d = {
    name: null,
    age: 12,
    sex: null,
    school: undefined
}

const removeFields = obj => Object.keys(obj).filter(key => obj[key]).map(key => { return { [key] : obj[key]} }).reduce(Object.assign)
console.log(removeFields(d))