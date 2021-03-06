require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

app.use('/api', routes)

app.listen(port)

console.log(`Running on http://localhost:${port}`)