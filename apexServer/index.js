require('dotenv').config()
const express = require('express')
const morgan  = require('morgan')
const app     = express()

app.get('/', (req, res) => {

  res.send('<h1>Hello Kern</h1>')

})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log( `Server running on port ${PORT}`)
})