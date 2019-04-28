const express = require('express');
const path = require('path');
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server);
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://athena-56ba2.firebaseio.com"
});

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
  socket.on('login', data => {
  	admin.auth().getUserByEmail(email)
  		.then( userRecord =>{
  			console.log('Successfully fetched:', userRecord.toJSON())
        socket.emit('HomePage')
  		})
  		.catch( error =>{
  			console.log('Error fetching data:', error)
  		})
  })
  socket.on('signup', data => {
  	admin.auth().createUser({
  		email: data.email,
  		emailVerified: true,
  		password: data.password,
  		displayName: data.displayName,
  		disabled: false	
  	})
  		.then((userRecord)=>{
  			console.log('Successfully created new user:', userRecord.uid)
        clients[socket.id] = userRecord

        socket.emit('HomePage')
  		})
  		.catch(error =>{
  			console.log('Error creating new user:', error)
  		})
  })
  socket.on('disconnect', () =>{
    console.log('User disconnected'));
    delete clients[socket.id]
  }
});

server.listen(PORT, () => console.log(`Listening on ${ PORT }`))
