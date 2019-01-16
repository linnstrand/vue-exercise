const express = require('express')
const router = express.Router()

require('./routes/user')(router)
require('./routes/workout')(router)
require('./routes/exercise')(router)
require('./routes/equipment')(router)
module.exports = router
