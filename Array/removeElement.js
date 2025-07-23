// passed with 100%
var removeElement = function(nums, val) {
    const len = nums.length
    let j=0
    for(let i=0;i<len;i++){
        if(nums[i]!=val){
            nums[j]=nums[i]
            j++
        }
    }
    return j
    
};