/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";
    var largest = null;

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length === 1) {
        throw "Only 1 argument was passed to the function.";
    } else if(arguments.length > 2) {
        throw "The function should only have 2 arguments.";
    }

    if(!_.isNumber(num1)) {
        throw "The first argument is not a number.";
    } 
    if(!_.isNumber(num2)) {
        throw "The second argument is not a number.";
    }

    if(num1 === num2) {
        largest = num1;
    } else if (num1 > num2) {
        largest = num1;
    } else {
        largest = num2;
    }
    
    return largest;
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";

    var largest = null;

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length === 1) {
        throw "Only one argument was passed to the function.";
    } else if(arguments.length === 2) {
        throw "Only two arguments were passed to the function.";
    } else if(arguments.length > 3) {
        throw "The function should only have 3 arguments.";
    }

    if(!_.isNumber(num1)) {
        throw "The first argument is not a number.";
    } 
    if(!_.isNumber(num2)) {
        throw "The second argument is not a number.";
    }
    if(!_.isNumber(num3)) {
        throw "The third argument is not a number.";
    }

    if(num1 >= num2) {
        largest = num1;
        if(num3 >= largest) {
            largest = num3;
        }
    } else if(num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }

    return largest;




}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    //...
}

function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
