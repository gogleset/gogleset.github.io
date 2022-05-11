---
title:  "Javascript의 함수와 생성자 함수"
author: Jin
date: 2022-03-29 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [함수, 화살표함수, 생성자, 생성자 함수]
toc: true
comments: true
---
# 함수란?
- 함수는 재사용 가능하게 만드는 코드 컴포넌트
- 유지보수를 쉽게 만들어주고, 중복을 줄여준다


## 함수 법칙
- 함수는 한 작업에 집중해야한다.
- 읽기 쉽게 어떤 동작을 수행하는지 함수명을 직관적으로 정의한다.
## 함수 선언문
```jsx
function sayHi(name, age = 33, gender = "male"){
  console.log(`hi ${name}, age ${age}, gender ${gender}`);
}
```

- 매개변수는 하나일수도 있고, 0개일수도 있고, n개일수도 있다.
- 매개변수는 기본값을 정의할 수도 있다. (age, gender)부분이다.
### 함수의 return문
```jsx
function sayHi(name, age = 33, gender = "male"){
  console.log("before");
  return console.log(`hi ${name}, age ${age}, gender ${gender}`);
  console.log("after");
}
```
- return문 뒤로 생성된 코드는 실행되지 않는다.


---
## 함수 표현식
```jsx
let sayHi = function(name, age = 33, gender = "male"){
  console.log(`hi ${name}, age ${age}, gender ${gender}`);
}
sayHi("Jin");
```

### 화살표 함수
```jsx
let sayHi = (name, age = 33, gender = "male") => {
    return console.log(`hi ${name}, age ${age}, gender ${gender}`);
}
sayHi("Jin");

```
- 함수 선언식과 완벽하게 동일하게 동작한다.
- function구문을 제거하고 화살표만 넣으면 완성이다.

### 화살표 함수의 축약
1.  일반적 함수 표현식
```jsx
let sayHi = function(name) {
    return console.log(`hi~ ${name}`);
}
```

2.  화살표 함수로 전환
```jsx
let sayHi = (name) => {
    return console.log(`hi~ ${name}`);
}
```

3.  파라미터가 하나일때는 괄호 생략
```jsx
let sayHi = name => {
    return console.log(`hi~ ${name}`);
}
```
- 하지만 파라미터가 없거나, 2개 이상일 경우 무조건 괄호를 넣어주어야 한다.


4. 함수의 실행구문이 리턴문 하나일때


```jsx
let sayHi = name => console.log(`hi~ ${name}`);

sayHi("Jin");
```


- 객체를 리턴할 때에는 무조건 ()로 감싸주어야 한다.
  - **ex)** ({name: jin})


  

### 함수 표현식과 선언식의 차이


```jsx
sayHi("Jin");

function sayHi(name, age = 33){
    console.log(`hi ${name} age ${age}`);
}

//hi Jin age 33
```
- 함수 선언식은 **호이스팅**되어 순서가 밑에 선언되어도 위에서 호출이 가능하다.

```jsx
sayHi("Jin"); //ReferenceError: Cannot access 'sayHi' before initialization

let sayHi = function(name, age = 33, gender = "male"){
  console.log(`hi ${name}, age ${age}, gender ${gender}`);
}
```
- 하지만 함수 표현식은 호이스팅이 되지 않는다. 그래서 함수가 선언된 곳 밑에서만 호출이 가능하다.



---
# 생성자 함수란?
- 일관성있는 객체를 여러개 만들어야 할 때 쓰이는 함수이다.
- new 연산자로 생성자 함수를 호출한다.
- 함수명의 첫 글자로는 대문자를 쓰는 것이 관례이다.
- 생성자 함수를 만들어도 new 예약어를 붙이지 않으면 일반 함수처럼 동작한다.

## 생성자 함수 만들기
```jsx
function Person(name, age){
  this.name = name;
  this.age = age;
}

let person1 = new Person('Mike', 30);
let person2 = new Person('Jane', 22);
let person3 = new Person('Wayne', 22);
// Person { name: 'Mike', age: 30 } Person { name: 'Jane', age: 22 } Person { name: 'Wayne', age: 22 }
```
- 새로운 객체를 틀에 맞게 생성 가능하다.

---
### `new`예약어를 쓰지 않았다면?
```jsx
function Person(name, age){
    this.name = name;
    this.age = age;
  }
  
  let person1 = Person('Mike', 30);
  let person2 = new Person('Jane', 22);
  let person3 = new Person('Wayne', 22);

  console.log(person1,person2,person3);
//undefined Person { name: 'Jane', age: 22 } Person { name: 'Wayne', age: 22 }
```
- 일반 함수처럼 동작하여 값이 없는 Undefined를 출력한다. 마찬가지로 일반함수에서 `new`예약어를 넣는다면 생성자 함수처럼 동작한다.

---
### 만약 함수가 들어가 있다면?
```jsx
function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayAge = () => {
        console.log(this.name); //this.name이 키 값이 되어 참조한다.
    }
  }
  
  let person1 = new Person('Mike', 30);
  let person2 = new Person('Jane', 22);
  let person3 = new Person('Wayne', 22);
  console.log(person1); //Person { name: 'Mike', age: 30, sayAge: [Function (anonymous)] }
  person1.sayAge();
  person2.sayAge();
  person3.sayAge();
  //Mike
  //Jane
  //Wayne
```
- 정상적으로 함수를 호출한다.

---

## 생성자 함수의 동작원리
```jsx
function Person(name, age){
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
```
- this = {}과 return this; 구문은 안보인다.