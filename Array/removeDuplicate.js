// var removeDuplicates = function(nums) {
//     let visited = new Set()
//     if (nums.length<=1) return nums
//     let p1=p2=0
//     while(p2<nums.length){
//         if(visited.has(nums[p2])){
//             console.log(p1,nums[p1])
//             console.log(p2,nums[p2])
//             while(visited.has(nums[p2]) && p2<nums.length){
//                 p2++
//             }
//             nums[p1] = nums[p2]
//             visited.add(nums[p2])
//             count++
//             p1++
//             console.log("-------------")
//             console.log(p1,nums[p1])
//             console.log(p2,nums[p2])
//         }else{
//             console.log("else ",p1)
//             console.log("else ",p2)
//             visited.add(nums[p2])
//             p1++
//             p2++
//             count++
//         }
//     }
//     return nums
// };
// let count = 0
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4],count))
// console.log("count ",count)




// -----------------  brute force solution passed all testcases
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let visited = new Set()
    if (nums.length<=1) return nums.length
    let p1=p2=0,count=0
    while(p2<nums.length){
        if(visited.has(nums[p2])){
            while(visited.has(nums[p2]) && p2<nums.length){
                p2++
            }
            if (p2 < nums.length &&!visited.has(nums[p2])){
                nums[p1] = nums[p2]
                visited.add(nums[p2])
                count+=1
                p1++
            }
        }else{
            visited.add(nums[p2])
            p1++
            p2++
            count+=1
        }
    }
    return count
};