/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

const humanReadable = (num) => {

    const nomalizator = (num) => num > 9 ? `${num}` : `0${num}`;

    const hours = Math.floor(num / 3600);
    const minutes = Math.floor((num % 3600) / 60);
    const seconds = (num % 3600) % 60;

    return nomalizator(hours) + ':' + nomalizator(minutes) + ':' + nomalizator(seconds);
}
