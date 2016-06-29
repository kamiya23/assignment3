//Assignment 3  - PART 2


 /* //The Rock, Paper, Scissors Game
var user1Choice = window.prompt("User 1 Choose any one:- Rock, Paper or Scissors");

var user2Choice = window.prompt("User 2 Choose any one:- Rock, Paper or Scissors");

var compChoice;
var choice = Math.random();
if(choice<.33)    {
      compChoice ="rock";
    } else if(choice >=.33 && choice < .66){
        compChoice = "paper";
    }else {
        compChoice = "scissors";
    }

if(user1Choice == compChoice){
    window.alert("it's a tie pls try again");
}else if(user1Choice == "rock" && compChoice == "paper"){
    window.alert("User 1 lose .. Rocks destroys Paper");
    
}else if(user1Choice == "rock" && compChoice == "scissors"){
        window.alert("User 1 Win..  Rock destroy scissors");
        //break;
    } else if(user1Choice == "scissors" && compChoice == "paper"){
        window.alert("User 1 Win .. Scissors cut paper");
    } else if(user1Choice == "scissors" && compChoice == "rock"){
        window.alert("User 1 Lose.. Scissors cut rock");
    } else if(user1Choice == "paper" && compChoice == "scissors") {
        window.alert("User 1 Lose.. Paper covers scissors");
    } else if(user1Choice == "paper" && compChoice == "rock") {
        window.alert("User1 Win.. Paper covers rock");
    } else {
        window.alert("Please enter again and choose carefully!")
    }

// user 2


if(user2Choice == compChoice){
    window.alert("it's a tie pls try again");
}else if(user2Choice == "rock" && compChoice == "paper"){
    window.alert("User 1 lose .. Rocks destroys Paper");
    
}else if(user2Choice == "rock" && compChoice == "scissors"){
        window.alert("User 1 Win..  Rock destroy scissors");
        //break;
    } else if(user2Choice == "scissors" && compChoice == "paper"){
        window.alert("User 1 Win .. Scissors cut paper");
    } else if(user2Choice == "scissors" && compChoice == "rock"){
        window.alert("User 1 Lose.. Scissors cut rock");
    } else if(user2Choice == "paper" && compChoice == "scissors") {
        window.alert("User 1 Lose.. Paper covers scissors");
    } else if(user2Choice == "paper" && compChoice == "rock") {
        window.alert("User1 Win.. Paper covers rock");
    } else {
        window.alert("Please enter again and choose carefully!")
    }

*/





 /*// The Basic Calculator
var j = window.prompt("Enter first number :");
var k = window.prompt("Enter second number :");
var num1 = Number(j);
var num2 = Number(k);
var choice = window.prompt("Enter operation u wanna perform-  Enter 1 for Add,  Enter 2 for Subtract, Enter 3 for Multiply, Enter 4 for Divide ");
 var x, y, z, result;

function calculator(x, y, z) {
    
switch (z) {
case "1":
    result = (Number(x + y));
    window.alert(result);
    break;
case "2":
    result = x - y;
    window.alert(result);
    break;
case "3":
    result = x * y;
    window.alert(result);
    break;
case "4":
    result = x / y;
    window.alert(result);
    break;
default:
    window.alert("You did not enter the right option.");
}
}
            
calculator(num1, num2, choice);
*/


//Death by JavaScript

/* //STEP 1
var str = "webmaster";
var randomString = function(z){
    var text=" ";
    var possible = str;
    for(var i=0; i < z; i++) {
        text += possible.charAt(Math.floor(Math.random()* possible.length));    
    }
    return text;
}
var x = randomString(str.length);
window.console.log(x);
*/


/* //STEP 2

var caps = function(vol) {
    var count = [];
     var temp = vol.charCodeAt(0);
      temp=temp - 32;
      var char1 = String.fromCharCode(temp);
      vol[0] = char1;
     
    window.alert(vol);
    
    for(var i = 0; i < vol.length; i++) {
        var temp1=0;
        var char = " ";
        if(vol[i] == " ") {
          var temp1 = vol.charCodeAt(i+1);
            temp1=temp1 - 32;
        var char = String.fromCharCode(temp1);
        vol[i+1] = char;
            
        }
    }
   return vol;
} 

var x = caps("the quick brown fox");
window.console.log(x);
*/



/* //STEP 3
var volCount = function(vol) {
    var count = 0;
    for(var i = 0; i < vol.length; i++) {
        if(vol[i] == "a" || vol[i] == "e" || vol[i] == "i" || vol[i] == "o" || vol[i] == "u" ) {
            
               count = count+1;
        }
    }
    return count;
} 

var x = volCount("The quick brown fox");
window.console.log(x);
*/

/* //STEP 4
var randomString = function(z){
    var text = " ";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < z; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));    
    }
    return text;
}
var x = randomString(8);
window.console.log("random string : " + x);
*/


/* //STEP 5

var names = ["India", "Germany", "China"];
var largest=0;
var x =" ";

var largeName = function(large) {
    for(var i=0; i<large.length; i++) {
       if(large[i].length > largest) {
           largest = large[i].length;
           x = large[i];
       }
    }
    return x;
}
var n = largeName(names);
window.console.log(n);
*/