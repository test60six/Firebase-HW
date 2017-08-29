 console.log ("test")

 // Initialize Firebase
    var config = {

        apiKey: "AIzaSyDnBc-baHcd1rtWUlVTNjV_cLWlc96hJKo",
        authDomain: "train-schedule-6f73b.firebaseapp.com",
        databaseURL: "https://train-schedule-6f73b.firebaseio.com",
        projectId: "train-schedule-6f73b",
        storageBucket: "train-schedule-6f73b.appspot.com",
        messagingSenderId: "70716159898"
    };

    firebase.initializeApp(config);


    // reference the database
    var database = firebase.database();

    var trainName = "";
    var Destination = "";
    var firstTrain = "";
    var Frequency = "";

    function createTable() {
        var row = $("<tr>");
        var data = $("<td>");
        data.text("hi");
        row.append(data);
        $("#info").append(row);



    }



    //Button Click
    $("#submit").on("click", function(event) {
        event.preventDefault();
        //values from text boxes
        name = $("#name").val().trim();
        destination = $("#destination").val().trim();
        firstTrainTime = $("#firstrain").val().trim();
        Frequency = $("#frequency").val().trim();

        console.log("I got back", + name + ", " + destination + ", " + firstTrainTime + ", " + Frequency);
        //database push
        database.ref().push({
            name: name,
            destination: Destination,
            firstTrainTime: firstrain,
            Frequency: Frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP



        });
    });
    // Firebase watcher 
    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        // storing the snapshot value
        var sv = snapshot.val();

        console.log(sv.name);
        console.log(sv.destination);
        console.log(sv.firstrain);
        console.log(sv.frequency);
        // supposed to change the HTML to reflect??
        $("#info").html(sv.name);
        $("#info1").text(sv.destination);
        $("#info2").html(sv.firstrain);
        $("#info3").html(sv.frequency);

    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);

    });
    