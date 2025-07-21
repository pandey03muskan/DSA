// Time Complexity --> O(N * M) in worst case — where N is the number of strings and M is the length of the shortest string.

let strs = ["reflower","flow","flight"]
// console.log(shortest)

var longestCommonPrefix = function(strs) {
    let shortest = strs[0]
    for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < shortest.length) {
        shortest = strs[i];
    }
    }
    let i = 0
    while(i<strs.length){
       console.log("before slice : ",strs[i].slice(0,shortest.length))
       console.log("shortest : ",shortest)
       if(strs[i].slice(0,shortest.length) != shortest){
          console.log("inside : ",strs[i])
          if (shortest.length>0){
            shortest  = shortest.slice(0,(shortest.length-1))
            i=0
          }else{
            return ""
          }
       }else{
          i++
       }
    }
    return shortest
};

console.log(longestCommonPrefix(strs))