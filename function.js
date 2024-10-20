// PROBLEM 1 - Write a function called addNumbers that takes two numbers as parameters and returns their sum.
// SOLVE 1
function addNumbers(n,s) {
    return n + s;
}
console.log(addNumbers(21,11));
// PROBLEM 1 SOLVED

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 2 - Write a function called sumUpToN that takes a number n and returns the sum of all numbers from 1 to n. Use a loop.
// SOLVE 2
let sum = 0;
function sumUpToN(n){
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
console.log(sumUpToN(21));
// PROBLEM 2 SOLVED

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 3 - Write a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
// SOLVE 3
let array = [21, 11, 12 ,22];
let summ = 0;
function sumArray(array){
    for(let i = 0; i < array.length; i++){
        summ += array[i];
    }
    return summ;
}
console.log(sumArray(array));
// PROBLEM 3 SOLVED

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 4 - Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of even numbers in the array.
// SOLVE 4
let arraay = [11, 12, 21, 22, 1, 2, 111, 112, 221, 222, 212, 121];
let count = 0;
function countEvenNumbers(arraay){
    for(let i = 0; i < arraay.length; i++){
        if(arraay[i] % 2 == 0){
         count++; //(sir eta onek tough, matha noshto math)
        }
    }
    return count;
}
console.log(countEvenNumbers(arraay));
// PROBLEM 4 SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 5 - Write a function called stringLength that takes a string as a parameter and returns the length of the string.
// SOLVE 5
let string = "Nusrat Suchona";
let stringsNum = 0;
function stringLength(string){
    stringsNum = string.length;
    return stringsNum;
}
console.log(stringLength(string));
// PROBLEM 5 SOLVED