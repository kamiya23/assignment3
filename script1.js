/* //STEP 1
var favMovie = ["The Matrix", "Death Race", "World War Z", "The Day After Tomorrow", "The Avengers"];
window.console.log(favMovie[1]);
*/

/*//STEP 2
var favMovie = [];
favMovie[0] = "The Matrix";
favMovie[1] = "Death Race";
favMovie[2] = "World WarZ";
favMovie[3] = "The Day After Tomorrow";
favMovie[4] = "The Avengers";
window.console.log(favMovie[0]);
*/

/* //STEP 3
var movie = ["The Matrix", "Death Race", "World WarZ", "The Day After Tomorrow", "The Avengers"];
movie.splice(2, 0, "Iron Man");
window.console.log(movie); // it will display 6 movies name and Iron Man is on 3rd position in the array
window.console.log(movie.length); // display 6
*/


/*//STEP 4

var movie = [];
movie[0] = "The Matrix";
movie[1] = "Death Race";
movie[2] = "World WarZ";
movie[3] = "The Day After Tomorrow";
movie[4] = "The Avengers";
movie.shift();
window.console.log(movie);
*/

/*//STEP 5
var movie = [];
movie[0] = "The Matrix";
movie[1] = "Death Race";
movie[2] = "World WarZ";
movie[3] = "The Day After Tomorrow";
movie[4] = "The Avengers";
movie[5] = "Iron Man";
movie[6] = "Sky Fall";
for(var i = 0; i<7; i++) {
    window.console.log(movie[i]);
} */

/* //STEP 6
var movie = [];
movie[0] = "The Matrix";
movie[1] = "Death Race";
movie[2] = "World WarZ";
movie[3] = "The Day After Tomorrow";
movie[4] = "The Avengers";

for (var i in movie) {
    window.console.log(movie[i]);
}
*/


/*//STEP 7
var movie = [];
movie[0] = "The Matrix";
movie[1] = "Death Race";
movie[2] = "World WarZ";
movie[3] = "The Day After Tomorrow";
movie[4] = "The Avengers";

movie.sort();  //sort the movie names

for (var i in movie) {
  window.console.log(movie[i]);
}
*/

/* //STEP 8
var movie = ["The Matrix", "Death Race", "World WarZ", "The Day After Tomorrow", "The Avengers"];
var leastFavMovies = ["Iron Man", "Spider Man", "Captain America"];
var i;
window.console.log("Movies I like :  \n \n");
for(i=0; i<movie.length; i++){
   window.console.log(movie[i]); 
}
window.console.log("\nMovies I regret watching: \n \n");
for(i=0; i<3; i++) {
    window.console.log(leastFavMovies[i]);
}
*/

/* //STEP 9
var movie = ["The Matrix", "Death Race", "World WarZ", "The Day After Tomorrow", "The Avengers"];
movie = movie.concat("Iron Man", "Spider Man", "Captain America");
movie.sort();
movie.reverse();
window.console.log(movie);  //Display sorted reverse movienames
*/

/* //STEP 10
var movie = ["The Matrix", "Death Race", "World WarZ", "The Day After Tomorrow", "The Avengers"];
movie = movie.concat("Iron Man", "Spider Man", "Captain America");
window.console.log(movie[movie.length-1]);
*/

/* //STEP 11
var movie = ["The Matrix", "Death Race", "World WarZ", "The Day After Tomorrow", "The Avengers"];
movie = movie.concat("Iron Man", "Spider Man", "Captain America");
movie.sort();
movie.reverse();
window.console.log(movie[0]);  //Display 1st element of reverse sort array.
*/


/* //STEP 13
var employee1 = [];
employee1["eId"] = "E0023";
employee1["name"] = "John";
employee1["title"] = "System Analyst";
employee1["department"] = "IT";
employee1["status"] = "True";

var employee2 = [];
employee2["eId"] = "E0052";
employee2["name"] = "Paul";
employee2["title"] = "Manager";
employee2["department"] = "IT";
employee2["status"] = "False";

var employee = [employee1, employee2];
window.console.log(employee[1]["name"]);    //Display 2nd employee name only
*/


/* //STEP 14
var employee1 = [];
employee1["eId"] = "E0023";
employee1["name"] = "John";
employee1["title"] = "System Analyst";
employee1["department"] = "IT";
employee1["status"] = "True";

var employee2 = [];
employee2["eId"] = "E0052";
employee2["name"] = "Paul";
employee2["title"] = "Manager";
employee2["department"] = "IT";
employee2["status"] = "False";

var employee = [employee1, employee2];
for(var i = 0; i < employee.length; i++)  {
window.console.log(employee[i]["name"]);   //Display both employees name
}
*/

 /* //STEP 15
var employee1 = [];
employee1["eId"] = "E0023";
employee1["name"] = "John";
employee1["title"] = "System Analyst";
employee1["department"] = "IT";
employee1["status"] = "True";

var employee2 = [];
employee2["eId"] = "E0052";
employee2["name"] = "Paul";
employee2["title"] = "Manager";
employee2["department"] = "IT";
employee2["status"] = "True";

var employee3 = [];
employee3["eId"] = "E0021";
employee3["name"] = "David";
employee3["title"] = "Team Lead";
employee3["department"] = "Manufacture";
employee3["status"] = "False";

var employee = [employee1, employee2, employee3];
for(var i = 0; i<3; i++) {
    if((employee[i]["status"]) == "False") {
        continue;
    } else{
        window.console.log(employee[i]);
        
    }
}
*/




/* //STEP 16
var movies = [["Iron Man", 1], ["World WarZ", 2], ["Fast and Furious", 3], ["Hulk", 4], ["Captain America", 5]];

var i, j;

for(i in movies){
    for(j in movies[i]) {
       var names = movies[i].filter(function(item) {
            return typeof item === "string";
        });
        
    } console.log(names[0]);
}
*/






// Practice with Functions

/* //STEP 1
var displayMessage = function(msg){
    window.console.log(msg);
}
displayMessage("This is my first function in JavaScript");
*/

/*//STEP 2
var x;
var calculate = function mod(num1, num2){
    return num1 % num2;
}
x = calculate(9, 5);
window.console.log(x);
*/


/*//STEP 3
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function(show) {
    window.console.log("Employees: \n\n");
    for(var i=0; i<5; i++){
        window.console.log(show[i]);
    }
}
showEmployee(employees);
*/


