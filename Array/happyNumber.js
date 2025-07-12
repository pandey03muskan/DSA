let n=19
let arr = []
while(n>1){
    let sm=0
    while(n>=1){
         let rem = n%10
         sm+=rem*rem
         n=Math.floor(n/10)
    }
    if (arr.includes(sm)){
        return false
    }else{
        arr.push(sm)
    }
    n=sm
}
if (n==1){
    return true
}else{
    return false
}