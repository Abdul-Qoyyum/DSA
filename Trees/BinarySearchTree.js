/**
* Binary search tree
* Author : Nurudeen Qoyyum Timilehin
*
**/
class BinarySearchTree{
  constructor(){
   this._root = null;
  }

  insert(value){
   const newNode = {
      value,
      left : null,
      right : null
    };
   if(!this._root){
//if the root node is empty
//set the head as the new node
     this._root = newNode;
   }else{
     let currentNode = this._root;
     while(true){
//left node must be smaller than the parent node
       if(currentNode.value > value){
//if the left node is empty set it as the
//new node else increment (chsnge the current node)
        if(currentNode.left == null){
           currentNode.left = newNode;
           break;
         }else{
           currentNode = currentNode.left;
         }
       }else if(currentNode.value < value){
          if(currentNode.right == null){
             currentNode.right = newNode;
             break;
          }else{
             currentNode = currentNode.right;
          }
       }else{
          break;
       }
     }
   }
  }

//remove root node recursively
  deleteRecursively(root, value){
    if(!root){
      return;
    }else{
     if(root.value < value){
      root.right = this.deleteRecursively(root.right, value);
     }else if(root.value > value){
      root.left = this.deleteRecursively(root.left, value);
     }else{
       if(root.left == null){
         return root.right;
       }else if(root.right == null){
         return root.left;
       }else{
        let temp = this.findMinRoot(root.right);
        root.value = temp.value;
        root.right = this.deleteRecursively(root.right,temp.value);
       }
     }
     return root;
     }
   }

  findMinRoot(root){
   let minRoot;
    while(root.left){
     minRoot = root;
    }
   return minRoot;
  }


  remove(value){
    let root = this._root;
    return this.deleteRecursively(root, value);
  }

}

const BST = new BinarySearchTree();
BST.insert(23);
BST.insert(267);
BST.insert(10);
BST.insert(23);
BST.insert(400)
console.log(BST);
BST.remove(400);
console.log(BST);
