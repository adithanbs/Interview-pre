// 1, updated name
// const user = {id:1, name:'Adi', age:27};
// user.name = 'Kannan';

// 2,add new property
// const user = {id:1, name:'Adi'};
// user['city'] = 'chennai';

// 3,Delet property
// const user = {id:1, name:'Adi', password:'12345'}
//  delete user['password']; 
// const {password, ...res} = user
// console.log(res);


// 4, Rename key
// const user = {id:1, userName:'Adi'};
// user.name = user.userName;
// delete user.userName
// const {userName:name,...rest} = user;
// console.log({name,...rest});

// 5, Merge two objects
// const user = { id: 1, name: "Adi" };
// const details = { age: 27, city: "Chennai" };
// console.log({...user,...details});

// 6. Update nested city
// const user = {
//   id: 1,
//   name: "Adi",
//   address: {
//     city: "Chennai",
//     pincode: 600001,
//   },
// };

// user.address.city = 'Bangalore'
// console.log(user);

// 7. Add nested landmark
// const user = {
//   id: 1,
//   address: {
//     city: "Chennai",
//   },
// };
// user.address.landmark = 'Near bu bus stand';
// console.log(user);

// 8,Delete nested pincode
// const user = {
//   id: 1,
//   address: {
//     city: "Chennai",
//     pincode: 600001,
//   },
// };

// delete user.address.pincode
// console.log(user);

// 9. Update deeply nested value. how many better way to update nest ed obj ask gpt ?
// const user = {
//   id: 1,
//   profile: {
//     personal: {
//       name: "Adi",
//       age: 27,
//     },
//   },
// };
// user.profile.personal.age = 28;
// console.log(user.profile.personal.age);

// 10, Update one skill inside nested array
// const user = {
//   id: 1,
//   skills: ["React", "JS"],
// };
// user.skills.push('Next.js')
// console.log(user);

// 11,Update user by id
// const users = [
//   { id: 1, name: "Adi" },
//   { id: 2, name: "Kumar" },
// ];

// users.forEach((item) => {
//     return item.id === 2 ? item.name = 'vinoth': item
// });

// console.log(users);

// 12. Delete user by id
// const users = [
//   { id: 1, name: "Adi" },
//   { id: 2, name: "Kumar" },
// ];

// const result = users.filter((item) => {
//     return item.id !== 1;
// });

// console.log(result);

// 13. Add new user
// const users = [
//   { id: 1, name: "Adi" },
// ];
// users.push({ id: 2, name: "Kumar" })

// 14. Toggle completed
// const todos = [
//   { id: 1, title: "Learn React", completed: false },
//   { id: 2, title: "Learn JS", completed: true },
// ];
// todos.forEach((item) => {
//     return item.id === 1 ? item.completed = true : item
// });
// console.log(todos);

// 15. Update nested object inside array
// const users = [
//   {
//     id: 1,
//     name: "Adi",
//     address: { city: "Chennai" },
//   },
//   {
//     id: 2,
//     name: "Kumar",
//     address: { city: "Madurai" },
//   },
// ];

// users.forEach((item) => {
//     return item.id === 2 ? item.address.city = 'coimbatore' : item
// });

// console.log(users);

// 16 React State Style
// Update object state 
// const handleUpdate = () => {
//   setUser(prev => {
//     return { ...prev,age : 23}
//   });
// };

// 17 Update nested object state
// const handleUpdate = () => {
//   setUser(prev => {
//     return { ...prev,address:{
//       ...prev.address,city:'bangalore'
//     }}
//   });
// };

// 18, Add item to array state
// const handleUpdate = () => {
//   setProducts(prev => {
//     return [...prev, {id: 2, name: "Potato" }]
//   })
// };

// 19. Edit item in array state
// const handleUpdate = () => {
//   let updateProduct = products.map(item => item.id === 1 ? {...item,price:25} : item)
//   setProducts(updateProduct);
// };

// 20,Delete item from array state
// const handleUpdate = () => {
//   let updateProduct = products.filter(item => item.id !== 2 )
//   setProducts(updateProduct);
// };
