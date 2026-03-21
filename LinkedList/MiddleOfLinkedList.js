
// USING LENGTH OF LINKEDLIST
var getAtIndex = function(head,index){
    if(index<0) return;
    curr = head;
    for(let i=0;i<index;i++){
        curr=curr.next;
    }
    return curr.val;
}

var NumberOfNodes = function(head){
    let count = 0;
    let curr = head;
    while(curr.next!==null){
        curr=curr.next;
        count+=1;
    }
    return count;
}

var middleNode = function(head) {
    let len = NumberOfNodes(head);
    if(len===1){
        return getAtIndex(1)
    }
    if(len%2===0){
        let index = len/2;
        return getAtIndex(index);
    }else{
        let index = (len-1)/2;
        return getAtIndex(index);
    }
};


// USING SLOW FAST POINTER

var middleNode = function(head) {
    let slowPointer = head;
    let fastPointer = head;
    while(fastPointer !== null && fastPointer.next!==null){
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }
    return slowPointer;
};