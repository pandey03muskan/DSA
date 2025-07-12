console.log("print number from 1 to  5")
function printnumber(n,i){
     console.log(i)
     if(i==n){
        return i
     }
     return printnumber(n,i+1)
}
printnumber(5,1)


console.log("print 5 to 1")
function printreversenumber(n){
    console.log(n)
    if(n==1){
        return 1
    }
    return printreversenumber(n-1)
}
printreversenumber(5)

console.log("product from 1 to 5")
function product(n){
   if (n==1){
    return 1
   }
   return n*product(n-1)
}
console.log(product(5))

console.log("factorial from 1 to 5")
function factorial(n){
     if (n==1){
        return 1
     }
     return n*factorial(n-1)
}
console.log(factorial(5))

console.log("Is number palindrome")
function Ispalindrome(original,num,revnum){
     if(num<1){
        let val = original===revnum ? true : false
        return val
     }
     let rem = num%10
     revnum = revnum*10 + rem
     num = Math.floor(num/10)
     return Ispalindrome(original,num,revnum)
}
console.log(Ispalindrome(633313336,633313336,0))