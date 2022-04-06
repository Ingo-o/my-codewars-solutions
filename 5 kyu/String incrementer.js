/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

const incrementString = (string) => {
    let word = string;
    let number = [0];

    for (let i = 0; i < string.length; i += 1) {
        if (!isNaN(string[i])) {
            word = string.substring(0, i);
            number = string.substring(i, string.length).split('').map(e => parseInt(e));
            break;
        }
    }

    for (let i = number.length - 1; i >= 0; i -= 1) {
        number[i] += 1;
        if (number[i] !== 10) {
            return word + number.join('');
        }
        number[i] = 0;
    }

    if (number[0] === 0) {
        number.unshift(1);
    }

    return word + number.join('');
}
