// let nums = [3,0,1]
// let n=nums.length
// console.log("number : ",n)
// nsum = ((n+1)*(n))/2
// console.log("sum : ",nsum)
// sm=0
// let i=0
// while(i<n){
//     sm+=nums[i]
//     i++
// }
// console.log(sm)
// return nsum-sm



let nums = [3,0,1]
let n = nums.length
let i=0
sm=n
while (i<n){
   sm+=(i-nums[i])
   i++
}
console.log(sm)