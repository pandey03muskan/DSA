// var map = function(arr, fn) {   // TC - O(n)   SC - O(1)
//     let i=0;
//     while(i<arr.length){
//         arr[i] = fn(arr[i],i);
//         i++
//     }
//     return arr;
// };

// console.log(map([1,2,3],function plusone(n) { return n + 1; }));



 
// TC - O(n) --> map will map each element of array to the function 
// SC - O(n) --> map does not modify existing array , it will create 
// a new array to 
//
//
var map = function(arr, fn) { 
    return arr.map(fn)
};

console.log(map([1,2,3],function plusone(n) { return n + 1; }));