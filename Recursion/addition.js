let arr = [1,7,6,5,3]
let sm =0
function Sumarr(arr){
    if (arr.length==0){
        return sm 
    }

    return sm=sm+arr[0]+Sumarr(arr.slice(1))

}
console.log(Sumarr(arr))