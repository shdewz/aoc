const fs = require('fs');
const input = fs.readFileSync('input_day5.txt', 'utf8');

(() => {
    let rows = input.split('\n').filter(e => e);
    let stack_rows = rows.filter(row => row.includes('[')).map(row => row.replace(/^    /g, '[-] ').replace(/    $/g, ' [-]').replace(/    /g, ' [-]'));
    let split = stack_rows.map(row => row.split(' '));
    let stacks = [];
    let stacks2 = [];
    for (let i in split[0]) {
        stacks.push(split.map(row => row[i]).reverse().map(piece => piece.replace(/(\[|\])/g, '')).filter(e => e != '-'));
        stacks2.push(split.map(row => row[i]).reverse().map(piece => piece.replace(/(\[|\])/g, '')).filter(e => e != '-'));
    }

    let instructions = rows.filter(row => row.startsWith('move')).map(inst => inst.match(/\d+/g).map(d => Number(d)));
    for (let inst of instructions) {
        let count = inst[0];
        let source = inst[1];
        let destination = inst[2];

        for (let i = 0; i < count; i++) {
            stacks[destination - 1].push(stacks[source - 1].pop());
        }
    }

    let top_items = stacks.map(stack => stack.pop()).join('');
    console.log(top_items); // part 1 solution

    for (let inst of instructions) {
        let count = inst[0];
        let source = inst[1];
        let destination = inst[2];

        stacks2[destination - 1].push(...stacks2[source - 1].slice(-count));
        stacks2[source - 1] = stacks2[source - 1].slice(0, -count);
    }

    let top_items2 = stacks2.map(stack => stack.pop()).join('');
    console.log(top_items2); // part 2 solution
})();
