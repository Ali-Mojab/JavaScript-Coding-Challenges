/*Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK */


const massMark = 78;
const HeightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / HeightMark **2;
const BMIJohn = massJohn / heightJohn **2;

//1.1- Short form of Using if and else:
// Cndition ? ifTrueThisHappen : ifFalseThisHappen

// BMIMark > BMIJohn ? console.log("Mark's BMI is higher than John's!") : console.log("John's BMI is higher than Mark's!");
//...............................................
//1.2- Main form of Using if & else Statement: 
// if ( BMIMark > BMIJohn ){
//     console.log("Mark's BMI is higher than John's!")
// }else{
//     console.log("John's BMI is higher than Mark's!") 
// }
//..................................................................

//2.1- Now i want to Use a template literal to include the BMI values in the outputs.
// we Use this sign { ` ` } instead of this sign { '' } for Template literlas

if ( BMIMark > BMIJohn ){
        console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
    }else{
        console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`) 
    }

//2.2 - now we write upper code with the short way of using if & else statement :

BMIMark > BMIJohn ? console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`) : console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);