const firebaseConfig = {
  apiKey: "AIzaSyAo5VrX56MDxmBQckluT-hcn-MA6Opzy8Q",
  authDomain: "player-tracking-system.firebaseapp.com",
  projectId: "player-tracking-system",
  storageBucket: "player-tracking-system.firebasestorage.app",
  messagingSenderId: "500072906911",
  appId: "1:500072906911:web:8694b88a191a17e6b822aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
