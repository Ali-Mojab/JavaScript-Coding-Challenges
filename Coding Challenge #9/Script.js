'use strict';

// PROBLEM:
/* We Work for a Company building a smart home thermometer. 
Our most recent taski is this:
"Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error." */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Undestanding the problem 
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? Ans what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// -Find max value in temp array
// -Find min value in temp array
// -Subtract min from max (amplitude) and return it

const calcAmplitude = function (temps) { 
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length ; i++){
        let currentTemp = temps[i];
        if (typeof currentTemp !== 'number') ;
        

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    return console.log(max - min); 
};

calcAmplitude(temperatures);