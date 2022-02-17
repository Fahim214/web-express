const express = require('express')
const userRouter = require('./router/users')
const app = express()
const dataRouter = require('./router/blog')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var myLogger = function (request, response, next) {
    request.time = new Date().toLocaleDateString()
    next()
}

app.use(myLogger)

app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))

app.get('/', function (request, response) {
    const kelas = {
        id: 1,
        nama: "HTML dan CSS",
        date: request.time.toString()
    }
    // console.log("hello world");
    response.render('pages/index', {kelas: kelas})
})

app.get('/about', function (request, response) {
    response.render('pages/about')
})

app.use(userRouter)
app.use(dataRouter)

app.listen(3001, function () {
    console.log("info", 'Server is running at port : ' + 3001);
});