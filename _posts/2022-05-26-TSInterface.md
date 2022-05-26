---
title:  "TypeScript Interface"
author: Jin
date: 2022-05-26 10:55:00 +0800
categories: "TypeScript"
tag: [타입스크립트, interface, type, object,]
toc: true
comments: true
---

# interface
- object에서의 타입 지정의 한 방법

```ts
interface Circle {
  color: string,
  radius: number,
}

let 원: Circle = {
  color: "red",
  radius: 50,
}
```
- 이런식으로 type이랑 비슷하지만 좀 다르게 타입 지정이 가능하다 약간 class 문법을 닮았다.


#### interface와 type이 무엇이 다를까?


1. 복사가 가능하다(extends)


```ts
interface Food { name: string };
interface Kfood { name: string,spicy: number };

let 음식: Food = { name: "음식" }
let 한식: Kfood = { name: '음식', spicy: 20, gender: "male" }
```

- 이러한 Food타입과 Kfood 타입이 있을 때 각각 따로 쓸 수도 있지만..

---

```ts
interface Food { name: string };
interface Kfood extends Food { spicy: number};

let 음식: Food = { name: "음식" };
let 한식: Kfood = { name: '한식', spicy: 20};
```


- extends 키워드로 타입 복사가 가능하다.
- Kfood 라는 type의 타입 구조는 {name: string, spicy: number}가 되는 것이다.


2. 중복선언이 가능하다.

```ts
interface Food { name: string };
interface Kfood extends Food { spicy: number };
interface Kfood { price: number };

let 음식: Food = { name: "음식" };
let 한식: Kfood = { name: '음식', spicy: 20, price: 20000 };
```

- 이런식으로 중복선언과 상속이 되면서 같이 쓸 수도 있다.

###### type alias의 경우 extends는 안되고 & 기호를 쓰면 object 두개를 합칠 수 있다. & 기호 쓰는걸 intersection이라고 부르는데 extends 와 유사하게 사용가능하다.

- intersection은 extends 와 유사하게 사용가능하지만 extends 쓸 때 타입끼리 중복속성이 발견될 경우 에러를 발생시키는데 반해 & 기호를 쓰면 때에 따라 아닐 수도 있다.





1. 중복속성은 잡아준다.
```ts
interface Food { name: string };
interface Kfood extends Food { spicy: number };
interface Kfood { name: number };
//'Kfood' 인터페이스가 'Food' 인터페이스를 잘못 확장합니다.'name' 속성의 형식이 호환되지 않습니다.'number' 형식은 'string' 형식에 할당할 수 없습니다.
```

- 같은 중복속성을 재정의할때는 error


### Type 속성과 interface의 차이점


- **interface는 유연하고, type은 엄격하다.**
- 외부 라이브러리같은 경우 interface를 많이 쓴다.
- 다른 사람이 이용 많이 할 것 같으면 object 타입을 정할때 interface를 쓰는게 좋다.
- 일반 변수나 함수는 타입으로 정의, object는 interface로 정의 이렇게 명시적으로 나누는 방법도 괜찮다.






