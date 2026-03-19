"use strict";
const fs = require("fs");

function YourName() {
    const input = fs.readFileSync(0, "utf-8").trim().split("\n");

    const T = parseInt(input[0]);
    let index = 1;

    for (let i = 0; i < T; i++) {
    const n = parseInt(input[index++]);
    const [s, t] = input[index++].split(" ");
    let sObject = {}
    let tObject = {}
    let flag = false
    for (let j = 0; j < n; j++) {
        sObject[s[j]] = (sObject[s[j]] || 0) + 1
    }
    for (let j = 0; j < n; j++) {
        tObject[t[j]] = (tObject[t[j]] || 0) + 1
    }
    console.log("sObject : ",sObject)
    console.log("tObject : ", tObject)
    for (const key in sObject) {
        if (sObject[key] !== tObject[key]) {
        console.log("NO")
        flag = true
        break
        }
    }
    if(!flag){
        console.log("YES")
        flag = false
    }
    }
}

YourName();
