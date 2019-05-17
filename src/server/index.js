const express = require('express');
const path = require('path');
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server);
// const admin = require("firebase-admin");

// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://athena-56ba2.firebaseio.com"
// });

const PORT = process.env.PORT || 8000;

const INDEX = path.join(__dirname, '../../build');

app.use(express.static(INDEX))

app.get('/', (req,res,next)=>{
	res.sendFile(__dirname + '../../build/index.html')
})

var clients = {}
var mentors = {}

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('disconnect', () =>{
    console.log('User disconnected');
  })
});

server.listen(PORT, () => console.log(`Listening on ${ PORT }`))
