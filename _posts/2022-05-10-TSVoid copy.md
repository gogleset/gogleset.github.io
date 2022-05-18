---
title:  "TypeScript에서 함수의 타입 지정하기"
author: Jin
date: 2022-05-09 10:55:00 +0800
categories: "TypeScript"
tag: [타입스크립트, void, ts]
toc: true
comments: true
---

## 함수의 타입을 지정하는 방법

```ts
function foo(x){
    // 'x' 매개 변수는 암시적으로 'any' 형식이지만, 사용량에서 더 나은 형식을 유추할 수 있습니다
    return x * 2
}
```
- TypeScript에선 파라미터 변수를 만들 시 아무것도 지정안해주면 any타입이 할당된다.
  

---

```ts
function foo (x: number): number{
    return x * 2;
}
```

- 함수는 파라미터, 리턴값 타입지정이 가능하다.
- 파라미터에도 타입 지정이 가능하고 파라미터 괄호 옆의 타입은 함수의 리턴 타입이다.


## void

```ts
function foo2 (x :number, y?: number): void {
    return 1 + 1
    // 'number' 형식은 'void' 형식에 할당할 수 없습니다.
}
```

- void는 함수의 리턴문이 있을 경우 체크해준다. 함수의 리턴값이 없을 때 사용한다.
- 자바스크립트와 다른 점은 타입 지정된 파라미터는 필수이다.
- 파라미터가 옵션일 경우 **파라미터변수?:타입**
- 변수?: number는 변수:number | **undefined**와 같다.(중요)


