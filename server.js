// let printSqr = function (str){
//     console.log(str);
//     for (let i = 1; i < str.length-1; i++){
//         let space = ' ';
//         let center = str[i] + space.repeat(str.length-2) + str[str.length-(i+1)]
//         console.log(center);
//     }
//     console.log(reverseString(str));
// }
// let reverseString = function (str){
//     return str.split("").reverse().join("");
// }
// printSqr('react');

// let isPalindrome = function (str){
//     return strEdit = (str.toLowerCase().split(" ").join("")===str.toLowerCase().split(" ").join("").split("").reverse().join(""))? true : false
//     // strEdit = str.toLowerCase().split(" ").join("");
//     // let revStr = strEdit.split("").reverse().join("");
//     // return val = (strEdit === revStr) ? true : false
// }
// console.log(isPalindrome("hat ta h"));

// isAnagram = function(string1, string2){
//     let anagram1 = string1.toLowerCase().split("").sort().join("");
//     let anagram2 = string2.toLowerCase().split("").sort().join("");
//     return (anagram1 === anagram2)
// }
// console.log(isAnagram("Hello", "cat"));

// const animals = [
//     "crocodile",
//     "pig",
//     "elephant",
//     "aardvark",
//     "ring tailed lemur",
//     "jordan",
//     "hippopotamus"
// ]

// let filteredAnials = ("Animals: " + animals
//     .filter(name => {name.length < 9})
//     .map((animal) => {return animal.split(' ').map(char => char.slice(0, 1).toUpperCase() + char.slice(1)).join(' ')})
//     .join(", ")
// );

// console.log(filteredAnials);

calcLettersAndDigits = function(string){
    let lCount = 0;
    let ncount = 0;
    let strEdit = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\|" "]/g ,"");
    for (let c of strEdit){ isNaN(c)? lCount++ : ncount++; }
    return ("LETTERS " + lCount + " DIGITS " + ncount);
}

console.log(calcLettersAndDigits("hello world! 123"));