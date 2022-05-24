---
title:  "TypeScript의 데이터 타입"
author: Jin
date: 2022-04-11 10:55:00 +0800
categories: "TypeScript"
tag: [변수, 함수, 선언, 정적 타이핑, primitive]
toc: true
comments: true
---
# TypeScript는 왜 쓰는 걸까?


```jsx
function add(num1, num2) {
    console.log(num1 + num2);
}

add(); //NaN
add(1); //NaN
add(1, 2); // 3
add(3, 4, 5); // 7
add('hello', 'world'); // hello world
```

- 이러한 타입 선언은 개발자가 코드를 예측하기 힘들다.
- 함수의 파라미터 num1, num2의 타입이 number가 아닐 경우엔 타입 예측을 하기 어렵다.
- 규모가 있는 프로젝트에선 예측 가능한 코드를 쓰는 것이 중요하다.

##### TS를 쓴다면?

  
```ts
function add(num1:number, num2:number) {
    console.log(num1 + num2);
}

add(1, 2);
add(1, "2"); //error발생
```
-  JavaScript는 동적 언어여서 런타임에 타입이 결정되고 오류가 발견된다.
-  TypeScript는 정적 언어여서 컴파일 단계에서 오류를 잡는다.


## TS에서 추가된 데이터타입

| TYPE | 설명 |
|----|----|
|array| 배열 |
|tuple| 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현 |
|enum| 열거형, 숫자값 집합에 이름을 지정한 것|
|Any| 타입 추론(type inference)할 수 없거나 타입 체크가 필요없는 변수에 사용. var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당 가능|
|void| 일반적으로 함수에서 반환값이 없을 경우 사용한다|
|never|결코 발생하지 않는 값|

# TS 타입 선언

### boolean


```ts
let isTrue: boolean = true;
```



### undefined

```ts
let unde: undefined = undefined;
```



### null


```ts
let nill: null = null;
```



### number

```ts
let num: number = 12;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```


### string

```ts
let color: string = "black";
color = 'red';
let myName: string = `choi`; // ES6 템플릿 문자열
let hello: string = `Hi, my name is ${ myName }.`; //
```



### object

```ts
const obj: object = {};
let myInfo : { age : number } = { age : 20 }
```
- Object도 프로퍼티마다 객체 지정이 가능하다.


### array

```ts
let list1: any = [1, 'two', true];
let list2: number = [1, 10, 100];
let list3: array<number> = [1, 2, 3];
let list4: string[] = ['kim', 'choi']; 
```
- 배열 할당 시 배열의 타입을 지정해 줄 수 있다.



### tuple

```ts
let tuple: [string, number];
tuple = ['hello', 10]; // OK
tuple = [10, 'hello']; // Error
tuple = ['hello', 10, 'world', 100]; // Error
tuple.push(true); // Error
```
- 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현




### enum 


```ts
enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1); // 1

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

console.log(c2); // 2

enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Blue;

console.log(c3); // 4. 
```
- enum은 숫자값 집합에 이름을 지정한 것이다.
- enum은 특정값만 입력할 수 있게 강제하고 싶을 때 또 그 값들이 뭔가 공통점이 있을때 사용한다.

### any

```ts
let notSure: any = 4;
notSure = '문자열일지도 몰라';
notSure = false; 
```
- 타입 추론(type inference)할 수 없거나 타입 체크가 필요 없는 변수에 사용한다.
var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있다.


### void


```ts
function printHi(): void {
  console.log("Hi");
}
```
- 일반적으로 함수에서 반환값이 없을 경우 사용한다.

###  never



```ts
// 항상 오류 발생
function invalid(message:string): never {
  throw new Error(message);
}

// never 타입을 결과 추론(Inferred)
function fail() {
  return invalid('실패');
}

// 무한 루프
function infinite(): never {
  while ( true ) { infinite(); }
}
```


- 일반적으로 함수의 리턴 타입으로 사용된다. 함수의 리턴 타입으로 never가 사용될 경우, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.