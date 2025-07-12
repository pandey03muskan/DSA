let i=0;
let j=(i+1)
let s= "III"
dic={
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}
let num=0
console.log(s.length)
while(s.length>=j){
    if(dic[s[i]]>=dic[s[j]]){
        num = num+dic[s[i]]
        console.log("i : ",i)
        console.log("j : ",j)
        console.log("number : ",num)
    }else{
        num=num-dic[s[i]]
    }
    i+=1
    j+=1
}
// num=num+dic[s[s.length-1]]
console.log(num)