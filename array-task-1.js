///////////// TASK-1 /////////////

// declare an array with 6 fruits name
let fruits = ["Mango", "Orange", "Banana", "Strawberry", "Apple"];
// output 3rd element
console.log(fruits[3]);
// Added new fruits
fruits.splice(2,1, "Jambura");
// output final array
console.log(fruits);


/////////// TASK-2 ///////////

// declare 3 tourist destinations
let place = ["Bandarban", "Sajek", "Nikli"]
// add 1 more tourist destinations
place.push("Paharpur");
//add 2 more tourist destinations
place.push("Mithamoin", "Cox's Bazar");
// remoce the last tourist destinations
place.pop();
// output the final array
console.log(place);


/////////// TASK-3 ///////////

// declare a array
let books = ["Java Book", "JavaScript Book", "Python Book", "C Book", "C++ Book", "Ruby Book"]
//use if-else statement to finf book
if(books.includes("JavaScript Book")){
    console.log("Yes Sir, This book is available");
}else{
    console.log("No Sir, This book isn't available");
}

/////////// TASK-4 ///////////

// declare 5 array
let a = [1,2,3,4,5,6,7,8,9,10];
let b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let c = 10+15;
let d = "abc";
let e = [10,20,30,40,50,60,70,80,90,100];
// checking variables are array or not
console.log(Array.isArray(a));
console.log(Array.isArray(b));
console.log(Array.isArray(c));
console.log(Array.isArray(d));
console.log(Array.isArray(e));

/////////// TASK-5 ///////////

// declare 2 arrays
let f = ["Shejan", "Mahamud", "Jihad", "Johura"]
let g = [1,2,3,4,5];
// contact two arrays 
let h = a.concat(b);
// output previous and concated arrays
console.log(a);
console.log(b);
console.log(c);