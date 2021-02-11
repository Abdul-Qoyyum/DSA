const SinglyLinkedList = require('./SinglyLinkedList');

/**
*To delete duplicates in a linkedlist,
*transverse over the list and
*save the value in an array removing
*the value that has already been saved
*time complexity O(n^2)
*space complexity O(n)
**/
function DeleteDuplicateInUnsortedLinkedList(sll){
  const track = [];
  let node = sll.head;
   while(node){
     if(track.indexOf(node.data) >= 0){
      sll.size--
     }else{
       track.push(node.data);
     }
      node = node.next;
   }
   return track;
}


/**
*time complexity O(n)
*space complexity O(n)
**/

function DeleteDuplicateInUnsortedLinkedListBest(sll){
  const track = [];
  let node = sll.head;
  while(node){
   if(track[node.data]){
    sll.size--;
   }else{
    track[node.data] = true;
   }
   node = node.next;
  }
  return track;
}

// insert operation
const sll = new SinglyLinkedList();
sll.insert(34);
//console.log(sll1);
sll.insert(2);
//console.log(sll1);
sll.insert("Hello world");
sll.insert(34);


console.log(DeleteDuplicateInUnsortedLinkedList(sll));
const track = DeleteDuplicateInUnsortedLinkedListBest(sll);
console.log(track);
