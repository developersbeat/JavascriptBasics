//while and do loops

let number = 0;
while (number <= 10) {
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
do {
  yourName = prompt('Who are you?');
} while (!yourName);
console.log(yourName);

// would re prompt the popup unless is the value is not empty

// For Loops

for (let number = 0; number < 10; number = number + 2) {
  console.log(number);
}

// output :
// 0
// 2
// 4
// 6
// 8

//break the loop without completing the whole iteration -> use break
for (let a = 1; a < 12; a = a + 1) {
    if(a % 8 == 0){
        console.log(a);
        break;
    }
}
//output : 8;

