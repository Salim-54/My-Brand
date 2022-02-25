const firebaseConfig = {
    apiKey: "AIzaSyCVzHORot_gbs8kayJ3sM2aq6QWwwGZ7Yw",
    authDomain: "my-brand-570b1.firebaseapp.com",
    projectId: "my-brand-570b1",
    storageBucket: "my-brand-570b1.appspot.com",
    messagingSenderId: "714483009444",
    appId: "1:714483009444:web:68369502b53a749c38a331",
    measurementId: "G-WKR0ZK6MSL"
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const db  = firebase.firestore();
