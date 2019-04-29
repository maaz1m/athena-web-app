import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyATZC0WyNl3L7ZI88EtaOCvYPQn5r5XPCw",
    authDomain: "athena-56ba2.firebaseapp.com",
    databaseURL: "https://athena-56ba2.firebaseio.com",
    projectId: "athena-56ba2",
    storageBucket: "athena-56ba2.appspot.com",
    messagingSenderId: "994713954223"
 };

firebase.initializeApp(firebaseConfig)

export default firebase
