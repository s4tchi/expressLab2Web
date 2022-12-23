require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { dbConfig } = require('./db.config')

const app = express()

mongoose.connect(dbConfig.url)
mongoose.Promise = global.Promise
mongoose.set('strictQuery', false)
const db = mongoose.connection

const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    res.send('Hello? world')
})

db.on('error', () => {
    console.error('Error with DB')
})

app.use('/pages', require('./routes/pages.route'))
app.use('/styles', require('./routes/styles.route'))
app.use('/scripts', require('./routes/scripts.route'))
app.use('/img', require('./routes/logos.route'))
app.use('/v', require('./routes/vi.route'))

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/`)
})