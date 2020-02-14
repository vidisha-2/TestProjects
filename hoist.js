//1.//

console.log(hello);                                   
var hello = 'world';   
//AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // hello undefined
// hello = "world";

//2.//
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/*AFTER HOISTING BY THE INTERPRETER
var needle;
needle = 'haystack';
test(); //magnet
function test(){
	var needle;
    needle = 'magnet';
    console.log(needle);
}*/

//3.//
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //super cool
/*AFTER HOISTING BY THE INTERPRETER
var brendan;
brendan = 'super cool';
function print(){
	brendan = 'only okay';
    console.log(brendan);
}
*/

//4//
var food = 'chicken';
console.log(food);//chicken
eat();//half-chicken
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*AFTER HOISTING BY THE INTERPRETER
var food;
food = 'chicken';
eat();
function eat(){
	var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
*/

//5//
//mean();//mean is not a function
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/*AFTER HOISTING BY THE INTERPRETER

*/

//6//
console.log(genre);//undefined
var genre = "disco";
rewind();//rock
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);//r&b
}
console.log(genre);//disco
/*AFTER HOISTING BY THE INTERPRETER
var genre;
console.log(genre);
genre = "disco";

*/

//7//
dojo = "san jose";
console.log(dojo);//san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);//seattle
    var dojo = "burbank";
    console.log(dojo);//burbank
}
console.log(dojo);//san jose



//8//
console.log(makeDojo("Chicago", 65));//true
console.log(makeDojo("Berkeley", 0));//closed for now
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
