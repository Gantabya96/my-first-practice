//----------AJAX Introduction---------------//

/*
AJAX is a developer's dream, because you can:

  > Read data from a web server - after the page has loaded
  > Update a web page without reloading the page
  > Send data to a web server - in the background
*/

// ---AJAX---//
/*
  AJAX is not a programming language.

  AJAX is a technique for accessing web servers from a web page.

  AJAX stands for Asynchronous JavaScript And XML.
*/

// Example 
/*
<!DOCTYPE html>
<html>
<body>

<div id="demo">
  <h2>Let AJAX change this text</h2>
  <button type="button" onclick="loadDoc()">Change Content</button>
</div>

</body>
</html>

//Explained

The HTML page contains a <div> section and a <button>.

The <div> section is used to display information from a server.

The <button> calls a function (if it is clicked).

The function requests data from a web server and displays it:

// Function loadDoc()

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
*/

//-----------AJAX - The XMLHttpRequest Object------------//

/*
The keystone of AJAX is the XMLHttpRequest object.

   > Create an XMLHttpRequest object
   > Define a callback function
   > Open the XMLHttpRequest object
   > Send a Request to a server
*/

// The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

/*
Syntax for creating an XMLHttpRequest object:

variable = new XMLHttpRequest();
*/

// Define a Callback Function

/*
xhttp.onload = function() {
    // What to do when the response is ready
  }
*/

// To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object:
/*
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
*/

// Example
// Create an XMLHttpRequest object
/*
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
}

// Send a request
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
*/

//---------------GET or POST?-----------//

/*
GET is simpler and faster than POST, and can be used in most cases.

However, always use POST requests when:

   > A cached file is not an option (update a file or database on the server).
   > Sending a large amount of data to the server (POST has no size limitations).
   > Sending user input (which can contain unknown characters), POST is more robust and secure than GET.
*/

//------Server Response Properties----//
/*
responseText ----> get the response data as a string
responseXML ----> get the response data as XML data
*/

//-----Server Response Methods--------//
/*
getResponseHeader()	----> Returns specific header information from the server resource
getAllResponseHeaders()	----> Returns all the header information from the server resource
*/

