require('dotenv').config()
const express = require('express')
const morgan  = require('morgan')
const app     = express()

// Profile Routes
app.use('/api/v1/profile', require('./routes/profile'))

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
  console.log( `Server running on port ${PORT}`)
})