## 1. 전역변수 (var)-

앵간하면 쓰지말자.

```jsx
"use strict";
//  최신 자바스크립트 문법을 가져오는 코드

/** 1) 변수의 선언과 할당 */
// 변수의 선언
var myNumber1;
// 할당
myNumber1 = 100;
console.log(myNumber1);

/** 2) 변수의 선언과 할당 통합 */
var myNumber2 = 123;
console.log(myNumber2);

/** 3) 변수값 변경하기 */
// 한번 만들어진 변수는 다른 값으로 교체 가능
myNumber2 = 456;
console.log(myNumber2);

/** 4) 변수의 재선언 */
// 원칙적으로 한번 선언한 변수는 재선언이 불가능함
// JS의 전역변수는 재선언이 가능.
// 이는 일반적인 프로그래밍 언어의 규칙에 위배되므로 전역변수를 위한 `var`키워드의 사용은
// 권장되지 않는다.
var myNumber3 = 300;
console.log(myNumber3);

// 동일한 변수 재선언
var myNumber3 = 789;
console.log(myNumber3);

// var는 잘 쓰지 않는게 좋다.
```

- var 특징: 변수의 재선언이 가능하다. 하지만 프로그래밍 언어 규칙에 위배되므로 var 라는 기능이 있다는 정도만 알아두면 된다.

## 지역변수(let)

var를 대체하는 훌륭한 변수

```jsx
"use strict";

/** 1) 선언, 할당 */
// 선언
let myNumber1;
// 할당
myNumber1 = 100;
console.log(myNumber1);

/** 2) 선언,할당 통합 */
let myNumber2 = 200;
console.log(myNumber2);

/** 3) 중복선언 금지 */
let myNumber3 = 1;
console.log(myNumber3);

// 앞에서 이미 선언된 변수이므로 에러 발생함.(재선언 금지)
//let myNumber3 = 2;      // <-- 이 위치에서 에러 발생함.
//console.log(myNumber3);
```

- let 특징: 변수의 재선언이 불가능함. 프로그래밍 규칙에 위배되지 않는 변수.

## 상수(const)

```jsx
"use strict";

/** 상수 (읽기전용)*/
const MY_VALUE1 = 123;
console.log(MY_VALUE1);

//MY_VALUE1 = 234; // const로 선언된 변수이므로 값을 변경할 수 없다.(에러)
```

- const 특징: 선언과 할당이 동시에 이루어져야하고, 값을 변경할 수 없다. (읽기모드)

### 각자의 변수가 무엇이 다르고, 어떤 점이 문제일까?

1. var(재선언, 재할당 둘 다 가능함)

```jsx
var name = 'img'
console.log(name) // img

var name = 'cat'
console.log(name) // cat
```

- 변수를 한 번 더 선언했음에도 불구하고, 에러 메세지가 나오지 않고, 각기 다른 값이 출력되는 것을 볼 수 있다.
- 이는 유연한 변수 선언으로 간단한 테스트에는 편리 할 수 있겠으나, 코드량이 많아 진다면 어디에서 어떻게 사용 될지도 파악하기 힘들뿐더러 값이 바뀔 우려가 있다.
- 그래서 이를 보완한 변수가 let과 const!

 2 .let(재선언 불가, 재할당 가능)

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

1. const(재선언 불가, 재할당 불가)

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

1. 정리
- 그렇다면, 어떤 변수 선언 방식을 써야할까?
    
    변수 선언에는 기본적으로 `const`를 사용하고, 재할당이 필요한 경우에 한정해 `let` 을 사용하는 것이 좋다.
    
    그리고 객체를 재할당하는 경우는 생각보다 흔하지 않다. `const` 를 사용하면 의도치 않은 재할당을 방지해 주기 때문에 보다 안전하다.
    
    1. 재할당이 필요한 경우에 한정해 `let` 을 사용한다. 이때, 변수의 스코프는 최대한 좁게 만든다.
    2. 재할당이 필요 없는 상수와 객체에는 `const` 를 사용한다.

출처:[https://velog.io/@bathingape/JavaScript-var-let-const-차이점](https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90)

# 데이터 타입(Data type)

number, boolean, string, object, undefined

```jsx
"use strict";

let sampleValue1 = 123;
console.log(typeof sampleValue1);
//number

let sampleValue2 = true;
console.log(typeof sampleValue2);
// true-Boolean , false=0, true=0 아닌 모든 숫자(보통 1)

let sampleValue3 = "hello world";
console.log(typeof sampleValue3);
// string

let sampleValue4 = new Date();
console.log(typeof sampleValue4);
// Date-object

let sampleValue5 = null;
console.log(typeof sampleValue5);
// null-object, null의 값이 없다는 것은 값이 없다는 맥락에서 undefined랑 같지만, null값은 칸을 미리 예약한다는 의미이고, undefined는 칸을 예약하지 않는 즉, 메모리에 공간을 배치하지 않는다는 것이 다른점이다. null은 값을 지정해야 하는데 "비어있다." 라고 이해하면 된다.

let sampleValue6;
console.log(typeof sampleValue6);
// undefined = 값이 정의되지 않음 (칸을 예약안해둠) 즉, 값이 "없다."
```

- null과 undefined의 차이는 주석에 적어 놓았다.
- null은 의도적으로 값이 없음을 표현하고 싶을 때 대입해주곤 한다.

[https://velog.io/@surim014/웹을-움직이는-근육-JavaScript란-무엇인가-part.2](https://velog.io/@surim014/%EC%9B%B9%EC%9D%84-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EA%B7%BC%EC%9C%A1-JavaScript%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-part.2)