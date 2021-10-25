
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAgt2cHgyZ2WwPMM9I-2IZPgXvLtsJ2FBw",
      authDomain: "kwitterdatabase-f6132.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-f6132-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-f6132",
      storageBucket: "kwitterdatabase-f6132.appspot.com",
      messagingSenderId: "520788237788",
      appId: "1:520788237788:web:1966dca2dccf50ba2c4319"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
