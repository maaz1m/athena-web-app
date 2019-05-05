import React from 'react';
import ReactDOM from 'react-dom';
import * as router from './router'
import * as serviceWorker from './serviceWorker';
import socket from './socket'
import 'typeface-roboto'
import lums from './lums.jpg';



document.body.style = 'background: no-repeat';
// document.body.style = `background-image: ${bg};`;

const root = document.getElementById('root');

router.renderLandingPage()
// socket.on('HomePage', ()=>{
// 	router.renderHomePage()
// })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

