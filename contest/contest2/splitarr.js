// let nums=[]

// function isPrime(num){
//     let count=0
//     if(num>1){
//         for(let i=1;i<=num;i++){
//             if(num%i==0){
//                 count++
//             }
//         }
//         if (count==2){
//             return true
//         }
//     }
//     return false
// }
// var splitArray = function(nums) {
//     let sm1=0,sm2=0
//     for(let i=0;i<nums.length;i++){
//         if(isPrime(i)){
//            sm1+=nums[i]
//         }else{
//             sm2+=nums[i]
//         }
//     }
//     return Math.abs(sm1-sm2)
// };

// console.log(splitArray(nums))



// learn Sieve of Eratosthenes (Precompute Prime Indices) algorithm for optimized solution
// let nums=[2,3,4,45,89,678,345678]
// n=nums.length
// let isPrime = Array(n).fill(true)
// isPrime[0]=isPrime[1]=false
// for(let i=2;i*i<=n;i++){
//     if(isPrime[i]){
//         for(let j=i*i;j<n;j+=i){
//             isPrime[j]=false
//         }
//     }
// }

// console.log(isPrime[6])



var IsPrime = function(num){
    if(num == 2){
        return true
    }
    if (num<=1){
        return false
    }
    if (num>1){
        for(let i=2;i<=Math.floor(num/2);i++){
            if(num%i===0){
                return false
            }
        }
    }
    return true
}

var splitArray = function(nums) {
    let sm1=0,sm2=0
    for(let i=0;i<nums.length;i++){
        if(IsPrime(i)){
           console.log("prime : ",i)
           sm1+=nums[i]
        }else{
            console.log("non - prime : ",i)
            sm2+=nums[i]
        }
    }
    console.log("sm 1 , sm 2 ",sm1,sm2)
    return Math.abs(sm1-sm2)
};

console.log(splitArray([2,3,4]))