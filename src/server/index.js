const express = require('express');
const io = require('socket.io')(server);
const path = require('path');

const app = express()
const server = require('http').createServer(app)

const PORT = process.env.PORT || 8080;

const INDEX = path.join(__dirname, '../../build');

app.use(express.static(INDEX))

app.get('/', (req,res,next)=>{
	res.sendFile(__dirname + './index.html')
})

// const server = express()
//   .use((req, res) => res.sendFile(INDEX) )
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));


io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('disconnect', () => console.log('User disconnected'));
});

server.listen(PORT, () => console.log(`Listening on ${ PORT }`))