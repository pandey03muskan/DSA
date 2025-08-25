var containsNearbyDuplicate = function(nums, k) {
    let len = nums.length
    if(len === 1){
        console.log("re1")
        return false
    }
    console.log("len",len)
    for(let i=0;i<len;i++){
        console.log("i : ",i)
        for(let j=i+1;j<len;j++){
            console.log("j : ",j)
            if(nums[i]===nums[j] && Math.abs(i-j)<=k){
                console.log("i , j : ",i,j)
                console.log("re2")
                return true
            }
        }
    }
    console.log("re3")
    return false
};

console.log(containsNearbyDuplicate([1,2,1],2))