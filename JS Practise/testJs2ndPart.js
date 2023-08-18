/*
The onload and onunload Events

The onload and onunload events are triggered when the user enters or leaves the page.

The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

The onload and onunload events can be used to deal with cookies.
*/
// Example
/* <body onload="checkCookies()"> */

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
    } else {
      text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
}
  
// The onchange Event
  
// Example
// <input type="text" id="fname" onchange="upperCase()">
  
/*
  The onmouseover and onmouseout Events
  The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:*/
  
  /*The onmousedown, onmouseup and onclick Events
  The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered. */
  
  // ------------JavaScript HTML DOM EventListener--------
  
document.getElementById("myBtn").addEventListener("click", displayDate);
  
function displayDate() {
  document.getElementById("somoy").innerHTML = Date();
}
  
/*
When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.
  
You can easily remove an event listener by using the removeEventListener() method.*/
  
/*
Syntax
element.addEventListener(event, function, useCapture);*/
  
  
/*------------- problem solving -------------------*/
  
  let v =[56,67,21,78,(1,2,3),(4,5,6)];
  let[u,w,...h]=v
  console.log(h);
  
/*-------------------- end ------------------------*/
  
// When Event Bubbling or Event Capturing?
  
/*
The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.*/
  
// useCapture means true 
  
// Example
  document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, false);
  
  document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, true);
  /*
   Bubbling এর ক্ষেত্রে ভিতরে click করলে ভিতর থেকে বাহিরে  আসে। ৩rd parameter এ false লিখতে হয়। (default হিসেবেও ব্যবহার হয় )
  */
  /*
   Capturing এর ক্ষেত্রে ভিতরে click করলে বাহির থেকে ভিতরে আসে। ৩rd parameter এ true  লিখতে হয়।
  */
  
  // Accessing the innerHTML property is the same as accessing the nodeValue of the first child:
  // myTitle = document.getElementById("id").firstChild.nodeValue;
  
  // Accessing the first child can also be done like this:
  // myTitle = document.getElementById("id").childNodes[0].nodeValue;
  
  /*-------------------------------------------------------------------------- */
  
  // All the (3) following examples retrieves the text of an <h1> element and copies it into a <p> element:
  
  /* <h1 id="id01">My First Page</h1>
  <p id="id02"></p> */
  
  // document.getElementById("id02").innerHTML = 
  // document.getElementById("id01").innerHTML;
  
  // or 
  
  // document.getElementById("id").innerHTML = 
  // document.getElementById("id").firstChild.nodeValue;
  // or
  
  // document.getElementById("id02").innerHTML = 
  // document.getElementById("id01").childNodes[0].nodeValue;
  
  /*-------------------------------------------------------------------------- */
  
  /*
   DOM Root Nodes
   There are two special properties that allow access to the full document:
  
      # document.body - The body of the document
      # document.documentElement - The full document
  */
  
  //The nodeType property is read only. It returns the type of a node.
  
  // document.getElementById("id02").innerHTML = 
  // document.getElementById("id01").nodeType;
  
  
  //Creating New HTML Elements (Nodes)
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);
  
  /*
   An HTMLCollection is NOT an array!
  
   An HTMLCollection may look like an array, but it is not.
  
   You can loop through the list and refer to the elements with a number (just like an array).
  
   However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.
  */
  
  /*The Difference Between an HTMLCollection and a NodeList
  A NodeList and an HTMLcollection is very much the same thing.
  
  Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.
  
  Both have a length property that returns the number of elements in the list (collection).
  
  An HTMLCollection is a collection of document elements.
  
  A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
  
  HTMLCollection items can be accessed by their name, id, or index number.
  
  NodeList items can only be accessed by their index number.
  
  An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.
  
  A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.
  
  The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
  
  The querySelectorAll() method returns a static NodeList.
  
  The childNodes property returns a live NodeList.
  
   */
  
  let result = "success" || "failure";
  console.log(result);
  
  document.getElementById("demosix").innerHTML = screen.width + "<br>" + screen.height;
  
  /* ------------Window Size----------
  
   window.innerHeight - the inner height of the browser window (in pixels)
   window.innerWidth - the inner width of the browser window (in pixels)
  */
  
  /*----------Other Window Methods-----------
   window.open() - open a new window
   window.close() - close the current window
   window.moveTo() - move the current window
   window.resizeTo() - resize the current window
  */
  
  /*----------JavaScript Window Screen------------
  
   The window.screen object contains information about the user's screen.
  
   The window.screen object can be written without the window prefix.
  
   Properties:
  
    screen.width
    screen.height
    screen.availWidth
    screen.availHeight
    screen.colorDepth
    screen.pixelDepth
  */
  /*---------Window Screen Color Depth------------
   The screen.colorDepth property returns the number of bits used to display one color.
  
   All modern computers use 24 bit or 32 bit hardware for color resolution:
  
    24 bits =      16,777,216 different "True Colors"
    32 bits = 4,294,967,296 different "Deep Colors"
    Older computers used 16 bits: 65,536 different "High Colors" resolution.
  
    Very old computers, and old cell phones used 8 bits: 256 different "VGA colors"
  
   The #rrggbb (rgb) values used in HTML represents "True Colors" (16,777,216 different colors)
  
  */
  
  // For modern computers, Color Depth and Pixel Depth are equal.
  
  
  /*-----------------Window Location--------------
   The window.location object can be written without the window prefix.
  
   Some examples:
  
    window.location.href returns the href (URL) of the current page
    window.location.hostname returns the domain name of the web host
    window.location.pathname returns the path and filename of the current page
    window.location.protocol returns the web protocol used (http: or https:)
    window.location.assign() loads a new document
  */
  
  /*
   -------------------Window History--------------
  
   The window.history object can be written without the window prefix.
  
   To protect the privacy of the users, there are limitations to how JavaScript can access this object.
  
   Some methods:
  
   history.back() - same as clicking back in the browser
   history.forward() - same as clicking forward in the browser
  */
  
  /*----------------Window Navigator--------------------
  
   The window.navigator object can be written without the window prefix.
  
   Some examples:
  
    navigator.cookieEnabled //The cookieEnabled property returns true if cookies are enabled, otherwise false
    navigator.appName   //This property is removed (deprecated) in the latest web standard
    navigator.appCodeName //This property is removed (deprecated) in the latest web standard.
    navigator.product  //This property is removed (deprecated) in the latest web standard.
    navigator.appVersion //The appVersion property returns version information about the browser
    navigator.userAgent //The userAgent property returns the user-agent header sent by the browser to the server
    navigator.platform  //The platform property returns the browser platform
    navigator.language  //The language property returns the browser's language
    navigator.onLine  //The onLine property returns true if the browser is online
    navigator.javaEnabled()  //The javaEnabled() method returns true if Java is enabled
  */
  
  /*
   Warning
  
   The information from the navigator object can often be misleading.
  
   The navigator object should not be used to detect browser versions because:
  
   Different browsers can use the same name
   The navigator data can be changed by the browser owner
   Some browsers misidentify themselves to bypass site tests
   Browsers cannot report new operating systems, released later than the browser
  */
  
  //-------------JavaScript Popup Boxes-------------------
  
  /*
   JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.
    
    alert()
    confirm() //If the user clicks "OK", the box returns true. If the user clicks "Cancel", the 
                 box returns false.
    prompt()
  */
  /*           
  
    function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Gantabya Prottoy ");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
    } 
  */
  
  
  //----------Line Breaks-------------
  /*
  alert("Hello\nHow are you?"); //To display line breaks inside a popup box, use a back-slash followed by the character n.
  */
  
  //--------------JavaScript Timing Events-------------//
  
  /*The two key methods to use with JavaScript are: */
  
  // setTimeout(function, milliseconds);
  //Executes a function, after waiting a specified number of milliseconds.
  
  // setInterval(function, milliseconds);
  //Same as setTimeout(), but repeats the execution of the function continuously.
  
  // The setTimeout() and setInterval() are both methods of the HTML DOM Window object.
  
  //------How to Stop the setTimeOut Execution?-----------
  
  // The clearTimeout() method stops the execution of the function specified in setTimeout()
  
  
  //-------------How to Stop the setTimeInterval Execution?------------
  
  // The clearInterval() method stops the executions of the function specified in the setInterval() method.
  
  /*------------------JavaScript Cookies------------------
  
  Cookies let you store user information in web pages.
  
  -----------What are Cookies?------------
  
  Cookies are data, stored in small text files, on your computer.
  
  When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
  
  Cookies were invented to solve the problem "how to remember information about the user":
  
  When a user visits a web page, his/her name can be stored in a cookie.
  Next time the user visits the page, the cookie "remembers" his/her name.
  */
  let str = '1 one 2 two 3 three'; 
  let reg = /[0-9]/gim; 
  let res = str.match(reg); 
  console.log(res);
  
  /*-----------Create a Cookie with JavaScript----------------*/
  // JavaScript can create, read, and delete cookies with the document.cookie property.
  
  // document.cookie = "username=John Doe";
  
  // You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
  
  // document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
  
  // With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
  
  /*
  ---------------------Read a Cookie with JavaScript--------------
  
  With JavaScript, cookies can be read like this:
  
  let x = document.cookie;
  
  document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
  */
  
  /*
   ----------Change a Cookie with JavaScript--------------
  
   With JavaScript, you can change a cookie the same way as you create it:
  
     document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
   The old cookie is overwritten.
  
   Delete a Cookie with JavaScript
   Deleting a cookie is very simple.
  
   You don't have to specify a cookie value when you delete a cookie.
  
   Just set the expires parameter to a past date:
  
     document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   You should define the cookie path to ensure that you delete the right cookie.
  
   Some browsers will not let you delete a cookie if you don't specify the path.
  */
  
  /*
   --------------The Cookie String-----------------
  
   The document.cookie property looks like a normal text string. But it is not.
  
   Even if you write a whole cookie string to document.cookie, when you read it out again, you can only see the name-value pair of it.
  
   If you set a new cookie, older cookies are not overwritten. The new cookie is added to document.cookie, so if you read document.cookie again you will get something like:
  
     cookie1 = value; cookie2 = value;
  
   Display All Cookies  Create Cookie 1  Create Cookie 2 Delete Cookie 1  Delete Cookie 2
  
   If you want to find the value of one specified cookie, you must write a JavaScript function that searches for the cookie value in the cookie string.
  */
  
  /*
   ---------------------JavaScript Cookie Example-----------------
  
   In the example to follow, we will create a cookie that stores the name of a visitor.
  
   The first time a visitor arrives to the web page, he/she will be asked to fill in his/her name. The name is then  stored in a cookie.
  
   The next time the visitor arrives at the same page, he/she will get a welcome message.
  
   For the example we will create 3 JavaScript functions:
  
     1. A function to set a cookie value
     2. A function to get a cookie value
     3. A function to check a cookie value
  
  */
  
  /*  
   ------------------A Function to Set a Cookie--------------
  
   First, we create a function that stores the name of the visitor in a cookie variable:
  
   Example:
     function setCookie(cname, cvalue, exdays) {
       const d = new Date();
       d.setTime(d.getTime() + (exdays*24*60*60*1000));
       let expires = "expires="+ d.toUTCString();
       document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
     }
   
   Example explained:
  
     The parameters of the function above are the name of the cookie (cname), the value of the cookie (cvalue), and the number of days until the cookie should expire (exdays).
  
     The function sets a cookie by adding together the cookiename, the cookie value, and the expires string.
  */
  
  /*
   ------------A Function to Get a Cookie----------------------
  
   Then, we create a function that returns the value of a specified cookie:
  
    Example:
  
       function getCookie(cname) {
         let name = cname + "=";
         let decodedCookie = decodeURIComponent(document.cookie);
         let ca = decodedCookie.split(';');
         for(let i = 0; i <ca.length; i++) {
           let c = ca[i];
           while (c.charAt(0) == ' ') {
             c = c.substring(1);
           }
           if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
           }
         }
         return "";
       }
  
    Function explained:
  
     Take the cookiename as parameter (cname).
  
     Create a variable (name) with the text to search for (cname + "=").
  
     Decode the cookie string, to handle cookies with special characters, e.g. '$'
  
     Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')).
  
     Loop through the ca array (i = 0; i < ca.length; i++), and read out each value c = ca[i]).
  
     If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).
  
     If the cookie is not found, return "".
  */  
  
  /*
   -------------A Function to Check a Cookie---------------
  
   Last, we create the function that checks if a cookie is set.
  
   If the cookie is set it will display a greeting.
  
   If the cookie is not set, it will display a prompt box, asking for the name of the user, and stores the username cookie for 365 days, by calling the setCookie function:
  
   Example
     function checkCookie() {
       let username = getCookie("username");
       if (username != "") {
        alert("Welcome again " + username);
       } else {
         username = prompt("Please enter your name:", "");
         if (username != "" && username != null) {
           setCookie("username", username, 365);
         }
       }
     }
  
  */
  
  /*----------All Together Now-------
  
  Example:
  
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }
  */
  /*
  A Web API is a developer's dream.
  
  It can extend the functionality of the browser
  It can greatly simplify complex functions
  It can provide easy syntax to complex code
  */
  
  /*
  API stands for Application Programming Interface.
  
  A Web API is an application programming interface for the Web.
  
  A Browser API can extend the functionality of a web browser.
  
  A Server API can extend the functionality of a web server.
  */
  
  /*
  -------Third Party APIs------------
  
  Third party APIs are not built into your browser.
  
  To use these APIs, you will have to download the code from the Web.
  
  Examples:
  
  YouTube API - Allows you to display videos on a web site.
  Twitter API - Allows you to display Tweets on a web site.
  Facebook API - Allows you to display Facebook info on a web site.
  */
  
  /*----Web Workers and the DOM------
   
   Since web workers are in external files, they do not have access to the following JavaScript objects:
  
     The window object
     The document object
     The parent object
  */
  
  /*-------------Web Geolocation API---------------
  
  Note
  The Geolocation API will only work on secure contexts such as HTTPS.
  
  If your site is hosted on a non-secure origin (such as HTTP) the requests to get the users location will no longer function.
  */
  
  /*
  Using the Geolocation API
  The getCurrentPosition() method is used to return the user's position.
  
  The example below returns the latitude and longitude of the user's position:
  
  Example
  <script>
  const x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }
  </script>
  */
  
  /*
    coords.latitude	          The latitude as a decimal number (always returned)
    coords.longitude	        The longitude as a decimal number (always returned)
    coords.accuracy	          The accuracy of position (always returned)
    coords.altitude	          The altitude in meters above the mean sea level (returned if available)
    coords.altitudeAccuracy	  The altitude accuracy of position (returned if available)
    coords.heading	          The heading as degrees clockwise from North (returned if available)
    coords.speed	            The speed in meters per second (returned if available)
    timestamp	                The date/time of the response (returned if available)
  */
  