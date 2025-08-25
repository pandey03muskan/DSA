// find factors in 0(sqrt(n))

let num1=32
let factors=[]
for(let i=0;i<=Math.floor(Math.sqrt(num1)); i++){
    if(num1%i==0){
        factors.push(i);
        if(i!== num1/i){
            factors.push(num1/i);
        }
    }
}

console.log(factors.sort((a,b)=>a-b));


// find GCD of two numbers 

// 1. brute force
let n1=24;
let n2=36;
let gcd = 1;
for(let i=0;i<Math.min(n1,n2);i++){
    if(n1%i==0 && n2%i==0){
        gcd = i;
    }
}
console.log(gcd);

// 2. using Euclidean algorithm

// it may reach TLE
while(n1!==n2){
   if(n1>n2){
     n1=n1-n2
   }else{
    n2=n2-n1
   }
}
console.log(n1)


function gcd1(a, b){
    while(b!==0){
        let temp = b
        b=a%b
        console.log("b",b)
        a=temp
    }
    return a
}

gcd1(24, 36);

// sort an array usin sort function 
let arr = [5, 2, 8, 1, 4];
