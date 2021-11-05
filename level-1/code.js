// using fs, read the content of level1_1.in file and store it in an array

const fs = require('fs');
const file = fs.readFileSync('./level-1/level1_1.in', 'utf8');
const arr = file.split('\n');

const input = arr.slice(1);
const inputAsLine = input.reduce((t, e) => t + e, '');

// split with white space
const words = inputAsLine.split(/\s+/)
                         .filter(w => !['start', 'print', 'end'].includes(w))

const solution = words.join('');

console.log(solution);




