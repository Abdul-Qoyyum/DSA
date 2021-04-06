
function binaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

class BinaryTree{
   constructor(){
     this._root;
   }

//handle pre-order transversal recursively
   transversePreOrder(node){
     return this.transversePreOrderHelper(node);
   }

   transversePreOrderHelper(node){
     if(!node){
       return;
     }
    console.log(node.value);
//left of the tree
     this.transversePreOrderHelper(node.left);
//right of the tree
     this.transversePreOrderHelper(node.right);
   }

   transversePreorderIterative(node){
//create an array to hold the tree
     const nodeStack = [];

     nodeStack.push(node);

     while(nodeStack.length){
//pop the node 
      let currentNode = nodeStack.pop();
//log the value
      console.log(currentNode.value);

//push the right sibling
      if(currentNode.right){
        nodeStack.push(currentNode.right);
      }
//then left
      if(currentNode.left){
        nodeStack.push(currentNode.left);
      }

    }

   }


//In-order transversal recursive
   transverseInorder(node){
     return this.transverseInorderHelper(node);
   }


   transverseInorderHelper(node){
     if(!node)return;

//keep moving left
     transverseInorderHelper(node.left);
     console.log(node.value);
//then move right
     transverseInorderHelper(node.right);
   }

//In-order transversal  iterative
   transverseInorderIterative(node){
     let s = [];
     let currentNode = node;

     while(true){

      if(currentNode != null){
        s.push(currentNode);
        currentNode = currentNode.left;
      }else{

       if(s.length){
         let temp = s.pop();
         console.log(temp.value);
         currentNode = temp.right;
       }else{
          break;
       }
     }
    }
   }

}
