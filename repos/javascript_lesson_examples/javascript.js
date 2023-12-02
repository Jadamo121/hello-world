/* Lesson: Variable */
/*
let admin, name;
name = 'John';
admin = name;
// alert(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'Jad';

let userName = prompt('What is your name?', '');
alert(`Hello ${userName}!`);

/* Basic operators, maths */
/*
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

let a = +prompt("First number?", 1); // use + infront of prompt to convert string to number
let b = +prompt("Second number?", 2);

alert(a + b); // 3

let a = prompt("First number?", 1); 
let b = prompt("Second number?", 2);

alert(+a + +b); // use + infront of var to convert string to number

/* conditional branching */
/*
let officialName = prompt('What is the "official" name of JavaScript?', '');

if (officialName == 'ECMAScript') {
  alert('Right!');
} else {
  alert('You don\'t know? ECMAScript!');
}

let value = prompt('Type a number?', 0);

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login = '') ? 'No login' :
  '';

/* logical operators */
/*
if (age >= 14 && age <= 90) {

}

if (!(age >= 14 && age <= 90)) {

}

if (age < 14 || age > 90) {

}

let loginUserName = prompt("Who's there?", '');

if (loginUserName == 'Admin') {
  let password = prompt ("What is the password?", '');
  if (password == 'TheMaster') {
    alert('Welcome!');
  } else if (password == '' || password == null) {
    alert('Canceled!');
  } else {
    alert('Wrong Password!');
  }
} else if (loginUserName == '' || loginUserName == null) {
  alert('Canceled!');
} else {
  alert("I don't know you!");
}

/* Loops: while and for */
/*
for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) continue;
  alert(i);
}
// another solution 
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let i = 0;
while (i < 3) {
  alert(`number ${i}`);
  i++;
}

let num;
do {
  num = prompt('Enter a Number greater than 100', 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

/* Switch */
/*
if (browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!')
}

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}

/* Functions */

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
} 

function min(a,b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min(a,b) {
  return a < b ? a : b;
}

function pow(x,n) {
  x = prompt('x?', 0);
  n = prompt('n?', 0);
  return x ** n;
}

/* Arrow Functions */

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);


let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
  'Do you agree?',
  () => alert('You agreed.'),
  () => alert('You canceled the execution.'),
);

