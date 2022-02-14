/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.

Examples:
Pig latin is cool => igPay atinlay siay oolcay
Hello world ! => elloHay orldway !
*/

const pigIt = (str) => str.split(' ')
    .map(word => word.match(/[,.!?;:()]/) ? word : `${word.slice(1)}${word[0]}ay`)
    .join(' ');
