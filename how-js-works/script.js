///////////////////////////////////////
// Lecture: Hoisting

//functions
//This function execution(calculateAge) works fine as Hoisting works for function declaration.
calculateAge(1997);

function calculateAge(year) {
  console.log(2020 - year);
}

//This function execution(retirement) throws an error as Hoisting will not work for function expressions.
//retirement(1990);

var retirement = function(year) {
  console.log(65 - (2020 - year));
};

//variables
//The following would show result as undefined since Javascript knows that a variable named 'age' exists(by the concept of Hoisting) but when it is logged, it's value is not set.
console.log(age);
var age = 23;

function foo() {
  var age = 65;
  console.log(age); //prints 65, as the scope of age here is limited to function foo.
}
foo();
console.log(age); //prints 23, as the scope of age here is global.

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword
