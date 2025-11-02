// firebase-config.js
// CONFIG FIREBASE-MU SUDAH MASUK 100%

const firebaseConfig = {
  apiKey: "AIzaSyAtfx_L-Nd3_1V-QRdQ1ywnt_Hzn0xcozA",
  authDomain: "rifqymusic-cc30c.firebaseapp.com",
  projectId: "rifqymusic-cc30c",
  storageBucket: "rifqymusic-cc30c.firebasestorage.app",
  messagingSenderId: "1081536375226",
  appId: "1:1081536375226:web:3bc702ac2ca6e25debd583",
  measurementId: "G-F86NRH3XKE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
