const fs = require('fs');
const { AsciiTable3, AlignmentEnum } = require('ascii-table3');

const content = fs.readFileSync('sample1.csv', 'utf-8');
const data = content.split('\n').filter(Boolean).map((row) => row.split(', ').map((cell) => JSON.parse(cell)));
const headings = data[0]; // .map(item => item.slice(1, -1))

const table = 
    new AsciiTable3()
    .setHeading(...headings)
    .setAlign(3, AlignmentEnum.CENTER)
    .addRowMatrix(data.slice(1));

console.log(table.toString());
