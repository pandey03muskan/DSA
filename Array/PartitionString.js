// s="eeq"
// let i=0
// arr=[]
// while(i<s.length){
//     if(!arr.includes(s[i])){
//         arr.push(s[i])
//         i++
//     }else{
//         if(i!==(s.length-1)){
//             j=i+1
//             sub=s[i]
//             while(j<s.length){
//                 if(arr.includes(sub)){
//                     sub=sub+s[j]
//                     j++
//                 }else{
//                     arr.push(sub)
//                     i=j
//                     break
//                 }
//             }
//         }else{
//             i++
//         }
//     }
// }
// console.log(arr)


let s = "abbccccd";
let i = 0;
let arr = [];

while (i < s.length) {
  if (!arr.includes(s[i])) {
    arr.push(s[i]);
    i++;
  } else {
    let j = i + 1;
    let sub = s[i];

    while (j < s.length) {
      sub += s[j];
      j++;

      if (!arr.includes(sub)) {
        arr.push(sub);
        i = j;
        break;
      }
    }
    if (j >= s.length) {
      i++;
    }
  }
}

console.log(arr);
