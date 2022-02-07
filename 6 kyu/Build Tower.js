/*
Build Tower by the following given argument: number of floors (integer and always greater than 0).
Tower block is represented as *


For example, a tower of 3 floors looks like below:
[
    '  *  ',
    ' *** ',
    '*****'
]

And a tower of 6 floors looks like below:
[
    '     *     ',
    '    ***    ',
    '   *****   ',
    '  *******  ',
    ' ********* ',
    '***********'
]
*/

const towerBuilder = (nFloors) => {
    const tower = [];

    for (let i = 1; i <= nFloors; i += 1) {
        const spaces = ' '.repeat(nFloors - i);
        const stars = '*'.repeat(2 * i - 1);
        const floor = `${spaces}${stars}${spaces}`
        tower.push(floor);
    }

    return tower;
}