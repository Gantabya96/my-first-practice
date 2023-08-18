// ------------JSON---------------

/*
JSON stands for JavaScript Object Notation
JSON is a text format for storing and transporting data
JSON is "self-describing" and easy to understand
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent *
*/

// Example
/*
This example is a JSON string:

'{"name":"John", "age":30, "car":null}'
*/

/*
Why Use JSON?
The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

 > JavaScript has a built in function for converting JSON strings into JavaScript objects:

   JSON.parse()

 > JavaScript also has a built in function for converting an object into a JSON string:

   JSON.stringify()

You can receive pure text from a server and use it as a JavaScript object.

You can send a JavaScript object to a server in pure text format.

You can work with data as JavaScript objects, with no complicated parsing and translations.
*/

//----------JSON Syntax------------//

// The JSON syntax is a subset of the JavaScript syntax.

//---JSON Syntax Rules---
/*
   JSON syntax is derived from JavaScript object notation syntax:

     Data is in name/value pairs
     Data is separated by commas
     Curly braces hold objects
     Square brackets hold arrays
*/

// JSON names require double quotes.
     
//    "name":"John"

/*
The JSON format is almost identical to JavaScript objects.

In JSON, keys must be strings, written with double quotes:

     {"name":"John"}

In JavaScript, keys can be strings, numbers, or identifier names:
*/

/*
  In JSON, values must be one of the following data types:

     > a string
     > a number
     > an object
     > an array
     > a boolean
     > null
*/

/*
  JSON values cannot be one of the following data types:

     > a function
     > a date
     > undefined 
*/

/*---JSON Files---
  The file type for JSON files is ".json"
  The MIME type for JSON text is "application/json"
*/

//--------JSON vs XML-------------

/*
Both JSON and XML can be used to receive data from a web server.

The following JSON and XML examples both define an employees object, with an array of 3 employees:

JSON Example:
  {"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
  ]}

XML Example:
  <employees>
    <employee>
      <firstName>John</firstName> <lastName>Doe</lastName>
    </employee>
    <employee>
      <firstName>Anna</firstName> <lastName>Smith</lastName>
    </employee>
    <employee>
      <firstName>Peter</firstName> <lastName>Jones</lastName>
    </employee>
  </employees>

JSON is Like XML Because

  Both JSON and XML are "self describing" (human readable)
  Both JSON and XML are hierarchical (values within values)
  Both JSON and XML can be parsed and used by lots of programming languages
  Both JSON and XML can be fetched with an XMLHttpRequest

JSON is Unlike XML Because

  JSON doesn't use end tag
  JSON is shorter
  JSON is quicker to read and write
  JSON can use arrays

The biggest difference is:

  XML has to be parsed with an XML parser. JSON can be parsed by a standard JavaScript function.

Why JSON is Better Than XML?

  XML is much more difficult to parse than JSON.
  JSON is parsed into a ready-to-use JavaScript object.

For AJAX applications, JSON is faster and easier than XML:

Using XML

  Fetch an XML document
  Use the XML DOM to loop through the document
  Extract values and store in variables

Using JSON

  Fetch a JSON string
  JSON.Parse the JSON string
*/

/*---Exceptions----

Parsing Dates:

  Date objects are not allowed in JSON.
  If you need to include a date, write it as a string.
  You can convert it back into a date object later:

Example:
 Convert a string into a date:

    const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    const obj = JSON.parse(text);
    obj.birth = new Date(obj.birth);

    document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

 Or, you can use the second parameter, of the JSON.parse() function, called reviver.

The reviver parameter is a function that checks each property, before returning the value.

Example
 Convert a string into a date, using the reviver function:

   const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
   const obj = JSON.parse(text, function (key, value) {
     if (key == "birth") {
       return new Date(value);
     } else {
       return value;
     }
   });

   document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

Parsing Functions:

Functions are not allowed in JSON.

If you need to include a function, write it as a string.

You can convert it back into a function later:

Example
 Convert a string into a function:

   const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
   const obj = JSON.parse(text);
   obj.age = eval("(" + obj.age + ")");

   document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();


You should avoid using functions in JSON, the functions will lose their scope, and you would have to use eval() to convert them back into functions.
*/

/*
Storing data in local storage

// Storing data:
  const myObj = {name: "John", age: 31, city: "New York"};
  const myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);

// Retrieving data:
  let text = localStorage.getItem("testJSON");
  let obj = JSON.parse(text);
  document.getElementById("demo").innerHTML = obj.name;
*/

//JSON cannot be an object. JSON is a string format.

// JSON can very easily be translated into JavaScript.

// JavaScript can be used to make HTML in your web pages.

//--------JSONP------------//

/*
JSONP is a method for sending JSON data without worrying about cross-domain issues.

JSONP does not use the XMLHttpRequest object.

JSONP uses the <script> tag instead.
*/

//JSONP stands for JSON with Padding.

/*
Requesting a file from another domain can cause problems, due to cross-domain policy.

Requesting an external script from another domain does not have this problem.

JSONP uses this advantage, and request files using the script tag instead of the XMLHttpRequest object.
*/
        // <script src="demo_jsonp.php">

//------------jQuery vs JavaScript-------------------------//

/*
jQuery was created in 2006 by John Resig. It was designed to handle Browser Incompatibilities and to simplify HTML DOM Manipulation, Event Handling, Animations, and Ajax.

For more than 10 years, jQuery has been the most popular JavaScript library in the world.
However, after JavaScript Version 5 (2009), most of the jQuery utilities can be solved with a few lines of standard JavaScript
*/

//------JavaScript Graphics-------//

/*
JavaScript libraries to use for all kinds of graphs:

   Plotly.js
   Chart.js
   Google Chart
*/

// Plotly.js is a charting library that comes with over 40 chart types, 3D charts, statistical graphs, and SVG maps.

/*
Chart.js comes with many built-in chart types:

   Scatter
   Line
   Bar
   Radar
   Pie and Doughnut
   Polar Area
   Bubble
*/

/*
From simple line charts to complex tree maps, Google Chart provides a number of built-in chart types:

   Scatter Chart
   Line Chart
   Bar / Column Chart
   Area Chart
   Pie Chart
   Donut Chart
   Org Chart
   Map / Geo Chart
*/

//----------HTML Canvas-----------//

/*
HTML Canvas is perfect for Scatter Plots

HTML Canvas is perfect for Line Graphs

HTML Canvas is perfect for combining Scatter and Lines
*/

