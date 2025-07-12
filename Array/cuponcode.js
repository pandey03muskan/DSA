let code = ["pBXoMqBU0_aMgc9F8dy6TaSzza3KjSJFjxZa_NuyMjzEBR7fJNwpGHh7lzuoZvQeEUeo6YumHmIOjjchXlzSVa4ItdyDOImQgm","P8rIIUl35MW8yrqRbO0N_IITptYOxz9tOCbPL6d1aIF_hM2sapaDtUzNpmAZRmJQB1WgjLh8bdYADuSRSU21OzttUkq73qiA66","aFWkYookQlHYMXzhVGxbnrXIl1810ws3qHtketHSECHqJoktWXVZGc6ZyeOuzA_VL9zFL9znpIHwbkwJF2bOPQqsz3_0PYgETJ"]
let businessLine = ["pharmacy","invalid","pharmacy"]
let isActive = [true,true,true]
let check = ["electronics", "grocery", "pharmacy", "restaurant"]
const newMap = new Map();
let i=0,j=0,k=0
let len = code.length
let arr = []
const isvalid =  (code) => {
     let regex = /^[a-zA-Z0-9_]+$/
     return regex.test(code)
}
while(i<len && j<len && k<len){
    if(isActive[k] && isvalid(code[i]) && check.includes(businessLine[j])){
        if (!newMap.has(businessLine[j])){
            newMap.set(businessLine[j],[code[i]])
        }else{
            newMap.get(businessLine[j]).push(code[i])
        }
    }
    i++
    j++
    k++
}

for (const key of newMap.keys()) {
newMap.set(key, newMap.get(key).sort());
}

let l=0
while(l<check.length){
    if (newMap.has(check[l])){
          let m=0
          while (m<newMap.get(check[l]).length){
              arr.push(newMap.get(check[l])[m])
              m++
          }    
    }
    l++
}
console.log(arr)