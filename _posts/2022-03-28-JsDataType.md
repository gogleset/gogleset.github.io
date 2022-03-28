---
title:  "Javascript의 데이터 타입"
author: Jin
date: 2022-03-26 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [데이터타입, 자료형]
toc: true
comments: true
---
# JS 데이터 타입(Data type)
- 데이터 타입 이란 변수를 선언할 때, 숫자나 문자열 또는 이 외의 것들을 변수에 저장하는 데이터 종류를 말한다.


---
## 데이터 타입의 종류
### 원시 타입 (Primitive data type)
- 원시 타입의 값은 변경 불가능한 값(immutable value)이며 pass-by-value(얕은 복사)이다.
  - Number
  - String
  - Bolean
  - Null
  - Undefined
  - Symbol

### 객체 타입 (object / reference type)
- object
  - Function
  - RegExp(정규표현식)
  - +ES6: map, set, weakmap, weakset


---
## JS에서 데이터 타입을 알 수 있는 방법
```jsx
let m1 = "macbook air"
console.log(typeof m1);
//string
```
- typeof 객체를 쓴다면 데이터타입을 알 수 있다.

## 1. Private Data type(기본타입)
### 1-1. Number
```jsx
let a = 0;
console.log(typeof a);
//Number
```
- JS 언어에서의 Number Type은 우리가 일반적으로 알고 있는 숫자와 동일하다. 우리는 Number 데이터 타입을 이용하여 덧셈(+)/뺄셈(-)/곱셈(*)/나눗셈(/)등의 연산을 할 수 있다.

### 1-2. String
```jsx
let a = "mac";
let b = "book";
let c = `Air`;
```
- 이런 식으로 " ", ' ', \` \`, 방식으로 선언 가능하다.

```jsx
let a = 1;
let b = `mac book ${a}`;
// let b = `mac book ${a+1}`;
console.log(b);
//mac book 1
```
- 특히 \` \` (백틱)방식은 안에 변수를 문자열로 넣을 수 있고, 스코프안에서 가공도 가능하다.

### 1-3. Boolean
```jsx
let isTrue = true;
let isFalse = false;
```
- 논리적 참, 거짓을 나타내는 `true` 와 `false`를 나타낸다.
- true는 `1`, false는 `0`을 나타낸다.


### 1-4. Null / Undefined
```jsx
null == undefined // true
null === undefined // false
```
- null의 값이 없다는 것은 값이 없다는 맥락에서 undefined랑 같지만, null 값은 칸을 미리 예약한다는 의미이고, undefined는 칸을 예약하지 않는 즉, 메모리에 공간을 배치하지 않는다는 것이 다른점이다. null은 값을 지정해야 하는데 "비어있다." 라고 이해하면 된다.



---
## 2. Reference Type (참조타입)
### object
- `객체(Object)`는 다수의 `프로퍼티(property)`나 `메소드(method)`를 하나의 이름으로 묶어놓은 일종의 집합체라고 할 수 있다.
- 객체를 선언할 때에는 `중괄호{}`를 사용하며, 이름`(key):값(value)`의 형태로 작성합니다. 이 데이터 한 쌍(이름:값)을 객체의 `프로퍼티`라고 합니다.

```jsx
let foo = {
  name: "Diago",
  age: 4,
};
console.log(foo.name); // -> Diago
console.log(foo.age); // -> 4
```

- 객체에는 `Array`, `Function`, `RegExp`가 포함되어 있다.


## 3. 두 타입의 차이
- 기본형에는 바로 값을 그대로 할당한다는 것이고 참조형에는 값이 저장된 `주소값`을 할당(참조)한다.

**[자세한 글](https://webclub.tistory.com/638)**
