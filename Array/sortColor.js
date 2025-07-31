// level 1  (for 0 and 1)
function sortColor (nums) {
     let i=0,j=(nums.length-1)
     while(i<j){
        while(nums[i]==0 && i<j){
            i+=1
        }
        while(nums[j]==1 && i<j){
            j-=1
        }
        if (i<j && nums[i]==1 && nums[j]==0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
     }
     return nums
}
// let nums = [0,1,0,1,0,1,0]
// console.log(sortColor(nums))

// level 2 (for 0 , 1 and 2)
var sortColors = function(nums) {
    let len = nums.length
    let i=0,k=0,j=len-1
    while(k<=j){
        while(i<j && nums[i]==0){
            i++
        }
        while(i<j && nums[j]==2){
            j--
        }
        if(nums[k] == 2 && nums[j]!=2 && k<=j){
            temp=nums[k]
            nums[k]=nums[j]
            nums[j]=temp
        }else if(nums[k] == 0 && nums[i]!==0 && i<=k){
            temp=nums[k]
            nums[k]=nums[i]
            nums[i]=temp
        }else{
            k++
        }
    }
    return nums
};
let nums = [2,0,2,1,1,0]
sortColor2(nums)