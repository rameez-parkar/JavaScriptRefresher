/******************************************************/
//Variables and Data Types
/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);
*/

/******************************************************/
//Variable Mutation and Type Coercion
/*
var firstName = "John";
var age = 28;

//Type coercion
console.log(firstName + " is " + age + " years old.");

var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(
  firstName +
    " is " +
    age +
    " years old and is a " +
    job +
    " and his marriage status is " +
    isMarried +
    "."
);

//Variable Mutation
age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is " +
    age +
    " years old and is a " +
    job +
    " and his marriage status is " +
    isMarried +
    "."
);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/

/******************************************************/
//Basic Operators
/*
var currentYear, yearJohn, yearMark;
currentYear = 2020;
ageJohn = 28;
ageMark = 34;
//Math Operators

yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(currentYear * 2);
console.log(currentYear / 3);
console.log(currentYear + 234);

//Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageMark);
*/

/******************************************************/
//Operator Precedence
/*
var year = 2020;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = year - yearJohn >= 18;
console.log(isFullAge);

//Grouping
var ageJohn = year - yearJohn;
var ageMark = 35;
var avgAge = (ageJohn + ageMark) / 2;
console.log(avgAge);

//Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
*/

/******************************************************/
//Coding Challenge 1 - John & Mark BMI Comparison

var johnHeight, johnWeight, markHeight, markWeight, johnBMI, markBMI;
johnHeight = 1.72;
johnWeight = 81;
markHeight = 1.67;
markWeight = 72;

function CalculateBMI(weight, height) {
  return weight / (height * height);
}

johnBMI = CalculateBMI(johnWeight, johnHeight);
markBMI = CalculateBMI(markWeight, markHeight);

var isMarkHigherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's BMI? " + isMarkHigherBMI);
