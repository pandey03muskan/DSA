// [1,2,3] = [[],[1],[2],[3],[2,3],[1,3],[1,2],[1,2,3]]

let nums = [1,2,3]
let res=[]
let temp=[]
function Recusrive(nums,i){
    if (i==nums.length){    
        return res.push([...temp])
    }
    temp.push(nums[i])
    Recusrive(nums,i+1)
    temp.pop()
    Recusrive(nums,i+1)
}

Recusrive(nums,0)
console.log(res)