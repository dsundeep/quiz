const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

const port = process.env.PORT || 3000

app.use(require('./app/routes'))

app.get('/*', (req, res) => {
  res.send('404 page not found!')
})

app.listen(port, () => {
  console.log(`Quiz app listening on port ${port}`)
})