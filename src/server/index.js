const express = require('express')
const cors = require('cors')
const controllers = require('./controllers')
console.log(controllers)
const bodyParser = require('body-parser')
const app = express() 
const PORT = 8000


 // body parser
app.use(cors())
app.use(bodyParser.json())

app.post('/accounts', controllers.accounts)
app.get('/search/:search', controllers.search)





app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})