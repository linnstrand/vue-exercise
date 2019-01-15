const express = require('express')
const router = express.Router()

require('./routes/user')(router)
require('./routes/workout')(router)
require('./routes/exercise')(router)

module.exports = router
