let day1 = {
    squirrel: false,
    events: ["work", "touch tree", "pizza", "running"],
    numbers: 34
}

console.log(day1.squirrel);
// → false

console.log(day1.numbers);
//34 

console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

console.log("object", day1);

//=====================================================================
let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};
  

console.log(Object.keys(day1)) 
// Get all the key of the object day1 using Object.keys
// squirrel , events , numbers , wolf
// (Wolf was added later to the day1 object)



//Object.assign

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}

//modified value of b & added new key value pair c:4

let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
    /* and so on... */
];
console.log("\n\n\n\n\n NEW OBJECT JOURNAL")
console.log("journal array:", journal);
console.log("journal array 2nd element", journal[1]);
console.log("journal array 2nd element's events object", journal[1].events);



//==================================================================
let journal21 = [];

function addEntry(events, squirrel) {
  journal21.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);
          
console.log(journal21);


//Array loops
for (let i = 0; i < books.length; i++) {
    let entry = books[i];
    // Do something with entry
  }