let a="1111",b="1111"
let n1 = a.length-1
let n2 = b.length-1
let c=0,sum=0,res="",base=2
while(n1>=0 || n2>=0){
    let t1=0,t2=0
    if(n1>=0){
      t1=a.charCodeAt(n1--)-48
      console.log("t1 : ",t1)
      console.log("sum : ",sum)
    }
    if(n2>=0){
        t2=b.charCodeAt(n2--)-48
        console.log("t2 : ",t2)
         console.log("sum : ",sum)
    }
    sum=t1+t2
    console.log(sum)
    if(sum>=base){
        let c1=0
        if (c>0){
          c1=1
          sum=0
          sum+=c
          c=c1
        }else{
          c=1
          sum=0
        }
    }else{
        sum=sum+c
        c=0
    }
    res=res+sum
    console.log("carry : ",c)
}
if (c>0){res=res+c
}
console.log(res.split('').reverse().join(''));