function RemoveDuplicate(nums){
    if(nums.length<2){
        // console.log("1")
        return nums
    }
    if(nums.length==2){
        // console.log("2")
        if(nums[0]<nums[1]){
            return nums
        }else{
            return [nums[0]]
        }
    }
    let i=0,j=k=1
    while(nums[i]<=nums[j]){
        // console.log("3")
        if(nums[i]==nums[j]){
            // console.log("4")
            let l=(j+1)
            while(l>k && l<nums.length){
                let temp=nums[l]
                nums[l]=nums[k]
                nums[k]=temp
                l++
                k++
            }
            k=j
        }else{
            // console.log("5")
            i++
            j++
            k++
        }
    }
    console.log(nums)
}

RemoveDuplicate([0,0,1,1,1,2,2,3,3,4])