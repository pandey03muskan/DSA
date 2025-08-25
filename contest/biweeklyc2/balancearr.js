// var minRemoval = function(nums, k) {
//      let i=0
//      let len = nums.length
//      let target;
//      let min;
//      while(i<len){
//         let j=0
//         let curr = nums[i]*k
//         while(j<len){
//             if(nums[j]<=curr){
//                 min=nums[i]
//                 target = nums[j]
//             }
//             j++
//         }
//         i++
//      }
//     let l = 0 ,count=0
//     while(l<len){
//         if(min>nums[l]){
//             count++
//         }else if(target<nums[l]){
//             count++
//         }
//         l++
//     }
//     console.log("min : ",min)
//     console.log("max : ",target)
//     console.log(count)
// };


// var minRemoval = function(nums, k) {
//     let left = 0, maxWindow = 0
//     for (let right = 0; right < nums.length; right++) {
//         while (nums[right] > k * nums[left]) {
//             left++
//         }
//         maxWindow = Math.max(maxWindow, right - left + 1)
//     }
//     console.log(maxWindow)
    
//     answer = nums.length - maxWindow
//     return answer
// };

var minRemoval = function(nums, k) {
    if(nums.length == 1){
        return 0
    }
    nums.sort((a, b) => a - b);
    let i=0
    let len = nums.length
    let min;
    let max;
    while(i<len){
        let j=i+1
        if(min !== undefined && max !== undefined){
            break
        }
        while(j<len){
            if(nums[j]<=nums[i]*k){
               min=i
               max=j
               break
            }
            j++
        }
        i++
    }
    console.log(min,max)
    let count = 0
    if(min !== undefined && max !== undefined){
      count = nums.length - ((nums.slice(min,max+1)).length)
    }
    return count
};

console.log(minRemoval([4,6],2))