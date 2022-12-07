const fs = require('fs');
const input = fs.readFileSync('input_day7.txt', 'utf8');

(() => {
    let dirs = { '/': { files: [], dirs: [], size: 0 } };
    let current_dir = '';

    let lines = input.split('\n').filter(e => e);
    for (let line of lines) {
        let args = line.split(' ');
        if (line.startsWith('$')) {
            if (args[1] == 'cd') {
                if (args[2] == '/') current_dir = '/';
                else if (args[2] == '..') current_dir = current_dir.split('/').slice(0, -1).join('/');
                else current_dir += `${current_dir == '/' ? '' : '/'}${args[2]}`;
            }
        }
        else {
            if (line.startsWith('dir')) {
                let dir = current_dir + (current_dir == '/' ? '' : '/') + args[1];
                dirs[dir] = { files: [], dirs: [], size: 0 }
                dirs[current_dir].dirs.push(dir);
            }
            else dirs[current_dir].files.push({ file: args[1], size: Number(args[0]) });
        }
    }

    const calc_size = dir => dirs[dir].files.reduce((a, b) => a + b.size, 0) + dirs[dir].dirs.reduce((a, b) => a + calc_size(b), 0);
    for (let dir of Object.keys(dirs)) { dirs[dir].size = calc_size(dir); }
    let sum = Object.entries(dirs).reduce((a, b) => a + (b[1].size <= 100000 ? b[1].size : 0), 0);
    console.log(sum); // part 1 solution

    let needed = 30000000 - (70000000 - dirs['/'].size);
    let best_dir = Object.entries(dirs).sort((a, b) => a[1].size - b[1].size).filter(e => e[1].size >= needed)[0];
    console.log(best_dir[1].size); // part 2 solution
})();

// pain and agony for this one
// (lots of)
