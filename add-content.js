var today = new Date();
var hourNow = today.getHours();
var greeting;

function test(){
if (hourNow > 18) {
    greeting = 'Good evening!';
}
else if (hourNow > 12) {
    greeting = 'Good afternoon!';
}
else if (hourNow > 0) {
    greeting = 'Good morning!';
}
else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
} 
test();

// just for practice
function sayHello() {
    document.write('Hello!');
}

sayHello();


// just for practice

var pass = 50;
var score = 75;
var msg = '';

function alaaPassed() { 
    grade = window.prompt('write Alaa\'s grade' , 'here' );
    document.write("<h1 align=center> Good jog " + Teacher + " </h1>"); 
    if (score >= pass) {
        msg = 'Congratulations Alaa, you passed!';
    } else {
        msg = 'There is no way to fail of course you passed Alaa';
    }

    var el = document.getElementById('answer');
    el.textContent = msg;
}
alaaPassed();
