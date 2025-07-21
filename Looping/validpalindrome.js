// var isPalindrome = function(s) {
//     // regex = '/[a-z0-9]+$/'
//     let lower = s.toLowerCase();
//     let news = ""
//     let i=0
//     while(i<lower.length){
//         if (/[a-z0-9]+$/.test(lower[i])) {
//             news+=lower[i]
//         }
//         i++
//     }
//     if(news===news.split('').reverse().join('')){
//         return true
//     }
//     return false
    
// };
// console.log(isPalindrome("race a car"))


// var isPalindrome = function(s) {    // (14% beat)this solution is fine but not optimized according to leetcode (passed all testcases)
//     // regex = '/[a-z0-9]+$/'
    // let news = ""
    // let i=0
    // while(i<s.length){
    //     if (/[a-zA-Z0-9]+$/.test(s[i])){
    //         news+=(s[i].toLowerCase())
    //     }
    //     i++
    // }
    // if(news===news.split('').reverse().join('')){
    //     return true
    // }
    // return false
    
// };
// console.log(isPalindrome("saras"))


//Let's try something else 
var isPalindrome = function(s) {   //(5% beat)
    let news = ""   
    let news1 = ""
    let i=s.length-1
    let j=0
    while(i>=0){
        if(/[a-zA-Z0-9]+$/.test(s[i])){
            news+=(s[i].toLowerCase())
        }
        i--
    }
    while(j<s.length){
        if(/[a-zA-Z0-9]+$/.test(s[j])){
            news1+=(s[j].toLowerCase())
        }
        j++
    }
    if (news===news1){
        return true
    }
    return false
    
};
console.log(isPalindrome("saras"))