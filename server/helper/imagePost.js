require('dotenv').config()
const Storage = require('@google-cloud/storage')
const CLOUD_BUCKET = process.env.CLOUD_BUCKET

const storage = Storage({
  projectId: process.env.GCLOUD_PROJECT,
  keyFilename: process.env.KEYFILE_PATH
})

const bucket = storage.bucket(CLOUD_BUCKET)

const getPublicUrl =(filename)=>{
  console.log('inifilename',filename)
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`
}
const sendUploadToGCS = (req, res, next) => {
  console.log('req.body', req.body)
  console.log('req.headers', req.headers)
  console.log('ini req.file',req.file)
  if (!req.file) {
      return next()
  }
  const gcsname = req.file.originalname
  const file = bucket.file(gcsname)

  const stream = file.createWriteStream({
      metadata: {
          contentType: req.file.mimetype
      }
  })

  stream.on('error', (err) => {
      console.log('ada error', err)
      req.file.cloudStorageError = err
      next(err)
  })

  stream.on('finish', () => {
      req.file.cloudStorageObject = gcsname
      console.log('no error', gcsname)
      file.makePublic().then(() => {

        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)

          console.log(req.file.cloudStoragePublicUrl)
          next()
      })
  })

  stream.end(req.file.buffer)
}

const Multer = require('multer'),
  multer = Multer({
      storage: Multer.MemoryStorage,
      limits: {
          fileSize: 7 * 1024 * 1024
      }
      // dest: '../images'
  })

module.exports = {
  getPublicUrl,
  sendUploadToGCS,
  multer
}
