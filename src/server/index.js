const express = require('express')
const cors = require('cors')
const controllers = require('./controllers')
const fileupload= require('express-fileupload');
//const session =require('express-session');
console.log(controllers)
const bodyParser = require('body-parser')
const app = express() 
const PORT = 8000


 // body parser
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(fileupload());

// app.use(session({
//     key:'accounts_sid',
//     secret:"ghghghgh",
//     resave:false,
//     cookie:{
//         expires:60000
//     }
// }))

// var sessionChecker=(req,res,next)=>{
//     if(req.session.accounts){
//         res.redirect('/home')
//     }
//     next()
// }

app.post('/accounts', controllers.accounts)
app.get('/search/:search', controllers.search)

app.post('/login',controllers.login)

app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });

 app.put('/editName',controllers.editName) 




app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})