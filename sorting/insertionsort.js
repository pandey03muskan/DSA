function Insertionsort(arr){
    let len = arr.length,i=1
    while(i<len){
        j=i-1
        let key = arr[i]
        if(arr[j]>key){
            arr[j+1]=arr[j]
            j--
            while(j>=0 && arr[j]>key){
              arr[j+1] = arr[j]
              j--
            }
            arr[j+1]=key
        }
        i++

    }
}
let arr = [12, 11, 13, 5, 6,0,2,9,3,8,5,6,7];
console.log("before : ",arr)
Insertionsort(arr)
console.log("after : ",arr)