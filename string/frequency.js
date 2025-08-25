//  "muskanpandey"
function findfrequency(){
   let map = new Map()
   for(let i=0; i<str.length;i++){
      if (map.has(str[i])){
        map.set(str[i],map.get(str[i])+1)
      }else{
        map.set(str[i],1)
      }
   }
   return map
}
let str = "muskanpandey"
console.log(findfrequency(str))