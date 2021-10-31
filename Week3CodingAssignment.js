// Question 1
ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastIndex = ages.length-1;
let firstIndex = 0;
console.log(ages[lastIndex]-ages[firstIndex]);
ages.push (13)

var total = 0
for (var i = 0; i < ages.length; i++) {
    total += ages[i]
}
var average = total / ages.length;

console.log(ages.length)
console.log(average)

//Question 2
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let characterTotal = 0
for (let name of names) {

    characterTotal += name.length;
}
console.log(characterTotal/names.length);
let conNames = " ";
for(let name of names) {
    conNames += name;
}
console.log(conNames);


//Question 3

//let lastIndex = variable.length-1

//Question 4

//let firstIndex = 0

//Question 5
nameLengths = [];
for (let ind = 0; ind < names.length; ind++){
    nameLengths[ind] = names[ind].length;

}
console.log(nameLengths);

//q6
let tnameLengths = 0;
for (let nameLength of nameLengths){
    tnameLengths += nameLength;
}
console.log(tnameLengths);
//Question 7
function conatenated(word, number){
    let concatWord = "";
    for (let i = 1; i <= number; i++){
        concatWord +- word;
    }
    return concatWord;
}

//Question 8
function fullName(firstName, lastName){
    console.log(firstName + " " + lastName)

}
fullName("Joseph", "DeSimone")
//Question 9

function nArray(array){
    let total = 0
    for (let element of array){
        total += element;
    }
    if (total > 100){
        return true;
    }
    return false;

}
let sum = [29, 34, 76, 12]
console.log(nArray(sum));

//Question 10

function b(q) {
    let sum = 0
    for(let element of q){
        sum += element;

    }
    return sum/q.length
}
let q = [3, 6, 1, 7, 6, 9]
console.log(b(q))

//Question 11
function twoNumber(firstArray, secondArray){
    let averagefirstArray = finalArray(firstArray);
    let averagesecondArray = finalArray(secondArray);
    return (averagefirstArray > averagesecondArray);

}

//Question 12

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && (moneyInPocket > 10.50)){
        return true;

    }
    return false;

}
willBuyDrink();

//Question 13
function carFunction(dreamCar, moneyRequired) {
    console.log("Im going to buy " + dreamCar + " when I have " + moneyRequired)
}
carFunction("1992 Nissan 300ZX Twin Turbo", "$12,000");
//my function describes how much money I need to buy my dream car