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
/*
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
*/

/******************************************************/
//if-else statements
/*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is Married.");
} else {
  console.log(firstName + " is single.");
}

var isMarried = false;

if (isMarried) {
  console.log(firstName + " is Married.");
} else {
  console.log(firstName + " is single.");
}
*/
/******************************************************/

/******************************************************/
//Truthy and falsy values

//falsy values: undefined, null, '', 0, NaN
//truthy values: NOT a falsy value
/*
var height;

if (height) {
  console.log("Variable has been defined");
} else {
  console.log("Variable has not been defined");
}
*/

/******************************************************/
//CODING CHALLENGE 2 - BASKETBALL GAME
/*
var scoreJohn,
  scoreMike,
  scoreMary,
  avgJohn = 0,
  avgMike = 0,
  avgMary = 0;
scoreJohn = [89, 120, 103];
scoreMike = [116, 94, 123];
scoreMary = [97, 134, 105];

for (var index = 0; index < scoreJohn.length; index++) {
  avgJohn += scoreJohn[index];
  avgMike += scoreMike[index];
  avgMary += scoreMary[index];
}
avgJohn /= scoreJohn.length;
avgMike /= scoreMike.length;
avgMary /= scoreMary.length;

if (avgJohn > avgMike && avgJohn > avgMary) {
  console.log(
    "John beat Mike & Mary with an average score of " +
      avgJohn +
      " to " +
      avgMike +
      " & " +
      avgMary +
      " respectively."
  );
} else if (avgMike > avgMary && avgMike > avgJohn) {
  console.log(
    "Mike beat John & Mary with an average score of " +
      avgMike +
      " to " +
      avgJohn +
      " & " +
      avgMary +
      " respectively."
  );
} else if (avgMary > avgMike && avgMary > avgJohn) {
  console.log(
    "Mary beat John & Mike with an average score of " +
      avgMary +
      " to " +
      avgJohn +
      " & " +
      avgMike +
      " respectively."
  );
} else {
  console.log("There is a draw.");
}
*/
/******************************************************/

/******************************************************/
//Functions
/*
function CalculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = CalculateAge(1989);
var ageMike = CalculateAge(1948);
var ageJane = CalculateAge(1997);

console.log("John is " + ageJohn + " years old.");
console.log("Mike is " + ageMike + " years old.");
console.log("Jane is " + ageJane + " years old.");

function YearsUntilRetirement(year, firstName) {
  var age = CalculateAge(year);
  var retirement = 65 - age;
  console.log(firstName + " retires in " + retirement + " years.");
}

YearsUntilRetirement(1974, "John");
*/
/******************************************************/

/******************************************************/
//Functions Statements and Expressions

//function expression
/*
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches to code.";
    case "driver":
      return firstName + " drives cars.";
    case "designer":
      return firstName + " designes stuff.";
    default:
      return firstName + " does something else.";
  }
};

console.log(whatDoYouDo("teacher", "John"));
*/
/******************************************************/

/******************************************************/
//Arrays

var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue"); //adds to end of array
john.unshift("Mr."); //adds to beginning of array
console.log(john);

john.pop(); //removes from end of array
john.shift(); //removes from beginning of array
console.log(john);

console.log(john.indexOf("teacher"));

/******************************************************/
