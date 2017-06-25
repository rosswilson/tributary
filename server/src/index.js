const express = require('express')
const bodyParser = require('body-parser')

const { version, name } = require('../package')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/status', (req, res) => res.send('I\'m alive'))
app.get('/version', (req, res) => res.json({ version, name }))

app.use(require('./router'))

app.listen(8080, (req, res) => console.log('Server is listening on port 8080'))
