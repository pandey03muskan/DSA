var getRow = function(rowIndex) {
    let arr = [[1]]
    let n = rowIndex+1
    if(n==1) return arr
    arr.push([1,1])
    let num = 11
    n=n-2
    while(n>0){
        let a1 = [0]
        let n1=(arr.at(-1).length)-1
        let i = 0
        while(i<=n1){
            a1.push(arr.at(-1)[i])
            i++
        }
        let a2=Array.from(arr[n1])
        a2.push(0)
        let temp=[]
        let k=0
        let len1=a1.length
        let len2=a2.length
        while(len1>k && len2>k){
            temp.push(a1[k]+a2[k])
            k++
        }
        arr.push(temp)
        n--
    }
    return arr[rowIndex]
};

getRow()