//Exercise 1

function addNumbers(numberA, numberB) {
  return (numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4

//Exercise 2
//Write a function called yell that logs out an uppercase version of a string.

var yell = "Hello World"
console.log(yell.toUpperCase());

//Write a function called yell10 that uses your yell function to log out an uppercase
//version of a string 10 times.

var yell10 = "Hello World"
console.log(yell10.toUpperCase().repeat(10));

//Exercise 3
//Write a function called longest that returns the longest of two input strings or arrays.

var a = "This is the longest string."
var b = "Short string."

    if (a.length < b.length) {
    var longest = (b);
    console.log(longest);
  }  else {
      var longest = (a);
      console.log(longest);
    }


//Exercise 4

//Write a function called isVowel that takes a character (i.e. a string of length 1) and
//returns true if it is a vowel, uppercase or lowercase. The function should
//return false if the character is not a vowel.

var x = "d"


if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x === x.toUppercase || x === x.toLowercase) {
           var vowel = true;
           console.log(vowel);
      } else {
           var vowel = false;
           console.log(vowel);
       }
