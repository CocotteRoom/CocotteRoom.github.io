import firebase from 'firebase/app';
import 'firebase/auth';

export const initialize = () =>
  firebase.initializeApp({
    apiKey: 'AIzaSyC7dohoa7HZRUr_RnbBovGtZ6N5k8RB92Q',
    authDomain: 'cocotteroom-1526382349172.firebaseapp.com',
    databaseURL: 'https://cocotteroom-1526382349172.firebaseio.com',
    projectId: 'cocotteroom-1526382349172',
    storageBucket: 'cocotteroom-1526382349172.appspot.com',
    messagingSenderId: '866896715748',
  });

export default firebase;
