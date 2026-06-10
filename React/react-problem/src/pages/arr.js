// 1. Find Sum of Array
// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i<arr.length; i++) {
//     sum += arr[i];
// }
// const sum = arr.reduce((acc,cur) => acc+cur,0)
// console.log(sum);

// 2. Find Maximum Number
// const arr = [10, 5, 20, 8, 15];
// let max = arr[0];
// for(let i = 0; i<arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max);

// 3,Find Minimum Number
// const arr = [10, 5, 20, 8, 15];
// let max = arr[0];
// for(let i = 0; i<arr.length; i++) {
//     if(arr[i] < max) {
//         max = arr[i]
//     }
// }
// console.log(max);

// 4. Count Even Numbers
// const arr = [1,2,3,4,5,6,7,8];
// let countEvent = 0
// arr.forEach((item) => item % 2 === 0 ? countEvent ++ : null );
// console.log(countEvent);

// 5. Reverse an Array
// const arr = [1,2,3,4,5];
// const reveseArr = arr.reverse();
// console.log(reveseArr);

// const reveseArr = [];
// arr.forEach(item => reveseArr.unshift(item))
// console.log(reveseArr);

// const reveseArr = [];
// for(let i = 0; i < arr.length; i++) {
//     reveseArr.push(arr[arr.length -1 - i])
// }
// console.log(reveseArr);

// 6. Remove Duplicates
// const arr = [1,2,2,3,4,4,5];

// const result = arr.filter((item,index) => arr.indexOf(item) === index);
// console.log(result);

// const result = [];
// arr.forEach(item => !result.includes(item) ? result.push(item) : null)
// console.log(result);

// 7. Check Element Exists

// const arr = [10,20,30,40];
// const target = 30;

// console.log(arr.includes(target))

// 8. Find Second Largest Number
// const arr = [10,20,5,30];
// const secondLargest = arr.filter((item,index) => arr.indexOf(item) === index).sort((a,b) => b - a);
// console.log(secondLargest[1]);

// let max1 = arr[0]; will check
// let max2 = arr[0];
// let max3 = arr[0];


// arr.forEach(item => {
//     if(item > max1) {
//         max1 = item
//     }else if(item > max2 && item < max1 ) {
//         max2 = item
//     }else if(item > max3 && item < max2  ) {
//         max3 = item
//     };
// })

// console.log(max1,max2,max3);

// 9,Find Missing Number
// const arr = [1, 2, 3, 5];
// for(let i = 1; i < arr.length + 1; i++) {
//     if(!arr.includes(i)){
//         console.log(i);
//     }
// }

// 10. Move All Zeros to End
// const arr = [1,0,2,0,3,4,0,3];
// const result = [
//     ...arr.filter(i => i !== 0 )
//     ...arr.filter(i => i === 0),
//     ...arr.filter(i => i === 3),
// ];
// console.log(result);



// 11. Count Frequency
// const arr = ['apple','banana','apple','mango'];

// let result = {};

// for(let i=0; i<arr.length; i++){
//     result[arr[i]] = (result[arr[i]] || 0) + 1
// }
// console.log(result['apple']);


// 12. Find Common Elements
// const arr1 = [1,2,3,4];
// const arr2 = [3,4,5,6];

// const result = arr1.filter(item => arr2.includes(item));

// console.log(result);

// 13
// const arr = [2,3,2,4,3,5,4];
// const result = arr.reduce((acc,cur) => {
//     acc[cur] = (acc[cur] || 0 ) + 1
//     return acc;
// },{});
// for(key in result){
//     if(result[key] === 1){
//         console.log(key);
//     }
    
// }

// 15. Group By Age
// const users = [
//  {name:'Adi', age:25},
//  {name:'Ram', age:30},
//  {name:'John', age:25}
// ];

// let obj = {};

// users.forEach((item) => {
//     if(!obj[item.age]){
//         obj[item.age] = [item]
//     }else{
//       obj[item.age].push(item);
//     }
// })

// console.log(obj);

// 16. Flatten Array
// const arr = [1,[2,[3,4]],5];

// const flatArr = (arr) => {
//     let result = [];
//     arr.forEach((item) => {
//         if(Array.isArray(item)){
//             result.push(...flatArr(item))
//         }else{
//             result.push(item)
//         }
//     })
//     return result;
// }

// console.log(flatArr(arr));

// 17. Sort Products by Price
// const products = [
//  {id:1, price:300},
//  {id:2, price:100},
//  {id:3, price:200}
// ];
// const sorted = products.sort((a,b) => a.price - b.price);
// console.log(sorted);

// 18. Find Duplicate Elements
// const arr = [1,2,3,2,4,5,1];
// const sort = arr.filter((item,index) => arr.indexOf(item) !== index);
// console.log(sort);

// 19. Chunk Array explain this one and how chuck getting empty every timr it hild hold prevers value right

//  const arr = [1,2,3,4,5,6,7];
//  const size = 3;

// let chucks = [];

// for(let i =0; i <arr.length; i += size) {
//     let chuck = []
//     for(let j = i; j < i + size && j < arr.length; j++) {
//         chuck.push(arr[j])
//     }
//     chucks.push(chuck);
// }

// const chucks = arr.reduce((acc,cur,index) => {
//     if(index % size  === 0){acc.push(arr.slice(index, index+size))}
//     return acc
// },[])
// console.log(chucks);

// const arr = [1,2,3,4,5,6,7];
// const size = 3;

// const chunks = [];

// for(let i = 0; i < arr.length; i += size) {
//   chunks.push(arr.slice(i, i + size));
// }

// console.log(chunks);

// // 20. Rotate Array Right by K Positions
// function rotateclockwise(arr, k) {
    
//     if (k === 0 || arr.length === 0) {
//         return;
//     }

//     let n = arr.length;

//     // rotate the array to the right by 
//     // one position
//     let temp = arr[n - 1];
//     for (let i = n - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = temp;

//     // recursive call for remaining k - 1 
//     // rotations
//     rotateclockwise(arr, k - 1);
// }

// // Driver Code
// let arr = [1, 2, 3, 4, 5, 6];
// let k = 2;
// rotateclockwise(arr, k); 
// console.log(arr.join(" "));




































































