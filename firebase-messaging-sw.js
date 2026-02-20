importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA9ow668puMztfqJcfAHkJcXXBlWjWFIx8",
  authDomain: "eatlo-ec2f6.firebaseapp.com",
  projectId: "eatlo-ec2f6",
  messagingSenderId: "298601218259",
  appId: "1:298601218259:web:d8b54f5322139f42881426"
});

const messaging = firebase.messaging();