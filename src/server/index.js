const express = require('express')
const cors = require('cors')
const controllers = require('./controllers')
//const session =require('express-session');
console.log(controllers)
const bodyParser = require('body-parser')
const app = express() 
const PORT = 8000


 // body parser
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

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

app.post('/login',controllers.login)






app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})