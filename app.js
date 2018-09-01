const morgan = require('morgan')
const app = require('express')()
const studentsRouter = require('./routes/students')
const PORT = 3000

app.listen(PORT, () => {console.log(`running on port: ${PORT}`)})
app.set('json spaces', 2);
app.use(morgan('dev'))
app.get('/', (req,res,) => {
    res.send('hello world')
})
app.use('/students', studentsRouter)


