const fs = require('fs');
const input = fs.readFileSync('input_day6.txt', 'utf8');

const solve = (chunk_size) => {
    let buffer = input.split('\n')[0].split('');
    for (let i = chunk_size - 1; i < buffer.length; i++) {
        let chunk = buffer.slice(i - (chunk_size - 1), i + 1);
        let unique = [...new Set(chunk)];
        if (unique.length == chunk_size) return i + 1;
    }
}

console.log(`start-of-packet: ${solve(4)}`); // part 1 solution
console.log(`start-of-message: ${solve(14)}`); // part 2 solution