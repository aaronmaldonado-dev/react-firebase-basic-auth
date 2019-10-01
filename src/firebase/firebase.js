import * as firebase from 'firebase';

const config = {
    // your firebase config here
};

firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };