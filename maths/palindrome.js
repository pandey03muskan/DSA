    x=-121
    // if (x<0){
    //     return false
    // }
    rem=0
    revnum=0
    originalnum=x
    while(x>0){
       rem=x%10
       revnum=revnum*10+rem
       x=Math.floor(x/10)
    }
  
    if (originalnum===revnum){
        console.log(true)
    }else{
        console.log(false)
    }