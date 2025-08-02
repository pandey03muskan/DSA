// brute force TC-(o(n2))
// var trap = function(height) {
//     let i=1
//     let len=height.length
//     let sm =0
//     while(i<len){
//         let j=i-1,k=i+1
//         let lmax=0,rmax=0
//         while(j>=0){
//             if(height[j]>lmax){
//                 lmax=height[j]
//             }
//             j--
//         }
//         while(k<len){
//             if(height[k]>rmax){
//                 rmax=height[k]
//             }
//             k++
//         }
//         let min = 0
//         if(lmax<=rmax){
//             min=lmax
//         }else{
//             min=rmax
//         }
//         if((min-height[i])>0){
//             sm+=(min-height[i])
//         }
//         i++
//     }
//     return sm
// };


//optimal TC-o(n)
var trap = function(height) {
    let lmax=[],rmax=[],sm=0
    let len = height.length
    let i =1,k=0,j=len-2
    lmax[0] = 0
    rmax[len-1] = 0
    while(i<len){
        lmax[i] = Math.max(lmax[i-1],height[i-1])
        i++
    }
    while(j>=0){
        rmax[j] = Math.max(rmax[j+1],height[j+1])
        j--
    }
    while(k<len){
        let val = (Math.min(lmax[k],rmax[k]) - height[k])
        if (val>0){
            sm+=val
        }
        k++
    }
    return sm

};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))