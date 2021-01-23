// singly linked demonstration list with javascript
// Author : Nurudeen Qoyyum Timilehin

class SinglyLinkedListNode{
    constructor(data){
      this.data = data;
      this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
       this.head = null;
       this.size = 0;
    }
//checks if the list is currently empty
    isEmpty(){
      return this.size == 0;
    }

    // insert operation
    insert(value) {
        let node = new SinglyLinkedListNode(value);
        if(this.head){
          node.next = this.head;
          this.head = node;
        }else{
          this.head = node;
        }
        this.size++;
    }

// remove operation
    remove(value){
       let currentHead = this.head;
       var isRemoved= false; //tracks the list size

//checks if the head is to be removed
       if(this.head.data == value){
         this.head = this.head.next;
         currentHead = this.head;
         isRemoved = true;
       }else{
         let prev = currentHead;
         while(currentHead.next){
            if(currentHead.data == value){
             //remove the node by skipping it
              prev.next = currentHead.next;
              prev = currentHead;
              currentHead = currentHead.next;
              isRemoved = true;
              break;
            }
            prev = currentHead;
            currentHead = currentHead.next;
         }
//if the value is the last node
           if(currentHead == value){
             prev.next = null;
             isRemoved = true;
           }
//decrease the size on successfull removal
           if(isRemoved){
             this.size--;
           }
       }
    }


  deletedAtHead(){
//variable to return
   let returnVal;

   if(!this.head){
     return;
   }
     returnVal = this.head.data;
     this.head = this.head.next;
     return returnVal;
  }


//search through a linkedlist for a value
  search(value){
    let currentHead = this.head;
    let isFound = false;
    while(currentHead.next){
      if(currentHead.data == value){
        isFound = true;
        break;
      }
      currentHead = currentHead.next;
    }
     return isFound;
  }



}


// insert operation
const sll1 = new SinglyLinkedList();
sll1.insert(34);
//console.log(sll1);
sll1.insert(2);
//console.log(sll1);
sll1.insert("Hello world");
//console.log(sll1);

//sll1.remove("Hello world");
//console.log(sll1);

/*
let deletedVal = sll1.deletedAtHead();
console.log(deletedVal);
console.log(sll1);
*/

if(sll1.search(34)){
  console.log("Found");
 }else{
  console.log("Not Found");
 }
