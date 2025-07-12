let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
str=""
for (let i=0;i<=(digits.length-1);i++){
str=str+digits[i]
}
let num = (BigInt(str)+BigInt(1)).toString()
let newnum = num.split("").map(digit=>parseInt(digit,10))

