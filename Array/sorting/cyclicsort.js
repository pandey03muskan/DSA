// const CyclicSort =  (arr) =>{
//   let i=0,n=arr.length
//   while(i<n){
//     let currentIdx = arr[i]-1
//     if(arr[i]!==arr[currentIdx]){
//         let temp = arr[i]
//         arr[i] = arr[currentIdx]
//         arr[currentIdx] = temp
//     }else i++
//   }
// }

// let arr = [5,4,3,2,1,7]
// CyclicSort(arr)
// console.log(arr)



let nums = [4,3,2,7,8,2,3,1]
let n = nums.length
let i=0
while(i<n){
    let currentIdx = nums[i]-1
    if (nums[i] !== nums[currentIdx]){
        let temp = nums[i]
        nums[i] = nums[currentIdx]
        nums[currentIdx] = nums[i]
    }else i++
}
console.log(nums)