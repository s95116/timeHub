//Readies the document
$(document).ready(function() {

//Add New Task on click function
$("#addNewTask").on("click", function(){

	//Define variables and grabs data from input boxes
	var newTask = $("#newTaskInput").val().trim();
	var description = $("#newDescriptionInput").val().trim();
	var taskTime = moment($("#newtaskTime").val().trim();
	var comment = $("#newComment").val().trim();

	// Creates new variable that holds time-train data
	var newTrain = {
		name: trainName,
		destination: destination,
		trainTime: trainTime,
		frequency: frequency
	}

	// Uploads schedule data to the Firebase database
	trainData.push(newTrain);

	// Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.trainTime);
	console.log(newTrain.frequency);

	// Alerts the user that the new train has been added to the schedule
	alert("Train has been successfully added");

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#trainTimeInput").val("");
	$("#frequencyInput").val("");

	// Prevents moving to new page
	return false;

});//End of AddTrain on click

	// Creates new Firebase event when adding train data to the database
	//Adds a row in the html when the user adds an entry
	trainData.on("child_added", function(childSnapshot, prevChildKey){

		console.log(childSnapshot.val());

		// Store everything into a variable.
		var trainName = childSnapshot.val().name;
		var destination = childSnapshot.val().destination;
		var trainTime = childSnapshot.val().trainTime;
		var frequency = childSnapshot.val().frequency;
		

		// Sets initial time
		var firstTime = "07:30"; // Time is 7:30 AM(time is in military time)

		//Gets current time and formats it in hh:mm
		var currentTime = moment();
		console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

		// Difference between the times
		var diffTime = moment().diff(moment(currentTime), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);

		// Time apart (remainder)
		var tRemainder = diffTime % frequency;
		console.log(tRemainder);

		// Minute Until Train
		var tMinutesTillTrain = frequency - tRemainder;
		console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

		// Next Train
		var nextTrain = moment(nextTrain).format("hh:mm");
		console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"))

		// Add each train's data into the table
		$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + tMinutesTillTrain + "</td><td>" + nextTrain + "</td><td>" + trainTime + "</td><td>");

	}); //End of trainData function





}); //End of Document.ready