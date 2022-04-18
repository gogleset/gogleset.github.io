---
title:  "Javascript의 Call, Apply, Bind"
author: Jin
date: 2022-04-18 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [this]
toc: true
comments: true
---


# 함수 호출 방식과 관계없이 this의 값을 지정하는 방법
1. call
2. apply
3. bind


## Call
- 모든 함수에서 사용할 수 있으며 this를 특정값으로 지정할 수 있다.

```jsx
const jin = {
    name: "Jin", 
}

const jerry = {
    name: "Jerry", 
}

function showThisName(){
    console.log(this.name);
}

showThisName(); //this가 지정되지않음
showThisName(jin); //undefined

showThisName.call(jin); //Jin
showThisName.call(jerry); //Jin
```

- 함수를 호출하면서 call을 사용하고, this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인것처럼 사용 가능하다.
- this를 지정하지 않았기 때문에 call을 사용하여 객체를 넘겨줌으로써 해당 메서드의 this가 인식되어 사용 가능하다.


---


```jsx
const jin = {
    name: "Jin", 
};

const jerry = {
    name: "Jerry", 
};

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.call(jin, 1999, 'developer'); 
update.call(jerry, 2000, 'teacher');

console.log(jin); //{ name: 'Jin', birthYear: 1999, occupation: 'developer' }
console.log(jerry); //{ name: 'Jerry', birthYear: 2000, occupation: 'teacher' }
```

- call의 첫번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있다면 그 매개변수를 호출할 함수로 전달된다.
  
---

## Apply
- 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같지만 매개변수를 배열로 받는다는 차이점이 있다.

```jsx

const nums = [3, 10, 1, 6, 4];

// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4]);

const maxNum = Math.max.call(null, ...nums);

console.log(minNum);
console.log(maxNum);
```
- apply의 첫번째 파라미터는 this가 될 객체를 전달하고, 나머지는 배열형태로 전달한다.
- call과 apply는 직접 받고, 배열로 받고의 차이점만 빼곤 동일하게 동작한다.


---

## bind
- 함수의 this 값을 영구히 바꿀 수 있다.
- this 값 고정


```jsx

const jin = {
    name: "Jin", 
};

const jerry = {
    name: "Jerry", 
};

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

const updateJin = update.bind(jin); //항상 jin을 this로 갖는다.

updateJin(1981, "cashier");
console.log(jin);
```
- call과 apply와는 다르게 this의 값이 고정되어 있게 사용할 수 있다.


---


```jsx
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
let boundFn = fn.bind(user);
// user.showName.bind;

boundFn(); //hello, John
//bind로 this값을 전달하면 call과 apply와는 다르게 this값이 고정되어 할당가능
```
- call로 된 함수를 할당하면 error 
- 꼭 this값이 고정된 함수를 실행시키고 싶다면 bind

