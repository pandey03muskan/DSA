// var checkDivisibility = function(n) {
//    let sm = 0
//    let pro=1
//    let num = n
//     while(num>=1){
//         let rem = num%10
//         sm+=rem
//         pro*=rem
//         num=Math.floor(num/10)
//     }
//     if((sm+pro) !== 0){
//         console.log(sm+pro)
//         // console.log(n%(sm+pro))
//         let val = sm+pro
//         console.log("value ",val)
//         console.log(`${n}%${val}`)
//         console.log(n%val)
//         if (n%(sm+pro) == 0){
//             return true
//         }
//     }
//     return false
// };

// console.log(checkDivisibility(1))


var checkDivisibility = function(n) {
   let sm = 0
   let pro=1
   let num = n
    while(num>=1){
        let rem = num%10
        sm+=rem
        pro*=rem
        num=Math.floor(num/10)
    }
    if((sm+pro) !== 0){
        return n%(sm+pro) == 0
    }
    return false
};
console.log(checkDivisibility(1))