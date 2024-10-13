// 1.  Merging two arrarys of data fetched from seprate APIs into a single list.

// const names = ["john","alice", "Bob", "Charlie", "David", "Emma"];
// const lastName = ["Doning","HTML", "CSS", "React", "Node.js", "MongoDB"];

// const fullnames  = [...names, ...lastName];

// 2. Filtering an arrary of Objects to display items based on a search query (e.g., filterning products by type).

// const products = [
//     { name: "Laptop", price: 1000, type: "Electronics" },
//     { name: "Smartphone", price: 500, type: "Electronics" },
//     { name: "T-shirt", price: 20, type: "Clothing" },
//     { name: "Jeans", price: 40, type: "Clothing" },
//     { name: "Tablet", price: 300, type: "Electronics" },
//     { name: "Headphones", price: 150, type: "Electronics" },
//     { name: "Jacket", price: 80, type: "Clothing" },
//     { name: "Sneakers", price: 60, type: "Clothing" }
//   ];
  

// const newProducts = products.filter(function(product){
//    return product.type === "Electronics";
// });

//  3.Maapping over an arrary of user data to create a list of user cards

// const users = [
//     {name :"John" ,age :20},
//     {name :"Mohn" ,age :40},
//     {name :"Kohn" ,age :50},
//     {name :"Lohn" ,age :60},
// ];
// let newUser = users.map(function(user){
//      return `<div><h3>${user.name}</h3><h5>${user.age}</h5></div>`;
// })


// 4. Grouping of an arrary of Objects by a specific property (e.g., grouping users by role ).

// const users = [
//     {name :"John" ,age :20, role: "admin"},
//     {name :"Mohn" ,age :40, role: "user"},
//     {name :"Kohn" ,age :50, role: "user"},
//     {name :"Lohn" ,age :60, role: "admin"},
// ];

// let obj = {};
// users.forEach(function(user){
//   if(obj[user.role]){
//  obj[user.role].push(user);
//   }else{
//     obj[user.role] = [];
//     obj[user.role].push(user);

//   }
// })
// console.log(obj);

// const users = [
//     { name: "John", age: 20, role: "admin" },
//     { name: "Mohn", age: 40, role: "user" },
//     { name: "Kohn", age: 50, role: "user" },
//     { name: "Lohn", age: 60, role: "admin" }
//   ];
  
//   const groupedUsers = users.reduce((acc, user) => {
//     // If the role doesn't exist in the accumulator, create a new array
//     if (!acc[user.role]) {
//       acc[user.role] = [];
//     }
//     // Push the user into the corresponding role array
//     acc[user.role].push(user);
//     return acc;
//   }, {});
  
//   console.log(groupedUsers);

//5. Removing or updating a specific in an arrary of data based on a unique ID.

// const people = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "Alice", age: 30 },
//     { id: 3, name: "Bob", age: 22 },
//     { id: 4, name: "Charlie", age: 28 },
//     { id: 5, name: "Emma", age: 35 }
//   ];

//    let newPeo=  people.filter(function(people){
//         return people.id !== 2;
//     })
  