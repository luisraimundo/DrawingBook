'use strict';

const fs = require('fs');

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

function pageCount(n, p) {
    
    if(p <= (n/2) || p == 1 || p == n){
        if (p == n || p == n && n % 2 != 0 || p == 1){
            return 0
        }else if (p != n && n % 2 != 0 && p % 2 != 0) {
            return parseInt((p/2)) 
        }else if (p != n && n % 2 == 0) {
            return parseInt(p/2) 
        }else if (n % 2 != 0) {
            return parseInt((n - p)/ 2)
        }
    }else if(p > (n/2)){
        if (p != n && n % 2 == 0) {
            return parseInt(p/2) 
        }else if (n % 2 != 0 && p > (n/2)) {
            return parseInt((n - p)/ 2)
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
