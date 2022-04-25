---
title:  "Javascript의 Promise"
author: Jin
date: 2022-04-25 10:55:00 +0800
categories: "Javascript(ES6)"
tag: [Promise, 비동기, 콜백헬]
toc: true
comments: true
---

# Promise
- 비동기작업을 처리하는 방법
- 주로 Server 통신에 사용

---

## Promise의 상태
- Promise 객체는 state와 result라는 프로퍼티가 있다.
- 상태에 따라 state와 result의 값이 달라진다.

#### 상태값의 3종류
1. 대기(pending)
     -  state: pending(대기)
     -  result: undefined
2. 이행(resolve)
     -  state: fulfilled(이행됨)
     -  result: value
3. 거부(rejected)
     - state: rejected(거부됨)
     - result: error
---

# Promise 활용하기
```jsx
const pr = new Promise((resolve, reject) => {
    // code
}) 
```
- new Promise로 생성한다.
- 인수는 resolve, reject이며 성공이면 resolve 함수를 반환받고, 실패이면 reject 함수를 반환받는다.(콜백)

---

### 성공 시

```jsx
const pr = new Promise((resolve, reject) => {
  // code
  setTimeout(() => {
    resolve("OK");
  }, 1000);
});

pr.then((result) => {
  console.log(result); //OK
}).catch((err) => {
  console.log(err);
});
```
- 성공 시 then 메서드가 result 함수를 받는다.


### 실패 시
```jsx
const pr = new Promise((resolve, reject) => {
  // code
  setTimeout(() => {
    reject(new Error("error"));
  }, 1000);
});

pr.then((result) => {
  console.log(result); //OK
}).catch((err) => {
  console.log(err);
});
```
- 실패 시 catch 메서드가 err 함수를 받는다.

### 무조건 호출
```jsx
const pr = new Promise((resolve, reject) => {
  // code
  setTimeout(() => {
    resolve("OK");
  }, 1000);
});

pr.then((result) => {
  console.log(result);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("END");
  });
```
- promise의 상태값이 뭐가되었든 finally 메서드를 쓴다면 무조건 마지막에 호출된다.


##### 만약 Promise가 없이 비동기 작업을 수행하려면?
```jsx
const f1 = (callback) => {
  setTimeout(() => {
    console.log("1번 완료");
    callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(() => {
    console.log("2번 완료");
    callback();
  }, 2000);
};

const f3 = (callback) => {
  setTimeout(() => {
    console.log("3번 완료");
    callback();
  }, 3000);
};
```
- 세개의 시간만 다른 타이머 함수를 만들어보았다.

```jsx
console.log("시작");
f1(() => {
  f2(() => {
    f3(() => {
      console.log("끝");
    });
  });
});
```
- Promise 없이 호출해보았다. 계속되는 콜백함수 호출이 이어진다.(콜백지옥)

---
  
### Promises Chaining
- Promise를 사용한다면??

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
      rej(new Error("2번 완료"));
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
- Promise 객체를 반환받는 함수를 정의한다.

---

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
- 성공한다면 순차적으로 then 실행 후 finally가 있다면 실행
- 실패한다면 바로 catch 실행 코드 실행 후 종료, finally가 있다면 실행
- 이러한 코드를 Promises Chaining이라고한다.

### Promise.all
- 한번에 모든 비동기 실행하기

```jsx
console.log("시작");
console.time("pr");
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => {
    console.timeEnd("pr");
  });
  /**
   * 시작
   * 1번 완료
   * 2번완료
   * 3번 완료
   * pr: 6.006s 
   * /
```
- 방금 전 코드를 실행하여 시간을 출력한 결과 6초가 걸린다. 

###### Promise.all
```jsx
console.log("시작");
console.time("pr.all");
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("pr.all");
})
/**
 * [ '1번 완료', '2번완료', '3번 완료' ]
 * pr.all: 3.008s
 * /
```
- Promise.all을 사용하면 동시에 세개의 함수를 실행하여 모두 이행된 후 then이 실행된다.
- 하나의 정보라도 누락된 경우 페이지를 보이지 않게할때 유용하다.(다 보여주거나 아예 안보여주거나)




### Promise.race

- 하나라도 완료되면 실행하기
  
```jsx
console.log("시작");
console.time("pr.all");
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("pr.all");
})
/**
 * [ '1번 완료']
 * pr.all: 1.008s
 * /
```
- 하나의 작업이 완료되면 다른 작업들은 실행되지 않는다.









