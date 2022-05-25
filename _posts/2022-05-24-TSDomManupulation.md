---
title:  "TypeScript Dom Manupulation"
author: Jin
date: 2022-05-18 10:55:00 +0800
categories: "TypeScript"
tag: [타입스크립트, Dom, Element, Html,]
toc: true
comments: true
---

# TypeScript로 DOM 제어하기
```ts
let 제목 = document.querySelector("#title");
제목.innerHTML = "반가워요";//error
```

###### 왜 에러?
- 제목이 없을 경우 null로 할당될것이고, 할당이 제대로 된다면 html object가 올 것이기 때문에 type이  Element | null인 유니온 타입이라 타입을 확정시켜줘야한다.


---


```ts
if (제목 !== null) {
제목.innerHTML = "반가워요";
}
```
- 제목.innerHtml은 유니온타입이기 때문에 Type Narrowing 을 해주어야 한다.

---

## DOM Type Narrowing 기법

1. instanceof 연산자

```ts
if(제목 instanceof Element){
    제목.innerHTML = '반가워요';
}
```
- 가장 많이 쓰는 문법
- instanceof 오른쪽에 있는 클래스의 자식(instance)냐라는 것을 물어보는 것


2. as 기법

```ts
let 제목 = document.querySelector("#title") as Element;
제목.innerHTML = "반가워요"
```
- as 키워드로 타입 덮어쓰기
- as 왼쪽에 있는 요소는 오른쪽에 있는 타입으로 바꿔주기
- 비상시, 확신시 가능 다른 상황에선 지양하자

3.optioanl chaining 기법

```ts
let 제목 = document.querySelector("#title");
if(제목?.innerHTML != undefined){
    제목.innerHTML = '반가워요'
}
```

- innerHtml이 있다면 출력, 없다면 undefined 리턴

4. tsconfig파일 수정

- strinctNullChecks 모드를 false로 바꾸기

## link 태그를 바꿔보자
```ts
let 링크 = document.querySelector(".link");
링크.href = 'https://kakao.com';
``` 
- error가 뜬다 왜냐면 union 타입이기때문에 Narrowing을 해주어야 한다.

```ts
if (링크 instanceof Element) {
    링크.href = 'https://kakao.com'; //또 에러뜸 Element형식에 href 속성이 없다고...
}
```


- 타입스크립트는 html 태그마다 상세한 HTML Element 타입이 정의되어 있다.



```ts
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
```
- Element 타입에서 HTMLButtonElement 타입, HTMLHeadingElement 타입, HTMLAnchorElement 타입등등 상속을 받는다. object의 타입 정의가 잘 되어있다.


## Button Event를 붙여보자

```ts
let 버튼  = document.querySelector("#button");

버튼?.addEventListener('click', () => {

});
```
- addEventListner도 Narrowing 해줘야 하는데 `?.` optioanl chaining으로 Narrowing이 가능하다.
- 버튼에 addEvntListener가 가능하지 않다면 undefined를 리턴하고, 아니라면 실행하라는 구문