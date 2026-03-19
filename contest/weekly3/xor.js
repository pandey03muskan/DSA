var longestSubsequence = function(nums) {
    console.log(nums)
    let maxlen = 1
    let len = 1
    let xor = nums[0]
    for(let i=1;i<nums.length;i++){
        console.log(i)
        console.log("xor 0 :", xor^nums[i])
        if((xor^nums[i])==0){
            console.log("xor :",xor^nums[i])
            if (len>=maxlen){
                maxlen = len
                len=0
                if(i!=(nums.length-1)){
                    xor = nums[i+1]
                }
            }
        }else{
            console.log("len i ",len,i)
            xor=xor^nums[i]
            len+=1
        }
        if (len>=maxlen){
            maxlen=len
        }
    }
    return maxlen
};

console.log(longestSubsequence([1,2,3]))