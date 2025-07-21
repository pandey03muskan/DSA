const list1=[1,2,4]
const list2=[1,3,4]
const list3=[]
let lena=list1.length
let lenb=list2.length
let i=0,j=0
while(i<lena && j<lenb){
    if(list1[i]<list2[j]){
        list3.push(list1[i])
        i++
    }else if(list1[i]>list2[j]){
        list3.push(list2[j])
        j++
    }else{
        list3.push(list1[i])
        list3.push(list2[j])
        i++
        j++
    }
}

while(i<lena){
    list3.push(list1[i])
    i++
}
while(j<lenb){
    list3.push(list2[j])
    j++
}
console.log("result : ",list3)