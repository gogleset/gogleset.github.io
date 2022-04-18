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



const user = {
    name: 'John',
    showName: function(){
        console.log(`hello, ${this.name}`);
    }
}

user.showName(); //hello, John

let fn = user.showName;

fn(); //hello, undefined
// 메서드는 점 앞에있는 것이 this이다. this를 할당하지 않았기 때문에 undefined가 출력된다.

fn.call(user); //hello, John
fn.apply(user); //hello, John

// let boundFn = fn.call(user); //error
let boundFn = user.showName.bind(user);

boundFn(); //hello, John
//bind로 this값을 전달하면 call과 apply와는 다르게 this값이 고정되어 할당가능