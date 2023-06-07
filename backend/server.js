const express = require('express')
const app = express()
const port = 3000
const userRouter = require('./route/usersRoute')
const BookRouter = require('./route/BookRoute')
app.use('/user', userRouter)
app.use('/Books', BookRouter)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})