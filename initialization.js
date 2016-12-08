const fs = require('fs'); // fs module allows for file system operations
var openFileName = "";

// Create a JSONEditor widget in the "jsonEditor" div
var editor = new JSONEditor(document.getElementById("jsonEditor"), {});
var parsedJson;

// Use the fs (file system) library to read a file and populate the editor
function readFile(filepath){
  fs.readFile(filepath, 'utf-8', function (err, data) {
    if (err){
	  alert("An error occurred reading the file: " + err.message);
	  return;
	}
	parsedJson = JSON.parse(data);
	editor.set(parsedJson);
  });
}

var data = readFile("newFileTemplate.json"); // Set an initial "blank" file
