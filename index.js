"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// var path = require("path");
// var http = require("http");

// var oas3Tools = require("oas3-tools");
// var serverPort = 8080;

// // swaggerRouter configuration
// var options = {
// 	routing: {
// 		controllers: path.join(__dirname, "./controllers"),
// 	},
// };

// var expressAppConfig = oas3Tools.expressAppConfig(
// 	path.join(__dirname, "api/openapi.yaml"),
// 	options
// );
// var app = expressAppConfig.getApp();

// // Initialize the Swagger middleware
// http.createServer(app).listen(serverPort, function () {
// 	console.log(
// 		"Your server is listening on port %d (http://localhost:%d)",
// 		serverPort,
// 		serverPort
// 	);
// 	console.log(
// 		"Swagger-ui is available on http://localhost:%d/docs",
// 		serverPort
// 	);
// });
