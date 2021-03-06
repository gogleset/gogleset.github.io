---
title:  "Javascript의 클로저"
author: Jin
date: 2022-04-11 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [렉시컬 환경, 함수, 클로저]
toc: true
comments: true
---

# 클로저
- 클로저란 함수와 렉시컬 환경의 조합. 
- 함수가 생성될 당시의 외부변수를 기억하고, 생성 이후에도 계속 접근 가능하다.
- **클로저는 독립적인 변수를 참조**하는 함수이다. (독립적인 변수란 로컬에 선언되지도 않고, 파라미터로 넘겨지지도 않는 변수를 말한다.) 클로저에 선언된 함수는 생성되었을 때의 환경을 기억한다.

### 자바스크립트는 어휘적 환경을 갖는다.(Lexical Enviroment)
 - 어휘적 환경이란 정적인 환경 즉 변화하지 않는 환경을 말한다.

일단 클로저를 이해하기 위해서 Lexical 환경을 알아야한다.


### Lexical 환경 이해하기
렉시컬 환경 : 스크립트 전체, 실행중인 함수, 코드블록 등은 자신만의 렉시컬 환경을 갖는다. 렉시컬 환경은 환경레코드, 외부렉시컬 환경으로 구성된다.

### 환경레코드
렉시컬 환경에서 모든 지역변수를 프로퍼티로 저장하고 있는 객체이다. this, 함수일 경우 매개변수도 포함된다.

```jsx
function add(a, b) {
	let name = 'Jin' 
}

add()

//환경레코드에 {name: 'Jin', a: undefined } 이런식으로 저장되어 있다.
```
---
## 외부 렉시컬 환경
현재 렉시컬 환경보다 더 상위의 렉시컬 환경이다. 스크립트는 최상위 렉시컬 환경이며 스크립트 내에 호출된 함수나 코드블록은 외부렉시컬 환경으로 스크립트 렉시컬 환경을 참조한다.

### 외부 렉시컬 환경을 참조하는 과정
렉시컬 환경이 만들어질 때 Environment라는 숨김 프로퍼티가 만들어진다. 프로퍼티에는 외부렉시컬 환경이 저장되어있으며 지역내에서 참조할 값이 없을 경우 프로퍼티에 접근하여 외부 렉시컬 환경을 참조하게 된다.값이 없을 경우 최상위 렉시컬 환경까지 검색하게 되는 체이닝 과정이 일어난다. 그렇기 때문에 모든함수는 클로저라고 할 수 있다.

---


```jsx
let one;
one = 1;

function addOne(num){
    console.log(one + num); //one은 외부 Lexical 환경에서 찾는다. 여기선 전역이다.
}

addOne(5); //함수가 실행되는 순간 새로운 Lexical 환경이 생성된다.
```
- 코드를 선언하면 스크립트 내에서 선언한 변수들이 Lexical 환경에 올라간다.
- 내부적 Lexical 환경에는 외부 Lexical 환경에 대한 참조를 받고, 그 외부에도 없다면 전역 Lexical 환경까지 참조를 받는다.


## 클로저 이해하기
```jsx
function add(x){
    return function(y){
        return x + y;
    }
}

let add1 = add(1);
console.log(add1(2)); // 3

let add10 = add(10);
console.log(add10(2)); // 12 

console.log(add1(4)); // 5
```
1. add1 은 add 함수의 Lexical 환경에 1을 넣은 함수를 할당받았다.
2. add1 함수 안 익명함수를 호출하여 2를 넣었다.
3. add1(2)는 x를 외부 Lexical 환경에서 찾을 것이고, 할당된 1이란 y의 수를 더하여 리턴한다.
4. 즉, add1의 x라는 인수는 찾아 고치지 않는 한 고정된 수가 될 수 있는것이다.

## 클로저 활용하기
```jsx
function makeCounter() {
    let privateNum = 0;

    function change(num) {
        privateNum += num;
    }
    return {
        plus: function() {
            change(1);
        },
        minus: function() {
            change(-1);
        },
        value: function() {
            return privateNum;
        }
    };   
};

let counter = makeCounter();
counter.plus(); //1
counter.plus(); //2
counter.minus(); //1
console.log(counter.value()); //1
```
- makeCounter 안에 있는 privateNum을 증가시키는 간단한 예제이다. privateNum은 수정이 불가하다. 오직 카운터를 증가시키고 반환되는 내부의 함수로만 값 조정이 가능하다. 즉, 은닉화에 성공한것이다. 








