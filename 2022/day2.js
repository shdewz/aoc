const fs = require('fs');
const input = fs.readFileSync('input_day2.txt', 'utf8');

let table = [
    {
        id: 'X',
        beats: 'C',
        loses: 'B',
        value: 1
    },
    {
        id: 'Y',
        beats: 'A',
        loses: 'C',
        value: 2
    },
    {
        id: 'Z',
        beats: 'B',
        loses: 'A',
        value: 3
    }
];

// part 1
(() => {
    let rounds = input.split('\n').filter(e => e);
    let points = [];
    for (let round of rounds) {
        let opponent = round.split(' ')[0];
        let own = round.split(' ')[1];

        let e = table.find(e => e.id == own);
        let score = e.value + (e.beats == opponent ? 6 : e.loses == opponent ? 0 : 3);
        points.push(score);
    }
    let sum = points.reduce((a, b) => a + b);
    console.log(sum); // part 1 solution
})();

// part 2
(() => {
    let rounds = input.split('\n').filter(e => e);
    let points = [];
    for (let round of rounds) {
        let opponent = round.split(' ')[0];
        let outcome = round.split(' ')[1];

        let p =
            outcome == 'X' ? table.find(e => e.loses == opponent) :
                outcome == 'Z' ? table.find(e => e.beats == opponent) :
                    table.find(e => e.loses != opponent && e.beats != opponent);

        let score = p.value + (outcome == 'X' ? 0 : outcome == 'Y' ? 3 : 6);
        points.push(score);
    }
    let sum = points.reduce((a, b) => a + b);
    console.log(sum); // part 2 solution
})();
