// const fs = require('fs');
// const array = fs.readFileSync('/dev/stdin').toString().split('\n');

// const fs = `11`;
// const input = Number(fs.split(",").join(""));

// let a = [
//     [],
// ];

// console.log(a[0]);
// let n = 1;
// let b = 0;
// // for (let i = 1; i < input + 1; i++) {
// //     n += b + 1;
// //     b += 4;
// //     console.log(n);
// // }

// while(true){
//     n += b + 1;
//     b += 4;
//     a[0].push(n - 1);
//     a[0].push(n);
//     if(n > input){
//         break;
//     }
// }
// console.log(a[0]);

const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 완료");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("2번완료");
    }, 2000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 완료");
    }, 3000);
  });
};
// console.time("pr");
// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.timeEnd("pr");
//   });
console.log("시작");
console.time("pr.all");
Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("pr.all");
})