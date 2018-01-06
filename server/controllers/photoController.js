const Photo = require('../models/photo')

const postPhoto = (req,res)=>{
  Photo.create({
    image: req.file.cloudStoragePublicUrl,
    posted_by :req.body.posted_by,
    love: req.body.love
  })
  .then(result=>{
    // console.log(result)
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}


const findAllPhoto =(req,res)=>{
  Photo.find({})
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}
module.exports = {postPhoto,
findAllPhoto
};