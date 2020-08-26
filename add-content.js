var today= new Date();
var hourNow = today.getHours();
var greeting;s

function test(morning, evening, noon, afternoon) {
if (hourNow > 18) {
greeting= 'Good evening!';
}
else if (hourNow > 12) {
greeting = ' Good afternoon!';
}
else if (hourNow > 0) {
greeting = 'Good morni ng!';
}
else {
greeting = 'Welcome! ' ;
}
}

console.log(test(morning, evening, noon, afternoon));


document .write('<h3>' +greeting +'</h3>'); 



function vote(){
    voteforAlaa=window.open("Vote");
}

function cancel(){}
if (confirm("vote for Alaa")) {
    vote();
} else {cancel();}
 vote();
 

