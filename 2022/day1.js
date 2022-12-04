const fs = require('fs');
const input = fs.readFileSync('input_day1.txt', 'utf8');

let groups = input.split('\n\n').map(group => group.split('\n').map(e => Number(e)).reduce((a, b) => a + b));
let max = groups.find(e => e == Math.max(...groups));
console.log(max); // part 1 solution

let sorted = groups.sort((a, b) => b - a);
console.log(sorted[0] + sorted[1] + sorted[2]); // part 2 solution
