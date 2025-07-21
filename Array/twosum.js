let nums = [2,7,11,15]
let target = 9

var twoSum = function(nums, target) {
    const dic = new Map();
    for(let i=0;i<nums.length;i++){
        if(dic){
           if(dic.has(target-nums[i])){
               return [dic.get(target-nums[i]),i]
           }
        }
        dic.set(nums[i],i)
    }
}

console.log(twoSum(nums,target))