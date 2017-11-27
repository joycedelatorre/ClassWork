
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAXjADOFmy18G1jn0QL-E_lpMfQJGTAhY",
    authDomain: "myawe-355eb.firebaseapp.com",
    databaseURL: "https://myawe-355eb.firebaseio.com",
    projectId: "myawe-355eb",
    storageBucket: "myawe-355eb.appspot.com",
    messagingSenderId: "143051607937"
  };

  firebase.initializeApp(config);

// Create a variable to reference the database.
  var database = firebase.database();

// // Might not need this part for this project...Link to Firebase Database for viewer tracking
//   var ourConnectionsRef = database.ref("/connections");
//   var googleConnectedRef = database.ref(".info.connected");

//  googleConnectedRef.on("value", function(snap){
//   if(snap.val()){
//     //Then we want to add to our connections
//    var con = ourConnectionsRef.push(true);
//    con.onDisconnect().remove();
//   }
// });


// //says how many items are in this list
// ourConnectionsRef.on("value", function(snap){
//   $("#connected-viewers").text(snap.numChildren());
// })

var namevar = "";
var payvar = 0;
var rolevar = "";
var dateStartedvar = "";

// namevar = name;
// payvar = pay;
// rolevar = role;
// dateStartedvar = startDate;

// $("#name").text(namevar);
// $("#pay").text(payvar);
// $("#role").text(rolevar);
// $("#startDate").text(dateStartedvar);



$("#submit").on("click", function(event){
  event.preventDefault();

  // Grabbed values from text boxes
      namevar = $("#name").val().trim();
      payvar = $("#pay").val().trim();
      rolevar = $("#role").val().trim();
      dateStartedvar = $("#startDate").val().trim();

      // Code for handling the push
      database.ref().push({
        name: namevar,
        pay: payvar,
        role: rolevar,
        startDate: dateStartedvar,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
});

database.ref().orderByChild("dateAdded")
.limitToLast(1)
.on("child_added", function(snapshot){
var sv = snapshot.val();

console.log(sv.namevar);
console.log(sv.payvar);
console.log(sv.rolevar);
console.log(sv.dateStartedvar);


$("#table").append("<td>" + namevar);
$("#table").append("<td>" + payvar);
$("#table").append("<td>" + rolevar);
$("#table").append("<td>" + dateStartedvar);
})



// database.ref().orderByChild("dateAdded")
// .limitToLast(1)
// .on("child_added", function(snapshot){
//   console.log(snapshot.val());
// })
// //listening for when children get added or deleted


