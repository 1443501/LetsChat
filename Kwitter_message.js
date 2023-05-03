//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyC6tLd-URwgjEHJj12-DqWl5_hHN5m43tI",
    authDomain: "letschat-5889f.firebaseapp.com",
    databaseURL: "https://letschat-5889f-default-rtdb.firebaseio.com",
    projectId: "letschat-5889f",
    storageBucket: "letschat-5889f.appspot.com",
    messagingSenderId: "227142299058",
    appId: "1:227142299058:web:b348d2c30accdd068a08ab"
  };
  
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
room_name=localstorage.getItem("roomname");
user_name=localStorage.getItem("username");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send()
{
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value="";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
