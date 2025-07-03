const prompt = require("prompt-sync")()

// ****
// ****
// ****
// ****
for(let i=0;i<4;i++){
    let row = "";
    for(let j=0;j<4;j++){
        row+="*";
    }
    console.log(row);
}


// *
// **
// ***
// ****
for (let i=0;i<4;i++){
    let row = "";
    for(let j=0;j<=i;j++){
        row+="*";
    }
    console.log(row);
}


//1
//1 2
//1 2 3
//1 2 3 4
for (let i=1;i<=4;i++){
    let row = "";
    for(let j=1;j<=i;j++){
       row+=j;
    }
    console.log(row)
}

//****
//*** 
//**
//*
for(let i=0;i<4;i++){
    let row = ""
    for (let j=0;j<(4-i);j++){
        row+="*"
    }
    console.log(row)
}

//********
// *****
//  ***
//   *
for (let i=0;i<5;i++){
    let row1=""
    for (let j=0;j<i;j++){
        row1+=" "
    }
    for (let j=0;j<(5-i);j++){
        row1+="*"
    }
    for (let j=0;j<(5-(i+1));j++){
        row1+="*"
    }
    console.log(row1);
}

//   *
//  ***
// *****
//*******
for(let i=1;i<=5;i++){
    let row=""
    for (let j=1;j<=(5-i);j++){
        row+=" "
    }
    for (let j=1;j<=(i);j++){
        row+="*"
    }
    for (let j=1;j<=(i-1);j++){
        row+="*"
    }
    console.log(row)
}


//1
//22
//333
//4444
//55555
for (let i=1;i<=5;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row+=i
    }
    console.log(row)
}

//    1
//   222
//  33333
// 4444444
//555555555

for (let i=1;i<=5;i++){
    let row=""
    for(let j=1;j<=(5-i);j++){
        row+=" "
    }
    for(let j=1;j<=i;j++){
        row+=i
    }
    for(let j=1;j<=(i-1);j++){
        row+=i
    }
    console.log(row)
}

//    1
//   121
//  12321
// 1234321
//123454321

for(let i=1;i<=5;i++){
    let row=""
    for(let j=1;j<=(5-i);j++){
        row+=" "
    }
    for(let j=1;j<=i;j++){
        row+=j
    }
    for(let j=(i-1);j>=1;j--){
       row+=j
    }
    console.log(row)
}

//1234567
//123456
//12345
//1234
//123
//12
//1

for (let i=1;i<=6;i++){
    let row=""
    for(let j=1;j<=(7-i);j++){
        row+=j
    }
    console.log(row)
}


//   *
//  *** 
// *****
//  ***
//   *

const size = prompt("size :")
for(let i=0;i<size;i++){
    let row=""
    for(let j=0;j<(size-(i+1));j++){
        row+=" "
    }
    for(let j=0;j<=i;j++){
        row+="*"
    }
    for(let j=0;j<=(i-1);j++){
        row+="*"
    }
    console.log(row)
}
for(let i=0;i<(size-1);i++){
    let row=""
    for(let j=0;j<=i;j++){
        row+=" "
    }
    for(let j=0;j<(size-(i+1));j++){
        row+="*"
    }
    for(let j=0;j<(size-(i+2));j++){
        row+="*"
    }
    console.log(row)
}


// 1      1
// 12    21
// 123  321
// 12344321
for(let i=1;i<=size;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row+=j
    }
    for(let j=1;j<=(size-i);j++){
        row+=" "
    }
    for(let j=1;j<=(size-i);j++){
        row+=" "
    }
    for(let j=i;j>=1;j--){
        row+=j
    }
    console.log(row)
}


// 1
// 01
// 101
// 0101
// 10101

let start=1
for(let i=0;i<4;i++){
    let row = ""
    for(let j=0;j<=i;j++){
      row+=start
      start=1-start
    }
    console.log(row)
}

// 1
// 23
// 456
// 78910
let num=1
for(let i=0;i<size;i++){
    let row="";
    for(let j=0;j<=i;j++){
        row+=num
        num=num+1
    }
    console.log(row)
}


// A
// AB
// ABC
// ABCD

// console.log('A'.charCodeAt(0)+1)
// console.log(String.fromCharCode(65))
function NextChar(current,add){
    return String.fromCharCode(current.charCodeAt(0)+add)
}

for(let i=0;i<size;i++){
    let st="A"
    let row=""
    for(let j=0;j<=i;j++){
        row+=NextChar(st,j)
    }
    console.log(row)
}


// ABCD
// ABC
// AB
// A
for(let i=0;i<size;i++){
    let st="A"
    let row=""
    for(let j=0;j<(size-i);j++){
        row+=NextChar(st,j)
    }
    console.log(row)
}

// A
// BB
// CCC
// DDDD
for(let i=0;i<size;i++){
    let st="A"
    let row=""
    for(let j=0;j<=i;j++){
        row+=NextChar(st,i)
    }
    console.log(row)
}

//    A
//   ABA 
//  ABCBA
// ABCDCBA
for(let i=0;i<size;i++){
    let st="A"
    let row=""
    for(let j=0;j<(size-(i+1));j++){
        row+=" "
    }
    for(let j=0;j<=i;j++){
        row+=NextChar(st,j)
        // console.log("first : ",row)
    }
    for(let j=(i-1);j>=0;j--){ 
        row+=NextChar(st,j)
        // console.log("second : ",row)
    }
    console.log(row)
}


//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI

for(let i=0;i<=size;i++){
    let st="A"
    let row=""
    for(let j=0;j<(size-(i+1));j++){
        row+=" "
    }
    for(let j=0;j<=i;j++){
        row+=NextChar(st,j)
    }
    for(let j=0;j<=(i-1);j++){
        row+=NextChar(st,j+2+(i-1))
    }
    console.log(row)
}

// J
// IJ
// HIJ
// GHIJ
// FGHIJ
// EFGHIJ
// DEFGHIJ
// CDEFGHIJ
// BCDEFGHIJ
for(let i=0;i<size;i++){
    let st="A"
    let row=""
    for(let j=0;j<=i;j++){
        row+=NextChar(st,(size-i)+j)
    }
    console.log(row)
}

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
for(let i=0;i<size;i++){
    let row = ""
    for (let j=0;j<(size-i);j++){
        row+="*"
    }
    for(let j=0;j<=(i-1);j++){
        row+=" "
    }
    for(let j=0;j<=(i-1);j++){
        row+=" "
    }
    for (let j=0;j<(size-i);j++){
        row+="*"
    }
    console.log(row)
}
for(let i=0;i<size;i++){
    let row = ""
    for(let j=0;j<=i;j++){
        row+="*";
    }
    for(let j=0;j<(size-(i+1));j++){
        row+=" "
    }
    for(let j=0;j<(size-(i+1));j++){
        row+=" "
    }
    for(let j=0;j<=i;j++){
        row+="*";
    }
    console.log(row)
}


// ******
// *    *
// *    *
// ******
for(let i=0;i<size;i++){
    let row=""
    for(let j=0;j<size;j++){
        if(i==0 || j==0 || i==(size-1) || j==(size-1)){
            row+="*"
        }else{
            row+=" "
        }
    }
    console.log(row)
}