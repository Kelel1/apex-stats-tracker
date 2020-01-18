require('dotenv').config()
const express = require('express')
const morgan  = require('morgan')
const app     = express()

app.get('/api/v1/profile/:platform/:gamertag', (req, res) => {

  console.log(req.params.gamertag, req.params.platform)
  res.send('Hello Kern')
 })
const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
  console.log( `Server running on port ${PORT}`)
})