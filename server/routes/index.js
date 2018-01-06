const express = require('express')
const router = express.Router()
const User = require('../controllers/userController')

router.get('/',User.findAll)
router.post('/register',User.createUser)
router.post('/login',User.Login)

module.exports = router;