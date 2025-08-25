function Selectionsort(nums){
   let len = nums.length
   for(let i =0;i<len;i++){
        let min = i
        for(let j=i+1;j<len;j++){
            if(nums[min]>nums[j]){
                min = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[min]
        nums[min] = temp
   }
}

let nums = [4, 1, 3, 9, 7,0,1,3,2,4,5,6,1,2,3]
console.log("before : ",nums)
Selectionsort(nums)
console.log("after : ",nums)