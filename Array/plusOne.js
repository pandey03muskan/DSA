// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         digits[i]++;
//         if (digits[i] === 10) {
//             digits[i] = 0;
//             if (i === 0) {
//                 console.log("before",digits);
//                 digits.unshift(1);
//                 console.log("after",digits)
//             }
//         } else {
//             break;
//         }
//     }
//     return digits;
// };

var plusOne = function(digits) {
    let len = digits.length
    if((len-1)===0){
        digits[0] = 0
        digits.unshift(1)
    }
    digits[len-1] = digits[len-1]+1
    return digits
};

console.log(plusOne([2,9]))