require("dotenv").config()
const express = require('express')
const cors = require('cors')
const controllers = require('./controllers')
const cloudinary=require('cloudinary');
const multer= require('multer');
const bodyParser = require('body-parser')
const app = express() 
const PORT = 8000


 // body parser
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//cloudinary config code
cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_id:process.env.API_ID,
  api_secret:process.env.API_SECRET
})

//image upload
const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter:(req,file,cb)=>{
    if(!file.mimetype.match(/jpe|jpeg|png$i/)){
      cb(new Error('File is not supported'),false)
    }
    cb(null,true)
  },
  limits:{fileSize: 1000000},
})



app.post('/accounts', controllers.accounts)
app.get('/search/:search', controllers.search)

app.post('/login',controllers.login)

 app.put('/editName/:email',controllers.editName) 


app.post('/upload',upload.single('myImage'),controllers.upload)

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})