// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let x = "global";
// if(x === "global"){
//   let x = "block-scope";
//   console.log(x);
// }
// console.log(x);
  


// var x = "global";
// if(x === "global"){
//   var x = "block-scope";
//   console.log(x);
// }
// console.log(x);
  
// const con = "a";
// con = "ss";
// console.log(con);

// const person = {
//   name: "jin",
//   age: 25
// };
// // 속성값을 일부만 변화시키는 것은 가능
// person.age = 35;
// // 속성의 일부는 변경 가능하나 객체 모든것을 변경할 수는 없다.(객체 재할당 불가)
// person = {
//   name: "OSA",
//   age: 15
// }
// console.log(person);

// const person = {
//   name: "jin",
//   age: 25
// };
// // 속성값을 일부만 변화시키는 것은 가능
// person.age = 35;
// console.log(person.age);
// // 속성값 얼리기(재할당 불가)
// Object.freeze(person);

// person.age = 30;
// console.log(person.age);

// function hi(){
//   console.log(a);
//   var a = 1;
// }
// hi();

// console.log(i);
// var i = "i am a var";
// console.log(j);
// let j = "i am a let"

// if(true){
//   let name = "jin"
//   console.log(name);
// }
// console.log(name);


let add = (a, b) => a + b;


console.log(add(1,2));