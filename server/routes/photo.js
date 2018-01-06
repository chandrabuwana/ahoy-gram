const express = require('express')
const router = express.Router()
const photo = require('../controllers/photoController')
const img = require('../helper/imagePost')
const multer = require('multer')

router.post('/', img.multer.single('image'),img.sendUploadToGCS,photo.postPhoto)
router.get('/',photo.findAllPhoto)
module.exports = router;