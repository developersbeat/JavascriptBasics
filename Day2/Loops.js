//while and do loops

let number = 0;
while(number <= 10){
    console.log(number);
    number = number + 1;
}

// output: 
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
//  10



//Do Loop
let yourName;
do{
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName)

// would re prompt the popup unless is the value is not empty