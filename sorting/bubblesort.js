function BubbleSort (nums){
   let len = nums.length - 1
   for(let i=0;i<=len;i++) {
     b=nums[0]
     for(let j=1;j<=len-i;j++){
        if(b>nums[j]){
            let temp = nums[j-1]
            nums[j-1] = nums[j]
            nums[j] = temp
        }else if(b<nums[j]){
            b=nums[j]
        }
     }
   }
}
let nums = [5,1,10,12,3,13,13,2,1]
console.log("before: ",nums)
BubbleSort (nums)
console.log("after: ",nums)