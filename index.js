require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    res.send('Hello? world')
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/`)
})