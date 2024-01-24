const fs = require('fs');
const { AsciiTable3, AlignmentEnum } = require('ascii-table3');

const content = fs.readFileSync('sample1.csv', 'utf-8');
const data = content.split('\n').filter(Boolean).map((row) => row.split(', '));

// const newData = [];
// const arrOfString = [];

// for (arr of data) {
//     for (string of arr) {
//         arrOfString.push(`  ${string}  `);
//     }
//     newData.push(' ' + arr);
//     newData.push(arrOfString);
//         newData.push('________________________________________________________________________________________________');
// }

// for (arr of data) {
//     for (string of arr) {
//         arrOfString = string.split(',');
//     }
// }

// console.log(data);