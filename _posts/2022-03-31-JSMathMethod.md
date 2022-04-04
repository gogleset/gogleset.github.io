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

## .toString()
### 10진수를 2진수, 16진수로 변환하기
```jsx
let num = 10;

console.log(num.toString()); //문자열 10진수로 변환 -> "10"
console.log(num.toString(2)); //문자열 2진수로 변환 -> "1010"
```
```jsx
let num = 255;

console.log(num.toString(16)); //문자열 16진수로 변환 -> "ff"
```

## .toFixed(num)
### 소수점 자릿수 함수

```jsx
let num = 31.214;

console.log(num.toFixed(1)); // 31.2
console.log(num.toFixed(2)); // 31.24
console.log(num.toFixed(6)); // 31.24000
```
- `변수명.toFixed(0~100)`
- 음수는 들어가지 않는다.



## Math.ceil(params)
### 올림 함수

```jsx
let num = 5.1;
let num1 = 5.7;

console.log(Math.ceil(num)); // 6
console.log(Math.ceil(num1)); // 6
```

- 소수점을 버리고 한 자리수 위로 올려준다.


## Math.floor(params)
### 내림 함수
```jsx
let num = 5.1;
let num1 = 5.7;

console.log(Math.floor(num)); // 5
console.log(Math.floor(num1)); // 5
```
- 소수점을 버리고 정수 반환

## Math.round(params)
### 반올림 함수
```jsx
let num = 5.1;
let num1 = 5.7;

console.log(Math.round(num)); // 5
console.log(Math.round(num1)); // 6
```
- 소수점이 .5 이상이면 +1 아니면 +0, 나머지 소수 버림







### Math.abs(params)
## 절대값 함수
```jsx
let num = -31.214;

console.log(Math.abs(num)); // 31.214
```
- 절대값 출력




## .random()
### 난수 함수
```jsx
console.log("난수:" + Math.random());

// 두 수 사이의 난수를 리턴하는 함수(로또)
function random(n1, n2){
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

Math.floor(Math.random() * 100) + 1;
// random 다음 곱하는 수는 우리가 꼭 뽑고싶은 갯수(100개까지)

// 함수의 결과 확인
let rnd = random(0,9);
console.log("0~9 사이의 난수:" + rnd);
```
- 난수를 리턴할 수 있다.


## isNaN 
### NaN인지 아닌지 판별


```jsx
let a = '8as';
let b = 8;


console.log(isNaN(a)); //true;
console.log(isNaN(b)); //false;

console.log(a === NaN); //false
```

- 주의사항! NaN은 자기자신과도 똑같지 않다고 판단한다.
- isNaN만이 NaN인지 아닌지 판별한다.
- 'NaN인가요?'

## parseInt(params, radix)
### 문자를 정수로 바꾸기

```jsx
let a = "80px";
console.log(parseInt(a)); //80

let b = "ff";
console.log(parseInt(b, 16)); //두번째 파라미터로 진수를 받음

let c = "ㅣ80px";
console.log(parseInt(c)); //NaN 반환
```
- parseInt는 문자가 포함되어있어도 숫자로 바꿔준다.
- 단, 바꾸고 싶은 문자열의 처음 글자가 숫자로 변환할 수 없다면 NaN을 반환한다.


## parseFloat(params)
### 문자를 실수로 바꾸기

```jsx
let a = "80.05px";
console.log(parseFloat(a)); //80.05

let b = "ff";
console.log(parseFloat(b, 16)); //parseFloat는 두번째 파라미터로 진수를 받을 수 없다. NaN 리턴
```

## Math.max(params,)

### 최댓값 구하기
```jsx
console.log(Math.max(1,22,3,141556,678,12)); //141556

Math.max.apply(null, arr); //배열에서 최댓값 찾는 방식
```
- 배열에서 찾는 방식은 유용하니 외울것


## Math.min(params,)

### 최솟값 구하기
```jsx
console.log(Math.min(1,22,3,141556,678,12)); //1

Math.min.apply(null, arr); //배열에서 최댓값 찾는 방식
```
- 배열에서 찾는 방식은 유용하니 외울것



## Math.pow(n, m)

### n의 m승 값 찾기

```jsx
console.log(Math.pow(2,3)); //8
console.log(Math.pow(2,-2)); //0.25
```


## Math.sqrt(num)

### 제곱근 (루트) 값 구하기
```jsx
console.log(Math.sqrt(4)); //2
console.log(Math.sqrt(16)); //4
```




















