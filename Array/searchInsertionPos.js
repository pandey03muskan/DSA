// var searchInsert = function(nums, target) {
//     let start = 0
//     let end = nums.length-1
//     while(start<=end) {
//       let mid = Math.floor((start+end)/2)
//       if(nums[mid]===target){
//         return mid
//       }else if(nums[mid]>target){
//         end = mid-1
//       }else if(nums[mid]<target){
//         start = mid+1
//       }
//     }
//     let start1 = 0
//     let end1 = nums.length-1
//     while(start1<=end1) {
//       let mid = Math.floor((start1+end1)/2)
//       if(nums[mid]>target){
//          if(nums[mid-1]<=target){
//             return mid
//          }else if((mid-1)===0){
//             return 0
//          }
//          end1=mid-1
//       }else if(nums[mid]<target){
//          if(nums[mid+1]>=target){
//             return mid+1
//          }else if((mid+1)===(nums.length-1)){
//             return nums.length
//          }
//          start1=mid+1
//       }
//     }
// };

// console.log(searchInsert([1,3,5,6],7))




//------------------solution passed all test cases with 100% beat
var searchInsert = function(nums, target) {
    if(nums.length === 1){
        if (nums[0]===target){
            return 0
        }else if(nums[0]>target){
            return 0
        }else{
            return 1
        }
    }
    let start = 0
    let end = nums.length-1
    while(start<=end) {
      let mid = Math.floor((start+end)/2)
      if(nums[mid]===target){
        return mid
      }else if(nums[mid]>target){
        end = mid-1
      }else if(nums[mid]<target){
        start = mid+1
      }
    }
    let start1 = 0
    let end1 = nums.length-1
    while(start1<=end1) {
      let mid = Math.floor((start1+end1)/2)
      if(nums[mid]>target){
        if (mid!==0){
            if(nums[mid-1]<=target){
                return mid
            }else if((mid-1)===0){
                return 0
            }
            end1=mid-1
        }else{
            return mid
        }
      }else if(nums[mid]<target){
        if(mid!==(nums.length-1)){
            if(nums[mid+1]>=target){
                return mid+1
            }else if((mid+1)===(nums.length-1)){
                return nums.length
            }
            start1=mid+1
        }else{
            return mid+1
        }
      }
    }
};