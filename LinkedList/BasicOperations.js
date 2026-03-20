// console.log("linked List Basic operations using constructor function")

// function Node(val){
//     this.val = this.val;
//     this.next = null;
// }

// function MyLinkedList(){
//     this.head = null;
//     this.size = 0;
// }

// let node1 = new Node(5);
// MyLinkedList.head = node1;
// console.log(MyLinkedList)
// console.log("type of linkedlist :",typeof MyLinkedList)



// console.log("linked List Basic operations using class")

// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class MyLinkedList {
//   constructor(){
//     this.head = null;
//     this.size = 0;
//   }

//   traverseLinkedlist(head){
//      while(head.next!=null){
//         console.log(head.val)
//         head = head.next
//      }
//       console.log(head.val)
//   }

//   // insert at first position
//   addNodeAtFirst(node){
//      node.next = this.head;
//      this.head = node;
//      this.size++;
//   }

//   // insert at last position
//   addNodeAtEnd(node){
//     let tempNode = this.head;
//     while(tempNode.next !== null){
//       tempNode = tempNode.next;
//     }
//     tempNode.next = node;
//     this.size++;
//   }

//   // insert at particular index
//   addNodeAtIndex(node,index){
//     console.log("size",this.size);
//     if(index===""){
//       console.log("please provide a valid index1");
//       return;
//     }
//     if(index<0 || index>(this.size+1)){
//       console.log("please provide a valid index2");
//       return;
//     }
//     if(index==0){
//       this.addNodeAtFirst(node);
//     }else if(index>this.size){
//       this.addNodeAtEnd(node);
//     }
//     else{
//     let curr = this.head;
//     for(let i=1;i<index;i++){
//       curr = curr.next;
//     }
//      node.next = curr.next;
//      curr.next = node;
//      this.size++;
//     }
//   }
// }

// let linkedlist = new MyLinkedList;
//   let node1 = new Node(5);
//   let node2 = new Node(6);
//   node1.next = node2;
// // node creation 
// linkedlist.head = node1;
// linkedlist.size += 2;
// console.log("linked list :",linkedlist);
// linkedlist.traverseLinkedlist(linkedlist.head);
// let node3 = new Node(7);
// linkedlist.addNodeAtFirst(node3);

// console.log("linked list :",linkedlist);
// linkedlist.traverseLinkedlist(linkedlist.head);

// let node4 = new Node(8);
// linkedlist.addNodeAtEnd(node4);

// console.log("linked list :",linkedlist);
// linkedlist.traverseLinkedlist(linkedlist.head);

// let node5 = new Node(9);
// linkedlist.addNodeAtIndex(node5,5);

// console.log("linked list :",linkedlist);
// linkedlist.traverseLinkedlist(linkedlist.head);








function Node(val){
    this.val = val
    this.next = null
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(this.head === null){
        return -1;
    }
    if(index<0 || index>this.size){
        return -1;
    }
    if(index==0){
        return this.head.val;
    }
    let curr = this.head;
    for(let i=1;i<=index;i++){
       curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    if(this.head !== null){
        console.log("val if:",val);
        newNode.next = this.head;
        this.head = newNode;
    }else{
        console.log("val else:",val);
        console.log("else :",typeof val);
        this.head = newNode;
    }
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head === null){
        this.head = newNode;
        return;
    }
     let curr = this.head;
     while(curr.next !== null){
        curr = curr.next;
     }
     curr.next = newNode;
     this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // if(this.head === null){
    //     return;
    // }
    let newNode = new Node(val);
    let curr = this.head;
    if(index<0 || index>(this.size+1)){
        return;
    }
    if(index === 0){
        this.addAtHead(val);
    }else if(index === (this.size+1)){
        this.addAtTail(val);
    }else{
        for(let i=1;i<index;i++){
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let curr = this.head.next;
    let  pre = this.head;
    if(index<0 || index>this.size){
        return;
    }
    if(index === 0){
        this.head = this.head.next;
        this.size--;
    }else{
        for(let i=1;i<(index-1);i++){
            pre = curr;
            curr = curr.next;
        }
        pre.next = curr.next;
        this.size--;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * 
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// var obj = new MyLinkedList()
// obj.addAtHead(1)
// console.log("1",obj);
// obj.addAtTail(3)
// console.log("2",obj);
// obj.addAtIndex(1,2)
// console.log("3",obj);
// console.log(obj.get(1))
// obj.deleteAtIndex(1)
// console.log(obj.get(0))
// console.log("4",obj);


var obj = new MyLinkedList();
// obj.addAtIndex(0,10)
// console.log("1",obj);
// obj.addAtIndex(0,20);
// console.log("2",obj);
// obj.addAtIndex(1,30);
// console.log("3",obj);
// console.log(obj.get(0));

// obj.addAtHead(86);
// console.log("1",obj);
// obj.addAtIndex(1,54);
// console.log("2",obj);
// obj.addAtIndex(1,14);
// console.log("3",obj);
// obj.addAtHead(83);
// console.log("4",obj);
// obj.deleteAtIndex(4);
// console.log("5",obj);

obj.addAtIndex(1,0);
console.log("1",obj);
console.log("value :",(obj.get(0)));
