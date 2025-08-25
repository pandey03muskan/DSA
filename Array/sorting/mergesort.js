function merge(left,right){
    let lenl = left.length
    let lenr = right.length
    let temp=new Array((lenl+lenr)-2)
    let i=0,j=0,k=0
    while(i<lenl && j<lenr){
        if(left[i]<=right[j]){
            temp[k]=left[i]
            k++
            i++
        }else{
            temp[k]=right[j]
            k++
            j++
        }
    }
    while(i<lenl){
            temp[k]=left[i]
            k++
            i++
    }
    while(j<lenr){
            temp[k]=right[j]
            k++
            j++
    }
    return temp
}

function Divide(nums,start,end){
    if(start==end){
        return [nums[start]]
    }
    let mid = Math.floor((start+end)/2)
    let left = Divide(nums,start,mid)
    let right = Divide(nums,mid+1,end)
    return merge(left,right)
}


let nums = [2,7,1,0,9,30,40]
let start = 0, end=nums.length-1
console.log(Divide(nums,start,end))