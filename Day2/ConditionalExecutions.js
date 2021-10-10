let theNumber = Number(prompt("Pick a Number"));
if(!Number.isNaN(theNumber)){
    console.log("Your Numberis the square root of " + theNumber * theNumber);
} else {
    console.log("error")
}

//if the input value is number eg=5 ->  Result :  25

//if the input value is other than number eg= rat -> Result : error