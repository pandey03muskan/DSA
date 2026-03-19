function CountDigit(n){
    let count=0
    while(n>0){
        let rem=n%10
        count+=rem
        n=Math.floor(n/10)
    }
    console.log(count)
}

CountDigit(465)