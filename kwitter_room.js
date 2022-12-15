var firebaseConfig = {
    apiKey: "AIzaSyCZmk6CZfmnkYwzo-F6jYBp8Cg6jG7PqdQ",
    authDomain: "kwitter-395a6.firebaseapp.com",
    databaseURL: "https://kwitter-395a6-default-rtdb.firebaseio.com",
    projectId: "kwitter-395a6",
    storageBucket: "kwitter-395a6.appspot.com",
    messagingSenderId: "851984954623",
    appId: "1:851984954623:web:fe1e488223bc3b9262c8ca",
    measurementId: "G-QKWD2YKDWV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getTtem("user_name");
document.getElementById("user_name").innerHTML = "welcome"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

});});}
getData();
