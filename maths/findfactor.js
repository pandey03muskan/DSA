// let n=16
// let i=1
// let factor = []
// while(i<=n){
//    if (n%i==0){
//     factor.push(i)
//     n=n/i
//    }
//    i+=1
// }
// console.log(factor)


// let n=7
// let i=2
// let c=0
// while(i<n){
//      if (n%i==0){
//         c+=1
//      }
// }
// if (c>0){
//     return true
// }else{
//     return false
// }


const primeNumber = (num) =>{
     let i=2
     while(i<num){
        if (num%i==0){
            return false
        }
        i++
     }
     return true
}

var isUgly = function(n) {
    if (n<=0) return false
    if (n<7) return true
    console.log("first")
    let i=7
    while (i<=n){
        if (primeNumber(i)){
            if (n%i==0){
                console.log("returing from here")
                return false
            }
        }
        console.log("number of iteration : ",i)
        i++
    }
    return true
    
};
console.log(isUgly(937351770))