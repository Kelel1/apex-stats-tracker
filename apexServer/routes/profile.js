const express = require('express')
const fetch   = require('node-fetch')
const router  = express.Router()


router.get('/:platform/:gamertag', (req, res) => {

  console.log(req.params.gamertag, req.params.platform)
  res.send('Hello Kern')
})

module.exports = router