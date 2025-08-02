function subarray(nums){
    let i=0,max=-Infinity
    let len = nums.length
    while(i<len){
        sm=nums[i]
        let  j = i+1
        console.log("sm1 : ",sm)
        console.log("max1 : ",max)
        if(sm>max){
            max=sm
        }
        while(j<len){
            sm=sm+nums[j]
            if(sm>max){
                max=sm
                console.log("max2",max)
            }
            console.log("sm2",sm)
            j++
        }
        i++
    }
    return max
}
let nums = [5,4,-1,7,8]
console.log(subarray(nums))


// kadane's algorithm
// var maxSubArray = function(nums) {
//     let len=nums.length
//     let i=0
//     let sm=0,mx=-Infinity
//     while(i<len){
//         sm=sm+nums[i]
//         if(sm>mx){
//             mx=sm
//         }
//         if(sm<0){
//             sm=0
//         }
//         i++
//     }
//     return mx
// };