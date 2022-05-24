---
title:  "TypeScript Type Alias와 Literal 타입"
author: Jin
date: 2022-05-18 10:55:00 +0800
categories: "TypeScript"
tag: [타입스크립트, type alias, Literal, type extends]
toc: true
comments: true
---

# Type alias

-  타입을 변수처럼 담아서 쓰는 방식


```ts
let 음식: string | number | undefined;
```
- *아... 타입 지정 너무 귀찮고 변수처럼 쓸 수 없나 가독성도 너무 떨어져*

###### 이럴 때 쓰는 것이 type 키워드!

```ts
type Food = string | number | undefined;
let 음식: Food = 123;
```

- 타입을 변수처럼 별명을 붙여서 사용가능하다.
- 같은 이름의 type 변수는 재정의 불가능하다.
- 타입 변수명은 대문자로 시작한다.
- 이것을 **type alias**라고 한다.
---

## object 자료형에서 사용하기

```ts
let 음식{name: string, spicy: number} = {name:"kimchi", spicy: 20};
```
*넘 길고 불편행*..


```ts
type Food = { name: string, spicy: number }
let 음식: Food = { name: "bulgogi", spicy: 20 }
```
- 이렇게 object도 type alias가 가능하다.

---


# Type extend
- 타입 합치기

```ts
type Name = string;
type Age = number;
type Person = Name | Age;
```

- 변수랑 똑같이 합쳐지고, 당연히 union type이다.

### &연산자로 object 타입 extend하기


```ts
type PositionX = { x: number, };
type PositionY = { y: number, };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 }
```
- & 연산자 사용으로 타입 합치기 가능


### typeScript에서 자료 수정 막기


```ts
type Food = {
    readonly name?: string
}

const Cake:Food = {
    name: "치즈케이크",
};
Cake.name = '유라';
// error 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
```
- 일반적인 자바스크립트 코드에선 const여도 object의 수정을 막을 수 없다. 막을려면 freeze라는 메서드를 써야하는데 typeScript는 readonly로써 가능하다. 꼭 type 키워드랑 같이 써야하는건 아니다.
- 하지만 명심해야 될 것은 error는 표시해주나, 실제로 JS로 컴파일이 될 때는 바꿔준다. 타입스크립트는 어디까지나 에디터에서 에러를 잡아주는 도구이기 때문이다.


# Literal type

- 더 엄격하게 타입 지정하기



```ts
let names: "jin";
names = "jin";
names = "kim"; //error '"kim"' 형식은 '"jin"' 형식에 할당할 수 없습니다
```

- 내가 미리 들어올 수 있는 자료를 정의한 타입을 리터럴 타입이라고 한다.
- 이 변수안엔 내가 정의한 "jin"이라는 타입만 올 수 있다.
- 변수에 무엇이 들어올지 더 엄격하게 관리가 가능하다.


```ts
let fruits: 'apple' | 'orange' | 'mango';
fruits = 'apple';
```
- | 연산자로 입력값을 다중으로 정의할 수 있다.


```ts
function v(a: 'hello'): 1 | 0 {
    return 1;
}
```

- 함수에도 적용가능 1과 0만 리턴가능
- const변수와 유사하게 사용가능하다.
- const변수 안에 자료를 여러개 저장할 수 있다.


## Literal Type의 문제점

```ts
 let datas = {
    name: 'kim'
};

function add(a: "kim") {

};

add(datas.name); //error
```
**datas 안에 있는 name은 kim인데 왜 안들어가고 error가 뜰까?**
-  a:"kim" 이란 뜻은 "kim"이란 자료형이 아닌 "kim"이란 타입을 지정해 준 것이다. datas안의 name은 string 타입이어서 add 함수에 들어갈 수가 없다. 그렇기 때문에 error가 난다.


###### 해결법은?
1. object 만들 때 타입지정을 확실히하기
2. as 문법으로 타입을 덮어쓰기
3. as const

```ts
let datas = {
    name: 'kim'
} as const;

function add(a: "kim") {

};

add(datas.name);
```
- as const란? 타입지정을 리터럴타입처럼 해달라라는 의미
- object value 값을 그대로 타입으로 지정해준다.(여기서는 "kim"으로)
- object 속성들에 모두 readonly를 붙여준다.(변경하면 에러)
- object 자료를 완전히 잠궈놓고 싶으면 as const!





