function Node(data){
    return{
      this.data = data,
      this.left = null,
      this.right = null,
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
    root:buildTree(organizedArray),
    }
}
Tree([,2,3,4,5,5,5,5,5,1,2,64,12,56,1223,20]);