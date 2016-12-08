const dialog = require('electron').remote.dialog; // access file system dialogs

// Show an open file dialog, select a file, and load it into the editor
function openFile(){
  dialog.showOpenDialog(
    {filters: [{ name: 'json', extensions: ['json'] }]},
	function (fileName) {
    if (fileName !== undefined)
	{
	  readFile(fileName[0]);
	  openFileName = fileName[0];
	}
  });
}

// Open the new file template and load it into the editor
function newFile(){
  readFile("newFileTemplate.json");
  openFileName = "";
}

// Helper function for saving a file
function writeFile(fileName){
  fs.writeFile(fileName, data, function (err) {
    if(err){
      alert("An error occurred creating the file " + err.message);
	}
  });
}

// Save the content of the editor into a JSON file
function saveFile() {
  parsedJson = editor.get();
  data = JSON.stringify(parsedJson, null, 2);
  
  if (openFileName == "")
  {
	dialog.showSaveDialog(
	  {filters: [{ name: 'json', extensions: ['json'] }]},
	  function (fileName) {
      if (fileName !== undefined)
	  {
	    writeFile(fileName);
	  }
    });
  }
  else
  {
    writeFile(openFileName);
  }
}

// Add the event handlers to the buttons
document.getElementById('btnOpenFile').addEventListener('click', openFile);
document.getElementById('btnNewFile').addEventListener('click', newFile);
document.getElementById('btnSaveFile').addEventListener('click', saveFile);