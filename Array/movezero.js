var moveZeroes = function(nums) {
    let i=0,j=i+1
    let len = nums.length
    console.log(i,j,len)
    while(j<len){
        while(nums[i]!=0 && i<len){
            i++
        }
        while(nums[j]==0 && j<len){
            j++
        }
        if (j<len && nums[i]==0 && nums[j]!=0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
        console.log("before : ",i,j)
        i++
        j++
        console.log("after : ",i,j)
    }
};
moveZeroes([2,1])