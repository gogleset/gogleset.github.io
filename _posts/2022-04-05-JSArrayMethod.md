---
title:  "Javascript의 Array 메소드"
author: Jin
date: 2022-04-05 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [메소드, 내장객체, Array]
toc: true
comments: true
---

# 유용한 Array 메소드 모음

## 배열의 뒤부터 삽입

### arr.push()

```jsx
let array = [];

array.push("안녕"); // ['안녕']

let array2 = array.push(11); // 2
```
- 뒤에서부터 넣어준다.
- push로 할당된 배열을 변수에 할당하면 그 배열의 길이가 할당된다.(array) 그리고 push는 원래대로 동작하여 배열에 넣어준다.


## 배열의 뒤부터 삭제

### arr.pop()

```jsx
const array = [1, 2, 3, 4];

array.pop();

console.log(array);
//[ 1, 2, 3 ]

let array2 = array.pop();

console.log(array2); // 3
```
- 뒤에서부터 삭제한다.
- pop한 배열을 할당하면 지운 객체가 할당된다.


## 배열의 앞에 삽입

### arr.unshift()

```jsx
let array = [];

array.unshift("안녕"); // ['안녕']

let array2 = array.unshift(11); // 2

console.log(array); // [ 11, '안녕' ]
console.log(array2); // 2
```
- 앞에서부터 배열에 추가
- unshift를 한 객체를 변수에 할당하면 배열의 길이가 할당된다.


## 배열의 앞부터 삭제

### arr.shift()

```jsx
const array = [1, 2, 3, 4];

array.shift();

console.log(array);
//[ 1, 2, 3 ]

let array2 = array.shift();

console.log(array2); //2
```
- 배열의 앞부터 삭제한다.
- shift를 한 객체를 변수에 할당하면 배열의 길이가 할당된다.


## 특정요소 지우기(n부터 m개)

### arr.splice(n,m)

```jsx
let arr = [1, 2, 4, 5, 10];

let arr2 = arr.splice(0, 3);

console.log(arr); //[ 5, 10 ]

console.log(arr2); //[ 1, 2, 4 ]
```
- n부터 m개까지 지우기
- 자른 배열을 다시 할당도 가능 (arr2)


## arr.splice(n,m,x)

### n번째부터 m개를 지우고, 그 자리에 배열추가
```jsx
let arr = [1, 2, 4, 5, 10];

let arr2 = arr.splice(0, 3, "하이", "히히");

console.log(arr); //[ '하이', '히히', 5, 10 ]

console.log(arr2); //[ 1, 2, 4 ]

arr.splice(2, 0, "안녕"); //지우지 않고 n번째 자리 뒤에 배열에 추가
```
- 할당될 객체엔 새로운 배열에 추가할 요소까지 들어가진 않는다.(arr2)
- splice(n, 0, x)는 지우지않고 n번째 인덱스 뒤에 배열 추가


## arr.slice(n, m)

### n부터 m까지 반환과 깊은 복사


```jsx
let arr = [1, 2, 4, 5, 10];
let arr2 = arr.slice(0,3); //0 부터 3까지

console.log(arr2); //[ 1, 2, 4 ]
```
- n부터 m까지 자르기
- 실제 원본 배열에 영향을 미치지 않는다.



#### arr.slice()
```jsx
let arr = [1, 2, 4, 5, 10];
let arr2 = arr.slice(); //배열 깊은 복사

arr.push(2); // arr을 얕은복사했다면 

console.log(arr2); //여기도 끝에 2가 나와야한다. 하지만 나오지않는다.
```
- 배열의 깊은 복사가 가능하다.


---


## 합쳐서 새로운 배열 반환

### arr.concat(arr2, arr3...);

```jsx
let arr = [1, 2];
arr.concat([3, 4]); //[1, 2, 3, 4]
arr.concat([5, 6], [7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
```
- 배열 합치기


## 배열 반복

### arr.forEach(fn)
```jsx
let users = ['ma', 'sib', 'ajq'];

users.forEach((item, index, arr) =>{
    console.log(item, index);
    /**
     *  ma 0
        sib 1
        ajq 2
     */
})
```
- 배열 반복

## 값이 있는 곳의 주소를 반환

### arr.indexOf() / arr.lastIndexOf()
```jsx
let arr = [1,2,3,4,5];


console.log(arr.indexOf(3)); //2
console.log(arr.indexOf(5, 1)); // 첫번째 파라미터는 찾을 객체, 두번째 파라미터는 n번째부터


console.log(arr.lastIndexOf(3)); //2
console.log(arr.lastIndexOf(5, 5)); // 첫번째 파라미터는 찾을 객체, 두번째 파라미터는 n번째부터 
```
 - 주의 : lastIndexOf는 탐색 방향이 indexOf의 반대방향이다.

## 값이 포함하는지 확인

### arr.includes()
```jsx
let arr = [1, 2, 3];

arr.includes(2) // true
arr.includes(8) // false
```
- 값이 포함하는지 확인한 후 boolean 값 리턴

## 보다 복잡한 연산이 가능한 찾기 방법

### arr.find(fn) / arr.findIndex(fn)
```jsx
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);
const notFound = array1.find(element => element < 1)

console.log(found); //12
console.log(notFound); //undefined
```

```jsx
const foundIndex = array1.findIndex(element => element > 10);
const notFoundIndex = array1.findIndex(element => element < 1)

console.log(foundIndex);
console.log(notFoundIndex);
```
- 주의할 점 : 찾으면 true값만 반환한다. 만약 없다면 undefined.
- findIndex는 없다면 -1을 반환

## 만족하는 모든 요소를 배열로 반환

### arr.filter(fn)
```jsx
let arr = [1,2,3,4,5];
let result = arr.filter(x => x % 2 === 0);

console.log(result); //[ 2, 4 ]
```
- 만족하는 모든 요소를 배열로 반환한다.


## 역순으로 정렬


### arr.reverse()
```jsx
let arr = [1,2,3,4,5];

console.log(arr.reverse()); //[5, 4, 3, 2, 1 ]
```


## 함수를 받아 특정기능을 실행하고 새로운 배열을 반환받기

### arr.map(fn)

```jsx
let userList = [
    {name: "mike", age: 28},
    {name: "wise", age: 30},
    {name: "aiase", age: 40},
];

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);
/**
 * [
  { name: 'mike', age: 28, id: 0, isAdult: true },
  { name: 'wise', age: 30, id: 1, isAdult: true },
  { name: 'aiase', age: 40, id: 2, isAdult: true }
]
 */ 
```
- map은 탐색, 배열만들기 등등 할 수 있는 기능이 많다.


## 배열을 합쳐 문자열로 반환

### arr.join()

```jsx
let arr = ["안녕", "나는", "철수야"];

let arr2 = arr.join(" ");
let arr3 = arr.join("-");
console.log(arr2);//안녕 나는 철수야
console.log(arr3);// 안녕-나는-철수야
```


## 문자열을 잘라 배열로 반환

### arr.split()
```jsx
let str = "안녕 나는 철수야"

let arr = str.split(" ");
console.log(arr); //[ '안녕', '나는', '철수야' ]
```


## 배열인지 확인

### Array.isArray()

```jsx
let str = "안녕 나는 철수야"
let arr = [1, 2, 3];

console.log(typeof arr); //object
console.log(Array.isArray(str));//false
console.log(Array.isArray(arr));//true
```
- 자바스크립트에선 배열을 확인할 수 없기 때문에(배열은 object로 분류)
isArray를 써서 확인해야한다.

## 배열 정렬

### arr.sort()

```jsx
let arr = [1, 5, 4, 2, 3];

arr.sort();
console.log(arr); //[1,2,3,4,5]

let arr2 = [27, 8, 5, 13];
arr2.sort();
console.log(arr2) //[ 13, 27, 5, 8 ]


let arr3 = ["banana", "camel", "apple"]
console.log(arr3.sort());
// [ 'apple', 'banana', 'camel' ]
```
- sort 함수는 배열을 정렬할때 문자열로 취급하여 숫자가 두자릿수 이상일때는 원치 않게 동작한다.

###### 제대로 된 배열 정렬
```jsx
let arr = [27, 8, 5, 13];
arr.sort((a, b) => a - b);
console.log(arr); //[ 5, 8, 13, 27 ]
```
- sort 함수는 정렬하려면 새로운 정렬법을 사용해야한다.


## arr.reduce()

### 배열을 가산하고 새로운 값 리턴

```jsx
let arr = [1, 2, 3, 4, 5];

const result = arr.reduce((prev, next) =>{
    return prev + next;
}, 0)
//0은 prev의 초기값이다.

console.log(result); //15
```
- ((누적계산값, 현재값) => {return 계산값})


###### or
```jsx
let userList = [
    {name: "John", age: 21},
    {name: "Doe", age: 22},
    {name: "D", age: 17},
]

let result = userList.reduce((prev, cur) => {
    // 만약 배열의 나이 값이 19세 이상이라면
    if(cur.age >= 19){
        prev.push(cur.name)
    } 
    return prev;
}, []);
//prev는 배열도 가능하다/
console.log(result);
```
- 리듀스 함수는 다양하게 활용 가능하다






