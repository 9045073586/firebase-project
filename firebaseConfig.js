  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDOnms2keq5WayMhhkbR_tcV-HeNCj24LI",
    authDomain: "my-demo-67b85.firebaseapp.com",
    projectId: "my-demo-67b85",
    storageBucket: "my-demo-67b85.appspot.com",
    messagingSenderId: "397744323548",
    appId: "1:397744323548:web:aed855c6a3ea04504bad19",
    measurementId: "G-WYWR3WFNQW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);