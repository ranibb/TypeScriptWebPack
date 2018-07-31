// TypeScript is going to infer that x is of type number (hover x).
var x = 10;
// TypeScript is going to infer that y is of type string (hover y).
var y = "Hi";
// TypeScript is going to infer that z is of type string (hover z).
var z = true;

// We can explicitly specify the type of a variable using annotations.
var a:number = 10;
var b:string = "Hi";
var c:boolean = true;

// The initialization is not mandotory.
var d:number;

// Adding number to a string will result a Concatenating and thus a string.
var n1 = 10;
var n2 = n1 + "Hello";

// Any Type
var info:any;

// Enum Type
enum EyeColor1 {Brown, Black, Blue}; // This declaration will assign a numeric value of 0, 1, 2 to Brown, Black , Blue
enum EyeColor2 {Brown=1, Black=4, Blue=7}; // You can assign a numeric value specifically.
enum EyeColor3 {Brown=1, Black, Blue}; // If you only specify Brown equal to 1, then black and blue will be assigned to 2 and 3 automaticly.

var myEyeVolor = EyeColor1.Brown;

console.log(myEyeVolor); // The out is numeric. So, Enumeration are simply used to give friendlier names to numeric values.
console.log(EyeColor1[myEyeVolor]); // To get the name!
console.log(EyeColor1[0]); // To get the name!

// Array Declaration
let strArr1:string[] = ["Hello", "World"];
let strArr2:Array<string> = ["Hello", "World"];

let anyArr1:any[] = ["Hello", 10, true];

// Tuples
let myTuple:[string, number] = ["Hello", 333]; // Declaring an array with a specific types.
console.log(myTuple[0]);
console.log(myTuple[1]);

// Adding to a Tuple (We can add elements as long as they are of the same type specified while declaring the array)
myTuple[2] = 100;
console.log(myTuple[2]);
console.log(myTuple);