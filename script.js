/*
let js = 'amazing';
console.log(40 + 45 + 50 - 30)

//value

console.log('vaibhav');

let FisrtName = 'Vaibhav';


console.log(FisrtName);
console.log(FisrtName);
console.log(FisrtName);


let jonas_matlib = "JN";
let $function = 27;

let person = "Jonas";
let PI = 3.14



// Number
let number = 20;
console.log(typeof (number));

//String
let firstName = 'Vaibhav';
console.log(typeof (firstName));

//Boolean
let lastName = true;
console.log(typeof (lastName))

//Undefind
let average;
console.log(typeof (average))


//Dynamic Typing

let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof (javascriptIsFun))

javascriptIsFun = 'Yes!';
console.log(typeof (javascriptIsFun));

console.log(typeof (null))



let age = 30;
age = 31;

const birtday = 1991;
//birtday=1990'
//const job;

var job = 'programmer';
job = 'teacher'



//OPerators

//math operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 means 2 to power of 3 =2*2*2


const firstName = 'Jonas';
const lastName = 'Schmedtmann';

console.log(firstName + '' + lastName);


//Assignmnet operator
let x = 10 + 5;
console.log(x);
x += 10; //x=x+10 =25 ;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


//comparison operator

console.log(ageJonas > ageSarah);// >,<,>=,<= //true
console.log(ageSarah >= 18);//true



//presedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;//x=y=10,x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge)



//string and template litrals

const fisrtName = 'Vaibhav ';
const lastName = 'Shete ';
const birthYear = 2002;

const info = fisrtName + '' + lastName + '' + birthYear;
console.log(info)

//use of template litrals
const selfInfo = `I'am ${fisrtName}`;
console.log(selfInfo)


console.log(`just a regular string..`);


console.log('String with\n\
multiple\n\
lines');

console.log(`muliline
string
line`);



// IF /ELSE

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving licence 🚗')
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young to start driving licence she should wait ${yearsLeft} years`);
}

const birthYear = 2002;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);



// Type conversion and coercion

//Type conversion
//Number,string,boolean
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

//type coercion

console.log('10' + 10);
console.log('200' - '100');
console.log('200' * 2);

//Guess the output
let n = '1' + 1;
n = n - 1;
console.log(n);




// Falsy values

// 0 undefind,'',null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

///////////////////////////////
const money = 0; // 0 id falsy value hence else block executed
if (money) {
    console.log("No Spend !");
}
else {
    console.log(" Spend !");
}
///////////////////////////////
let height; //Height is undefiend which is false value
if (height) {
    console.log('YAY! height is defind');
}
else {
    console.log('Height is UNDEFIND');
}
////////////////////////////////
let weight = 1; //Height is undefiend which is false value
if (weight) {
    console.log('YAY! weight is defind');
}
else {
    console.log('weight is UNDEFIND');
}



//Equality operator

const age = 18;

if (age === 18) console.log('You just become an adult (strict)');

//if (age === '18') console.log('You just become an adult (strict)');

if (age == '18') console.log('You just become an adult (loose)');

if (age == 18) console.log('You just become an adult (loose)');



//Boolean logic

// AND OR NOT XOR

//Logical operator

const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision)  //AND
console.log(hasDriversLicence || hasGoodVision) //OR
console.log(!hasDriversLicence) //NOT


// if (hasDriversLicence && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// }
// else {
//     console.log("Someone else should drive...!");
// }

const isTired = false;// C
console.log(hasDriversLicence || hasGoodVision || isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
}
else {
    console.log("Someone else should drive...!");
}




//***********  SWITCH CASE *******************

const day = prompt("Enter day you want");
switch (day) {

    case 'Monday':   // day ==='Monday'  { strict equality(===)}
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'Tuesday':
        console.log('Preapare theory video');
        break;

    case 'wednesday':
    case 'thrusday':
        console.log('Write code');
        break;

    case 'friday':
        console.log('Record video');
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;

    default:
        console.log('Enter valid day !');

}




// Challenge

const day = prompt("Enter day you want !");
if (day === 'Monday') {
    console.log('Plan course structure');
}
else if (day === 'Tuesday') {
    console.log('Preapare theory video');
}
else if (day === 'Wednsday' || day === 'Thursday') {
    console.log('Write code');
}
// else if (day === 'Thursday') {
//     console.log('code code');
// }
else if (day === 'Friday') {
    console.log('Learn code');
}
else if (day === 'saturday') {
    console.log('code');
}
else {
    console.log("Enjoy!!!!");
}



//*********STATMENT AND EXPRESSION**********

3 + 6
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const name = 'vaibhav';
console.log(`I am ${name}`)


*/

//*******************CONDITIONAL OPERATOR(TERNARY(?))************************/

// const age = 25;
// const result = age >= 18 ? true : false;
// if (result == true) {
//     console.log("I like it !");
// }
// else {
//     console.log("I dont like it !");
// }

// const age = 25;
// const result = age >= 18 ? 'Wine' : 'Water';

// console.log(`i am ${age}  years old i chooes to drink ${age >= 18 ? 'Wine' : 'Water'}`)



const bill = 275;
let tip;
if (bill >= 50 && bill <= 300) {
    tip = 275 * 20 / 100;
}
console.log(bill, tip, bill + tip);