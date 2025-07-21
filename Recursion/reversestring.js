// reverse the normal string first 
// function ReverseStr(temp){    // passes all the test cases on GFG 
//     if(temp.length==0){
//         return ""
//     }
//     return ReverseStr(temp.substring(1))+temp[0]
// }
// console.log(ReverseStr("Geeks"))


// working fine for all the test cases but (the problem on 
// Leetcode not get solved because in the question they mentioned in-place solution
// means array should get modify in-place but in this solutionn each time a new array get created 
// while slice a new + concat a new array and then both get together makes a new array 
// If yoou print the input array variable which get pass it still remain same because no 
// the array it self not get changed )
// var reverseString = function(s) {  
//     function reversearr(s){
//         if(s.length==0){
//             return []
//         }
//         return s=reversearr(s.slice(1)).concat([s[0]])
//     }
//     return reversearr(s);
// };
// console.log(reverseString(["h","e","l","l","o"]));



// Let's try anotnner solution 
var reverseString = function(s) {
    let start=0,end=s.length-1
    while(start<end){
        let temp = s[start]
        s[start]=s[end]
        s[end] = temp
        start++
        end--
    }
};
let s=["h","e","l","l","o"]
reverseString(s)
console.log(s)
