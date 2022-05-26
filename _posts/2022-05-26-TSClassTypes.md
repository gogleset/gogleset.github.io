---
title:  "TypeScript Class 타입 지정하기"
author: Jin
date: 2022-05-26 10:55:00 +0800
categories: "TypeScript"
tag: [타입스크립트, class, class type, interface,]
toc: true
comments: true
---


# class에서 type 정의하는법

### 필드값 타입 지정 가능


```ts
class Food {
    name:string = "";
}

let kimchi = new Food("실비김치");
let odeng = new Food("오뎅");
```

- 간단하다.

---


### constructor 타입 지정

```ts
class Food {
    name:string;
    spicy: number;
    constructor(a:string,b:number){
        this.name = a;
        this.spicy = b;
    }
}
```

- 위에서 변수를 만들어놔야 constructor에서 선언 가능 (ts에서만)
- constructor는 리턴타입 지정 안해줘도 된다. 어짜피 오브젝트로 리턴될 것이기때문에 파라미터와 객체의 타입만 지정한다.

###### 필드 값과 constructor의 차이는 똑같은 기능을 하지만 new 키워드로 파라미터에 무언가 집어넣고 싶다면 contructor로 만들어야 한다.


### method 타입지정

```ts
class Food { 
  add(number: number): void{
    console.log(number + 1);
  }
}
```

- 그냥 함수 타입 지정이랑 똑같다.