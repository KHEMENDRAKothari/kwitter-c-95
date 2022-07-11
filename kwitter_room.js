
const firebaseConfig = {
  apiKey: "AIzaSyCmyBfiA80GvV-IZxOou3td47GpWLYFXdc",
  authDomain: "kwitter-205dc.firebaseapp.com",
  projectId: "kwitter-205dc",
  storageBucket: "kwitter-205dc.appspot.com",
  messagingSenderId: "589973679660",
  appId: "1:589973679660:web:c293f6ec9e28a90a742b89"
};



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_Name - " + room_names)
      row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id' >#"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;


    firebase.database().ref("/").child("room_name").update({
       purpose : "adding room name" 
    });


localStorage.setItem("room_name" , room_name);


window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}