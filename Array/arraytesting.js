// let arr =[]
// arr[0]=1
// arr[2]=6
// arr[6]=10
// console.log(arr)
// console.log(arr[1])


// Difference between array formed with new keyword and without
// both array are an object
let arr1 = []    
let arr2 = new Array()
let arr3 = new Array(3)
console.log(typeof arr1,arr1) // object / an empty array
console.log(typeof arr2,arr2) // object / an empty array
console.log(typeof arr3,arr3) // object / [ <3 empty items> ]



// sort it from 0 to 1 ------> [0,1,1,1,0,0,1,1]   as [0,0,0,1,1,1,1,1]