require('dotenv').config()
const app = require('express')()
var cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
var mongoose = require('mongoose')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'html');


const atlasURI='mongodb://chandra92:chandrabuwana92!@cluster0-shard-00-00-s0enm.mongodb.net:27017,cluster0-shard-00-01-s0enm.mongodb.net:27017,cluster0-shard-00-02-s0enm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
  mongoose.connect(atlasURI,(err)=>{
    if(!err){
      console.log('Database Connected')
    }else{
      console.log('database error')
    }
  })


const user = require('./routes/index')
const photo = require('./routes/photo')

app.use('/',user)
app.use('/photo', photo)

app.listen(3000 , function(){
  console.log('ayojalan di 3000')
})
