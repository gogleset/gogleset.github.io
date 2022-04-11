---
title:  "Javascript의 구조분해할당"
author: Jin
date: 2022-04-11 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [구조분해할당, 객체, 배열]
toc: true
comments: true
---

# 구조분해할당
- 구조분해할당 구문은 **배열**이나 **객체** 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식이다.

---

## 배열의 구조분해할당
```jsx
let users = ['Jin', 'Hyeuk', 'Young'];
let [user1, user2, user3] = users;

console.log(user1, user2, user3); //Jin Hyeuk Young
```
- 순서에 맞게 들어간다.

### 배열 구조분해: 메서드를 활용하기

```jsx
let str = "안녕-나는-철수야"
let [str1, str2, str3] = str.split("-");
console.log(str1, str2, str3); //안녕 나는 철수야
```

### 배열 구조분해: 기본값 할당
```jsx
let [a, b, c] = [1, 2];
console.log(a, b);
console.log(c); //undefined
```
-  만약 순서에 맞지 않는 값을 할당한다면, undefined가 할당된다.

###### 기본값 할당
```jsx
let [a, b, c = 8] = [1, 2];
console.log(a, b); // 1, 2
console.log(c); // 8
```
- 순서에 맞지 않으면 undefined를 할당하기 때문에 기본값을 넣어줄 수 있다.

###### 기본값이 있는 상태에서 할당이 된다면?

```jsx
let [a, b, c = 8] = [1, 2, 5];
console.log(a, b); // 1, 2
console.log(c); // 5
```
- 순서에 맞는 값이 있다면 기본값 대신 들어간다.


### 배열 구조분해: 바꿔치기 할당

#### a와 b의 값을 바꾸고 싶을때
```jsx
let a = 1;
let b = 2;
let c = a; //의미없는 변수 c에 a의 값을 임시저장

a = b;
b = c;
```
- 이런식으로 의미없는 변수 c에 a값을 넣어줘야한다.

###### 구조분해할당이라면?

```jsx
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b); //2 1
```
- 이런식으로 손쉽게 바꿀 수 있다.

--- 


## 객체의 구조분해할당

```jsx
let user = {
    name: 'Jin',
    age: 10,
}
let {age, name} = user;
console.log(name, age); //Jin 10
```
- 배열의 구조분해와 다르지 않지만, 배열과 다르게 순서를 신경쓰지 않아도 된다.


### 객체 구조분해: 새로운 변수이름으로 할당

```jsx
let user = {
    name: 'John',
    age: 10,
};
let {name: userName, age: userAge} = user;

console.log(userName); //"john"
console.log(userAge); //10
```

### 객체 구조분해: 기본값 할당
```jsx
let user = {name: 'Jin', age: 30};
let {name, age, gender} = user; 

console.log(name, age, gender); //Jin, 30, undefined
```
- 만약 참조하고 있는 객체에 값이 없다면 undefined를 출력한다.


```jsx
let user = {name: 'Jin', age: 30};
let {name, age, gender = 'male'} = user;

console.log(name, age, gender); //Jin, 30, male
```
- 기본값을 주었으니 값이 없어도 할당된 기본값이 출력된다.
- 물론 기본값이니 값이 있으면 그 값을 쓴다.





