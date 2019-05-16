import React from 'react';
import ReactDOM from 'react-dom';
import * as router from './router'
import * as serviceWorker from './serviceWorker';
import socket from './socket'
import 'typeface-roboto'
import background from './images/background.jpg';


document.body.style = `background-image: url(${background});`;

router.renderQuizPage()







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

