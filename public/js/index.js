var socket = io();

socket.on("connect", function() {
	console.log("Connected to server");

	// socket.emit("createEmail", {
	// 	to: "anton@example.com",
	// 	text: "Hey. This is Anton"
	// });

});



socket.on("disconnect", function() {
	console.log("Disconnected from server");
});

// socket.on("newEmail", function(email) {
// 	console.log("New Email", email);
// });

socket.on("newMessage", function(message) {
	console.log("New Message", message);
});