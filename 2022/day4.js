const fs = require('fs');
const input = fs.readFileSync('input_day4.txt', 'utf8');

(() => {
    let pairs = input.split('\n').filter(e => e);
    let overlaps = {
        full: 0, partial: 0
    };
    for (let pair of pairs) {
        let half1 = pair.split(',')[0].split('-').map(e => Number(e));
        let half2 = pair.split(',')[1].split('-').map(e => Number(e));

        let full_overlap = (half1[0] >= half2[0] && half1[1] <= half2[1]) || (half1[0] <= half2[0] && half1[1] >= half2[1]);
        let partial_overlap =
            (half1[0] >= half2[0] && half1[0] <= half2[1]) ||
            (half1[1] >= half2[0] && half1[1] <= half2[1]) ||
            (half2[0] >= half1[0] && half2[0] <= half1[1]) ||
            (half2[0] >= half1[0] && half2[0] <= half1[1]);

        overlaps.full += full_overlap ? 1 : 0;
        overlaps.partial += partial_overlap ? 1 : 0;
    }
    console.log(overlaps);
})();