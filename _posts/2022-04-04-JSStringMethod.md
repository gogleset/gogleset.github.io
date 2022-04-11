---
title:  "Javascript의 String 메소드"
author: Jin
date: 2022-04-04 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [메소드, 내장객체, String]
toc: true
comments: true
---

# 유용한 String 메소드 모음

## .length
### 문자열의 길이 알아내기

```jsx
let a = "akskdk";

let b = [1,23,12,2,114,1];

console.log(a.length); //6
console.log(b.length); //6
```
- .length는 배열의 길이뿐만 아니라 문자열(도 사실 배열)의 길이도 알려준다.



---


## .toUpperCase() / .toLowerCase()
### 대문자 / 소문자 형식 변환

```jsx
let a = "Anasjdk"
console.log(a.toUpperCase()); //ANASJDK

let b = "ASNDJASD"
console.log(b.toLowerCase()); //asndjasd
```
- 모든 영어를 대문자, 소문자형식으로 바꾼다.


## .indexOf(params)
### 문자열 찾기
```jsx
let b = "myschool and sky"

console.log(b.indexOf("school"));//2
console.log(b.indexOf("ski")); //-1
```
- 첫번째로 만난 문자열만 변환
- 문자열이 없을땐 -1 반환 (조건문 판별할때 주의)


## .slice(n, m)

### 문자열 n번째부터 m번째까지 자르기
```jsx
let b = "my name is json"

console.log(b.slice(0, 2)); // my 
console.log(b.slice(2)); // name is json
console.log(b.slice(-4)); //json
```
- n부터 m앞까지 문자열 반환
- 인수가 하나만 있다면 n부터 끝까지
- 음수면 끝에서부터 센다.


## .substring(n,m)

### 문자열 n번째부터 m사이의 문자열 반환
```jsx
let b = "my name is json"

console.log(b.substring(0, 2)); // my 
console.log(b.substring(2, 0));// my 
console.log(b.substring(2)); // name is json
console.log(b.substring(-4)); // 음수는 적용되지 않아 0으로 인식한다.
```
- n부터 m사이의 문자열을 반환한다.
- slice와 유사하지만 n과 m을 바꿔도 동작한다.
- 음수는 0으로 인식한다.

## .substr(n,m)

### 문자열 n번째부터 m사이의 문자열 반환

```jsx
let b = "my name is json"

console.log(b.substr(0, 2)); // my 
console.log(b.substr(2, 0));// my 
console.log(b.substr(2)); // name is json
console.log(b.substr(-4)); // 음수는 적용되지 않아 0으로 인식한다.
```
- n부터 m개를 가져올 수 있다.


## .trim()

### 앞 뒤 공백제거
```jsx
let b = "          my name is json      "

console.log(b.trim()); //my name is json
console.log(b); //          my name is json      
```
- 유효성검사에 많이 쓰인다. 


## .repeat(n)

### n번 반복
```jsx
let a = "hello!"

console.log(a.repeat(3)); // hello!hello!hello!
console.log(a.repeat(100)); // hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!
```

###### 문자열 비교
문자열 비교는 `.codePointAt()`, `String.fromCodePoint()`로 확인할 수 있지만, 알파벳은 A보다 Z가 크고, 대문자보다 소문자가 더 크다라는 정도로만 알면된다.

