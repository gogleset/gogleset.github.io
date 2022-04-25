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

class Car {
  constructor(color) {
    this.color = color;
    this.wheel = 4;
  }

  drive() {
    console.log("Drive");
  }
  stop() {
    console.log("Stop");
  }
}

class Bmw extends Car {
  parking() {
    console.log("parking");
  }
  stop() {
    super.stop();
    console.log("Bmw stop");
  }
}

const m1 = new Bmw("Black");

console.log(m1.stop());
// stop
// Bmw stop
