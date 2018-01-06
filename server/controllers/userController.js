const User = require('../models/user')
const ObjectId = ('mongodb').ObjectId
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config

var findAll = (req,res)=>{
  User.find()
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

var createUser = (req,res)=>{
  console.log(req)
  var salt = bcrypt.genSaltSync(10)
  var hash = bcrypt.hashSync(req.body.password, salt)
  User.create({
    username: req.body.username,
    password: hash,
    name : req.body.name,
    salt:salt
  })
   .then(data=>{
     res.send(data)
   })
   .catch(err=>{
     console.error(err)
   })
}

var Login = (req,res)=>{
  User.findOne({
    username: req.body.username
  })
  .then( data=>{
    // console.log(data)
    if(data === null){
      res.send('Invalid')
    }else{
      if(bcrypt.compareSync(req.body.password, data.password)){
        var token = jwt.sign({
          _id:data._id,
          username: data.username,
          name: data.name
        },'halo')
        console.log(data)
        res.send(token)
      }
      else{
       res.send('Invalid')
      }
    }

  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  findAll,
  createUser,
  Login
};
