var RaspiCam = require("raspicam");

var camera = new RaspiCam({
	mode: "photo",
	output: "./photo/sm-image.jpg",
	encoding: "jpg",
	timeout: 0 // take the picture immediately
});

camera.on("read", function( err, timestamp, filename ){
	console.log("Photo taken: " + filename );
	camera.stop();
});

camera.start();
