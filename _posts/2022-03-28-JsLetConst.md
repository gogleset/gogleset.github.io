---
title:  "Javascript의 변수 선언"
author: Jin
date: 2022-03-26 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [let, const, 변수 선언, 변수, 선언, 할당]
toc: true
comments: true
---

# 변수란?
- 변수란 어떠한 정보에 이름을 붙여 저장하고 싶을 때 사용한다.

---
# JS의 변수 종류와 선언 및 할당방식
## 변수의 생성과정
### 1. var
1. 선언 및 초기화(undefined)
2. 할당

### 2. let
1. 선언
2. 초기화
3. 할당

### 3. const
1. 선언 초기화 할당

---
## 1. var

- 변수의 재선언이 가능하다. 하지만 프로그래밍 언어 규칙에 위배되므로 var 라는 기능이 있다는 정도만 알아두면 된다.
- 함수 레벨 스코프


***~~앵간하면 쓰지말자.~~***
### 1-1. 변수의 선언과 할당

```jsx
// 변수의 선언
var num1;
// 할당
num1 = 100;
console.log(num1);
```
### 1-2. 변수의 선언과 할당 통합
```jsx
var num2 = 123;
console.log(num2);
```

### 1-3. 변수값 변경하기 
```jsx
var num3 = 123
num3 = 456;
console.log(num3);
```
- 한번 만들어진 변수는 다른 값으로 교체 가능


### 1-4. 변수의 재선언 
```jsx
var num4 = 300;
console.log(num4);

// 동일한 변수 재선언
var num4 = 789;
console.log(num4);
```
- 원칙적으로 한번 선언한 변수는 재선언이 불가능하다. 하지만 JS의 전역변수는 재선언이 가능하다. 이는 일반적인 프로그래밍 언어의 규칙에 위배되므로 전역변수를 위한 `var`키워드의 사용은 권장되지 않는다.

## 2. let
- 블록 레벨 스코프이다. 변수의 재선언이 불가능하다. 프로그래밍 규칙에 위배되지 않는 변수이다.

### 2-1. 변수의 선언과 할당
```jsx
// 선언
let num1;
// 할당
num1 = 100;
console.log(num1);
```
### 2-2. 변수의 선언과 할당 통합
```jsx
let num2 = 200;
console.log(num2);
```
### 2-3. 변수값 변경하기 
```jsx
let num3 = 123
num3 = 456;
console.log(num3);
```
- 한번 만들어진 변수는 다른 값으로 교체 가능하다.

### 2-4. 중복선언 금지
```jsx
let num3 = 1;
console.log(num3);

// 앞에서 이미 선언된 변수이므로 에러 발생함.(재선언 금지)
let num3 = 2;      // <-- 이 위치에서 에러 발생함.
console.log(num3);
```


## 3. 상수 const
- 블록 레벨 스코프이다. 변수의 재선언, 재할당이 불가능하다. 프로그래밍 규칙에 위배되지 않는 변수이다.
  
### 3-1. 변수의 선언과 할당
```jsx
/** 상수 (읽기전용)*/
const MY_VALUE1 = 123;
console.log(MY_VALUE1);

//MY_VALUE1 = 234; // const로 선언된 변수이므로 값을 변경할 수 없다.(에러)
```
- const 특징: 선언과 할당이 동시에 이루어져야하고, 값을 변경할 수 없다.




---
## 각자의 변수가 무엇이 다르고, 어떤 점이 문제일까?

### 1. var(재선언, 재할당 둘 다 가능함)

```jsx
var name = 'img'
console.log(name) // img

var name = 'cat'
console.log(name) // cat
```

- 변수를 한 번 더 선언했음에도 불구, 에러 메세지가 나오지 않고 각기 다른 값이 출력되는 것을 볼 수 있다.
- 이는 유연한 변수 선언으로 간단한 테스트에는 편리 할 수 있으나 코드량이 많아 진다면 어디에서 어떻게 사용 될지도 파악하기 힘들고 혹시 값이 바뀔 우려가 있다.
- 그래서 이를 보완한 변수가 let과 const!



### 2 .let(재선언 불가, 재할당 가능)

```jsx
let name = 'img'
console.log(name) // img
let name = 'cat'
console.log(name) 
// Uncaught SyntaxError: Identifier 'name' has already been declared
```


- 변수를 재선언하면 에러 메세지가 나온다.


```jsx
let name = 'img'
console.log(name) // img
let name = 'cat'
console.log(name) 
// Uncaught SyntaxError: Identifier 'name' has already been declared(재선언오류)

name = 'react'
console.log(name) //react
//재할당은 가능함
```

- 변수를 재할당하니 가능하다.

###  3. const(재선언 불가, 재할당 불가)

```jsx
const name = 'img'
console.log(name) // img

const name = 'cat'
console.log(name) 
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react'
console.log(name) 
//Uncaught TypeError: Assignment to constant variable.
```

- 변수의 재할당, 재선언 불가


## 호이스팅 동작
- 스코프 내부 어디서든 변수선언은 최상위에 선언된 것처럼 행동한다.
- var, let, const 모두 호이스팅이 된다. 다만 스코프 별로 차이가 있다.


### var의 호이스팅
```jsx
//이런식으로 선언되기 전에 사용 가능하다.
var name;
console.log(name); //undefined
name = 'mike'; //할당

var num = 30;

function showNum(){
    console.log(num); //undefined

    var num = 30;
}
showNum();
```
- var는 선언과 초기화가 같이 진행되기 때문에 Error가 발생하지 않는다.


### let과 const의 호이스팅



```jsx
let num = 30;

function showNum(){
    console.log(num); //TDZ 발생 referenceError

    let num = 30;
}
showNum();
```



- let과 const는 블록 레벨이기 때문에 레벨 안에 num이 없으면 외부 변수를 참조해 동작이 되겠지만, 내부 변수가 있다면 호이스팅 그 내부 변수를 참조해 TDZ에 놓이게 된다.

--- 
### 정리
- 그렇다면, 어떤 변수 선언 방식을 써야할까?
    
    변수 선언에는 기본적으로 `const`를 사용하고, 재할당이 필요한 경우에 한정해 `let` 을 사용하는 것이 좋다.
    
    그리고 객체를 재할당하는 경우는 생각보다 흔하지 않다. `const` 를 사용하면 의도치 않은 재할당을 방지해 주기 때문에 보다 안전하다.
    
    1. 재할당이 필요한 경우에 한정해 `let` 을 사용한다. 이때, 변수의 스코프는 최대한 좁게 만든다.
    2. 재할당이 필요 없는 상수와 객체에는 `const` 를 사용한다.
