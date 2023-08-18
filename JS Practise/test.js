//-------------------HTML ID Access----------------
document.getElementById("demo").innerHTML = "Gantabya Prottoy";
document.getElementById("demo").style.fontSize = "80px";
// document.write(5+99);

// window.print()
// print()

//----------------Object ---------------------

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  //----------------------Typeof------------------

  console.log(typeof(person));

  //--------------------Array--------------------

  let x = ["Gantabya", "Prottoy"];

  //--------------------new keyword----------------

x = new String();        
y = new Number();      
z = 5;

console.log(typeof(z));

//--------------------String Multiline------------------

// let text = "We are the so-called \"Vikings\" from the north.";

let text1 = "We are the so-called \'Vikings\' from the north.";
let text2 = 'We are the so-called \
Vikings from the north.';

// console.log(text);
console.log(text1);
console.log(text2);

//-------------new line---------------

let text3 = "We are the so-called \n Vikings from the north.";

console.log(text3);

let xx = "John";
let yy = new String("John");
console.log(xx==yy);
console.log(xx===yy);
console.log(typeof(xx));
console.log(typeof(yy));
console.log(typeof(yy));

 text11 = "Hello" + " " + "World!";
 text12 = "Hello".concat(" ", "World!");
console.log(text11)
console.log(text12)

let wer = "GAN";
let charc = wer.charCodeAt(2);
console.log(charc)

let tex = `He's often called "Johnny"`;
// console.log(typeof(tex))

let da = 123;
da.toExponential();
da.toExponential(2);
da.toExponential(3);
da.toExponential(4);


console.log(da.toExponential());
console.log(da.toExponential(2));
console.log(da.toExponential(3));
console.log(da.toExponential(4));
console.log(da.toExponential(100));
console.log(da.toExponential(0));

//-----------------Array-------------------------


// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars) ;
// console.log(cars.length) ;
// cars[3] = "Opel" ;
// console.log(cars) ;
console.log(typeof(cars)) ;
// console.log(cars[1]) ;
// console.log(cars.length) ;

const points = new Array(40, 100, 1, 5, 25, 10);
const pointss = [40, 100, 1, 5, 25, 10];


console.log(typeof(points));
console.log(typeof(pointss));
console.log(Array.isArray(points));
console.log(Array.isArray(pointss));
console.log(pointss instanceof Array);


const flowers = ["Rose", "Jesmin", "Marigold", "Jaba"];


console.log(flowers.length);


const fdgfdjhfg = ["Bafghfdxh", "Ojhfgjhg", "asfrtesy", "rdytfoiu"];

console.log(fdgfdjhfg.toString());
console.log(fdgfdjhfg.join(" * "));
console.log(typeof(fdgfdjhfg.toString()));

const fruitsss = ["Bananaaa", "Orangeee", "Appleee", "Mangooo"];
console.log(fruitsss.sort());
console.log(fruitsss.reverse());

const pointsd = [40, 100, 2, 5, 25, 10];
console.log(pointsd.sort(function(){return 0.5 - Math.random()}))

const poins = [40, 100, 1, 5, 25, 10];
console.log(poins.sort(function(a, b){return a - b}));
console.log(poins[0]);
console.log(poins[3]);

const pois = [40, 100, 1, 5, 25, 10];
console.log(pois.sort(function(a, b){return b - a}));
console.log(pois[0]);
console.log(pois[3]);


const oints = [40, 100, 1, 5, 25, 10];


function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(myArrayMax(oints));



const caarrs = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

console.log(
caarrs.sort(function(a, b){return a.type - b.type}));
// function displayCaarrs() {
//   caarrs[0].type + " " + caarrs[0].year + "<br>" +
//   caarrs[1].type + " " + caarrs[1].year + "<br>" +
//   caarrs[2].type + " " + caarrs[2].year;
// }
// )
console.log(caarrs);

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(array) {
  return array * 2;
}
console.log(numbers2)

const ruits = ["Apple", "Orange", "Apple", "Mango"];
let position = ruits.indexOf("Apple") + 1;

console.log(position);

const fruuts = ["Aple", "Oange", "Aple", "Mngo", "Mngo"];
let psition = fruuts.lastIndexOf("Mngo") + 1;

console.log(psition);

const myArr = Array.from("ABCDEFG");
console.log(myArr);


const ffruits = ["Banana", "Orange", "Apple", "Mango"];
const tfext = ffruits.keys("Banana");


console.log(tfext);

const d = new Date( );
console.log(d);

const dd = new Date("2023-07-24")
console.log(dd);

const datee = new Date(25632);
console.log(datee);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const t = new Date("2021-03-25");
let month = months[t.getMonth()];

console.log(month);

const dr = new Date("2001-08-29");
let er = dr.getHours();

console.log(er);

const add = new Date();
let duue = add.setFullYear(2021, 11, 3);
console.log(add);

//---------------------Switch------------------

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log(day);
console.log(new Date().getDay());

// ---------------------JavaScript Set-----------------------

const amarDesktop = new Set(["CPU" , "Monitor" , "Keyboard" , "Mouse" ,  "Headphone"]);
let partDesktop = "";
for(const x of amarDesktop.values()){
  partDesktop += x + "<br>";
}
console.log(partDesktop);

const letters = new Set(["a","b","c"]);

// -------------------List all Elements------------------
let text = "";
letters.forEach (function(value) {
  text += value + "<br>";
})
console.log(text);
console.log(letters.has("a"));
console.log(letters.has("u"));

console.log("John".constructor);
console.log((3.25).constructor);
console.log([1 , 2 , 3].constructor);
console.log({fName:"John" , lName:"Doe"}.constructor);
console.log(false.constructor);
console.log(function () {}.constructor);
console.log(new Date().constructor);

let nd = new Date();
let nuu = Number(nd);
console.log(nd);
console.log(nuu);

myVar = {name:"Fjohn"} ;
typeof(myVar.toString());

console.log(0b0101 << 1);

try {
  adddlert("Welcome guest!");
}
catch(err) {
  console.log(err.message);
}

const ar1 = [1, 2, 3];
const ar2 = ar1.push(4);

console.log(ar1);
console.log(ar2);

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, num) => acc + num, 0);
resulltt = arr.map((num) => sum - num);
console.log(resulltt);

var g = 2;
console.log(g, p);
var p = 4;

// New Features in ECMAScript 2017
// JavaScript String Padding

// ECMAScript 2017 added two string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

let teext = "5";
texxt = teext.padStart(4,0);
console.log(texxt);

// Result will be 0005

let textt = "5";
ttext = textt.padEnd(4,0);
console.log(ttext);

// Result will be 5000

// JavaScript Object Entries
// ECMAScript 2017 added the Object.entries() method to objects.

// Object.entries() returns an array of the key/value pairs in an object:

const pperson = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let tteext = Object.entries(pperson);
console.log(tteext);
//result will be firstName,John,lastName,Doe,age,50,eyeColor,blue

//JavaScript Async Functions

//Waiting for a Timeout
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();


// JavaScript Promise.finally

// let myPromise = new Promise();
// myPromise.then();
// myPromise.catch();
// myPromise.finally();

// JavaScript Object Rest Properties

let {l, m, ...n} = { l: 1, m: 2, a: 3, b: 4, c: 5};
console.log({l, m, ...n});

let textTy = JSON.stringify("\u26D4");
console.log(JSON.parse('"\u26D4"'));

// The Nullish Coalescing Operator (??)
// The ?? operator returns the first argument if it is not nullish (null or undefined).

// Otherwise it returns the second.

let ame = null;
let ext = "missing";
let esult = ame ?? ext;
console.log(esult);

// In JavaScript, almost "everything" is an object.

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects

// All JavaScript values, except primitives, are objects.

/* ------------JavaScript defines 7 types of primitive data types:----------------

  string
  number
  boolean
  null
  undefined
  symbol
  bigint
*/   

// A JavaScript object is a collection of named values

// It is a common practice to declare objects with the const keyword.

// JavaScript objects are containers for named values, called properties and methods.

/*
 There are different ways to create new objects:

  Create a single object, using an object literal.
  Create a single object, with the keyword new.
  Define an object constructor, and then create objects of the constructed type.
  Create an object using Object.create().
*/

const friendsOfCollege = {
  firstFriend: "Raihan",
  secondFriend: "Sanjoy"
};

let a = 2**3;
let b = [4,4];
let c = [...b, 4,4];

console.log(a,b,c);

// --------------------Nested Arrays and Objects---------------------

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
};
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}


const ppeerrssoonn = {
  name: "Joohhnn",
  age: 40,
  city: "New York"
};

console.log(myArray = Object.values(ppeerrssoonn));

const perSon = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(perSon);
console.log(myString);

const peRson = {
  name: "John",
  today: new Date()
};

let mystring = JSON.stringify(peRson);
console.log(mystring);

const persoN = {
  name: "John",
  age: 30,
  aage: function () {return 30;}
};
persoN.aage = persoN.aage.toString();
let myStrinG = JSON.stringify(persoN);

console.log(myStrinG);

const pErson = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

console.log(pErson);

const perSoN = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(hui) {
    this.language = hui.toUpperCase();
  }
};

perSoN.lang = "bn";

console.log(perSoN.language);

/*
 -------------Why Using Getters and Setters?------------

 * It gives simpler syntax
 * It allows equal syntax for properties and methods
 * It can secure better data quality
 * It is useful for doing things behind-the-scenes
*/


/* 
----------------------Managing Objects-----------------

 * Create object with an existing object as prototype
   Object.create()

 * Adding or changing an object property
   Object.defineProperty(object, property, descriptor)

 * Adding or changing object properties
   Object.defineProperties(object, descriptors)

 * Accessing Properties
   Object.getOwnPropertyDescriptor(object, property)

 * Returns all properties as an array
   Object.getOwnPropertyNames(object)

 * Accessing the prototype
   Object.getPrototypeOf(object)

 * Returns enumerable properties as an array
   Object.keys(object)
*/

//Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

console.log(Math.max.apply(null, [3, 0, 4, 9, 10, 5, 105, 20]));



// ------------Preserving this-----------


// Sometimes the bind() method has to be used to prevent losing this.

// In the following example, the person object has a display method. In the display method, this refers to the person object:

// Example

const personPerson = {
  firstName:"JohnJ",
  lastName: "DoeD",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

personPerson.display();


// When a function is used as a callback, this is lost.

// This example will try to display the person name after 3 seconds, but it will display undefined instead:

// Example

const personPersonPerson = {
  firstName:"JohnN",
  lastName: "DoeE",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(personPersonPerson.display, 3000);



/* The bind() method solves this problem.
In the following example, the bind() method is used to bind person.display to person.*/


/*This example will display the person name after 3 seconds:*/

const personPersonPersonPerson = {
  firstName:"JohnO",
  lastName: "DoeO",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

let display = personPersonPersonPerson.display.bind(personPersonPersonPerson);
setTimeout(display, 3000);

// -----------------Function to increment counter---------------------
function addd() {
  let counter = 0;
  counter += 1;
  return counter;
}

// Call add() 3 times
console.log(addd());
addd();
addd();

//The counter should now be 3. But it is 1.


//---------------------JavaScript Class--------------------------

class Caaar {
  constructor (gari, model, year) {
    this.gari = gari;
    this.model = model;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

/*A JavaScript class is not an object.
It is a template for JavaScript objects.*/


const caaar1 = new Caaar("Ford", "M002", 2015);
const caaar2 = new Caaar("Foord", "M003", 2022);

console.log(caaar1.gari, caaar2.gari, caaar1.model, caaar2.model, caaar1.year, caaar2.year);
console.log(caaar1.age(year) + " years old");

/*The syntax in classes must be written in "strict mode".
You will get an error if you do not follow the "strict mode" rules.*/

/*To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class*/

// Create a class named "Model" which will inherit the methods from the "Car" class:
class Place extends Caaar {
  constructor(model, owner) {
    super(model);
    this.malik = owner;
  }
  show() {
    return caaar1.age(year) + " years old of the car " + caaar1.gari + " and owner name is " + this.malik ;
  }

}
const model1 = new Place("M2", "Gantabya Prottoy");
console.log(model1.show());

/*
The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
*/


// -----------------Getters and Setters-------------------------

/*
Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.
*/

class Member {
  constractor(frst) {
    this.memb = frst;
  }
  get cmem () {
    return this.memb;
  }
  set cmem(x) {
    this.memb = x;
  }
}

const membe = new Member("Gantabya");
console.log(membe.cmem);

/*--------------Hoisting-----------------

Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:

Example
---------------------------------------------------------------------------
*/

//You cannot use the class yet.
//myCar = new Car("Ford") will raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
const myCar = new Car("Ford")

//--------------------------------------------------------------------------


//-------------------JavaScript Static Methods------------------
/*
Static class methods are defined on the class itself.
You cannot call a static method on an object, only on an object class.
*/
class Carr {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCarr = new Carr("Ford");

// You can call 'hello()' on the Car Class:
console.log(Carr.hello());

// But NOT on a Car Object:
// console.log(myCarr.hello());
// this will raise an error.
/*-------------------------------------------------------------------------------*/

// If you want to use the myCar object inside the static method, you can send it as a parameter:
class Jiod {
  constractor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name; 
  }
}
const ojdJiod = new Jiod("Moumita");
console.log(Jiod.hello(ojdJiod));

//----------------CallBacks----------------------------

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Good Bye");
}

console.log(myFirst());
console.log(mySecond());

// -----------------------Sequence Control-------------------

/*
Sometimes you would like to have better control over when to execute a function.

Suppose you want to do a calculation, and then display the result.

You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:
*/
function myDisplayer(some) {
  document.getElementById("demotwo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// let result = myCalculator(9, 8);
// myDisplayer(result);

//---- OR -----------

function myDisplayer(some) {
  document.getElementById("demotwo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

// myCalculator(9, 8);

/*
 The problem with the first example above, is that you have to call two functions to display the result.

 The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

 Now it is time to bring in a callback.

*/

/* 
 A callback is a function passed as an argument to another function.

 (callback একটি function যা অন্য function এ argument হিসেবে ব্যবহার করা যায়।)

*/

// Example

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

/*In the example above, myDisplayer is a called a callback function.

It is passed to myCalculator() as an argument.*/


/*Note:
 When you pass a function as an argument, remember not to use parenthesis.

 Right: myCalculator(5, 5, myDisplayer);

 Wrong: myCalculator(5, 5, myDisplayer());
*/

//------------------When to Use a Callback?------------//

/*
 The examples above are not very exciting.

 They are simplified to teach you the callback syntax.

 Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

 Asynchronous functions are covered in the next chapter.
*/

//-----------Asynchronous JavaScript------------//

/*In the real world, callbacks are most often used with asynchronous functions.

A typical example is JavaScript setTimeout(). */

//------------Waiting for a Timeout------------//

//When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

//Example

setTimeout(myFunction, 3000);

function myFunction() {
  console.log("I love You !!");
}

/*In the example above, myFunction is used as a callback.

myFunction is passed to setTimeout() as an argument.

3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

Note
When you pass a function as an argument, remember not to use parenthesis.

Right: setTimeout(myFunction, 3000);
Wrong: setTimeout(myFunction(), 3000);
*/

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML = 
  d.getHours() + ":" + 
  d.getMinutes() + ":" + 
  d.getSeconds();
}

/* most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.*/

const prices = [50, 20, 100, 30, 80];
prices.sort();
console.log(prices);

//-------------JavaScript Promises-------------//

// "Producing code" এমন কোড যা কিছু সময় নিতে পারে
// "Consuming code" হল এমন কোড যা ফলাফলের জন্য অপেক্ষা করতে হবে
// A Promise is a JavaScript object that links producing code and consuming code
// While a Promise object is "pending" (working), the result is undefined
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.

//------Promise Syntax-------

let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolv();  // when successful
  myRejec();  // when error
});
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value){ /* code if successful */ },
  function(error){ /* code if some error */ }
);

/*Promise.then() takes two arguments, a callback for success and another for failure.

Both are optional, so you can add a callback for success or failure only. */

document.getElementById("forpromise").style.fontSize = "50px";

// Example
function forPomiseTest (pro){
  document.getElementById("forpromise").innerHTML = pro;
}
let promiseU = new Promise(function(valueV, errorE) {
  let x = 8;
  if(x==8) {
    valueV("Correct");
  } else {
    errorE("Incrroct");
  }
});

promiseU.then(
  function(value) {forPomiseTest(value);},
  function(error) {forPomiseTest(error);}
);

// --------------JavaScript Async--------------
// -----"async and await make promises easier to write"------//

// The keyword async before a function makes the function return a promise:

// Example
async function myFunction() {
  return "Hello";
}
//Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}
//Here is how to use the Promise:

myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
//Example
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

//Or simpler, since you expect a normal value (a normal response, not an error):

//Example
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);}
);

//------------Await Syntax----------
/*
The await keyword can only be used inside an async function.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
*/

// let value = await promise;

//Basic Syntax
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demothree").innerHTML = await myPromise;
}

myDisplay();

/*The two arguments (resolve and reject) are pre-defined by JavaScript.

We will not create them, but call one of them when the executor function is ready.

Very often we will not need a reject function.
*/

//Example without reject
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demofour").innerHTML = await myPromise;
}

myDisplay();

//Waiting for a Timeout
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demofive").innerHTML = await myPromise;
}

myDisplay();

//Waiting for a File
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', " ");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demosix").innerHTML = await myPromise;
}

getFile();

console.log(typeof typeof 1);

