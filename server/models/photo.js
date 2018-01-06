const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema ({
  image: {
    type: String,
    required: true
  },
  posted_by : { type: Schema.Types.ObjectId, ref : 'User', required: true},
  love:{
    type: Schema.Types.ObjectId, ref : 'User'
  }
})

const Photo = mongoose.model('Photos', photoSchema)

module.exports = Photo;