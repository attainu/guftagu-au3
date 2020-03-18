require('dotenv').config()
const express = require('express')
const cors = require('cors')
const controllers = require("./backend/controllers")
const multipart=require('connect-multiparty')
const bodyParser = require('body-parser')
//const path=require('path');
const app = express() 
const multipartMiddleware=multipart()

// -------------------
const http = require('http')
var socketio = require('socket.io')
const server = http.createServer(app)
const io = socketio(server)
// --------------------
//const PORT = 8000


 // body parser
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.post('/accounts', controllers.accounts)
app.get('/search/:search', controllers.search)
app.post('/login',controllers.login)
app.get('/contacts/:from', controllers.contacts)
app.put('/editName/:email',controllers.editName)
app.put('/update/picture/:email', multipartMiddleware,controllers.picture)

let users = {}

// ----------------------------------------
io.on('connection', (socket)=> {
    console.log("we have a new connection ", socket.id)
    
    socket.on('join', ({name, username}, callback)=> {
        console.log("inside socket join :", name, username)
        // check if user exists in table/db or not .. 
        socket.nickname = name+username
        users[socket.nickname] = socket
        // console.log("stored socket?",socket)

        // socket.username = 
        console.log(Object.keys(users))
        // console.log(Object.keys(socket), socket.rooms)
        // console.log(socket.nsp.server)
        console.log("all sockets?", Object.keys(io.sockets.sockets))

        // set to empty or get from db ..
        // oh its a promise/asycn .. so, that is why prev chats = undefined!!
        controllers.findChats(socket.nickname, callback)
        // .then(data => {
        //     console.log("prev chats", data)
        //     callback(!data? []: data.dataValues.text )

        // }) 
        
    //  [ '{"to":"smriti1","text":"fdfg"}',
    //  '{"to":"smriti1","text":"gsmthrmty"}',
    //  '{"to":"smriti1","text":"hey smriti1"}' ]
        // callback(prevChats)

        socket.join()

    })


    socket.on('sendMessage', (from, to, text, callback) => {
        console.log("inside sendMessage", from, to, text)
        // ok .. but ..all chats have same socket id ..
        // if not then, block/accept ..
        // dont call find again .. just use the values from 'join' event 

        socket.emit('message', {to, text}) //emit from curren socket too ..
        console.log(socket.nickname, from+to) //= from+to


        if(to+from in users){ // => user is online
            users[[to+from]].emit('message',{to, text})
        }
        else{
            // store in db
            // to+from is the other user
            console.log(to+from, {to,text})
            // socket.emit('append chats', to+from, JSON.stringify({to,text}))
            // controllers.storeChats(to+from, JSON.stringify({to,text}))

        }
        // socket.emit('append chats', from+to, JSON.stringify({to,text}))
        // socket.emit('append chats', to+from, JSON.stringify({to,text}))
        controllers.storeChats(from, to, JSON.stringify({to,text}))
        controllers.storeChats(to, from, JSON.stringify({to,text}))
        callback()
    })

    // socket.on('store chats', (nickname, messageObject)=> {
    //     controllers.storeChats(nickname, JSON.stringify(messageObject))

    // })


    // socket.on('storeChats', controllers.save)


    socket.on('disconnect', () => {
        console.log("user is offline now")
    })
})
// ----------------------------------------


if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build")); // serve the static react app
    app.get(/^\/(?!api).*/, (req, res) => {
      // don't serve api routes to react app
      res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
    });
    console.log("Serving React App...");
  }



// app -> server
server.listen(process.env.PORT || 8000);