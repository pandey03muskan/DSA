let arr = [1,2,3,4]

const fn1 = (ele) =>{
     return ele+1
}

// Map function  (apply function1)
for(let i=0;i<arr.length;i++){
    arr[i]=fn1(arr[i])
    i++
}

console.log(arr)
