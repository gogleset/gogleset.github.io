---
title:  "Javascript의 Math 메소드"
author: Jin
date: 2022-03-31 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [메소드, 내장객체, Math]
toc: true
comments: true
---

# 유용한 Math 메소드 모음

### 10진수를 2진수, 16진수로 변환하기

#### .toString()

```jsx
let num = 10;

console.log(num.toString()); //문자열 10진수로 변환 -> "10"
console.log(num.toString(2)); //문자열 2진수로 변환 -> "1010"
```
```jsx
let num = 255;

console.log(num.toString(16)); //문자열 16진수로 변환 -> "ff"
```

### 올림 함수

#### .ceil()
```jsx
let num = 5.1;
let num1 = 5.7;

console.log(Math.ceil(num)); // 6
console.log(Math.ceil(num1)); // 6
```

- 소수점을 버리고 한 자리수 위로 올려준다.


### 내림 함수

#### .floor()
```jsx
let num = 5.1;
let num1 = 5.7;

console.log(Math.floor(num)); // 5
console.log(Math.floor(num1)); // 5
```
- 소수점을 버리고 정수 반환

### 반올림 함수

#### .round()
```jsx
let num = 5.1;
let num1 = 5.7;

console.log(Math.round(num)); // 5
console.log(Math.round(num1)); // 6
```
- 소수점이 .5 이상이면 +1 아니면 +0, 나머지 소수 버림


### 소수점 자릿수 함수

#### toFixed()

```jsx
let num = 31.214;

console.log(num.toFixed(1)); // 31.2
console.log(num.toFixed(2)); // 31.24
console.log(num.toFixed(6)); // 31.24000
```
- `변수명.toFixed(0~100)`
- 음수는 들어가지 않는다.


### 절대값 함수

#### .abs

```jsx
let num = -31.214;

console.log(Math.abs(num)); // 31.214
```
- 절대값 출력


### 난수 함수

#### .random()
```jsx
console.log("난수:" + Math.random());

// 두 수 사이의 난수를 리턴하는 함수(로또)
function random(n1, n2){
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

// 함수의 결과 확인
let rnd = random(0,9);
console.log("0~9 사이의 난수:" + rnd);
```
- 난수를 리턴할 수 있다.







