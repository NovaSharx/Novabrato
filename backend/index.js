// Modules and Globals
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const defineCurrentUser = require('./middleware/defineCurrentUser')
const app = express()
require('dotenv').config()

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(defineCurrentUser)

// Routes
app.get('/', async (req, res) => {
    res.send('Welcome to the Novabrato API!')
})

// Controllers
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Novabrato app listening on port ${process.env.PORT}`)
})