---
title:  "Javascript의 나머지 매개변수와 전개구문"
author: Jin
date: 2022-04-11 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [매개변수, 함수, 전개구문, 나머지 매개변수, argument]
toc: true
comments: true
---

# 나머지 매개변수, 전개구문(Rest parameters, Spread Syntax)

```jsx
function showName(name) {
    console.log(name);
}

showName('Jin'); //Jin
showName('Jin', 'Hyeuk') //Jin
showNmae(); //
```
- 자바스크립트에선 함수에 넘겨주는 인수의 갯수는 제약이 없다.
- 인수의 갯수를 정해놓고 함수를 만들어도 실제 호출할때 정확히 그 갯수를 맞출 필요는 없다.

## 함수의 인수를 얻는 방법
1. arguments
2. 나머지 매개변수

- 결정적으로 화살표 함수엔 arguments가 없다.


## arguments란?
- 함수로 넘어온 모든 인수에 접근 가능한 객체
- 함수 내에서 이용가능한 지역변수
- length, index를 가지고 있다.
- Array 형태의 객체
- 배열 내장메서드가 없다.(forEach, map)


```jsx
function showName(name){
    console.log(arguments.length); // 2
    console.log(arguments[0], arguments[1]); //Mike Toms
}

showName('Mike', 'Toms');
```

## 나머지 매개변수

```jsx
function showName(...names){
    console.log(names);
}

showName(); // []
showName('Mike'); //['Mike']
showName('Mike', 'Toms'); // ['Mike', 'Toms'];
```

- 나머지 매개변수는 정해지지 않은 갯수의 인수를 배열로 나타날 수 있게 한다.

###### 활용방법 - 전달된 모든 수를 더해야 한다면?

```jsx
function add(...numbers){
    return numbers.reduce((prev, cur) => prev + cur);
}

console.log(add(1,2,3,4,5)); //15
```
-  이런식으로 응용가능

---

## 생성자 함수에서의 나머지 매개변수 활용

```jsx
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "CSS");
const user2 = new User("Jin", 25, "JS","React");
const user3 = new User("Tom", 10, "Chinese");

console.log(user1); // User { name: 'Mike', age: 30, skills: [ 'html', 'CSS' ] }
console.log(user2); //  User { name: 'Jin', age: 25, skills: [ 'JS', 'React' ] }
console.log(user3); // User { name: 'Tom', age: 10, skills: [ 'Chinese' ] }
```
- 이러한 특성상 나머지 매개변수는 맨 마지막에 적어야 한다.


## 전개구문: 배열

```jsx
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result); //[ 1, 2, 3, 4, 5, 6 ]
```

## 전개구문: 객체

```jsx
let user = {name: 'jackson', gender: 'male'};
let jackson = {...user, age: 30};

console.log(jackson);
```




## 전개구문: 복제
```jsx
let arr = [1, 2, 3];
let arr2 = [...arr]; //[1, 2, 3]

let user = {name: 'Mike', age: 30};
let user2 = {...user};

user2.name = "Tom";

console.log(user.name); //"Mike"
console.log(user2.name); // "Tom"
```
- 배열과 객체 모두 전개구문으로 복제를 한다면 독립적인 객체로 할당된다.

--- 



## 전개구문 활용법 

### arr1을 [4, 5, 6, 1, 2, 3]으로 만들기
```jsx
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr2.reverse().forEach((num) => {
    arr1.unshift(num);
});

console.log(arr1);
```
- 전개구문을 쓰지 않았을때

```jsx
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr1 = [...arr2, ...arr1];
console.arr(arr1);
```
- 전개구문을 썼을 때

**훨씬 간편해졌다.**

### 객체 합치기

```jsx
let user = {name: "Jin"};
let info = {mbti: "esfj", age: 30};
let skills = ["JS", "React"];
let lang = ["korean", "English"];

let userInfo = Object.assign({}, user, info, {
    skills: [],
}); //객체 합치기

skills.forEach((item) => {
    userInfo.skills.push(item);
});
lang.forEach((item) => {
    userInfo.skills.push(item);
})

console.log(userInfo);
/**
 * {
    name: 'Jin',
    mbti: 'esfj',
    age: 30,
    skills: [ 'JS', 'React', 'korean', 'English' ]
    }
 * /
```
- 전개구문을 쓰지 않으면 이런 방식으로 객체에 할당해야 한다.

```jsx
let user = {name: "Jin"};
let info = {mbti: "esfj", age: 30};
let skills = ["JS", "React"];
let lang = ["korean", "English"];


let userInfo = {
    ...user,
    ...info,
    skills: [...skills, ...lang],
}
```
- 하지만 전개구문을 쓴다면 이렇게 간편하게 바뀐다.



