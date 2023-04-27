var firebaseConfig = {
    apiKey: "AIzaSyC6tLd-URwgjEHJj12-DqWl5_hHN5m43tI",
    authDomain: "letschat-5889f.firebaseapp.com",
    projectId: "letschat-5889f",
    storageBucket: "letschat-5889f.appspot.com",
    messagingSenderId: "227142299058",
    appId: "1:227142299058:web:b348d2c30accdd068a08ab"
  };
  
  
 
 firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username");
document.getElementById("USERNAME").innerHTML="Welcome " + user_name + "!";
function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
    localStorage.setItem("rn", room_name);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_name = childKey;
    
console.log("Room Name");
row="<div class='room_name' id="+Room_name+" onlclick='redirectToRoomName(this.id)'>#"+Room_name + "</div> <hr>";
document.getElementById("output").innerHTML += row;
    
    });});}
    function redirectToRoomName(name)
    {
          console.log(name);
          localStorage.setItem("rn", name);
          window.location="kwitter_page.html";
    }
getData();


