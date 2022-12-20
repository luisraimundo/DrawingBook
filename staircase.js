'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let ledge = '';
        for (let j = 1; j < n - i; j++) {
            ledge = ledge + ' ';
        }

        for (let j = 0; j < i + 1; j++) {
            ledge = ledge + '#';
        }
        console.log(ledge);
    }
}



function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
