const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cp = require('cookie-parser')
const cors = require('cors')

const app = express()
dotenv.config()

const port = process.env.PORT || 3000

app.use(cors({credentials: true, origin: process.env.CLIENT}))
app.use(cp())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({}));
app.use(require('./app/routes'))

app.get('/*', (req, res) => {
  res.send('404 page not found!')
})

app.listen(port, () => {
  console.log(`Quiz app listening on port ${port}`)
})