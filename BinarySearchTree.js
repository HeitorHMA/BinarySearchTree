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
    printLevelOrder(root = this.root){
        if (root == null){
            return null
        };

        const queue = [];

        queue.push(root);
        while ( queue.length > 0){
            const node = queue.shift();
            console.log(node.data);

            if(node.left !== null){
                queue.push(node.left)
            }
            if(node.right !== null){
                queue.push(node.right)
            };
        };
    },
    inOrder(root = this.root){
        if(root == null){
            return null
        }
        root.left = this.inOrder(root.left)
        console.log(root.data);
        root.left = this.inOrder(root.right)
    },
    postOrder(root = this.root){
        if(root == null){
            return null
        }
        root.left = this.postOrder(root.left)
        root.left = this.postOrder(root.right)
        console.log(root.data);
    },
    preOrder(root = this.root){
        if(root == null){
            return null
        }
        console.log(root.data);
        root.left = this.preOrder(root.left)
        root.left = this.preOrder(root.right)
    },
    height(root = this.root) {
        if (root === null) return 0;
  
        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);
  
        if (lHeight > rHeight) {
          return lHeight + 1;
        } else {
          return rHeight + 1;
        }
    },
    depth(node,root = this.root, depth = 0){
        if(root === null || node === null){
            return 
        };
        if (node === root){
            return depth
        }
        if (node.value > root.value) {
            return this.depth(node,root.right,depth += 1)
        }
        else{
            return this.depth(node,root.left,depth += 1)
        }
    },
    isBalanced(root = this.root){
        if(root = null){
            return true
        }
        let lh = this.height(root.left);
        let rh = this.height(root.right);
        if(Math.abs(lh - rh) <= 1 && this.isBalanced(root.left) == ture && this.isBalanced(root.right) ==  true ) {
            return true
        }
        return false

    },
    prettyPrint (node = this.root, prefix = "", isLeft = true){
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    },

    }
}
  console.log(Tree([3,4,5,5,5,5,5,1,2,64,12,56,1223,20]).depth(1223))
  console.log(Tree([3,4,5,5,5,5,5,1,2,64,12,56,1223,20]).prettyPrint())