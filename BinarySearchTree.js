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
        }
        if (root.data === value){
            return root
        }
        if(value > this.root.data){
            root = root.right
            insert (value)
        }
        if(value < this.root.data){
            root = root.left
            insert (value)
        }
    },
    delete(value){
        
    },
    }
}
Tree([3,4,5,5,5,5,5,1,2,64,12,56,1223,20]);
