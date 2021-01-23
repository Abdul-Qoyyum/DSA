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
        
    }

}


// insert operation
const sll1 = new SinglyLinkedList();
sll1.insert(2);
console.log(sll1);
sll1.insert(34);
console.log(sll1);
sll1.insert("Hello world");
console.log(sll1);
