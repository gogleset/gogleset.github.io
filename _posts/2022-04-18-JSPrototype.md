---
title:  "Javascript의 Prototype과 상속"
author: Jin
date: 2022-04-18 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [this, prototype, 프로토타입, 상속]
toc: true
comments: true
---



# 프로토타입
- JS의 모든 객체는 프로토타입(prototype)이라는 객체를 가지고 있다.
- 모든 객체는 그들의 프로토타입으로부터 프로퍼티, 메소드를 상속받는다.
- JS는 최소한 하나 이상의 다른 객체로부터 상속을 받고, 이때 **상속되는 정보를 제공하는 객체**를 프로토타입이라고 한다.

# 상속
- 상속이란 JS에선 현재 존재하고 있는 객체를 프로토타입으로 사용하여 해당 객체를 복제하여 재사용하는 것을 상속이라 한다.



## 상속의 개념 이해하기

```jsx
const bmw = {
    color: "red",
    wheels: 4,
    navigation: 1,
    drive(){
        console.log("..drive")
    },
};

const benz = {
    color: "black",
    wheels: 4,
    drive(){
        console.log("..drive");
    },
};

const audi = {
    color: "blue",
    wheels: 4,
    drive(){
        console.log("..drive");
    }
};
```
- 3개의 객체를 만들었다. 각각 다른 객체지만, 공통점이 있다. wheels와 drive 함수의 중복된 코드가 보인다.
  
---

###### 어떻게 하면 중복을 줄일 수 있을까?
```jsx
const car = {
  wheels: 4,
  drive() {
    console.log("..drive");
  },
};
// car라는 상위 개념의 객체를 만들었다.

const bmw = {
  color: "red",
  navigation: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};


bmw.__proto__ = car; 
benz.__proto__ = car;
audi.__proto__ = car;


console.log(bmw); // { color: 'red', navigation: 1 }
console.log(bmw.wheels); // 4
```
- bmw, benz, audi는 car에게 상속을 받는다.
- bmw의 객체에는 wheels가 없지만, 상위 객체에서 wheels를 찾아 출력하고 있다.

---

### 프로토 타입 체인
- 프로토타입이 상속되는 가상의 연결 고리

```jsx

const car = {
  wheels: 4,
  drive: function() {
    console.log("..drive");
  },
};
// car라는 상위객체를 만들었다.

const bmw = {
  color: "red",
  navigation: 1,
};

bmw.__proto__ = car; //car라는 상위객체를 상속받는다.

const x5 = {
    color: "white",
    name: "x5",
};

x5.__proto__ = bmw;

console.log(x5.name);
console.log(x5.navigation);
console.log(x5.color);
console.log(x5.wheels);
```
- x5에 없는 객체라면 상속받은 객체의 값을 찾는다.
- 즉, x5에 없다면 bmw, bmw에 없다면 car 객체까지 찾는다.

---
#### 내장메서드는 어떻게 동작할까?

```jsx
for (let keys in x5) {
  console.log(keys);
  /**
     * color
    name
    navigation
    wheels
    drive
     */
}

console.log(Object.keys(x5)); //[ 'color', 'name' ]
console.log(Object.values(x5)); //[ 'white', 'x5' ]
```
- 키, 값과 Object 내장메서드는 상속된 프로퍼티는 나오지 않는다.

###### 상속받는 프로퍼티와 구분하기

```jsx
for (let keys in x5) {
  if (x5.hasOwnProperty(keys)) {
    console.log(`o ${keys}`);
  } else {
    console.log(`x ${keys}`);
  }
}
```
- 자신의 객체와 상속받는 객체를 분리할땐 hasOwnProperty를 쓰면 된다.

---


### 생성자 함수를 이용한 간편한 프로토타입 상속 방법

```jsx
const car = {
  wheels: 4,
  drive: function () {
    console.log("..drive");
  },
};

const Bmw = function (color) {
  this.color = color;
}; //생성자 함수 생성

const m1 = new Bmw("red");
const m3 = new Bmw("green");

m1.__proto__ = car;
m3.__proto__ = car;

console.log(m1); //Bmw { color: 'red' }
console.log(`이 자동차의 바퀴 수는 ${m1.wheels}개`); //이 자동차의 바퀴 수는 4개
console.log(m3); //Bmw { color: 'green' }
```
- 이런 식으로 car 객체를 __proto__를 통해 상속 프로토 타입으로 작성해도 되지만, 매번 프로토타입에 해당하는 객체를 할당해야 하기때문에 불편한 방식이다.


###### 대안법

```jsx
const Bmw = function (color) {
  this.color = color;
}; //생성자 함수 생성

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
    console.log("..drive");
}
Bmw.prototype.stop = function (){
    console.log("..stop");
}
Bmw.prototype.navigation = 1; 

const m1 = new Bmw("red");
const m3 = new Bmw("green");


console.log(m1);
console.log(`이 자동차의 바퀴 수는 ${m1.wheels}개`);
console.log(m3);
```
- `Bmw.prototype.navigation` 코드의 뜻은 생성자함수가 생성하는 객체에 __proto__를 navigation으로 할당한다는 뜻이다.


### 인스턴스 확인
- 생성자 함수가 새로운 객체를 만들어 낼때 그 객체는 생성자의 인스턴스라고 불려진다.


```jsx

const Bmw = function (color) {
  this.color = color;
}; //생성자 함수 생성

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
    console.log("..drive");
}
Bmw.prototype.stop = function (){
    console.log("..stop");
}
Bmw.prototype.navigation = 1; //생성자함수가 생성하는 객체에 __proto__를 navigation으로 할당한다는 뜻이다.

const m1 = new Bmw("red");
const m3 = new Bmw("green");


console.log(m1 instanceof Bmw); //true
console.log(m1.constructor === Bmw); //true
```
- JS는 이를 편리하게 확인할 수 있는 `instanceof`라는 연산자가 있다.
- 생성자 함수를 통해 만들어진 객체는 `constructor`라는 프로퍼티가 존재하는데, 이는 생성자 즉 Bmw를 나타낸다.

---

#### 일일이 프로토타입 상속을 풀어 써야 할까? 조금은 깔끔히 하고싶다...


```jsx
const Bmw = function (color) {
  this.color = color;
}; //생성자 함수 생성

Bmw.prototype = {
    wheels: 4,
    drive: function () {console.log("..drive");},
    navigation:1,
    stop: function () {console.log("...stop");}
}

const m1 = new Bmw("red");
const m3 = new Bmw("green");

console.log(m1); //{ color: 'red' }
console.log(m1.wheels); //4

console.log(m1 instanceof Bmw); //true
console.log(m1.constructor === Bmw); //false
```
- 가능하지만, 생성자 함수를 써 객체를 생성했음에도 불구하고 `constructor`라는 프로퍼티는 존재하지 않게 된다.
- 그래서 왠만하면 전의 예제처럼 하나씩 할당하는게 좋으나,


```jsx
Bmw.prototype = {
    constructor: Bmw,
    wheels: 4,
    drive: function () {console.log("..drive");},
    navigation:1,
    stop: function () {console.log("...stop");}
}
```
- 정리하고 싶다면, `constructor`를 정의해도 괜찮다.

**이처럼 JS는 명확한 `constructor`를 보장하진 않는다. 개발자에 의해 언제든지 수정가능하다.**

---


### 프로토타입의 수정 불가한 객체 만들기
- 아무나 수정해서는 안되는 프로토타입 객체가 있다면 클로저를 사용해 그 값을 은닉화하는 것이 가능하다.

```jsx
const Bmw = function (color) {
    this.color = color;
}

const m1 = new Bmw("navy");

m1.color = "red"

console.log(m1.color); //red;
console.log(m1); // Bmw { color: 'red' }
```
- 객체의 수정이 자유롭다.

---
###### 하지만 클로저를 사용한다면?

```jsx
const Bmw = function (color) {
    const c = color;

    this.getColor = function () {
        console.log(c);
    }
}


const m1 = new Bmw("navy");
console.log(m1); //Bmw { getColor: [Function (anonymous)] }
m1.c = "red"; //안먹힌다.
console.log(m1.getColor()); //navy
```
- 이런식으로 값의 은닉화가 가능하다.




