"use strict";
const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const T = parseInt(input[0]);
let index = 1;

for (let i = 0; i < T; i++) {
    const [a,b,c,d] = input[index++].trim().split(" ").map(Number);
    if (a == b && b == c && c == d){
        console.log("YES")
    }else{
        console.log("NO")
    }
}