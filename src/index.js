import React from 'react';
import ReactDOM from 'react-dom';
import * as router from './router'
import * as serviceWorker from './serviceWorker';
import socket from './socket'

// document.body.style = 'background: purple;';

const root = document.getElementById('root');

router.renderLoginPage()
socket.on('HomePage', ()=>{
	router.renderHomePage()
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

