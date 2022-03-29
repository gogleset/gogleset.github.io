---
title:  "Javascript의 함수와 생성자 함수"
author: Jin
date: 2022-03-29 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [함수, 생성자, 생성자 함수]
toc: true
comments: true
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