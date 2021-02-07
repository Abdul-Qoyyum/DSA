// Doubly linked list demonstration with javascript
// Author : Nurudeen Qoyyum Timilehin

class DoublyLinkedListNode{
   constructor(data){
      this.data = data;
      this.prev = null;
      this.next = null;
   }
}

class DoublyLinkedList{
    constructor(){
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    // checks if the list is currently empty
    isEmpty(){
      return this.size == 0;
    }

// insert data at O(1) complexity
    insertAtFront(value){
      if(this.head == null){
        let temp = new DoublyLinkedListNode(value);
        this.head = temp;
        this.tail = this.head;
        this.size++;
      }else{
        let temp = new DoublyLinkedListNode(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
        this.size++;
      }
    }

    // insert at tail
    insertAtTail(value){
        if(this.tail == null){
            let temp = new DoublyLinkedListNode(value);
            this.tail = temp;
            this.head = this.tail;
        }else{
           let temp = new DoublyLinkedListNode(value);
           temp.prev = this.tail;
           this.tail.next = temp;
           this.tail = temp           
        }
        this.size++;
    } 

    deletionAtHead(){
      let deletedVal;
        if(this.head == this.tail){
            this.head == null;
            this.tail == null;
            this.size--;
        }else{
          deletedVal = this.head.data;
          this.head = this.head.next;
          this.head.prev = null;
          this.size--;
        }
        return deletedVal;
    }

    deleteAtTail(){
      let deletedVal;
      if(this.tail != null){
        deletedVal = this.tail;
        if(this.head == this.tail){
           this.head = null;
           this.tail = null;
           this.size--;
        }else{
          this.tail = this.tail.prev;
          this.tail.next = null;
          this.size--
        }
      }
      return deletedVal;
    }

}

// insertion
const dll = new DoublyLinkedList;
dll.insertAtFront(10);
console.log(dll);
dll.insertAtFront(20);
console.log(dll);
dll.insertAtFront(30);
console.log(dll);

// dll.insertAtTail(5);
/*
console.log(dll);
console.log(`Deleted : ${dll.deletionAtHead()}`);
console.log(dll);
*/

console.log(dll.deleteAtTail());
console.log(`Size : ${dll.size}`)