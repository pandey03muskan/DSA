
// rotate clockwise by one element 
// function rotate(arr){
//     let temp = arr[(arr.length-1)]
//     let i=(arr.length-1)
//     while(i>0){
//         arr[i]=arr[i-1]
//         i--
//     }
//     arr[0] = temp
// }

// rotate left by k elements
// function rotateByK(arr,k){
//     const kele=arr.slice(0,k)
//     let i=k,j=0
//     while(i<arr.length){
//         console.log("j and arr[i]",j,arr[i])
//         arr[j] = arr[i]
//         j++
//         i++
//     }
//     kele.forEach(ele=>{
//        arr[j]=ele
//        j++
//     })
// }

// let arr = [1,2,3,4,5]
// let k=2
// console.log("before function : ",arr)
// rotateByK(arr,k)
// console.log("after function : ",arr)


// rotate right by k element 
// function RotateByK(nums,k){
//     let len = nums.length
//     const kele = nums.slice((len-k),len)
//     i= len - k - 1
//     j= len-1
//     while(i>=0){
//         nums[j]=nums[i]
//         j--
//         i--
//     }
//     const len1 = kele.length
//     for(let m=(len1-1);m>=0;m--){
//         nums[j]=kele[m]
//         j--
//     }
// }

// let nums = [1,2,3,4,5,6,7]
// let k = 3
// console.log("before function : ",nums)
// RotateByK(nums,k)
// console.log("after function : ",nums)



// num = [1,2,3,4,5]
// rotate right by 1 ---> [5,1,2,3,4] 
// not passed one test case because TCE

// let k = 3
// let num = [1,2,3,4,5]
// let i = 0
// while(i<k){
//    let ele = num.pop()
//    num.unshift(ele)
//    i+=1
// }
// console.log(num)


// Using an algorithm (left by k)
// let k = 3
// let num = [1,2,3,4,5]
// let temp = []
// let len = num.length
// for(let i=0;i<len;i++){
//     temp[i] = num[(i+k)%len]
// }
// console.log(temp)

// Using an algorithm (right by k)
// let k = 3
// let nums = [1,2,3,4,5]
// let len = nums.length
// // let temp = num
// const temp = Array.from(nums);
// for(let i=0;i<len;i++){
//     nums[(i+k)%len] = temp[i]
// }
// console.log(nums)


// most efficient way to rotate an array
// function reverseArr(nums,i,j){
//     while(i<j){
//         [nums[i],nums[j]] = [nums[j],nums[i]]
//         i++
//         j--
//     }
// }

// function rotatebyk()
var rotate = function(nums, k) {
    if(nums.length == 1) return
    if(nums.length<k){
        k=k%(nums.length)
    }
    reverseArr(nums,0,nums.length-1)
    reverseArr(nums,0,k-1)
    reverseArr(nums,k,nums.length-1)
};