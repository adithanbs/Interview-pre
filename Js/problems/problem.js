
// sum the array
// const sum = [11,12,13,14,55];
// const result = sum.reduce((acc,cur) => acc+cur,0);
// console.log(result);

// grouping the array
// const grouping = ["apple", "banana", "apple", "orange", "banana"];
// const result = grouping.reduce((acc,cur) => {
// acc[cur] = (acc[cur] || 0) + 1
// return acc}
// ,{});


// flatarray
// const arr = [[1,2],[3,[4,[5]],6]]

// function flat(arg) {
//     let result = []
//     arg?.forEach((item) => {
//     if(Array.isArray(item)){
//         result.push(...flat(item))
//     }else{
//         result.push(item)
//     }
//     })
//    return result;
// };

// console.log(flat(arr))

// group the value
// const group = [
//  {name: "A", role: "dev"},
//  {name: "B", role: "test"},
//  {name: "C", role: "dev"}
// ];
// const result = group.reduce((acc,cur) => {
//     if(!acc[cur.role]){
//         acc[cur.role]=[];
//     }
//     acc[cur.role].push(cur)
// },{})