function ReverseNum(n){
   let revnum = 0
   while(n>0){
    let rem=n%10
    revnum = revnum*10+rem
    n=Math.floor(n/10)
   }
   console.log(revnum)
}

function Palindrome(n){
    let revnum = 0
    let realnum = n
    while(n>0){
        let rem=n%10
        n=Math.floor(n/10)
        revnum = revnum*10+rem
    }
    if(revnum===realnum){
        console.log("Palindrome")
    }else{
        console.log("Not a Palindrome")
    }
}

ReverseNum(465)
Palindrome(131)
Palindrome(1221)
Palindrome(465)