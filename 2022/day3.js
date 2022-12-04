const fs = require('fs');
const input = fs.readFileSync('input_day3.txt', 'utf8');

// part 1
(() => {
    let groups = input.split('\n').filter(e => e);
    let priorities = [];
    for (let group of groups) {
        let half1 = group.substring(0, group.length / 2).split('');
        let half2 = group.substring(group.length / 2).split('');
        let duplicate = half1.filter(item => half2.includes(item))[0];
        let priority = duplicate.charCodeAt(0) - (duplicate == duplicate.toLowerCase() ? 96 : 38);
        priorities.push(priority);
    }
    let sum = priorities.reduce((a, b) => a + b);
    console.log(sum);
})();

// part 2
(() => {
    let elves = input.split('\n').filter(e => e);
    let groups = elves.reduce((a, b, i) => { a[Math.floor(i / 3)] = [].concat((a[Math.floor(i / 3)] || []), b); return a; }, []);
    let priorities = [];
    for (let group of groups) {
        let duplicate = group[0].split('').filter(item => group[1].split('').includes(item) && group[2].split('').includes(item))[0];
        let priority = duplicate.charCodeAt(0) - (duplicate == duplicate.toLowerCase() ? 96 : 38);
        priorities.push(priority);
    }
    let sum = priorities.reduce((a, b) => a + b);
    console.log(sum);
})();
