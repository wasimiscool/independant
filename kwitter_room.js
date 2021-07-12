// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAynZarowMeTbrRa9YVlf9ST3oTEms-13E",
  authDomain: "kwitter---project.firebaseapp.com",
  databaseURL: "https://kwitter---project.firebaseio.com",
  projectId: "kwitter---project",
  storageBucket: "kwitter---project.appspot.com",
  messagingSenderId: "155787253062",
  appId: "1:155787253062:web:ff0be2b9e16574c8ce8147",
  measurementId: "G-H84LTQTGNT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name2 = localStorage.getItem("user_name2");
document.getElementById("user_name2").innerHTML = "Welcome " + user_name2 + "!";
firebase.analytics();

function addRoom() {
  var room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });

  localStorage.setItem("room_name", room_name);
  getData();
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        var row =
          "<div class = 'room_name' id = " +
          Room_names +
          " onclick = 'redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;

        //End code
      });
    });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
}
