// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUO_immbTcXXs6DW5Bww1kXlam_eKpWPY",
  authDomain: "parkingmanagement-f2a9c.firebaseapp.com",
  databaseURL: "https://parkingmanagement-f2a9c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parkingmanagement-f2a9c",
  storageBucket: "parkingmanagement-f2a9c.firebasestorage.app",
  messagingSenderId: "342207648226",
  appId: "1:342207648226:web:adb6a2ec7c2c76f7bc69bb",
  measurementId: "G-M8NDQ3121J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
