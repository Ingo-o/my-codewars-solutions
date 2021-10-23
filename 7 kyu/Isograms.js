// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

const isIsogram = (str) => {
    const formattedStr = str.toLowerCase();
    let checkedLetters = '';
    for (let i = 0; i < str.length; i += 1) {
        if (checkedLetters.indexOf(formattedStr[i]) !== -1) {
            return false;
        }
        checkedLetters = checkedLetters + formattedStr[i];
    }
    return true;
}
