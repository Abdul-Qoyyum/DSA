const sll = require('./SinglyLinkedList');

/**
*Transverse through the list
*and set the next pointer to the
*previous one
**/
function reverseSinglyLinkedList(sll){
   let node = sll.head;
   let prev = null;
   while(node){
    let temp = node.next;
    node.next = prev;
    prev = node;
    if(node == null) break;
    node = temp;
   }
    return node;
}

console.log("Reversing the singlylinked list...");
const reversedLinkedList =  reverseSinglyLinkedList(sll);
console.log(reversedLinkedList);
