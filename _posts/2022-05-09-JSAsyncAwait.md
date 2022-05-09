---
title:  "Javascript의 Async-Await"
author: Jin
date: 2022-05-09 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [async, await]
toc: true
comments: true
---

# Async-Await
- 간결하게 비동기 처리를 구현하기 위한 문법


## Async

```jsx
async function getNames (){
  return "mike";
  // return Promise.resolve("Tom");
  // return throw new Error("err..");
}  

console.log(getNames());
// Promise { 'mike' }
getNames().then((name) => {
    console.log(name);
})
```
- async 키워드를 함수 앞에 쓰면 프로미스 객체가 반환된다.
- 프로미스 객체라서 then 메서드를 쓸 수도 있다.
- resolve, reject도 당연히 반환 가능하다.


## Await

```jsx
function getNames (name){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(name)
        }, 1000);
    });
}  
async function showName(){
    const result = await getNames("mike");
    console.log(result);
}

console.log("시작");
showName();
```

- await는 async 함수 내부에서만 선언 가능하고 일반 함수에선 에러가 발생한다.
- await 키워드 오른쪽엔 promise가 오고 비동기 작업을 기다렸다가 값을 넣어준다.


## Async-Await의 편리한 점

### Promise 메서드 체이닝보다 가독성 증가

```jsx
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 완료");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 완료");
    }, 2000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 완료");
    }, 3000);
  });
};
```
- 각각의 프로미스 객체를 리턴받는 함수이다.
- 이 함수를 프로미스 방식으로 체이닝할려면

```jsx
console.log("시작");
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("END");
  });
```
- 이런식으로 체이닝이 가능하다. 성공하면 다시 콜백으로 함수를 실행하고, 또 실행하는... 즉, 어찌보면 콜백지옥인 것이다... 프로미스 지옥

**하지만 async-await 문법을 쓴다면, 훨씬 깔끔해진다.**

```jsx
console.log("시작");
async function order(){
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
    console.log("종료");
}
order();
```

- 이런식으로 훨씬 깔끔해진다.

