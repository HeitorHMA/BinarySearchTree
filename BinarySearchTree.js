function Node(data , right = null , left = null){
    return{
      data : data,
      left : left,
      right : right,
}};
function buildTree(arr , start = 0 , end = arr.length - 1 ){
    if (start > end) return null;

    const mid = parseInt((start + end) / 2);
    const root = Node(arr[mid]);

    root.left= buildTree(arr, start, mid - 1);
    root.right = buildTree(arr, mid + 1, end);
     
    return root;
   };
function Tree (arr){
    const organizedArray = [...new Set(arr.sort((a,b)=> a - b))];
    return{
    root : buildTree(organizedArray),
    insert(value,root = this.root){
        if (root == null ){
            return new Node (value)
        };
        if (root.data === value){
            return root
        };
        if(value > root.data){
            root.right = this.insert(value,root.right)
        }
        else if(value < root.data){
            root.left = this.insert(value,root.left)
        };
        return root;
    },
    getSuccessor(curr){
        curr : curr.right
        while (curr !== null && curr.left !== null){
            curr = curr.left
        }
        return curr
    },
    delete(value, root = this.root){
            if (root == null ){
                return root
            }
            if(value > root.data){
                root.right = this.delete(value,root.right)
            }
            else if(value < root.data){
                root.left = this.delete(value,root.left)
            }
            else {
                if (root.left == null){
                    return root.right;
                }
                if ( root.right == null){
                    return root.left;
                }
                else {
                    let successor = this.getSuccessor(root)
                    root.data = successor.data
                    root.right = this.delete(root.right, successor.data)
                }
            }
            return root;
    },
    find(value, root = this.root){
        if(root === null || root.data === value){
            return root
        }
        if (value > root.data){
            return this.find(value,root.right)
        }
        if (value < root.data){
            return this.find(value,root.left)
        }
    },
    

    
    }
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  prettyPrint(Tree([3,4,5,5,5,5,5,1,2,64,12,56,1223,20]).delete(1))

  console.log((Tree([3,4,5,5,5,5,5,1,2,64,12,56,1223,20]).find(4)))