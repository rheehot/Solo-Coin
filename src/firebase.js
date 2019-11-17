import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAgqYRQv7ITLOvAwRU6o_gNtkYA1hEkctg",
  authDomain: "solo-coin.firebaseapp.com",
  databaseURL: "https://solo-coin.firebaseio.com",
  projectId: "solo-coin",
  storageBucket: "solo-coin.appspot.com",
  messagingSenderId: "180323852299",
  appId: "1:180323852299:web:915c731439ea6321c0670e",
  measurementId: "G-9N9MFH81FC"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;