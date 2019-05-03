import React from 'react';
import ReactDOM from 'react-dom';
import * as router from './router'
import * as serviceWorker from './serviceWorker';
import socket from './socket'
import 'typeface-roboto'
import lums from './lums.jpg';

document.body.style = 'background: url(https://www.booksoftitans.com/assets/uploads/2017/11/all-suggested-books-tim-ferriss-podcast.jpg)';
// document.body.style = `background-image: ${bg};`;

const root = document.getElementById('root');

router.renderHomePage()
// socket.on('HomePage', ()=>{
// 	router.renderHomePage()
// })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

