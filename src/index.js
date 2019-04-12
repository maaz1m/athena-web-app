import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import io from 'socket.io-client';
import * as serviceWorker from './serviceWorker';

// const socket = io()
document.body.style = 'background: purple;';
const root = document.getElementById('root');

ReactDOM.render(<Landing />, root);
setTimeout(() => ReactDOM.render(<SignIn />, root) , 3000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

