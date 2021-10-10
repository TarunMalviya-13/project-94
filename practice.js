
//ADD YOUR FIREBASE LINk
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7iXvksQ19YbjjxevMOrWdjuQIsg7yl4w",
    authDomain: "kwitter-a29ea.firebaseapp.com",
    databaseURL: "https://kwitter-a29ea-default-rtdb.firebaseio.com",
    projectId: "kwitter-a29ea",
    storageBucket: "kwitter-a29ea.appspot.com",
    messagingSenderId: "524059690670",
    appId: "1:524059690670:web:f4137bf890ea21bfda4f3f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding username"
    });
}