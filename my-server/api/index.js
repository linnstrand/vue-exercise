const express = require('express')
const router = express.Router()

require('./routes/user', router)
require('./routes/workout', router)

module.exports = router
